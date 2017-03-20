import Annotation from './Annotation'
import SegmentedText from './SegmentedText'
import TextSegment from './TextSegment'
import _ from 'Lodash'

export const BASE_ANNOTATION_ID = -1;

const INSERTION_KEY = 'i';

export default class AnnotatedText {

    /**
     *
     * @param {SegmentedText} originalText
     * @param {Annotation[]} [annotations]
     */
    constructor(originalText, annotations=[], segmenter=null, baseWitness=null, annotationPositions=null) {
        this.originalText = originalText;
        this.annotations = annotations;
        this.segmenter = segmenter;
        this.baseWitness = baseWitness;
        this.annotationPositions = annotationPositions;
        /** @type {SegmentedText} */
        this._generatedText = null;
        this._orginalCurrentSegmentPositions = {};
        this._currentOriginalSegmentPositions = {};
    }

    addAnnotation(annotation) {
        if (this.annotations.indexOf(annotation) == -1) {
            this.annotations.push(annotation);
            this._generatedText = null;
            this._orginalCurrentSegmentPositions = {};
            this._currentOriginalSegmentPositions = {};
        }
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

    annotationsForSegment(segment) {
        let annotations = [];
        for (var i=0; i < this.annotations; i++) {
            const annotation = this.annotations[i];
            if (segment.start >= annotation.start && segment.end <= annotation.end) {
                annotations.push(annotation);
            }
        }

        return annotations;
    }

    annotationsForPosition(position) {
        return this.annotations.filter((annotation) => {
            let start = annotation.start;
            let end = annotation.end;
            if (annotation.isInsertion) {
                start = String(start) + INSERTION_KEY;
                end = start;
            }
            let [currentStart] = this._orginalCurrentSegmentPositions[start];
            let [currentEnd] = this._orginalCurrentSegmentPositions[end];

            return (
                currentStart <= position && currentEnd >= position
            );
        });
    }

    /**
     * Return the starting position and length of the text segment that
     * this annotation would be contained in in the generated text.
     *
     * @param annotation
     * @return {*}
     */
    getPositionOfAnnotation(annotation) {
        this.segmentedText;
        let startKey = annotation.start;
        let isActive = _.some(this.annotations, (a) => a.id == annotation.id);
        if (annotation.isInsertion) {
            // only use isnertion key if it is an active annotation
            if (isActive) {
                startKey = String(annotation.start) + INSERTION_KEY;
            }
        }
        if (this._orginalCurrentSegmentPositions[startKey] == undefined) {
            if (this.originalText.getText().length == annotation.start) {
                return [annotation.start, 0];
            } else {
                return [null, null];
            }
        }
        const [ startPos, startWasDeleted ] = this._orginalCurrentSegmentPositions[startKey];

        let length = null;
        if (startWasDeleted) {
            length = 0;
        } else {
            const startSegment = this.segmentedText.segmentAtPosition(startPos);
            let endSegment = null;
            if (isActive) {
                endSegment = this.segmentedText.segmentAtPosition(startPos + annotation.content.length - 1);
            } else {
                endSegment = this.segmentedText.segmentAtPosition(startPos + annotation.length - 1);
            }
            length = startSegment.length;
            if (startSegment.end < endSegment.end) {
                length = endSegment.start + endSegment.length - startSegment.start;
            }

        }

        return [startPos, length];
    }

    /**
     * Get an annotation pointing to the original content that
     * the given positions refer to.
     *
     * @param {number} start
     * @param {number} length
     * @return {Annotation}
     */
    getBaseAnnotation(start, length) {
        let activeAnnotations = this.annotationsForPosition(start);
        let startPos = this._currentOriginalSegmentPositions[start];
        let endPos = this._currentOriginalSegmentPositions[start+length];
        let origLength = endPos - startPos;
        let activeAnnotation = null;
        if (activeAnnotations.length > 0) {
            activeAnnotation = activeAnnotations[0];
            startPos = activeAnnotation.start;
            origLength = activeAnnotation.length;
        }

        let content = "";
        if (length == 0 || (activeAnnotation && activeAnnotation.isInsertion)) {
            origLength = 0;
        } else {
            let segments = this.originalText.segmentsInRange(startPos, origLength);
            content = segments.reduce((content, segment) => {
                return content + segment.text;
            }, "");
        }
        let annotation = new Annotation(
            BASE_ANNOTATION_ID,
            this.baseWitness,
            startPos,
            origLength,
            content,
            this.baseWitness,
            false
        );

        return annotation;
    }

    /**
     * Return segments for the given annotation in the current version of the text
     *
     * The annotation should be referring to positions in the base text.
     *
     * @param {Annotation} annotation
     * @return {TextSegment|number[]}
     */
    segmentsForAnnotation(annotation) {
        let segments = [];
        let isActive = false;
        if (_.some(this.annotations, (active) => annotation.id == active.id)) {
            isActive = true;
        }

        if (isActive) {
            let key = annotation.start;
            if (annotation.isInsertion) {
                key += INSERTION_KEY;
            }
            let [ start, deleted ] = this._orginalCurrentSegmentPositions[key];
            let end = start + annotation.content.length;
            for (let i=start; i < end; i++) {
                let segment = this.segmentedText.segmentAtPosition(i);
                if (segments.indexOf(segment) == -1) {
                    segments.push(segment);
                }
            }
        } else {
            let start = annotation.start;
            let end = annotation.end;

            for (let i=start; i <= end; i++) {
                let segment = null;
                let [ pos, deleted ] = this._orginalCurrentSegmentPositions[i];

                if (deleted) {
                    segment = pos;
                } else {
                    segment = this.segmentedText.segmentAtPosition(pos);
                }

                if (segments.indexOf(segment) == -1) {
                    segments.push(segment);
                }
            }
        }

        return segments;
    }

    originalSegmentsForAnnotation(annotation) {
        return this.originalText.segmentsInRange(annotation.start, annotation.length);
    }

    /**
     * Generate a new SegmentedText with the given annotations.
     *
     * @param {SegmentedText} text
     * @param {Annotation[]} annotations
     * @return {SegmentedText}
     */
    generateText(text, annotations) {
        const segments = text.sortedSegments();
        let newSegments = segments.slice();
        let replacedSegments = {};
        for (let i=0, len=annotations.length; i < len; i++) {
            let annotation = annotations[i];
            let targets = text.segmentsInRange(annotation.start, annotation.length);
            if (targets.length > 0) {
                let start = targets[0].start;
                let firstIndex = newSegments.indexOf(targets[0]);
                const deleted = (annotation.content.length == 0);
                if (this.segmenter != null && !deleted) {
                    let annotationSegments = this.segmenter(annotation.content);
                    let annoSegStart = start;
                    for (let j=0; j < annotationSegments.length; j++) {
                        let annotationSegment = annotationSegments[j];
                        annotationSegment.start = annoSegStart;
                        annotationSegment._annotation = annotation;
                        annoSegStart += annotationSegment.text.length;
                    }
                    if (annotation.isInsertion) {
                        newSegments.splice(firstIndex, 0, ...annotationSegments);
                    } else {
                        newSegments.splice(firstIndex, targets.length, ...annotationSegments);
                    }
                } else {
                    let annotationSegment = new TextSegment(start, annotation.content);
                    annotationSegment._annotation = annotation;
                    if (annotation.isInsertion) {
                        newSegments.splice(firstIndex, 0, annotationSegment);
                    } else {
                        newSegments.splice(firstIndex, targets.length, annotationSegment);
                    }
                }

                // store replaced segments to use when setting position below
                if (!annotation.isInsertion) {
                    replacedSegments[annotation.id] = targets;
                }
            }
        }

        let processedSegmentAnnotations = [];
        let currentPosition = 0;
        let updatedSegments = [];
        for (let i=0, len=newSegments.length; i < len; i++) {
            let segment = newSegments[i];
            if (segment._annotation
                && processedSegmentAnnotations[segment._annotation.id] === undefined)
            {
                const deleted = (segment.text.length == 0);
                const replaced = replacedSegments[segment._annotation.id];
                if (segment._annotation.isInsertion) {
                    this._orginalCurrentSegmentPositions[String(segment.start) + INSERTION_KEY] = [currentPosition, deleted];
                    processedSegmentAnnotations[segment._annotation.id] = true;
                } else if (replaced) {
                    for (let j=0; j < replaced.length; j++) {
                        let replacedSeg = replaced[j];
                        for (let k=0; k < replacedSeg.length; k++) {
                            this._orginalCurrentSegmentPositions[replacedSeg.start + k] = [currentPosition, deleted];
                            this._currentOriginalSegmentPositions[currentPosition] = replacedSeg.start + k;
                        }
                    }
                }
                processedSegmentAnnotations[segment._annotation.id] = true;
            } else {
                const segmentPos = segment.start;
                for (let j = 0; j < segment.text.length; j++) {
                    this._orginalCurrentSegmentPositions[segmentPos + j] = [currentPosition + j, false];
                    this._currentOriginalSegmentPositions[currentPosition + j] = segmentPos + j;
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
        const [ newPos, wasDeleted ] = this._orginalCurrentSegmentPositions[String(position)];
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

    /**
     * Get the segment of the text from the original version that
     * corresponds to the given position in the current version.
     *
     * @param {number} position - Position in the current version
     * @return {TextSegment|null}
     */
    originalSegmentAtPosition(position) {
        const pos = this._currentOriginalSegmentPositions[position];
        if (pos !== undefined) {
            return this.originalText.segmentAtPosition(pos);
        } else {
            return null;
        }
    }
}