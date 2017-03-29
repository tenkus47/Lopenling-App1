import React from 'react'
import classnames from 'classnames'

import TextHeading from './TextHeading'
import TextHeadingContainer from './TextHeadingContainer'
import Text from './Text'
import PechaText from './PechaText'
import Loader from 'react-loader'
import AnnotationControlsContainer from './AnnotationControlsContainer'

import SegmentedText from 'lib/SegmentedText'
import PaginatedTibetanText from 'lib/PaginatedTibetanText'
import segmentTibetanText from 'lib/segmentTibetanText'

import styles from './TextDetail.css'
import utilStyles from 'css/util.css'

const TextDetail = props => {
    let text = {
        name: ''
    };
    if (props.text) {
        text = props.text;
    }

    let segmentedText = null;
    if (props.annotatedText != null) {
        segmentedText = props.annotatedText.segmentedText;
    } else {
        segmentedText = new SegmentedText([]);
    }

    let textComponent = null;
    if (!props.text || props.loading) {
        textComponent = <div />
    } else if (props.paginated && props.baseWitness != null) {
        const paginatedText = new PaginatedTibetanText(props.baseWitness.content, null, 500);
        textComponent = <PechaText
            paginatedText={paginatedText}
            annotations={props.annotations}
            activeAnnotations={props.activeAnnotations}
            didSelectSegment={props.didSelectSegment}
            didSelectAnnotation={props.didSelectAnnotation}
            annotationPositions={props.annotationPositions}
            selectedAnnotatedSegments={props.selectedAnnotatedSegments}
        />
    } else {
        textComponent = <Text
            segmentedText={segmentedText}
            annotations={props.annotations}
            activeAnnotations={props.activeAnnotations}
            limitWidth={true}
            didSelectSegment={props.didSelectSegment}
            didSelectAnnotation={props.didSelectAnnotation}
            annotationPositions={props.annotationPositions}
            selectedAnnotatedSegments={props.selectedAnnotatedSegments}
        />
    }

    let annotationControls = null;
    if (props.text) {
        annotationControls = <AnnotationControlsContainer
                                annotationPositions={props.annotationPositions}
                                annotatedText={props.annotatedText}
                                activeAnnotation={props.activeAnnotation}
                            />;
    }

    return (
        <div className={classnames(styles.textDetail, utilStyles.flex, utilStyles.flexColumn)}>
            <TextHeadingContainer text={text} />
            <Loader loaded={!props.loading} />
            <div className={classnames(styles.textContainer, utilStyles.flex)}>
                {!props.loading ? (
                    [textComponent, annotationControls]
                ) : (<div/>)
                }
            </div>
        </div>
    );
};

export default TextDetail;