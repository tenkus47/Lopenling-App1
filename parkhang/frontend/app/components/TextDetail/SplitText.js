import React from 'react'
import {AutoSizer, List, CellMeasurer, CellMeasurerCache} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Text from './Text'
import Popover from 'components/Popover'
import styles from './SplitText.css'
import _ from 'lodash'

export default class SplitText extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedTextIndex: null,
            popoverVisible: false,
            popoverPosition: {top: 0, center: 0}
        };
        this.list = null;
        this.cache = new CellMeasurerCache({
            fixedWidth: true,
        });
        this.rowRenderer = this.rowRenderer.bind(this);
        this.resizeHandler = null;
        this.selectionHandler = null;
    }

    updateList() {
        if (this.list) {
            this.list.recomputeRowHeights();
            this.list.forceUpdate();
        }
    }

    handleSelection(e) {
        const selection = document.getSelection();
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

        let segmentIds = [];
        nodes.map((node) => segmentIds.push(node.id));

        this.props.didSelectSegmentIds(segmentIds);
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

    componentWillReceiveProps(props) {
        this.updateList();
        this.setState((prevState, props) => {
            let popoverVisible = prevState.popoverVisible;
            let popoverPosition = prevState.popoverPosition;
            let selectedTextIndex = prevState.selectedTextIndex;
            if (props.selectedAnnotatedSegments) {
                let maxTop = 100000;
                let maxLeft = 100000;
                let maxRight = 0;
                let firstSegment = null;
                for (let i=0; i < props.selectedAnnotatedSegments.length; i++) {
                    let segment = props.selectedAnnotatedSegments[i];
                    if (i === 0) {
                        firstSegment = segment;
                    }
                    let id = 's_' + segment.start;
                    let element = document.getElementById(id);
                    if (element.offsetLeft < maxLeft) {
                        maxLeft = element.offsetLeft
                    }
                    let right = element.offsetLeft + element.offsetWidth;
                    if (right > maxRight) {
                        maxRight = right;
                    }
                    if (element.offsetTop < maxTop) {
                        maxTop = element.offsetTop;
                    }
                }
                const width = maxRight - maxLeft;
                selectedTextIndex = props.splitText.getTextIndexOfPosition(firstSegment.start);
                popoverVisible = true;
                popoverPosition = {
                    top: maxTop,
                    center: maxLeft + (width / 2),
                    width: width
                }
            } else {
                popoverVisible = false;
            }
            return {
                ...prevState,
                selectedTextIndex: selectedTextIndex,
                popoverVisible: popoverVisible,
                popoverPosition: popoverPosition
            }
        });
    }

    componentDidMount() {
        this.resizeHandler = _.throttle(() => {
            this.cache.clearAll();
            this.updateList();
        }, 500).bind(this);

        window.addEventListener("resize", this.resizeHandler);

        this.selectionHandler = _.debounce((e) => {
            this.handleSelection(e);
        }, 200).bind(this);

        document.addEventListener("selectionchange", this.selectionHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHandler);
        document.removeEventListener("selectionchange", this.selectionHandler);
    }

    render() {
        const props = this.props;
        const rowRenderer = this.rowRenderer;
        const cache = this.cache;

        return (
            <div className={styles.splitText}>
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
                        limitWidth={true}
                        row={index}
                        didSelectSegment={props.didSelectSegment}
                        didSelectAnnotation={props.didSelectAnnotation}
                        selectedSegmentId={props.selectedSegmentId}
                        annotationPositions={props.annotationPositions}
                        selectedAnnotatedSegments={props.selectedAnnotatedSegments}
                    />
                    {this.state.selectedTextIndex === index &&
                        <Popover isVisible={this.state.popoverVisible} position={this.state.popoverPosition} />
                    }

                </div>
            </CellMeasurer>
        );
    }
}