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

class TextDetail extends React.Component {

    render() {
        let text = {
            name: ''
        };
        if (this.props.text) {
            text = this.props.text;
        }

        let inlineControls = false;
        let textComponent = null;

        if (!this.props.text || this.props.loading) {
            textComponent = <div/>
        } else {
            let limitWidth = false;
            let splitter;
            if (this.props.paginated) {
                splitter = positionSplitter(this.props.pageBreaks);
            } else {
                splitter = lengthSplitter(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
            }

            let splitText = new SplitText(this.props.annotatedText, splitter);
            inlineControls = true;
            textComponent = <SplitTextComponent
                splitText={splitText}
                annotations={this.props.annotations}
                activeAnnotations={this.props.activeAnnotations}
                activeAnnotation={this.props.activeAnnotation}
                limitWidth={limitWidth}
                didSelectSegment={this.props.didSelectSegment}
                didSelectSegmentIds={this.props.didSelectSegmentIds}
                selectedSegmentId={this.props.selectedSegmentId}
                annotationPositions={this.props.annotationPositions}
                selectedAnnotatedSegments={this.props.selectedAnnotatedSegments}
                textListVisible={this.props.textListVisible}
                showImages={this.props.paginated}
                imagesBaseUrl={this.props.imagesBaseUrl}
                selectedWitness={this.props.selectedWitness}
            />
        }

        let annotationControls = null;
        if (this.props.text) {
            annotationControls = <AnnotationControlsContainer
                annotationPositions={this.props.annotationPositions}
                annotatedText={this.props.annotatedText}
                activeAnnotation={this.props.activeAnnotation}
            />;
        }

        let textComponents = [textComponent];
        if (!inlineControls && annotationControls) {
            textComponents.push(annotationControls);
        }

        return (
            <div
                className={classnames(styles.textDetail, utilStyles.flex, utilStyles.flexColumn)}>
                <TextHeadingContainer text={text}/>
                <Loader loaded={!this.props.loading}/>
                <div className={classnames(styles.textContainer, utilStyles.flex)}>
                    {!this.props.loading ? (
                        textComponents
                    ) : (<div/>)
                    }
                </div>
            </div>
        );
    }
};

export default TextDetail;