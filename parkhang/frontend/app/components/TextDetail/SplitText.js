import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer';
import { List } from 'react-virtualized/dist/es/List';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/es/CellMeasurer'
import 'react-virtualized/styles.css';
import Text, { idForSegment, idForDeletedSegment, idForInsertion } from './Text'
import { CONTROLS_MARGIN_LEFT } from './AnnotationControls'
import AnnotationControlsContainer from './AnnotationControlsContainer'
import styles from './SplitText.css'
import textStyles from './Text.css'
import controlStyles from './AnnotationControls.css'
import _ from 'lodash'

const MIN_SPACE_RIGHT = parseInt(controlStyles.inlineWidth) + CONTROLS_MARGIN_LEFT;

export default class SplitText extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedTextIndex: null,
            textPaddingRight: null,
            textWidth: null,
            firstSelectedElement: null,
            splitTextRect: null,
        };
        this.list = null;
        this.splitText = null;
        this.cache = new CellMeasurerCache({
            fixedWidth: true,
        });
        this.rowRenderer = this.rowRenderer.bind(this);
        this.resizeHandler = null;
        this.selectionHandler = null;
        this.textListVisible = props.textListVisible;
        this.activeSelection = null;
        this._mouseDown = false;
    }

    updateList() {
        if (this.list) {
            this.list.recomputeRowHeights();
            this.list.forceUpdateGrid();
        }
    }

    mouseDown() {
        this._mouseDown = true;
    }

    mouseUp() {
        this._mouseDown = false;
        if (this.activeSelection) {
            let segmentIds = this.processSelection(this.activeSelection);
            if (!segmentIds) {
                segmentIds = [];
            }
            this.props.didSelectSegmentIds(segmentIds);
            this.activeSelection = null;
        }
    }

    handleSelection(e) {
        this.activeSelection = document.getSelection();
        if (!this._mouseDown) {
            // sometimes, this gets called after the mouseDown event handler
            this.mouseUp();
        }
    }

    processSelection(selection) {

        if (selection.rangeCount == 0 || selection.isCollapsed || selection.type == "Caret") {
            return;
        }

        const range = selection.getRangeAt(0);
        const start = range.startContainer;
        const startSpan = this.getNodeSegmentSpan(start);
        if (!startSpan) {
            // If the selection is not a text segment, ignore.
            // Assuming if the first node is a non-segment, they
            // all are.
            return;
        }
        let nodes = this.getRangeNodes(range, startSpan.parentNode);

        const end = range.endContainer;
        const endSpan = this.getNodeSegmentSpan(end);
        if (endSpan && startSpan.parentNode !== endSpan.parentNode) {
            // Selection is spanning Texts.
            // We assume a selection can only run across a maximum
            // of two Texts.
            nodes = nodes.concat(this.getRangeNodes(range, endSpan.parentNode));
        }

        return nodes.map((node) => node.id);
    }

    getNodeSegmentSpan(node) {
        let currentNode = node;
        let span = null;
        while(!span && currentNode.parentNode) {
            currentNode = currentNode.parentNode;
            const test = /^(i|s|ds)_/;
            if (currentNode.id && test.test(currentNode.id)) {
                span = currentNode;
            }
        }

        return span;
    }

    getRangeNodes(range, parentNode) {
        let rangeSpans = [];
        for (let i=0, len=parentNode.childNodes.length; i < len; i++) {
            const node = parentNode.childNodes[i];
            if (range.intersectsNode(node)) {
                rangeSpans.push(node);
            }
        }
        return rangeSpans;
    }

    getTextMeasurements() {
        const paddingSide = parseInt(textStyles.paddingSide, 10);
        const containerWidth = this.splitText.offsetWidth;
        const textMaxWidth = parseInt(textStyles.maxWidth, 10);
        const extraSpace = containerWidth - (textMaxWidth + paddingSide + paddingSide);

        let paddingRight = paddingSide + 'px';
        let newTextWidth = textMaxWidth + 'px';
        if (extraSpace < (MIN_SPACE_RIGHT * 2)) {
            paddingRight = MIN_SPACE_RIGHT + 'px';
            newTextWidth = containerWidth - MIN_SPACE_RIGHT - paddingSide;
        }

        return {
            paddingRight,
            newTextWidth
        }
    }

    getControlsMeasurements(props) {
        let selectedTextIndex = null;
        let firstSelectedSegment = null;
        let selectedElementId = null;
        let splitTextRect = null;
        if (props.activeAnnotation) {
            const [startPos] = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation);
            selectedTextIndex = props.splitText.getTextIndexOfPosition(startPos);
            splitTextRect = this.splitText.getBoundingClientRect();
        }
        if (props.selectedAnnotatedSegments && props.selectedAnnotatedSegments.length > 0) {
            for (let i=0; i < props.selectedAnnotatedSegments.length; i++) {
                let segment = props.selectedAnnotatedSegments[i];
                if (firstSelectedSegment === null) {
                    firstSelectedSegment = segment;
                    break;
                }
            }
            selectedElementId = idForSegment(firstSelectedSegment);
        } else if (props.activeAnnotation) {
            if (props.activeAnnotation.isDeletion) {
                selectedElementId = idForDeletedSegment({start: props.activeAnnotation.start});
            } else if (props.activeAnnotation.isInsertion) {
                const [start] = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation);
                selectedElementId = idForInsertion({start: start});
            }
        }
        return {
            selectedTextIndex: selectedTextIndex,
            firstSelectedSegment: firstSelectedSegment,
            selectedElementId: selectedElementId,
            splitTextRect: splitTextRect
        }
    }

    updateState(props) {
        const textMeasurements = this.getTextMeasurements();
        const controlsMeasurements = this.getControlsMeasurements(props);
        this.setState((prevState, props) => {
            return {
                ...prevState,
                selectedTextIndex: controlsMeasurements.selectedTextIndex,
                textPaddingRight: textMeasurements.paddingRight,
                textWidth: textMeasurements.newTextWidth,
                firstSelectedSegment: controlsMeasurements.firstSelectedSegment,
                splitTextRect: controlsMeasurements.splitTextRect,
                selectedElementId: controlsMeasurements.selectedElementId
            };
        });
    }

    componentWillReceiveProps(props) {
        this.updateList();
        if (this.splitText) {
            this.updateState(props);
        }
        if (props.textListVisible !== this.textListVisible) {
            setTimeout(() => {
                this.textListVisible = props.textListVisible;
                this.updateState(this.props);
                this.cache.clearAll();
                this.updateList();
            }, 500);
        }
    }

    componentDidMount() {
        this.resizeHandler = _.throttle(() => {
            this.cache.clearAll();
            this.updateList();
            setTimeout(() => {
                this.updateState(this.props);
            }, 200);
        }, 500).bind(this);

        window.addEventListener("resize", this.resizeHandler);

        this.selectionHandler = _.debounce((e) => {
            this.handleSelection(e);
        }, 200).bind(this);

        document.addEventListener("selectionchange", this.selectionHandler);

        document.addEventListener("mousedown", this.mouseDown.bind(this));
        document.addEventListener("mouseup", this.mouseUp.bind(this));

        if (this.splitText) {
            this.updateState(this.props);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHandler);
        document.removeEventListener("selectionchange", this.selectionHandler);
    }

    getBaseAnnotation(annotation) {
        return this.props.splitText.annotatedText.getBaseAnnotation(annotation.start, annotation.content.length);
    }

    render() {
        const props = this.props;
        const rowRenderer = this.rowRenderer;
        const cache = this.cache;

        return (
            <div className={styles.splitText} ref={(div) => this.splitText = div}>
                <AutoSizer>
                    {({ height, width }) => (
                    <List
                        ref={(list) => this.list = list}
                        height={height}
                        rowCount={props.splitText.texts.length}
                        rowHeight={cache.rowHeight}
                        rowRenderer={rowRenderer}
                        width={width}
                        overscanRowCount={3}
                        deferredMeasurementCache={cache}
                        measureAllRows={true}
                    />
                    )}
                </AutoSizer>
            </div>
        );
    }

    rowRenderer({key, index, parent, style}) {
        const props = this.props;
        const cache = this.cache;

        return (
            <CellMeasurer
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}
                cache={cache}
            >
                <div
                    key={key}
                    style={style}
                    className={styles.splitTextRow}
                >
                    <Text
                        segmentedText={props.splitText.texts[index]}
                        annotations={props.annotations}
                        activeAnnotations={props.activeAnnotations}
                        activeAnnotation={props.activeAnnotation}
                        limitWidth={true}
                        row={index}
                        selectedSegmentId={props.selectedSegmentId}
                        annotationPositions={props.annotationPositions}
                        selectedAnnotatedSegments={props.selectedAnnotatedSegments}
                        textWidth={this.state.textWidth}
                        paddingRight={this.state.textPaddingRight}
                        getBaseAnnotation={this.getBaseAnnotation.bind(this)}
                    />
                    {this.state.selectedTextIndex === index &&
                        <AnnotationControlsContainer
                                    annotationPositions={props.annotationPositions}
                                    annotatedText={props.splitText.annotatedText}
                                    activeAnnotation={props.activeAnnotation}
                                    inline={true}
                                    firstSelectedSegment={this.state.firstSelectedSegment}
                                    splitTextRect={this.state.splitTextRect}
                                    selectedElementId={this.state.selectedElementId}
                                />
                    }

                </div>
            </CellMeasurer>
        );
    }
}