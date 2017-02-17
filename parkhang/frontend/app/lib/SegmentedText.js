export default class SegmentedText {
    constructor(text, segments) {
        this.text = text;
        this.segments = segments;
        this._sortedSegments = null;
    }

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

    segmentAtPosition(position) {
        let foundSegment = false;
        for (let segment of this.segments) {
            const segmentEnd = segment.start + segment.text.length - 1;
            if ((segment.start <= position)
                && (segmentEnd >= position )) {
                foundSegment = segment;
                break;
            }
        }
        return foundSegment;
    }

    segmentsInRange(start, length) {
        let segments = [];
        const rangeEnd = start + length - 1;
        const sorted = this.sortedSegments();
        for (let segment of sorted) {
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
            )
            {
                segments.push(segment);
            }
        }

        return segments;
    }
}
