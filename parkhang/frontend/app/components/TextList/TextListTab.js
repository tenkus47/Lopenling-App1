import React from "react";
import classnames from "classnames";
import styles from "components/TextList/TextListTab.css";

const TextListTab = props => {
    let tabClassnames = [styles.tab];
    if (props.textListIsVisible) {
        tabClassnames.push(styles.hideTab);
    } else {
        tabClassnames.push(styles.showTab);
    }
    return (
        <div
            className={classnames(...tabClassnames)}
            onClick={props.tabClicked}
        >
            Text List
        </div>
    );
};

export default TextListTab;
