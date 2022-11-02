// @flow
import SegmentedText from "./SegmentedText";
import TextSegment from "./TextSegment";
// export default function segmentTibetanText(text: string): SegmentedText {
//     const breaks = "།།";
//     const spaces = "་་ \n";

//     let segments = [];
//     let currentSegment = "";
//     let currentStart = 0;
//     let inBreak = false;
//     let inSpace = false;
//     let count = 0;
//     let sharSpaceCount = 0;
//     for (let char of text) {
//         if (breaks.includes(char)) {
//             if (count > 0) {
//                 const newSegment = new TextSegment(
//                     currentStart,
//                     currentSegment
//                 );
//                 segments.push(newSegment);
//             }
//             inBreak = true;
//             inSpace = false;
//             currentSegment = char;
//             currentStart = count;
//         } else if (spaces.includes(char)) {
//             if (inSpace) {
//                 currentSegment += char;
//             } else {
//                 if (count > 0) {
//                     const newSegment = new TextSegment(
//                         currentStart,
//                         currentSegment
//                     );
//                     segments.push(newSegment);
//                 }

//                 inBreak = false;
//                 inSpace = true;
//                 currentSegment = char;
//                 currentStart = count;
//             }
//         } else {
//             if (inSpace || inBreak) {
//                 if (count > 0) {
//                     const newSegment = new TextSegment(
//                         currentStart,
//                         currentSegment
//                     );
//                     segments.push(newSegment);
//                 }
//                 inBreak = false;
//                 inSpace = false;
//                 currentSegment = char;
//                 currentStart = count;
//             } else {
//                 currentSegment += char;
//             }
//         }

//         count++;
//     }

//     if (currentSegment) {
//         const newSegment = new TextSegment(currentStart, currentSegment);
//         segments.push(newSegment);
//     }
//     return new SegmentedText(segments);
// }

export default function segmentTibetanText(text: string): SegmentedText {
    const dot = "་";
    const breaker = "། །";
    const TopicBreaker = "།།";
    var symbol = "༄༄༅༅།";
    var space = " ";
    var newLine = "\n";
    var returnSegment = "\r";
    let currentSegment = "";
    let currentStart = 0;
    let count = 0;
    let textSplitData = text.split(dot);
    let segments = [];
    textSplitData.forEach((text, index) => {
        count = index;
        var temp = text;
        if (text.includes(newLine)) {
            let splitArrayWithNewLine = text.split(newLine);
            if (splitArrayWithNewLine.some((l) => l.includes(returnSegment))) {
                splitArrayWithNewLine = splitArrayWithNewLine.map((l) =>
                    l.replace(returnSegment, "")
                );
            }
            splitArrayWithNewLine.forEach((l, index) => {
                let currentSegment = l;
                var newSegment = new TextSegment(currentStart, currentSegment);
                segments.push(newSegment);
                currentStart += currentSegment.length;
                if (index === 1) {
                    newSegment = new TextSegment(currentStart, dot);
                    segments.push(newSegment);
                    currentStart += 1;
                }
            });
        } else if (text.includes(breaker)) {
            let splitWord = text.split(breaker);
            let newSplit = [];

            splitWord[2] = splitWord[1];
            splitWord[1] = breaker;
            if (splitWord[0].includes(TopicBreaker)) {
                newSplit = splitWord[0].split(TopicBreaker);
                newSplit[2] = newSplit[1];
                newSplit[1] = TopicBreaker;
                newSplit.forEach((l) => {
                    var currentSegment = l;
                    var newSegment = new TextSegment(
                        currentStart,
                        currentSegment
                    );
                    segments.push(newSegment);
                    currentStart += currentSegment.length;
                });
                splitWord.shift();
                splitWord[2] = dot;
            }
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

                        if (
                            !symbol.includes(currentSegment) &&
                            currentSegment !== dot
                        ) {
                            newSegment = new TextSegment(currentStart, dot);
                            segments.push(newSegment);
                            currentStart += 1;
                        }
                    } else {
                        var currentSegment = l;
                        var newSegment = new TextSegment(
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

const text1 = "བར་བྱ་བ་ཡིན་པས།\nབདེ་གཤེགས་ཞེས་བྱ་བ་ལ་སོགས་པ་སྨོས་པ་ཡིན་ཏེ།";
console.log(segmentTibetanText(text1));
