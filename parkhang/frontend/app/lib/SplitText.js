import SegmentedText from './SegmentedText'

export default class SplitText {

    constructor(annotatedText, splitter) {
        this.annotatedText = annotatedText;
        this.splitter = splitter;
        this._texts = null;
        this._textsFinalPositions = null;
    }

    get texts() {
        if (!this._texts) {
            if (!this.annotatedText) {
                return [];
            }
            this._textsFinalPositions = [];
            const segmentedText = this.annotatedText.segmentedText;
            const textString = segmentedText.getText();
            let splitPositions = this.splitter(textString);
            if (splitPositions.length == 0) {
                this._textsFinalPositions.push(textString.length);
                return [segmentedText];
            }
            let lastPosition = splitPositions[splitPositions.length - 1];
            if (lastPosition < textString.length) {
                splitPositions.push(textString.length - 1);
            }
            const segments = segmentedText.sortedSegments();
            let startIndex = 0;
            let texts = [];
            for (let i=0; i < splitPositions.length; i++) {
                const position = splitPositions[i];
                const endIndex = segmentedText.indexOfSortedSegmentAtPosition(position);
                let textSegments;
                if (i == splitPositions.length - 1) {
                    // final position
                    textSegments = segments.slice(startIndex);
                } else {
                    textSegments = segments.slice(startIndex, endIndex);
                }

                const text = new SegmentedText(textSegments);
                texts.push(text);
                startIndex = endIndex;
                if (endIndex >= 0) {
                    const finalSegment = segments[endIndex];
                    this._textsFinalPositions.push(finalSegment.end);
                }
            }

            this._texts = texts;
        }

        return this._texts;
    }

    _getTextsFinalPositions() {
        if (!this._textsFinalPositions) {
            // ensure this._textsFinalPositions is generated
            this.texts;
        }
        return this._textsFinalPositions;
    }

    getTextIndexOfPosition(position) {
        const textsFinalPositions = this._getTextsFinalPositions();
        let lastPosition = 0;
        let textIndex = null;
        for (let i=0; i < textsFinalPositions.length; i++) {
            let endPosition = textsFinalPositions[i];
            if (position >= lastPosition && position <= endPosition) {
                textIndex = i;
                break;
            }
            lastPosition = endPosition;
        }
        if (textIndex === null) {
            console.warn('no index for position %d', position);
            textIndex = textsFinalPositions.length - 1;
        }
        return textIndex;
    }
}