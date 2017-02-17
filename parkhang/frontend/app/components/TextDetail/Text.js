import React from 'react'
import styles from './Text.css'

import segmentTibetanText from 'lib/segmentTibetanText'
import SegmentedTextHtml from 'lib/SegmentedTextHtml'

export default class Text extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            html: {
                __html: ""
            },
            segmentedText: null,
            segmentedTextHtml: null
        };
    }

    componentWillReceiveProps(nextProps) {
        const segmentedText = segmentTibetanText(nextProps.witness.content);
        let textHtml = new SegmentedTextHtml(segmentedText);
        const html = {
            __html: textHtml.html()
        };


        this.state.html = html;
        this.state.segmentedText = segmentedText;
        this.state.segmentedTextHtml = textHtml;
    }

    componentDidUpdate() {
        const annotationKeys = Object.keys(this.props.annotations);
        if (this.props.annotations && annotationKeys.length > 0) {
            const segmentedTextHtml = this.state.segmentedTextHtml;
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
                        el.onclick = function(e) {
                            console.log('clicked annotation: %o', annotation);
                        }
                    }
                }

            }
        }
    }

    render() {
        return (
            <div className={styles.textContainer}>
                <div className={styles.text} dangerouslySetInnerHTML={this.state.html} />
            </div>
        )
    }
}
