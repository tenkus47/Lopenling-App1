// @flow
import Annotation, { ANNOTATION_TYPES } from 'lib/Annotation'
import SegmentedText from 'lib/SegmentedText'
import TextSegment from 'lib/TextSegment'
import Witness from 'lib/Witness'
import _ from 'lodash'

export const BASE_ANNOTATION_ID = -1;
export const WORKING_VERSION_ANNOTATION_ID = -2;

export const INSERTION_KEY = 'i';
export const DELETION_KEY = 'd';

type Segmenter = (content: string) => TextSegment[];

export default class AnnotatedText {
    originalText: SegmentedText;
    segmenter: Segmenter | null;
    baseWitness: Witness;
    activeWitness: Witness | null;
    _generatedText: SegmentedText | null;
    _orginalCurrentSegmentPositions: {[position: string]: [number, boolean]};
    _currentOriginalSegmentPositions: {[position: number]: number};
    annotations: Annotation[];
    _annotationsByType: {[string]: Annotation[]};

    /**
     *
     * @param originalText -
     * @param [annotations]
     * @param {segmenter} [segmenter] - segments strings into TextSegments
     * @param {Witness} [baseWitness] - witness this text is originally based on
     * @param {Witness} [activeWitness] - witness this text is representing
     */
    constructor(originalText: SegmentedText, annotations: Annotation[]=[], segmenter: Segmenter|null=null, baseWitness: Witness, activeWitness: Witness|null=null) {
        this.originalText = originalText;
        this.segmenter = segmenter;
        this.baseWitness = baseWitness;
        this.activeWitness = (activeWitness) ? activeWitness : baseWitness;
        /** @type {SegmentedText} */
        this._generatedText = null;
        this._orginalCurrentSegmentPositions = {};
        this._currentOriginalSegmentPositions = {};
        this.annotations = [];
        this._annotationsByType = {};
        for (let i=0; i < annotations.length; i++) {
            this.addAnnotation(annotations[i]);
        }
    }

    addAnnotation(annotation: Annotation) {
        if (this.annotations.indexOf(annotation) === -1) {
            this.annotations.push(annotation);
            this._generatedText = null;
            this._orginalCurrentSegmentPositions = {};
            this._currentOriginalSegmentPositions = {};
            if (!this._annotationsByType.hasOwnProperty(annotation.type)) {
                this._annotationsByType[annotation.type] = [];
            }
            this._annotationsByType[annotation.type].push(annotation);
        }
    }

    getAnnotationsOfType(type: string): Annotation[] | null {
        return this._annotationsByType[type];
    }

    get variants(): Annotation[] {
        let variants = this.getAnnotationsOfType(ANNOTATION_TYPES.variant);
        if (!variants) {
            variants = [];
        }
        return variants;
    }

    get segmentedText(): SegmentedText {
        if (!this._generatedText) {
            this._generatedText = this.generateText(this.originalText, this.variants);
        }

        return this._generatedText;
    }

    getText(): string {
        return this.segmentedText.getText();
    }

    annotationsForPosition(position: number): Annotation[] {
        this.segmentedText;
        return this.variants.filter((annotation) => {
            let start = annotation.start;
            let end = annotation.end;
            if (annotation.isInsertion) {
                start = String(start) + INSERTION_KEY;
                end = start;
            }
            if (!this._orginalCurrentSegmentPositions[String(start)]
                || !this._orginalCurrentSegmentPositions[String(end)]
            ) {
                return false;
            }
            let [currentStart] = this._orginalCurrentSegmentPositions[String(start)];
            let [currentEnd] = this._orginalCurrentSegmentPositions[String(end)];

            return (
                currentStart <= position && currentEnd >= position
            );
        });
    }

