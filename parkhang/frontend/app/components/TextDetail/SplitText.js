// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import { AutoSizer } from "react-virtualized/dist/es/AutoSizer";
import { List } from "react-virtualized/dist/es/List";
import {
    CellMeasurer,
    CellMeasurerCache
} from "react-virtualized/dist/es/CellMeasurer";
import "react-virtualized/styles.css";
import Text, {
    idForSegment,
    idForDeletedSegment,
    idForInsertion
} from "./Text";
import SplitText from "lib/SplitText";
import shallowEqual from "lib/shallowEqual";
import { CONTROLS_MARGIN_LEFT } from "./AnnotationControls";
import AnnotationControlsContainer from "./AnnotationControlsContainer";
import styles from "./SplitText.css";
import annotationControlsStyles from "./AnnotationControls.css";
import textStyles from "./Text.css";
import controlStyles from "./AnnotationControls.css";
import _ from "lodash";
import TextSegment from "lib/TextSegment";
import Annotation from "lib/Annotation";
import Witness from "lib/Witness";

const MIN_SPACE_RIGHT =
    parseInt(controlStyles.inlineWidth) + CONTROLS_MARGIN_LEFT;

export type Props = {
    textListVisible: boolean,
    imagesBaseUrl: string,
    splitText: SplitText,
    didSelectSegmentIds: (segmentIds: string[]) => void,
    limitWidth: boolean,
    activeAnnotation: Annotation | null,
    selectedAnnotatedSegments: Array<TextSegment | number>,
    showImages: boolean,
    annotationPositions: { [string]: Annotation[] },
    annotations: Annotation[],
    activeAnnotations: Annotation[] | null,
    selectedSegmentId: (segmentId: string) => void
};

export type State = {
    selectedTextIndex: number | null,
    textPaddingRight: string | null,
    textWidth: string | null,
    splitTextRect: ClientRect | null,
    firstSelectedSegment: TextSegment | null,
    selectedElementId: string | null,
    selectedAnnotatedSegments: TextSegment[]
};

export default class SplitTextComponent extends React.PureComponent<
    Props,
    State
