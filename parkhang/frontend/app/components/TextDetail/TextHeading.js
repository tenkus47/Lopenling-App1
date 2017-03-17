import React from 'react'
import addTibetanShay from 'lib/addTibetanShay'
import styles from './TextHeading.css'

const TextHeading = props => {
    let name = ""
    if (props.text.name) {
        name = addTibetanShay(props.text.name);
    }
    return (
        <div className={styles.headingContainer}>
            <h2 className={styles.textHeading}>
                {name}
            </h2>
            <div className={styles.controls}>
                <label>
                    <input type="checkbox" checked={props.showPageImages} onChange={props.changedShowPageImages} />
                    Show page images
                </label>
            </div>
        </div>
    );
};

export default TextHeading;