import Annotation from './Annotation'
import SegmentedText from './SegmentedText'
import TextSegment from './TextSegment'

export default class AnnotatedText {

    /**
     *
     * @param {SegmentedText} originalText
     * @param {Annotation[]} [annotations]
     */
    constructor(originalText, annotations=[]) {
        this.originalText = originalText;
        this.annotations = annotations;
        /** @type {SegmentedText} */
        this._generatedText = null;
        this._segmentPositions = {};
    }

    get segmentedText() {
        if (!this._generatedText) {
            this._generatedText = this.generateText(this.originalText, this.annotations);
        }

        return this._generatedText;
    }

    getText() {
        return this.segmentedText.getText();
    }

    /**
     * Generate a new SegmentedText with the given annotations.
     * @param {SegmentedText} text
     * @param {Annotation[]} annotations
     * @return {SegmentedText}
     */
    generateText(text, annotations) {
        if (annotations.length == 0) {
            return text;
        }

        const segments = text.sortedSegments();
        let newSegments = segments.slice();
        let replacedSegments = {};
        for (let i=0, len=annotations.length; i < len; i++) {
            let annotation = annotations[i];
            let targets = text.segmentsInRange(annotation.start, annotation.length);
            if (targets.length > 0) {
                let start = targets[0].start;
                let annotationSegment = new TextSegment(start, annotation.content);
                let firstIndex = newSegments.indexOf(targets[0]);
                newSegments.splice(firstIndex, targets.length, annotationSegment);

                // store replaced segments to use when setting position below
                annotationSegment._annotation = annotation;
                replacedSegments[annotation.id] = targets;
            }
        }

        let currentPosition = 0;
        let updatedSegments = [];
        for (let i=0, len=newSegments.length; i < len; i++) {
            let segment = newSegments[i];
            if (segment._annotation) {
                const deleted = (segment.text.length == 0);
                const replaced = replacedSegments[segment._annotation.id];
                if (replaced) {
                    for (let j=0; j < replaced.length; j++) {
                        let replacedSeg = replaced[j];
                        for (let k=0; k < replacedSeg.length; k++) {
                            this._segmentPositions[replacedSeg.start + k] = [currentPosition, deleted];
                        }
                    }
                }
            } else {
                const segmentPos = segment.start;
                for (let j = 0; j < segment.text.length; j++) {
                    this._segmentPositions[segmentPos + j] = [currentPosition + j, false];
                }
            }

            segment = new TextSegment(currentPosition, newSegments[i].text);
            updatedSegments.push(segment);
            currentPosition += segment.length;
        }

        return new SegmentedText(updatedSegments);
    }

    /**
     * Get the segment in the text that would have been at the given position
     * in the original text.
     *
     * If the segment was deleted rather than just replaced, it will
     * return a number, which is the position the segment would have been
     * at in the current text.
     *
     * @param {number} position
     * @returns {TextSegment|number|null}
     */
    segmentAtOriginalPosition(position) {
        const newText = this.segmentedText;
        const [ newPos, wasDeleted ] = this._segmentPositions[String(position)];
        if (newPos !== undefined) {
            if (wasDeleted) {
                return newPos;
            } else {
                return newText.segmentAtPosition(newPos);
            }
        } else {
            console.warn('Could not get segment at position: %d', position);
            return null;
        }
    }
}