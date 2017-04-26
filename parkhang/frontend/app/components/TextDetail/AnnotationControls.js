import React from 'react'
import classnames from 'classnames'
import AnnotationDetail from './AnnotationDetail'
import AnnotationDetailEdit from './AnnotationDetailEdit'
import styles from './AnnotationControls.css'

// const AnnotationControls = (props) => {
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
        // TODO: update height when new data provided
        const height = this.controls.offsetHeight;
        let top = this.props.position.top  - (height / 2);
        if (top < this.props.position.viewPortTop) {
            top = this.props.position.viewPortTop;
        }
        if (top + height > this.props.position.viewPortBottom) {
            top = this.props.position.viewPortBottom - height;
        }

        const left = this.props.position.textRight + 'px';
        this.controls.style.top = top + 'px';
        this.controls.style.left = left;
        this.arrow.style.top = this.props.position.top - top + 'px';
        this.arrowDs.style.top = this.props.position.top - top + 2 + 'px';
    }

    render() {
        console.log('rendering AnnotationControls');
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
                        saveAnnotationHander={(content) => {
                            props.saveAnnotation(annotationData.id, content);
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

// export default AnnotationControls;
