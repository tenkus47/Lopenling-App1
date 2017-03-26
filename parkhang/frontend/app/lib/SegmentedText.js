import TextSegment from './TextSegment'

export default class SegmentedText {

    /**
     *
     * @param {TextSegment[]} segments - Array of TextSegments
     */
    constructor(segments) {
        this.segments = segments;
        this._sortedSegments = null;
        this._sortedText = null;
    }

    /**
     * Combine all the text's segments into a string.
     *
     * @returns {string}
     */
    getText() {
        if (this._sortedText == null) {
            let sorted = this.sortedSegments();
            let text = "";
            for(let i=0; i < sorted.length; i++) {
                text += sorted[i].text;
            }
            this._sortedText = text;
        }
        return this._sortedText;
    }

    /**
     * Get the texts segments sorted by start position.
     *
     * @returns {TextSegment[]|null}
     */
    sortedSegments() {
        if (!this._sortedSegments) {
            this._sortedSegments = Object.assign([], this.segments);
            this._sortedSegments.sort((a, b) => {
                let res = a.start - b.start;
                if (res == 0) {
                    // shorter segments should come first
                    res = a.length - b.length;
                }

                return res;
            });
        }

        return this._sortedSegments;
    }

    /**
     * Return the index of the sorted segment at the given position.
     *
     * Intended to be used privately by internal methods.
     *
     * @param {number} position
     * @return {number} 0 or greater if a segment if found; -1 if not found.
     */
    indexOfSortedSegmentAtPosition(position) {
        let foundSegmentIndex = -1;

        const segments = this.sortedSegments();
        let minIndex = 0;
        let maxIndex = segments.length - 1;
        let currentIndex;
        let currentSegment;

        while(minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentSegment = segments[currentIndex];
            const segmentEnd = currentSegment.start + currentSegment.text.length - 1;
            if (segmentEnd < position) {
                minIndex = currentIndex + 1;
            } else if (currentSegment.start > position) {
                maxIndex = currentIndex - 1;
            } else {
                return currentIndex;
            }
        }

        return foundSegmentIndex;
    }

    /**
     * Get the TextSegment at the given position in the text.
     *
     * @param {number} position
     * @returns {TextSegment|null}
     */
    segmentAtPosition(position) {
        let foundSegment = null;
        let segmentIndex = this.indexOfSortedSegmentAtPosition(position);
        if (segmentIndex > -1) {
            foundSegment = this.sortedSegments()[segmentIndex];
        }
        return foundSegment;
    }

    /**
     * Get TextSegments within the given range of characters in the text.
     *
     * @param {number} start
     * @param {number} length
     * @returns {TextSegment[]}
     */
    segmentsInRange(start, length) {
        let segments = [];
        let rangeEnd;
        if (length == 0) {
            rangeEnd = start;
        } else {
            rangeEnd = start + length - 1;
        }

        const sorted = this.sortedSegments();
        const firstSegmentIndex = this.indexOfSortedSegmentAtPosition(start);
        if (firstSegmentIndex > -1) {
            for (let i = firstSegmentIndex; i < sorted.length; i++) {
                let segment = sorted[i];
                const segmentEnd = segment.start + segment.text.length - 1;

                if (
                    (segment.start <= start
                    && segmentEnd >= start
                    && segmentEnd <= rangeEnd)
                    ||
                    (segment.start >= start
                        && segmentEnd <= rangeEnd
                    )
                    ||
                    (segment.start <= rangeEnd
                        && segmentEnd >= rangeEnd
                    )
                ) {
                    segments.push(segment);
                } else {
                    break;
                }
            }
        }

        return segments;
    }
}
