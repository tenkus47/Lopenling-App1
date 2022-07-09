import React from "react";
import classnames from "classnames";
import styles from "./NavigationButton.css";
import HamburgerIcon from "images/hamburger.svg";

type Props = {
    onClick?: () => void,
    className?: string,
    title?: string,
    isListVisible: Boolean,
};

const NavigationButton = (props: Props) => {
    let classNames = [styles.button];
    if (props.className) {
        classNames.push(props.className);
    }
    // if (props.isListVisible) return null;
    return (
        <div
            className={classnames(...classNames)}
            onClick={props.onClick}
            title={props.title}
        >
            <HamburgerIcon />
        </div>
    );
};

export default NavigationButton;
