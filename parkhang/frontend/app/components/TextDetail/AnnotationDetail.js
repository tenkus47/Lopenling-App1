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

    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active)
    }

    let className = classnames(...classes);
    return (
        <div className={className} onClick={props.selectAnnotationHandler}>
            <h3>{props.annotationData.name}</h3>

            { props.isActive &&
                <div className={styles.edit} onClick={props.editAnnotationHandler}/>
            }

            {desc}
        </div>
    )
};

export default AnnotationDetail;