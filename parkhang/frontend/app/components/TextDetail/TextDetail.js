import React from 'react'
import classnames from 'classnames'

import TextHeading from './TextHeading'
import TextHeadingContainer from './TextHeadingContainer'
import Text from './Text'
import SplitTextComponent from 'components/TextDetail/SplitText'
import PechaText from './PechaText'
import Loader from 'react-loader'
import AnnotationControlsContainer from './AnnotationControlsContainer'

import SegmentedText from 'lib/SegmentedText'
import SplitText from 'lib/SplitText'
import PaginatedTibetanText from 'lib/PaginatedTibetanText'
import segmentTibetanText from 'lib/segmentTibetanText'
import lengthSplitter from 'lib/text_splitters/lengthSplitter'
import positionSplitter from 'lib/text_splitters/positionSplitter'

import styles from './TextDetail.css'
import utilStyles from 'css/util.css'

const TextDetail = props => {
    let text = {
        name: ''
    };
    if (props.text) {
        text = props.text;
    }

    let inlineControls = false;
    let textComponent = null;

    if (!props.text || props.loading) {
        textComponent = <div />
    } else {
        let limitWidth;
        let splitter;
        if (props.paginated) {
            limitWidth = false;
            splitter = positionSplitter(props.pageBreaks);
        } else {
            limitWidth = true;
            splitter = lengthSplitter(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        let splitText = new SplitText(props.annotatedText, splitter);
        inlineControls = true;
        textComponent = <SplitTextComponent
            splitText={splitText}
            annotations={props.annotations}
            activeAnnotations={props.activeAnnotations}
            activeAnnotation={props.activeAnnotation}
            limitWidth={limitWidth}
            didSelectSegment={props.didSelectSegment}
            didSelectSegmentIds={props.didSelectSegmentIds}
            selectedSegmentId={props.selectedSegmentId}
            annotationPositions={props.annotationPositions}
            selectedAnnotatedSegments={props.selectedAnnotatedSegments}
            textListVisible={props.textListVisible}
            showImages={props.paginated}
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

    let textComponents = [textComponent];
    if (!inlineControls && annotationControls) {
        textComponents.push(annotationControls);
    }

    return (
        <div className={classnames(styles.textDetail, utilStyles.flex, utilStyles.flexColumn)}>
            <TextHeadingContainer text={text} />
            <Loader loaded={!props.loading} />
            <div className={classnames(styles.textContainer, utilStyles.flex)}>
                {!props.loading ? (
                    textComponents
                ) : (<div/>)
                }
            </div>
        </div>
    );
};

export default TextDetail;