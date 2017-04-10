import SegmentedText from './SegmentedText'

export default class SplitText {

    constructor(annotatedText, splitter) {
        this.annotatedText = annotatedText;
        this.splitter = splitter;
        this._texts = null;
    }

    get texts() {
        if (!this._texts) {
            if (!this.annotatedText) {
                return [];
            }
            const segmentedText = this.annotatedText.segmentedText;
            const textString = segmentedText.getText();
            let splitPositions = this.splitter(textString);
            if (splitPositions.length == 0) {
                return [segmentedText];
            }
            let lastPosition = splitPositions[splitPositions.length - 1];
            if (lastPosition < textString.length) {
                splitPositions.push(textString.length);
            }
            const segments = segmentedText.sortedSegments();
            let startIndex = 0;
            let texts = [];
            for (let i=0; i < splitPositions.length; i++) {
                const position = splitPositions[i];
                const endIndex = segmentedText.indexOfSortedSegmentAtPosition(position);
                let textSegments;
                if (i == splitPositions.length - 1) {
                    textSegments = segments.slice(startIndex);
                } else {
                    textSegments = segments.slice(startIndex, endIndex);
                }

                const text = new SegmentedText(textSegments);
                texts.push(text);
                startIndex = endIndex;
            }

            this._texts = texts;
        }

        return this._texts;
    }
}