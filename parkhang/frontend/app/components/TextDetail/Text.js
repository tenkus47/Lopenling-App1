import React from 'react'
import classnames from 'classnames'
import styles from './Text.css'
import _ from 'Lodash'

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

    componentDidUpdate() {
        //this.setupAnnotations();
    }

    componentDidMount() {
        //this.setupAnnotations();
    }

    annotationsForSegment(segment) {
        let annotations = [];
        const foundAnnotations = this.props.annotationPositions[segment.start];
        if (foundAnnotations) {
            annotations = foundAnnotations;
        }
        return annotations;
    }

    getAnnotation(id) {
        let validAnnotation = null;
        _.forOwn(this.props.annotationPositions, (annotations, position) => {
            if (annotations) {
                let validAnnotations = annotations.filter((annotation) => annotation.id == id);
                    if (validAnnotations.length > 0) {
                        validAnnotation = validAnnotations[0];
                        return false;
                    }
            }
        });
        return validAnnotation;
    }

    segmentsContainSegment(segments, segment) {
        for (let i=0; i < segments.length; i++) {
            let listSegment = segments[i];
            if (listSegment.start == segment.start
                && listSegment.text == segment.text)
            {
                return true;
            }
        }
        return false;
    }

    idForSegment(segment) {
        return "s_" + segment.start;
    }

    idForDeletedSegment(segment) {
        return "ds_" + segment.start;
    }

    idForInsertion(annotation) {
        return "i_" + annotation.id;
    }

    clickedSegment(segment) {
        if (segment.id.indexOf('i_') != -1) {
            const annotationId = segment.id.substr(2);
            const annotation = this.getAnnotation(annotationId);
            console.log('click insertion annotation: %o segment: %o', annotation, segment);
            this.props.didSelectAnnotation(annotation);
        } else if (segment.id.indexOf('s_') != -1) {
            let segmentPosition = segment.id.substr(2);
            let textSegment = this.props.segmentedText.segmentAtPosition(segmentPosition);
            if (textSegment) {
                this.props.didSelectSegment(textSegment);
            }
        } else if (segment.id.indexOf('ds_') != -1) {
            console.log('clicked segment');
            let segmentPosition = segment.id.substr(3);
            let textSegment = this.props.segmentedText.segmentAtPosition(segmentPosition);
            if (textSegment) {
                this.props.didSelectSegment(textSegment);
            }
        }
    }

    generateHtml() {
        let segments = this.state.segmentedText.sortedSegments();
        if (segments !== this._renderedSegments || this._renderedHtml == null) {
            let segmentHTML = '';
            const insertionClass = styles.insertion;
            for (let i = 0; i < segments.length; i++) {
                let segment = segments[i];
                let annotations = this.annotationsForSegment(segment);
                let insertions = annotations.filter((annotation) => annotation.length == 0);
                let activeInsertions = _.intersectionWith(
                    this.props.activeAnnotations,
                    insertions,
                    (a, b) => a.id == b.id);
                let inactiveInsertions = _.differenceWith(insertions, activeInsertions, (a, b) => a.id == b.id);
                if (inactiveInsertions.length > 0) {
                    const insertion = inactiveInsertions[0];
                    const insertionId = this.idForInsertion(insertion);

                    segmentHTML += '<span id=' + insertionId + ' key=' + insertionId + ' class="' + insertionClass + '"></span>';
                }

                let remainingAnnotations = _.differenceWith(annotations, insertions, (a, b) => a.id == b.id);
                let classAttribute = "";

                let classes = [];
                if (remainingAnnotations.length > 0 || activeInsertions.length > 0) {
                    classes.push(styles.annotation);
                }
                // deleted segments has empty text
                let id = null;
                if (segment.length == 0) {
                    id = this.idForDeletedSegment(segment);
                    classes.push(styles.removedByAnnotation);
                } else {
                    id = this.idForSegment(segment);
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
        let extraClass = "";
        if (this.props.limitWidth) {
            extraClass = styles.limitWidth;
        }

        // Generate HTML manually as it is much faster when
        // creating large numbers of elements, such as these spans.
        const html = this.generateHtml();

        return (
            <div className={styles.textContainer}>
                <div className={classnames(styles.text, extraClass)} dangerouslySetInnerHTML={html}  onClick={(e) => this.clickedSegment(e.target)} />
            </div>
        )
    }
}
