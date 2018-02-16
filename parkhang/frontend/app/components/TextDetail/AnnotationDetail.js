// @flow
import React from "react";
import classnames from "classnames";
import styles from "./AnnotationDetail.css";
import type { AnnotationData } from "api";

export type Props = {
    annotationData: AnnotationData,
    isActive: boolean,
    selectAnnotationHandler: () => void,
    isLoggedIn: boolean,
    editAnnotationHandler: () => void
};

const AnnotationDetail = (props: Props) => {
    let desc = <p>&lt;delete&gt;</p>;
    let content = props.annotationData.content;
    if (content.trim() !== "") {
        desc = <p>{props.annotationData.content}</p>;
    }

    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active);
    }

    let className = classnames(...classes);
    return (
        <div className={className} onClick={props.selectAnnotationHandler}>
            <h3>{props.annotationData.name}</h3>

            {props.isLoggedIn &&
                props.isActive && (
                    <div
                        className={styles.edit}
                        onClick={props.editAnnotationHandler}
                    >
                        EDIT
                    </div>
                )}

            {desc}
        </div>
    );
};

export default AnnotationDetail;
