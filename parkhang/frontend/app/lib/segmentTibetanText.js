// @flow
import SegmentedText from "./SegmentedText";
import TextSegment from "./TextSegment";

export default function segmentTibetanText(text: string): SegmentedText {
    const dot = "་";
    const breaker = "། །";
    const TopicBreaker = "།།";
    var symbol = "༄༄༅༅།";
    var space = " ";
    let currentSegment = "";
    let currentStart = 0;
    let count = 0;
    let textSplitData = text.split(dot);
    let segments = [];
    textSplitData.forEach((text, index) => {
        count = index;
        var temp = text;
        if (text.includes(breaker)) {
            let splitWord = text.split(breaker);

            splitWord[2] = splitWord[1];
            splitWord[1] = breaker;
            if (splitWord.length > 1) {
                splitWord.forEach((l, index) => {
                    if (index === 2) {
                        var currentSegment = l;
                        var newSegment = new TextSegment(
                            currentStart,
                            currentSegment
                        );
                        segments.push(newSegment);
                        currentStart += currentSegment.length;

                        if (!symbol.includes(currentSegment)) {
                            newSegment = new TextSegment(currentStart, dot);
                            segments.push(newSegment);
                            currentStart += 1;
                        }
                    } else {
                        var currentSegment = l;
                        const newSegment = new TextSegment(
                            currentStart,
                            currentSegment
                        );

                        segments.push(newSegment);
                        currentStart += currentSegment.length;
                    }
                });
            }
        } else if (text.includes(space)) {
            let segmentArray = text.split(" ");
            if (segmentArray[1].includes(symbol)) {
                var temp = segmentArray[1];
                segmentArray[1] = " །";
                segmentArray[2] = temp;
            } else {
                var temp = segmentArray[1];
                segmentArray[1] = " ";
                segmentArray[2] = temp;
            }

            segmentArray.forEach((word, index) => {
                if (index === 2) {
                    var currentSegment = word.replace(symbol, "");
                    var newSegment = new TextSegment(
                        currentStart,
                        currentSegment
                    );
                    segments.push(newSegment);
                    currentStart += currentSegment.length;
                    newSegment = new TextSegment(currentStart, dot);
                    segments.push(newSegment);
                    currentStart += 1;
                } else {
                    var currentSegment = word;
                    const newSegment = new TextSegment(
                        currentStart,
                        currentSegment
                    );

                    segments.push(newSegment);
                    currentStart += currentSegment.length;
                }
            });
        } else if (text.includes(TopicBreaker)) {
            let splitWord = text.split(TopicBreaker);
            splitWord[2] = splitWord[1];
            splitWord[1] = TopicBreaker;
            if (splitWord.length > 1) {
                splitWord.forEach((l, index) => {
                    if (index === 2) {
                        var currentSegment = l;
                        var newSegment = new TextSegment(
                            currentStart,
                            currentSegment
                        );
                        segments.push(newSegment);
                        currentStart += currentSegment.length;

                        if (!symbol.includes(currentSegment)) {
                            newSegment = new TextSegment(currentStart, dot);
                            segments.push(newSegment);
                            currentStart += 1;
                        }
                    } else {
                        var currentSegment = l;
                        const newSegment = new TextSegment(
                            currentStart,
                            currentSegment
                        );

                        segments.push(newSegment);
                        currentStart += currentSegment.length;
                    }
                });
            }
        } else {
            var currentSegment = temp;
            var newSegment = new TextSegment(currentStart, currentSegment);
            segments.push(newSegment);
            currentStart += currentSegment.length;
            if (textSplitData.length > 100) {
                //only add dot on first text load
                newSegment = new TextSegment(currentStart, dot);
                segments.push(newSegment);
                currentStart += 1;
            }
        }
    });
    if (currentSegment) {
        const newSegment = new TextSegment(currentStart, currentSegment);
        segments.push(newSegment);
    }
    return new SegmentedText(segments);
}
