import React from 'react'
import classnames from 'classnames'
import { BASE_ANNOTATION_ID } from 'lib/AnnotatedText'
import styles from './AnnotationDetail.css'

const AnnotationDetailEdit = (props) => {

    let content = props.annotationData.content;
    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active)
    }

    let textarea = null;
    let className = classnames(...classes);
    return (
        <div className={className}>
            <h3>{props.annotationData.name}</h3>

            <div className={styles.editing}>

                <textarea
                    defaultValue={content}
                    autoFocus={true}
                    ref={(ta) => textarea = ta}
                />
                <div className={styles.actionButtons}>
                    <div className={styles.save} onClick={() => {
                        props.saveAnnotationHander(textarea.value);
                    }}>Save</div>
                    <div className={styles.cancel}>Cancel</div>
                </div>

            </div>
        </div>
    )
};

export default AnnotationDetailEdit;