// @flow
import React from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import styles from "./AnnotationDetail.css";
import type { AnnotationData } from "api";
import CheckIcon from "images/check_circle.svg";
import colours from "css/colour.css";
import Share from "components/UI/ShareButton";
import Voting from "components/UI/Voting";
export type Props = {
    annotationData: AnnotationData,
    isActive: boolean,
    selectAnnotationHandler: () => void,
    isLoggedIn: boolean,
    editAnnotationHandler: () => void,
    fontSize: Number,
};
const MAXIMUM_TEXT_LENGTH = 250;

const AnnotationDetail = (props: Props) => {
    let desc = (
        <p>
            &lt;
            <FormattedMessage id="annotation.delete" />
            &gt;
        </p>
    );

    let content = props.annotationData.content;

    if (content.trim() !== "") {
        if (content.length > MAXIMUM_TEXT_LENGTH) {
            content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
        }
        // content variable is the selected trimmed context
        desc = <p>{content}</p>;
    }

    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active);
    }

    let className = classnames(...classes);
    return (
        <div className={className} onClick={props.selectAnnotationHandler}>
            <div className={styles.annotationHeader}>
                {props.isActive && (
                    <div className={styles.activeIcon}>
                        <CheckIcon
                            style={{ fill: colours.activeButton }}
                            width={15}
                            height={15}
                        />
                    </div>
                )}
                <h3>{props.annotationData.name}</h3>
                {props.isLoggedIn && props.isActive && (
                    <button
                        style={{ display: "none" }}
                        className={styles.edit}
                        onClick={props.editAnnotationHandler}
                        id="editBtn"
                    ></button>
                )}
            </div>
            {desc}
            {props.isActive && (
                <div className={styles.contentOptions}>
                    <Voting data={props.annotationData} />
                    <Share content={props.annotationData.content} />
                </div>
            )}
        </div>
    );
};

export default AnnotationDetail;
