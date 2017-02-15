import React from 'react'
import styles from './TextHeading.css'

const TextHeading = props => {
    return (
        <h2 className={styles.textHeading}>
            {props.text.name}
        </h2>
    );
};

export default TextHeading;