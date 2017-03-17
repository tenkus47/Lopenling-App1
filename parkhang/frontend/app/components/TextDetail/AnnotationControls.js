import React from 'react'
import AnnotationDetail from './AnnotationDetail'
import styles from './AnnotationControls.css'

const AnnotationControls = (props) => {

    let annotations = [];
    props.annotationsData.map((annotationData) => {
        let isActive = false;
        if (annotationData.id == props.activeAnnotation.id) {
            isActive = true;
        }
        let annotationDetail = <AnnotationDetail
                annotationData={annotationData}
                key={annotationData.id}
                isActive={isActive}
                onClickHandler={() => {
                    props.didSelectAnnotation(annotationData.id);
                }} />;
        annotations.push(annotationDetail);
    }, this);

    return (
        <div className={styles.annotationControls} >
            {annotations}
        </div>
    )
};

export default AnnotationControls;
