import React from 'react'
import classnames from 'classnames'

import TextHeading from './TextHeading'
import Text from './Text'
import Loader from 'react-loader'

import styles from './TextDetail.css'
import utilStyles from 'css/util.css'

const TextDetail = props => {
    // let name = "no text selected";
    let text = {
        name: 'No text selected!'
    };
    if (props.text) {
        text = props.text;
    }
    let witness = {
        content: ""
    };
    if (props.baseWitness) {
        witness = props.baseWitness
    }
    return (
        <div className={classnames(styles.textDetail, utilStyles.flex, utilStyles.flexColumn)}>
            <TextHeading text={text} />
            <Loader loaded={!props.loading} />
            <Text witness={witness} annotations={props.annotations} />
        </div>
    );
};

export default TextDetail;