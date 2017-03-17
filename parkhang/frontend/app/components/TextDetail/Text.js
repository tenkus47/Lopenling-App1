import React from 'react'
import classnames from 'classnames'
import styles from './Text.css'

export default class Text extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            segmentedText: props.segmentedText
        };
    }

    componentWillReceiveProps(nextProps) {
        this.state.segmentedText = nextProps.segmentedText;
    }

    componentDidUpdate() {
        this.setupAnnotations();
    }

    componentDidMount() {
        this.setupAnnotations();
    }

    annotationsForSegment(segment) {
        let annotations = [];
        for (let i=segment.start; i <= segment.end; i++) {
            let posAnnotations = this.props.annotationPositions[i];
            if (posAnnotations) {
                annotations = annotations.concat(posAnnotations);
            }
        }
        return annotations;
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

    setupAnnotations() {
        // TODO: show annotations that add text
        // Use green? square at the position of the annotation

        let segments = this.props.segmentedText.sortedSegments();
        for (let j=0; j < segments.length; j++) {
            const segment = segments[j];
            let annotations = this.annotationsForSegment(segment);
            if (annotations.length > 0) {
                const segId = this.idForSegment(segment);
                let el = document.getElementById(segId);
                if (el) {
                    el.onclick = (e) => {
                        this.props.didSelectSegment(segment);
                    };

                    if (this.segmentsContainSegment(this.props.selectedAnnotatedSegments, segment)) {
                        el.className = classnames(styles.annotation, styles.selectedAnnotation)
                    } else {
                        el.className = styles.annotation;
                    }
                }
            }

        }
    }

    idForSegment(segment) {
        return "s_" + segment.start;
    }

    idForDeletedSegment(segment) {
        return "ds_" + segment.start;
    }

    render() {
        let extraClass = "";
        if (this.props.limitWidth) {
            extraClass = styles.limitWidth;
        }

        // Generate HTML manually as it is much faster when
        // creating large numbers of elements, such as these spans.
        let segments = this.state.segmentedText.sortedSegments();
        let segmentHTML = '';
        for (let i=0; i < segments.length; i++) {
            let segment = segments[i];
            let classAttribute = "";
            // deleted segments has empty text
            let id = null;
            if (segment.length == 0) {
                id = this.idForDeletedSegment(segment);
                let className = styles.removedByAnnotation;
                classAttribute = 'class="'+className+'"';
            } else {
                id = this.idForSegment(segment);
            }

            segmentHTML += '<span id='+id+' key='+id+' '+classAttribute+'>'+segment.text+'</span>';
        }
        const html = {
            __html: segmentHTML
        };

        return (
            <div className={styles.textContainer}>
                <div className={classnames(styles.text, extraClass)} dangerouslySetInnerHTML={html} />
            </div>
        )
    }
}
