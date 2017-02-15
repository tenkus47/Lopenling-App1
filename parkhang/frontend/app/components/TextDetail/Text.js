import React from 'react'
import styles from './Text.css'

const Text = props => {
    return (
        <div className={styles.textContainer}>
            <div className={styles.text}>
                {props.witness.content}
            </div>
        </div>
    )
};

export default Text;