    /**
     * Return the starting position and length of the text segment that
     * this annotation would be contained in in the generated text.
     *
     * @return Array, first element is start, second is length
     */
    getPositionOfAnnotation(annotation: Annotation): [number|null, number|null] {
        // Make sure generateText has been called.
        // This ensures this._orginalCurrentSegmentPositions has been updated.
        this.segmentedText;

        let startKey = annotation.start;
        let isActive = _.some(this.variants, (a) => a.uniqueId == annotation.uniqueId);
        if (annotation.isInsertion) {
            // only use insertion key if it is an active annotation
            if (isActive) {
                startKey = String(annotation.start) + INSERTION_KEY;
            }
        }
        if (this._orginalCurrentSegmentPositions[String(startKey)] == undefined) {
            if (this.originalText.getText().length === annotation.start) {
                // if the annotation is an insertion at the end of the text
                return [this.getText().length, 0];
            } else {
                console.warn('Invalid annotation passed to getPositionOfAnnotation: %o', annotation);
                return [null, null];
            }
        }
        const [ startPos, startWasDeleted ] = this._orginalCurrentSegmentPositions[String(startKey)];
        let length = null;
        if (startWasDeleted) {
            length = 0;
        } else if (annotation.isInsertion && !isActive) {
            length = 0;
        } else {
            const startSegment = this.segmentedText.segmentAtPosition(startPos);
            let endSegment;
            if (isActive || annotation.id === WORKING_VERSION_ANNOTATION_ID) {
                endSegment = this.segmentedText.segmentAtPosition(startPos + annotation.content.length - 1);
            } else {
                endSegment = this.segmentAtOriginalPosition(annotation.end);
            }
            if (startSegment && endSegment && endSegment instanceof TextSegment) {
                length = startSegment.length;
                if (startSegment.end < endSegment.end) {
                    length = endSegment.start + endSegment.length - startSegment.start;
                }
            }

        }

        return [startPos, length];
    }

