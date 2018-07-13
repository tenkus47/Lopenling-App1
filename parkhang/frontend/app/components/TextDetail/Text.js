// @flow
import React from "react";
import classnames from "classnames";
import styles from "./Text.css";
import TextSegment from "lib/TextSegment";
import { INSERTION_KEY, DELETION_KEY } from "lib/AnnotatedText";
import _ from "lodash";
import SegmentedText from "lib/SegmentedText";
import Annotation from "../../lib/Annotation";

export function idForSegment(segment: TextSegment): string {
    return "s_" + segment.start;
}

export function idForDeletedSegment(segment: TextSegment): string {
    return "ds_" + segment.start;
}

export function idForInsertion(segment: TextSegment): string {
    return "i_" + segment.start;
}

export type Props = {
    segmentedText: SegmentedText,
    annotationPositions: { [string]: Annotation[] },
    selectedSegmentId: (id: string) => void,
    activeAnnotations: Annotation[] | null,
    getBaseAnnotation: (annotation: Annotation) => Annotation,
    selectedAnnotatedSegments: TextSegment[],
    row: number,
    activeAnnotation: Annotation | null
};

export type State = {
    segmentedText: SegmentedText
};

export default class Text extends React.Component<Props, State> {
    _renderedSegments: TextSegment[] | null;
    _renderedHtml: { __html: string } | null;

    constructor(props: Props) {
        super(props);

        this.state = {
            segmentedText: props.segmentedText
        };

        this._renderedSegments = null;
        this._renderedHtml = null;
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState((prevState: State, props: Props) => {
            return {
                ...prevState,
                segmentedText: nextProps.segmentedText
            };
        });
    }

    annotationsForSegment(segment: TextSegment): Annotation[] {
        let annotations: Annotation[] = [];
        const foundAnnotations = this.props.annotationPositions[
            String(segment.start)
        ];
        if (foundAnnotations) {
            annotations = foundAnnotations;
        }
        const insertions =
            this.props.annotationPositions[INSERTION_KEY + segment.start] || [];
        const deletions =
            this.props.annotationPositions[DELETION_KEY + segment.start] || [];

        return annotations.concat(insertions, deletions);
    }

    segmentsContainSegment(segments: TextSegment[], segment: TextSegment) {
        for (let i = 0; i < segments.length; i++) {
            let listSegment = segments[i];
            if (
                listSegment.start === segment.start &&
                listSegment.text === segment.text
            ) {
                return true;
            }
        }
        return false;
    }

    selectedElement(element: Element) {
        const selection = document.getSelection();
        if (selection && selection.type === "Range") {
            return;
        }
        this.props.selectedSegmentId(element.id);
    }

    generateHtml(renderProps: Props, renderState: State): { __html: string } {
        let segments = renderState.segmentedText.segments;
        let segmentHTML = "";
        const insertionClass = styles.insertion;
        const endPosition = segments[segments.length - 1].end + 1;
        if (renderProps.annotationPositions[INSERTION_KEY + endPosition]) {
            const endSegment = new TextSegment(endPosition, "");
            segments.push(endSegment);
        }

        let activeAnnotationIds = {};
        if (renderProps.activeAnnotations) {
            for (let i = 0; i < renderProps.activeAnnotations.length; i++) {
                let annotation = renderProps.activeAnnotations[i];
                activeAnnotationIds[annotation.uniqueId] = annotation;
            }
        }

        for (let i = 0; i < segments.length; i++) {
            let segment = segments[i];
            let classAttribute = "";
            let classes = [];
            let annotations = this.annotationsForSegment(segment);
            let deletionText = null;
            let selectedCurrentDeletion = false;
            if (annotations) {
                let insertions = [];
                let activeInsertions = [];
                let inactiveInsertions = [];
                let remainingAnnotations = [];
                let deletions = [];
                let activeDeletions = [];

                for (let j = 0, len = annotations.length; j < len; j++) {
                    let annotation = annotations[j];
                    if (annotation.isInsertion) {
                        insertions.push(annotation);
                        if (annotation.uniqueId in activeAnnotationIds) {
                            activeInsertions.push(annotation);
                        } else {
                            inactiveInsertions.push(annotation);
                        }
                    } else {
                        if (annotation.isDeletion) {
                            deletions.push(annotation);
                            if (annotation.uniqueId in activeAnnotationIds) {
                                activeDeletions.push(annotation);
                            }
                        } else {
                            remainingAnnotations.push(annotation);
                        }
                    }
                }

                if (inactiveInsertions.length > 0) {
                    const insertion = inactiveInsertions[0];
                    const insertionId = idForInsertion(segment);

                    segmentHTML +=
                        "<span id=" +
                        insertionId +
                        " key=" +
                        insertionId +
                        ' class="' +
                        insertionClass +
                        '">' +
                        insertion.content +
                        "</span>";
                }

                if (activeDeletions.length > 0) {
                    const activeDeletion = activeDeletions[0];
                    const baseAnnotation = renderProps.getBaseAnnotation(
                        activeDeletion
                    );
                    deletionText = baseAnnotation.content;
                    if (
                        renderProps.activeAnnotation &&
                        renderProps.activeAnnotation.isDeletion &&
                        renderProps.activeAnnotation.start ===
                            activeDeletion.start &&
                        renderProps.activeAnnotation.length ===
                            activeDeletion.length &&
                        segment.length === 0
                    ) {
                        selectedCurrentDeletion = true;
                    }
                }

                if (
                    remainingAnnotations.length > 0 ||
                    activeInsertions.length > 0
                ) {
                    classes.push(styles.annotation);
                }
            }

            // It's an insertion at the end of the text, which should have just been added to the html.
            // So break as we don't want anymore segment html adding.
            if (segment.start === endPosition) {
                break;
            }
            let id = null;
            if (segment.length === 0) {
                id = idForDeletedSegment(segment);
                classes.push(styles.removedByAnnotation);
                if (deletionText) {
                    segment = new TextSegment(segment.start, deletionText);
                }
            } else {
                id = idForSegment(segment);
            }

            if (
                this.segmentsContainSegment(
                    renderProps.selectedAnnotatedSegments,
                    segment
                ) ||
                selectedCurrentDeletion
            ) {
                classes.push(styles.selectedAnnotation);
            }

            if (classes.length > 0) {
                let className = classnames(...classes);
                classAttribute = 'class="' + className + '"';
            }

            segmentHTML +=
                "<span id=" +
                id +
                " key=" +
                id +
                " " +
                classAttribute +
                ">" +
                segment.text +
                "</span>";
        }

        this._renderedSegments = segments;

        const html = {
            __html: segmentHTML
        };

        return html;
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        const renderedHtml = this.generateHtml(nextProps, nextState);
        if (
            this._renderedHtml &&
            renderedHtml.__html === this._renderedHtml.__html
        ) {
            return false;
        } else {
            this._renderedHtml = renderedHtml;
            return true;
        }
    }

    render() {
        let classes = [styles.text];
        if (this.props.row === 0) {
            classes.push(styles.textFirstRow);
        }

        // Generate HTML manually as it is much faster when
        // creating large numbers of elements, such as these spans.
        const html = this._renderedHtml
            ? this._renderedHtml
            : this.generateHtml(this.props, this.state);
        if (!this._renderedHtml) {
            this._renderedHtml = html;
        }

        return (
            <div className={styles.textContainer}>
                <div
                    className={classnames(...classes)}
                    dangerouslySetInnerHTML={html}
                    onClick={e => this.selectedElement(e.target)}
                />
                <div className={styles.pageNumber}>{this.props.row + 1}</div>
            </div>
        );
    }
}
