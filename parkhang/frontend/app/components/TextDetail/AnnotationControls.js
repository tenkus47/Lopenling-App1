import React from 'react'
import classnames from 'classnames'
import AnnotationDetail from './AnnotationDetail'
import AnnotationDetailEdit from './AnnotationDetailEdit'
import { CONTROLS_MARGIN_LEFT } from './SplitText'
import styles from './AnnotationControls.css'
import textStyles from './Text.css'

export default class AnnotationControls extends React.PureComponent {

    constructor(props) {
        super(props);

        this.controls = null;
        this.arrow = null;
        this.arrowDs = null;
    }

    componentDidMount() {
        this.updatePosition();
    }

    componentDidUpdate() {
        this.updatePosition();
    }

    updatePosition() {
        if (!this.props.inline) {
            return;
        }
        const measurements = this.getMeasurements();
        // TODO: update height when new data provided
        const height = this.controls.offsetHeight;
        let top = measurements.top  - (height / 2);
        if (top < measurements.viewPortTop) {
            top = measurements.viewPortTop;
        }
        if (top + height > measurements.viewPortBottom) {
            top = measurements.viewPortBottom - height;
        }

        const left = measurements.textRight + 'px';
        this.controls.style.top = top + 'px';
        this.controls.style.left = left;
        this.arrow.style.top = measurements.top - top + 'px';
        this.arrowDs.style.top = measurements.top - top + 2 + 'px';
    }

    getMeasurements() {
        const firstText = document.getElementsByClassName(textStyles.text)[0];
        const splitTextRect = this.props.splitTextRect;
        const firstSegment = this.props.firstSelectedSegment;
        let elementId = 's_' + firstSegment.start;
        const firstElement = document.getElementById(elementId);
        if (!firstElement) {
            console.warn('no valid element found in getMeasurements');
            return {
                top: 0,
                textRight: 0,
                viewPortTop: 0,
                viewPortBottom: 0,
            }
        }
        const top = firstElement.offsetTop;
        let viewPortTop = null;
        let viewPortBottom = null;
        let elViewPortTop = null;
        let elViewPortBottom = null;
        if (firstElement) {
            const elRect = firstElement.getBoundingClientRect();

            elViewPortTop = elRect.top - splitTextRect.top;
            elViewPortBottom = splitTextRect.height - elViewPortTop;
            viewPortTop = firstElement.offsetTop - elViewPortTop;
            viewPortBottom = firstElement.offsetTop + elViewPortBottom;
        }
        const textRight = firstText.offsetLeft + firstText.offsetWidth + CONTROLS_MARGIN_LEFT;
        return {
            top: top,
            textRight: textRight,
            viewPortTop: viewPortTop,
            viewPortBottom: viewPortBottom,
        };
    }

    render() {
        const props = this.props;
        let annotations = [];
        let temporaryAnnotations = [];
        let anonymousUserMessage = null;
        let variantsHeading = null;
        let nothingSelected = null;
        if (props.annotationsData) {
            props.annotationsData.map((annotationData) => {
                let isEditing = false;
                let isActive = false;
                if (annotationData.isTemporary) {
                    isEditing = true;
                    isActive = true
                } else if (!props.temporaryAnnotation && annotationData.id == props.activeAnnotation.id) {
                    isActive = true;
                }

                if (isEditing) {
                    let annotationDetail = <AnnotationDetailEdit
                        annotationData={annotationData}
                        key={annotationData.id}
                        isActive={isActive}
                        saveAnnotationHandler={(content) => {
                            props.saveAnnotation(annotationData.id, content);
                        }}
                        cancelAnnotationHandler={() => {
                            props.cancelEditAnnotation(annotationData.id);
                        }}
                    />;
                    temporaryAnnotations.push(annotationDetail);
                } else {
                    let annotationDetail = <AnnotationDetail
                        annotationData={annotationData}
                        key={annotationData.id}
                        isActive={isActive}
                        selectAnnotationHandler={() => {
                            if (props.user.isLoggedIn && !isEditing) {
                                props.didSelectAnnotation(annotationData.id);
                            }
                        }}
                        editAnnotationHandler={() => {
                            if (!isEditing) {
                                props.editAnnotation(annotationData.id);
                            }
                        }}
                    />;
                    annotations.push(annotationDetail);
                }

            }, this);
            variantsHeading = <h3>Variants</h3>;

            if (!props.user.isLoggedIn) {
                anonymousUserMessage = (
                    <div className={styles.anonymousMessage}>
                        Please <a href="/accounts/login/">login</a> to make changes.
                    </div>
                )
            }

        } else {
            nothingSelected =
                <div className={styles.nothingSelected}>Nothing Selected</div>;
        }

        let classes = [styles.annotationControls];
        if (props.inline) {
            classes.push(styles.inline);
        }

        return (
            <div
                className={classnames(...classes)}
                ref={(controls) => this.controls = controls}
            >
                {anonymousUserMessage}
                {nothingSelected}
                {variantsHeading}
                {temporaryAnnotations}
                {annotations}
                <div className={styles.arrow} ref={(div) => this.arrow = div}/>
                <div className={styles.arrowDs} ref={(div) => this.arrowDs = div}/>
            </div>
        )
    }
};