    /**
     * Get an annotation pointing to the original content that
     * the given positions refer to.
     */
    getBaseAnnotation(start: number, length: number): Annotation {
        this.segmentedText;
        let startPos = this._currentOriginalSegmentPositions[start];
        let origLength = 0;
        if (startPos === undefined) {
            // end of text insertion
            startPos = this.originalText.getText().length;
            origLength = 0;
        } else if (length === 0) {
            let annotations = this.annotationsForPosition(start);
            if (annotations.length > 0) {
                let annotation = annotations[0];
                if (annotation.isDeletion) {
                    startPos = annotation.start;
                    origLength = annotation.length;
                } else {
                    // Assuming we are getting this for an insertion, so want to get
                    // the original starting position.
                    startPos = this._currentOriginalSegmentPositions[start];
                }
            } else {
                startPos = this._currentOriginalSegmentPositions[start];
            }
        } else {
            for (let i=start; i < start+length; i++) {
                let annotations = this.annotationsForPosition(i);
                if (annotations.length > 0) {
                    let annotation = annotations[0];
                    if (i === start) {
                        if (annotation.isDeletion) {
                            startPos = annotation.start + annotation.length;
                        } else {
                            startPos = annotation.start;
                        }
                    } else {
                        // Only add deletion length if not at the start.
                        // Otherwise, it is assumed to be immediately before
                        // the requested position.
                        if (annotation.isDeletion) {
                            origLength += annotation.length;
                        }
                    }
                    if (annotation.isDeletion) {
                        origLength++;
                    } else {
                        origLength += annotation.length;
                        i += annotation.content.length - 1;
                    }
                } else {
                    if (i === start) {
                        startPos = this._currentOriginalSegmentPositions[i];
                    }
                    origLength++;
                }
            }
        }
        let content = "";
        if (origLength > 0) {
            let segments = this.originalText.segmentsInRange(startPos, origLength);
            content = segments.reduce((content, segment) => {
                return content + segment.text;
            }, "");
        }
        if (origLength !== content.length) {
            console.warn('Base annotations has different content length to length');
        }
        let annotation = new Annotation(
            BASE_ANNOTATION_ID,
            this.baseWitness,
            startPos,
            origLength,
            content,
            ANNOTATION_TYPES.variant,
            this.baseWitness
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
    segmentsForAnnotation(annotation: Annotation): Array<TextSegment|number> {
        let segments = [];
        let isActive = false;
        if (_.some(this.variants, (active) => annotation.uniqueId == active.uniqueId)) {
            isActive = true;
        }

        if (isActive) {
            let key = annotation.start;
            if (annotation.isInsertion) {
                key += INSERTION_KEY;
            }
            let [ start, deleted ] = this._orginalCurrentSegmentPositions[String(key)];
            let end = start + annotation.content.length;
            for (let i=start; i < end; i++) {
                let segment = this.segmentedText.segmentAtPosition(i);
                if (segment && segments.indexOf(segment) == -1) {
                    segments.push(segment);
                }
            }
        } else {
            let start = annotation.start;
            let end = annotation.end;

            for (let i=start; i <= end; i++) {
                let segment = null;
                let [ pos, deleted ] = this._orginalCurrentSegmentPositions[String(i)];

                if (deleted) {
                    segment = pos;
                } else {
                    segment = this.segmentedText.segmentAtPosition(pos);
                }

                if (segment && segments.indexOf(segment) == -1) {
                    segments.push(segment);
                }
            }
        }

        return segments;
    }

    originalSegmentsForAnnotation(annotation: Annotation): TextSegment[] {
        return this.originalText.segmentsInRange(annotation.start, annotation.length);
    }

    /**
     * Generate a new SegmentedText with the given annotations.
     */
    generateText(text: SegmentedText, annotations: Annotation[]): SegmentedText {
        const segments = text.sortedSegments();
        let newSegments = segments.slice();
        let replacedSegments = {};

        // create new segments for annotation
        const createSegments = (annotation, start) => {
            const deleted = (annotation.content.length === 0);
            let segments = [];
            if (this.segmenter !== null && !deleted) {
                let annotationSegments = this.segmenter(annotation.content);
                let annoSegStart = start;
                for (let j=0; j < annotationSegments.length; j++) {
                    let annotationSegment = annotationSegments[j];
                    annotationSegment.start = annoSegStart;
                    annotationSegment._annotation = annotation;
                    annoSegStart += annotationSegment.text.length;
                }
                segments = annotationSegments;
            } else {
                let annotationSegment = new TextSegment(start, annotation.content);
                annotationSegment._annotation = annotation;
                segments = [annotationSegment];
            }
            return segments;
        };

        for (let i=0, len=annotations.length; i < len; i++) {
            let annotation = annotations[i];
            let targets = text.segmentsInRange(annotation.start, annotation.length);
            if (targets.length > 0) {
                let start = targets[0].start;
                let firstIndex = newSegments.indexOf(targets[0]);
                if (firstIndex === -1) {
                    let found = newSegments.filter(seg => seg.start === targets[0].start);
                    if (found) {
                        firstIndex = newSegments.indexOf(found[0]);
                    }
                }

                const segments = createSegments(annotation, start);
                if (annotation.isInsertion) {
                    newSegments.splice(firstIndex, 0, ...segments);
                } else {
                    newSegments.splice(firstIndex, targets.length, ...segments);
                }

                // store replaced segments to use when setting position below
                if (!annotation.isInsertion) {
                    replacedSegments[annotation.uniqueId] = targets;
                }
            } else {
                // Assume insertion at end of text, otherwise a target segment would exist
                const segments = createSegments(annotation, annotation.start);
                newSegments = newSegments.concat(segments);
                if (!annotation.isInsertion) {
                    console.warn('Annotation with missing text segments that is not an insertion: %o', annotation);
                }
            }
        }

        let processedSegmentAnnotations = {};
        let currentPosition = 0;
        let updatedSegments = [];
        for (let i=0, len=newSegments.length; i < len; i++) {
            let segment = newSegments[i];
            if (segment._annotation) {
                const annotation = segment._annotation;
                const deleted = (segment.text.length == 0);
                const replaced = replacedSegments[annotation.uniqueId];
                const alreadyProcessed = (processedSegmentAnnotations[segment._annotation.uniqueId]) ? true : false;

                if (!alreadyProcessed && annotation.isInsertion) {
                    this._orginalCurrentSegmentPositions[String(segment.start) + INSERTION_KEY] = [currentPosition, deleted];
                    for (let j = 0; j < annotation.content.length; j++) {
                        this._currentOriginalSegmentPositions[currentPosition + j] = segment.start;
                    }
                } else if (!alreadyProcessed && replaced) {
                    const firstReplacedSeg = replaced[0];
                    const replacedLength = replaced.reduce((length, seg) => length + seg.length, 0);
                    for (let j = 0; j < replacedLength; j++) {
                        this._orginalCurrentSegmentPositions[String(segment.start + j)] = [currentPosition, deleted];
                    }
                    for (let m = 0; m < annotation.content.length; m++) {
                        this._currentOriginalSegmentPositions[currentPosition + m] = firstReplacedSeg.start;
                    }
                }
                processedSegmentAnnotations[annotation.uniqueId] = true;
            } else {
                const segmentPos = segment.start;
                for (let j = 0; j < segment.text.length; j++) {
                    this._orginalCurrentSegmentPositions[String(segmentPos + j)] = [currentPosition + j, false];
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
     */
    segmentAtOriginalPosition(position: number): TextSegment | number | null {
        const newText = this.segmentedText;
        let newPos, wasDeleted;
        try {
            [ newPos, wasDeleted ] = this._orginalCurrentSegmentPositions[String(position)];
        } catch (e) {
            console.warn('Error getting _orginalCurrentSegmentPositions, position: %o', position);
            //debugger;
            return null;
        }

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
     * @param Position in the current version
     * @return {TextSegment|null}
     */
    originalSegmentAtPosition(position: number) {
        const pos = this._currentOriginalSegmentPositions[position];
        if (pos !== undefined) {
            return this.originalText.segmentAtPosition(pos);
        } else {
            return null;
        }
    }
}