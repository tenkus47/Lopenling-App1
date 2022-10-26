// @flow
import SegmentedText from "./SegmentedText";
import TextSegment from "./TextSegment";

export default function segmentTibetanText(text: string): SegmentedText {
    const dot = "་";
    const breaker = "། །";
    let currentStart = 0;
    let count = 0;
    let textSplitData = text.split(dot);
    let r = [];
    let segmented = [];
    textSplitData.forEach((text, index) => {
        count = index;
        var datad = text;
        if (text.includes(breaker)) {
            r = text.split(breaker);
            r[0] += breaker;
            if (r.length > 1) {
                r.forEach((l, index) => {
                    var currentSegment = index !== 0 ? l + dot : l;
                    const newSegment = new TextSegment(
                        currentStart,
                        currentSegment
                    );

                    segmented.push(newSegment);
                    currentStart += currentSegment.length;
                });
            }
        } else {
            var currentSegment = datad + dot;
            const newSegment = new TextSegment(currentStart, currentSegment);

            segmented.push(newSegment);
            currentStart += currentSegment.length;
        }
    });
    return new SegmentedText(segmented);
}
