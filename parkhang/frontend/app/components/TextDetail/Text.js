import React from 'react'
import classnames from 'classnames'
import styles from './Text.css'

import SegmentedTextHtml from 'lib/SegmentedTextHtml'

export default class Text extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            html: {
                __html: ""
            },
            segmentedText: props.segmentedText,
            segmentedTextHtml: null
        };

        this.setupTextHtml(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setupTextHtml(nextProps);
    }

    componentDidUpdate() {
        this.setupAnnotations();
    }

    componentDidMount() {
        this.setupAnnotations();
    }

    setupTextHtml(props) {
        let textHtml = new SegmentedTextHtml(props.segmentedText);
        const html = {
            __html: textHtml.html()
        };

        this.state.html = html;
        this.state.segmentedText = props.segmentedText;
        this.state.segmentedTextHtml = textHtml;
    }

    setupAnnotations() {
        const annotationKeys = Object.keys(this.props.annotations);
        if (this.props.annotations && annotationKeys.length > 0) {
            const segmentedTextHtml = this.state.segmentedTextHtml;
            if (segmentedTextHtml) {
                for (let annotationId of annotationKeys) {
                    const annotation = this.props.annotations[annotationId];
                    let segmentIds = segmentedTextHtml.segmentIdsInRange(
                        annotation.start,
                        annotation.length
                    );
                    for (let segmentId of segmentIds) {
                        let el = document.getElementById(segmentId);
                        if (el) {
                            el.style.color = 'red';
                            el.onclick = function (e) {
                                console.log('clicked annotation: %o', annotation);
                            }
                        }
                    }

                }
            }
        }
    }

    render() {
        let extraClass = "";
        if (this.props.limitWidth) {
            extraClass = styles.limitWidth;
        }

        return (
            <div className={styles.textContainer}>
                <div className={classnames(styles.text, extraClass)} dangerouslySetInnerHTML={this.state.html} />
            </div>
        )
    }
}
