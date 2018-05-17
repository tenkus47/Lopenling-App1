// @flow
import SegmentedText from "./SegmentedText";
import AnnotatedText from "./AnnotatedText";

export type Splitter = string => number[];

export default class SplitText {
    annotatedText: AnnotatedText;
    splitter: Splitter;
    _texts: SegmentedText[];
    _textsFinalPositions: number[];

    constructor(annotatedText: AnnotatedText, splitter: Splitter) {
        this.annotatedText = annotatedText;
        this.splitter = splitter;
        this._texts = [];
        this._textsFinalPositions = [];
    }

    get texts(): SegmentedText[] {
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
        if (lastPosition + 1 < textString.length) {
            splitPositions.push(textString.length - 1);
        }
        const segments = segmentedText.sortedSegments();
        let startIndex = 0;
        let texts = [];
        for (let i = 0; i < splitPositions.length; i++) {
            const position = splitPositions[i];
            const endIndex = segmentedText.indexOfSortedSegmentAtPosition(
                position
            );
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

        return texts;
    }

    _getTextsFinalPositions(): number[] {
        this.texts;
        return this._textsFinalPositions;
    }

    /**
     * Return the index of the text portion that contains the given position.
     *
     * @param position
     * @returns number
     */
    getTextIndexOfPosition(position: number): number {
        const textsFinalPositions = this._getTextsFinalPositions();
        let lastPosition = 0;
        let textIndex = null;
        for (let i = 0; i < textsFinalPositions.length; i++) {
            let endPosition = textsFinalPositions[i];
            if (position >= lastPosition && position <= endPosition) {
                textIndex = i;
                break;
            }
            lastPosition = endPosition;
        }
        if (textIndex === null) {
            console.warn("no index for position %d", position);
            textIndex = textsFinalPositions.length - 1;
        }
        return textIndex;
    }
}
