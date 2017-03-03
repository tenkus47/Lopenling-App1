import React from 'react'
import styles from './TextHeading.css'

const TextHeading = props => {
    return (
        <div className={styles.headingContainer}>
            <h2 className={styles.textHeading}>
                {props.text.name}
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