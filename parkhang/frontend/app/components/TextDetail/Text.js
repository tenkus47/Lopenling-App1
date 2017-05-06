import React from 'react'
import classnames from 'classnames'
import styles from './Text.css'
import TextSegment from 'lib/TextSegment'
import _ from 'lodash'

export function idForSegment(segment) {
    return "s_" + segment.start;
}

export function idForDeletedSegment(segment) {
    return "ds_" + segment.start;
}

export function idForInsertion(segment) {
    return "i_" + segment.start;
}

export default class Text extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            segmentedText: props.segmentedText
        };

        this._renderedSegments = null;
        this._renderedHtml = null;
    }

    componentWillReceiveProps(nextProps) {
        this.state.segmentedText = nextProps.segmentedText;
    }

    annotationsForSegment(segment) {
        let annotations = [];
        const foundAnnotations = this.props.annotationPositions[segment.start];
        if (foundAnnotations) {
            annotations = foundAnnotations;
        }
        const insertions = this.props.annotationPositions['i'+segment.start];
        if (insertions) {
            annotations = annotations.concat(insertions);
        }
        return annotations;
    }

    segmentsContainSegment(segments, segment) {
        for (let i=0; i < segments.length; i++) {
            let listSegment = segments[i];
            if (listSegment.start === segment.start)
            {
                return true;
            }
        }
        return false;
    }

    selectedElement(element) {
        const selection = document.getSelection();
        if (selection && selection.type === "Range") {
            return;
        }
        this.props.selectedSegmentId(element.id);
    }

    generateHtml() {
        let segments = this.state.segmentedText.sortedSegments();
        if (segments !== this._renderedSegments || this._renderedHtml === null) {
            let segmentHTML = '';
            const insertionClass = styles.insertion;
            const endPosition = segments[segments.length - 1].end + 1;
            if (this.props.annotationPositions["i" + endPosition]) {
                const endSegment = new TextSegment(endPosition, "");
                segments.push(endSegment);
            }
            for (let i = 0; i < segments.length; i++) {
                let segment = segments[i];
                let classAttribute = "";
                let classes = [];
                let annotations = this.annotationsForSegment(segment);
                if (annotations) {
                    let insertions = annotations.filter((annotation) => annotation.isInsertion);
                    let activeInsertions = _.intersectionWith(
                        this.props.activeAnnotations,
                        insertions,
                        (a, b) => a.id == b.id);
                    let inactiveInsertions = _.differenceWith(insertions, activeInsertions, (a, b) => a.id == b.id);
                    if (inactiveInsertions.length > 0) {
                        const insertion = inactiveInsertions[0];
                        const insertionId = idForInsertion(segment);

                        segmentHTML += '<span id=' + insertionId + ' key=' + insertionId + ' class="' + insertionClass + '"></span>';
                    }

                    let remainingAnnotations = _.differenceWith(annotations, insertions, (a, b) => a.id == b.id);

                    let deletions = remainingAnnotations.filter((annotation) => annotation.isDeletion);
                    let activeDeletions = _.intersectionWith(
                        this.props.activeAnnotations,
                        deletions,
                        (a, b) => a.id === b.id
                    );
                    if (activeDeletions.length > 0) {
                        // assume any other deletions are the same
                        remainingAnnotations = remainingAnnotations.filter((annotation) => !annotation.isDeletion);
                    }

                    if (remainingAnnotations.length > 0 || activeInsertions.length > 0) {
                        classes.push(styles.annotation);
                    }
                }
                // It's an insertion at the end of the text, which should have just been added.
                // So break as we don't want anymore segment html adding.
                if (segment.start === endPosition) {
                    break;
                }
                // deleted segments has empty text
                let id = null;
                if (segment.length == 0) {
                    id = idForDeletedSegment(segment);
                    classes.push(styles.removedByAnnotation);
                } else {
                    id = idForSegment(segment);
                }

                if (this.segmentsContainSegment(this.props.selectedAnnotatedSegments, segment)) {
                    classes.push(styles.selectedAnnotation);
                }

                if (classes.length > 0) {
                    let className = classnames(...classes);
                    classAttribute = 'class="' + className + '"';
                }

                segmentHTML += '<span id=' + id + ' key=' + id + ' ' + classAttribute + '>' + segment.text + '</span>';
            }
            this._renderedSegments = segments;
            this._renderedHtml = segmentHTML;
        }
        const html = {
            __html: this._renderedHtml
        };

        return html;
    }

    render() {
        let classes = [styles.text];
        if (this.props.limitWidth) {
            classes.push(styles.limitWidth);
        }
        if (this.props.row === 0) {
            classes.push(styles.textFirstRow);
        }

        // Generate HTML manually as it is much faster when
        // creating large numbers of elements, such as these spans.
        const html = this.generateHtml();
        const containerStyle = {
            paddingRight: this.props.paddingRight
        };
        const textStyle = {
            width: this.props.textWidth,
        };

        return (
            <div
                className={styles.textContainer}
                style={containerStyle}
            >
                <div
                    className={classnames(...classes)}
                    dangerouslySetInnerHTML={html}
                    onClick={(e) => this.selectedElement(e.target)}
                    style={textStyle}
                />
            </div>
        )
    }
}
