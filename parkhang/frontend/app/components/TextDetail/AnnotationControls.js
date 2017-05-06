import React from 'react'
import classnames from 'classnames'
import AnnotationDetail from './AnnotationDetail'
import AnnotationDetailEdit from './AnnotationDetailEdit'
import styles from './AnnotationControls.css'
import textStyles from './Text.css'

export const CONTROLS_MARGIN_LEFT = 10;

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
        const height = this.controls.offsetHeight;
        let top = measurements.top  - (height / 2);
        const isWithinViewport = (measurements.top >= measurements.viewPortTop && measurements.top <= measurements.viewPortBottom);
        if (isWithinViewport && top < measurements.viewPortTop) {
            top = measurements.viewPortTop;
        }
        if (isWithinViewport && top + height > measurements.viewPortBottom) {
            top = measurements.viewPortBottom - height;
        }
        if (top < 0) {
            top = 0;
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
        const firstElement = document.getElementById(this.props.selectedElementId);
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
        const isLoggedIn = props.user.isLoggedIn;
        if (props.annotationsData) {
            props.annotationsData.map((annotationData) => {
                let isEditing = false;
                let isActive = false;
                if (annotationData.isTemporary) {
                    isEditing = true;
                    isActive = true
                } else if (!props.temporaryAnnotation && annotationData.annotation.uniqueId == props.activeAnnotation.uniqueId) {
                    isActive = true;
                }

                if (isEditing) {
                    let annotationDetail = <AnnotationDetailEdit
                        annotationData={annotationData}
                        key={annotationData.annotation.uniqueId}
                        isActive={isActive}
                        saveAnnotationHandler={(content) => {
                            props.saveAnnotation(annotationData.annotation, content);
                        }}
                        cancelAnnotationHandler={() => {
                            props.cancelEditAnnotation(annotationData.annotation);
                        }}
                    />;
                    temporaryAnnotations.push(annotationDetail);
                } else {
                    let annotationDetail = <AnnotationDetail
                        annotationData={annotationData}
                        key={annotationData.annotation.uniqueId}
                        isActive={isActive}
                        selectAnnotationHandler={() => {
                            if (isLoggedIn && !isEditing) {
                                props.didSelectAnnotation(annotationData.annotation);
                            }
                        }}
                        editAnnotationHandler={() => {
                            if (isLoggedIn && !isEditing) {
                                props.editAnnotation(annotationData.annotation);
                            }
                        }}
                        isLoggedIn={isLoggedIn}
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