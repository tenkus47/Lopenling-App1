import React from 'react'
import classnames from 'classnames'
import { BASE_ANNOTATION_ID } from 'lib/AnnotatedText'
import styles from './AnnotationDetail.css'

const AnnotationDetail = (props) => {

    let desc = <p>&lt;delete&gt;</p>;
    let content = props.annotationData.content;
    if (content.trim() != "") {
        desc = <p>{props.annotationData.content}</p>
    }

    let className = styles.annotationDetail;
    if (props.isActive) {
        className = classnames(className, styles.active);
    }

    let clickHandler = props.onClickHandler;
    // TODO: update click handler to handle base annotations
    if (props.annotationData.id == BASE_ANNOTATION_ID) {
        clickHandler = null;
    }

    return (
        <div className={className} onClick={clickHandler}>
            <h3>{props.annotationData.name}</h3>
            {desc}
        </div>
    )
};

export default AnnotationDetail;