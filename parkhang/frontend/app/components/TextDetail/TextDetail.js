import React from 'react'
import classnames from 'classnames'

import TextHeading from './TextHeading'
import TextHeadingContainer from './TextHeadingContainer'
import Text from './Text'
import PechaText from './PechaText'
import Loader from 'react-loader'

import SegmentedText from 'lib/SegmentedText'
import PaginatedTibetanText from 'lib/PaginatedTibetanText'
import segmentTibetanText from 'lib/segmentTibetanText'

import styles from './TextDetail.css'
import utilStyles from 'css/util.css'

const TextDetail = props => {
    let text = {
        name: ''
    };
    if (props.text) {
        text = props.text;
    }

    let segmentedText = null;
    if (props.baseWitness != null) {
        segmentedText = segmentTibetanText(props.baseWitness.content);
    } else {
        segmentedText = new SegmentedText([]);
    }

    let textComponent = null;
    if (props.paginated && props.baseWitness != null) {
        const paginatedText = new PaginatedTibetanText(props.baseWitness.content, null, 500);
        textComponent = <PechaText paginatedText={paginatedText} annotations={props.annotations} />
    } else {
        textComponent = <Text segmentedText={segmentedText} annotations={props.annotations} limitWidth={true} />
    }

    return (
        <div className={classnames(styles.textDetail, utilStyles.flex, utilStyles.flexColumn)}>
            <TextHeadingContainer text={text} />
            <Loader loaded={!props.loading} />
            {textComponent}
        </div>
    );
};

export default TextDetail;