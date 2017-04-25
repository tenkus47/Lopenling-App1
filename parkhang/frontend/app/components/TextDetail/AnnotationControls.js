import React from 'react'
import classnames from 'classnames'
import AnnotationDetail from './AnnotationDetail'
import AnnotationDetailEdit from './AnnotationDetailEdit'
import styles from './AnnotationControls.css'

const AnnotationControls = (props) => {
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
        nothingSelected = <div className={styles.nothingSelected}>Nothing Selected</div>;
    }



    return (
        <div className={styles.annotationControls} >
            {anonymousUserMessage}
            {nothingSelected}
            {variantsHeading}
            {temporaryAnnotations}
            {annotations}
        </div>
    )
};

export default AnnotationControls;