> {
    list: List | null;
    splitText: HTMLDivElement | null;
    cache: CellMeasurerCache;
    rowRenderer: (params: {
        key: string,
        index: number,
        parent: {},
        style: {}
    }) => React.Element<CellMeasurer>;
    resizeHandler: () => void;
    selectionHandler: (e: Event) => void;
    textListVisible: boolean;
    activeSelection: Selection | null;
    selectedNodes: Node[] | null;
    // Whether the mouse button is down
    _mouseDown: boolean;
    _activeWitness: Witness | null;

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedTextIndex: null,
            splitTextRect: null,
            firstSelectedSegment: null,
            selectedElementId: null,
            selectedAnnotatedSegments: []
        };
        this.list = null;
        this.splitText = null;
        this.cache = new CellMeasurerCache({
            fixedWidth: true
        });
        this.rowRenderer = this.rowRenderer.bind(this);
        this.textListVisible = props.textListVisible;
        this.activeSelection = null;
        this.selectedNodes = null;
        this._mouseDown = false;
        this._activeWitness = null;
    }

    updateList(resetCache: boolean = true, resetRow: number | null = null) {
        if (this.list) {
            const list = this.list;
            let node;
            let currentScrollTop;
            if (resetCache) {
                // eslint-disable-next-line react/no-find-dom-node
                node = ReactDOM.findDOMNode(list);
                if (node && node instanceof Element) {
                    currentScrollTop = node.scrollTop;
                }
                if (resetRow) {
                    this.cache.clear(resetRow);
                } else {
                    this.cache.clearAll();
                }
                list.measureAllRows();
            }
            list.recomputeRowHeights();
            if (currentScrollTop) {
                setTimeout(() => {
                    list.scrollToPosition(currentScrollTop);
                }, 0);
            }
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

    handleSelection(e: Event) {
        this.activeSelection = document.getSelection();
        if (!this._mouseDown) {
            // sometimes, this gets called after the mouseDown event handler
            this.mouseUp();
        }
    }

    processSelection(selection: Selection): string[] | null {
        if (
            selection.rangeCount === 0 ||
            selection.isCollapsed ||
            selection.type === "Caret"
        ) {
            this.selectedNodes = null;
            return null;
        }

        const range = selection.getRangeAt(0);
        const start = range.startContainer;
        const startSpan = this.getNodeSegmentSpan(start);
        if (!(startSpan && startSpan.parentNode)) {
            // If the selection is not a text segment, ignore.
            // Assuming if the first node is a non-segment, they
            // all are.
            return null;
        }

        let nodes = this.getRangeNodes(range, startSpan.parentNode);

        const end = range.endContainer;
        const endSpan = this.getNodeSegmentSpan(end);
        if (!(endSpan && endSpan.parentNode)) {
            return null;
        }
        if (endSpan && startSpan.parentNode !== endSpan.parentNode) {
            // Selection is spanning Texts.
            // We assume a selection can only run across a maximum
            // of two Texts.
            nodes = nodes.concat(this.getRangeNodes(range, endSpan.parentNode));
        }
        this.selectedNodes = nodes;
        let nodeIds = [];
        nodes.reduce((accumulator: string[], current: Node) => {
            if (current instanceof Element) {
                accumulator.push(current.id);
            }
            return accumulator;
        }, nodeIds);

        return nodeIds;
    }

    getNodeSegmentSpan(node: Node): Element | null {
        let currentNode = node;
        let span = null;
        while (!span && currentNode.parentNode) {
            currentNode = currentNode.parentNode;
            const test = /^(i|s|ds)_/;
            if (currentNode instanceof Element && test.test(currentNode.id)) {
                span = currentNode;
            }
        }

        return span;
    }

    getRangeNodes(range: Range, parentNode: Node): Node[] {
        let rangeSpans = [];
        for (let i = 0, len = parentNode.childNodes.length; i < len; i++) {
            const node = parentNode.childNodes[i];
            // TODO: add polyfill for i.e.?
            // e.g. https://gist.github.com/jonathansampson/6d09bd6d2e8c22c53868aec42e66b0f9
            if (range.intersectsNode(node)) {
                rangeSpans.push(node);
            }
        }
        return rangeSpans;
    }

    getControlsMeasurements(
        props: Props
    ): {
        selectedTextIndex: number,
        firstSelectedSegment: TextSegment,
        selectedElementId: string,
        splitTextRect: ClientRect
    } | null {
        if (!this.splitText) {
            return null;
        }
        let splitTextComponent = this.splitText;
        let selectedTextIndex = null;
        let firstSelectedSegment = null;
        let selectedElementId = null;
        let splitTextRect = null;
        if (props.activeAnnotation) {
            const [
                startPos
            ] = props.splitText.annotatedText.getPositionOfAnnotation(
                props.activeAnnotation
            );
            if (!startPos) {
                console.warn("No startPos in getControlsMeasurements");
                return null;
            }

            selectedTextIndex = props.splitText.getTextIndexOfPosition(
                startPos
            );
            splitTextRect = splitTextComponent.getBoundingClientRect();
        }
        if (
            props.selectedAnnotatedSegments &&
            props.selectedAnnotatedSegments.length > 0
        ) {
            for (let i = 0; i < props.selectedAnnotatedSegments.length; i++) {
                let segment = props.selectedAnnotatedSegments[i];
                if (
                    firstSelectedSegment === null &&
                    segment instanceof TextSegment
                ) {
                    firstSelectedSegment = segment;
                    break;
                }
            }
            if (firstSelectedSegment) {
                selectedElementId = idForSegment(firstSelectedSegment);
            }
        } else if (props.activeAnnotation) {
            if (props.activeAnnotation.isDeletion) {
                let segment = new TextSegment(props.activeAnnotation.start, "");
                selectedElementId = idForDeletedSegment(segment);
            } else if (props.activeAnnotation.isInsertion) {
                const [
                    start
                ] = props.splitText.annotatedText.getPositionOfAnnotation(
                    props.activeAnnotation
                );
                if (start) {
                    let segment = new TextSegment(start, "");
                    selectedElementId = idForInsertion(segment);
                }
            }
        }
        if (
            selectedTextIndex != null &&
            firstSelectedSegment &&
            selectedElementId &&
            splitTextRect
        ) {
            return {
                selectedTextIndex: selectedTextIndex,
                firstSelectedSegment: firstSelectedSegment,
                selectedElementId: selectedElementId,
                splitTextRect: splitTextRect
            };
        } else {
            return null;
        }
    }

    updateState(props: Props) {
        const controlsMeasurements = this.getControlsMeasurements(props);
        // make sure there's no numbers in selectedAnnotatedSegments
        // as we want to pass it to Text which only expects TextSegments
        const selectedAnnotatedSegments: TextSegment[] = props.selectedAnnotatedSegments.reduce(
            (acc, current: TextSegment | number) => {
                if (current instanceof TextSegment) acc.push(current);
                return acc;
            },
            []
        );
        if (controlsMeasurements) {
            this.setState((prevState: State, props: Props) => {
                return {
                    ...prevState,
                    selectedTextIndex: controlsMeasurements.selectedTextIndex,
                    firstSelectedSegment:
                        controlsMeasurements.firstSelectedSegment,
                    splitTextRect: controlsMeasurements.splitTextRect,
                    selectedElementId: controlsMeasurements.selectedElementId,
                    selectedAnnotatedSegments: selectedAnnotatedSegments
                };
            });
        }
    }

    shouldResetListCache(oldProps: Props, newProps: Props) {
        return oldProps.showImages !== newProps.showImages;
    }

    selectedListRow(props: Props): number | null {
        let row = null;
        if (props.activeAnnotation) {
            row = props.splitText.getTextIndexOfPosition(
                props.activeAnnotation.start
            );
        }
        return row;
    }

    componentWillReceiveProps(props: Props) {
        let changedWitness = false;
        if (
            !this.props.selectedWitness ||
            (props.selectedWitness &&
                props.selectedWitness.id !== this.props.selectedWitness.id)
        ) {
            changedWitness = true;
        }

        if (props.textListVisible !== this.textListVisible) {
            setTimeout(() => {
                this.textListVisible = props.textListVisible;
                this.updateState(this.props);
                this.updateList(true);
            }, 500);
        } else {
            if (this.splitText && !shallowEqual(this.props, props)) {
                this.updateState(props);
            }
            if (changedWitness) {
                this.updateList(true);
            } else if (
                this.props.splitText.annotatedText !==
                props.splitText.annotatedText
            ) {
                this.updateList(true, this.selectedListRow(props));
            } else {
                this.updateList(this.shouldResetListCache(this.props, props));
            }
        }
    }

    componentDidMount() {
        this.resizeHandler = _.throttle(() => {
            this.updateList();
            setTimeout(() => {
                this.updateState(this.props);
            }, 200);
        }, 500).bind(this);

        window.addEventListener("resize", this.resizeHandler);

        this.selectionHandler = _.debounce(e => {
            this.handleSelection(e);
        }, 200).bind(this);

        document.addEventListener("selectionchange", this.selectionHandler);

        document.addEventListener("mousedown", this.mouseDown.bind(this));
        document.addEventListener("mouseup", this.mouseUp.bind(this));

        if (this.splitText) {
            this.updateState(this.props);
        }
    }

    componentDidUpdate() {
        if (this.selectedNodes && this.selectedNodes.length > 0) {
            const selectedNodes = this.selectedNodes;
            setTimeout(() => {
                let selRange = document.createRange();
                let startNode = selectedNodes[0];
                let endNode = selectedNodes[selectedNodes.length - 1];

                if (
                    startNode instanceof Element &&
                    endNode instanceof Element
                ) {
                    startNode = document.getElementById(startNode.id);
                    endNode = document.getElementById(endNode.id);
                    if (startNode && endNode) {
                        selRange.setStart(startNode, 0);
                        selRange.setEnd(endNode, endNode.childNodes.length);
                        let sel = document.getSelection();
                        if (sel) {
                            sel.removeAllRanges();
                            sel.addRange(selRange);
                            this.selectedNodes = null;
                        }
                    }
                }
            }, 0);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHandler);
        document.removeEventListener("selectionchange", this.selectionHandler);
    }

    getBaseAnnotation(annotation: Annotation): Annotation {
        return this.props.splitText.annotatedText.getBaseAnnotation(
            annotation.start,
            annotation.content.length
        );
    }

    render() {
        const props = this.props;
        const rowRenderer = this.rowRenderer;
        const cache = this.cache;

        return (
            <div
                className={styles.splitText}
                ref={div => (this.splitText = div)}
            >
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref={list => (this.list = list)}
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

    rowRenderer({
        key,
        index,
        parent,
        style
    }: {
        key: string,
        index: number,
        parent: {},
        style: {}
    }): React.Element<CellMeasurer> {
        const props = this.props;
        const cache = this.cache;
        const state = this.state;
        const pechaImageClass = props.showImages ? styles.pechaImage : null;

        return (
            <CellMeasurer
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}
                cache={cache}
            >
                <div key={key} style={style} className={styles.splitTextRow}>
                    <div className={styles.splitTextRowContent}>
                        {props.showImages && (
                            <div className={pechaImageClass}>
                                <div className={styles.pechaContent}>
                                    <img
                                        src={
                                            props.imagesBaseUrl +
                                            (index + 1) +
                                            ".png"
                                        }
                                        width="100%"
                                    />
                                </div>
                            </div>
                        )}
                        <Text
                            segmentedText={props.splitText.texts[index]}
                            annotations={props.annotations}
                            activeAnnotations={props.activeAnnotations}
                            activeAnnotation={props.activeAnnotation}
                            row={index}
                            selectedSegmentId={props.selectedSegmentId}
                            annotationPositions={props.annotationPositions}
                            selectedAnnotatedSegments={
                                state.selectedAnnotatedSegments
                            }
                            getBaseAnnotation={this.getBaseAnnotation.bind(
                                this
                            )}
                            activeWitness={this.props.selectedWitness}
                        />
                    </div>
                    {this.state.selectedTextIndex === index &&
                        this.props.activeAnnotation && (
                            <AnnotationControlsContainer
                                annotationPositions={props.annotationPositions}
                                annotatedText={props.splitText.annotatedText}
                                activeAnnotation={props.activeAnnotation}
                                inline={true}
                                firstSelectedSegment={
                                    this.state.firstSelectedSegment
                                }
                                splitTextRect={this.state.splitTextRect}
                                selectedElementId={this.state.selectedElementId}
                                pechaImageClass={pechaImageClass}
                            />
                        )}
                    {this.state.selectedTextIndex !== index && (
                        <div className={styles.controlsPlaceholder} />
                    )}
                </div>
            </CellMeasurer>
        );
    }
}
