import SegmentedTextHtml from './SegmentedTextHtml'
import segmentTibetanText from 'lib/segmentTibetanText'

const text = "༄༅། །ཐེག་པ་ཆེན་པོ་ཉི་ཤུ་པ།";

const segments = [
    {
        text: "༄༅།",
        start: 0,
        length: 3
    },
    {
        text: " ",
        start: 3,
        length: 1
    },
    {
        text: "།",
        start: 4,
        length: 1
    },
    {
        text: "ཐེག",
        start: 5,
        length: 3
    },
    {
        text: "་",
        start: 8,
        length: 1
    },
    {
        text: "པ",
        start: 9,
        length: 1
    },
    {
        text: "་",
        start: 10,
        length: 1
    },
    {
        text: "ཆེན",
        start: 11,
        length: 3
    },
    {
        text: "་",
        start: 14,
        length: 1
    },
    {
        text: "པོ",
        start: 15,
        length: 2
    },
    {
        text: "་",
        start: 17,
        length: 1
    },
    {
        text: "ཉི",
        start: 18,
        length: 2
    },
    {
        text: "་",
        start: 20,
        length: 1
    },
    {
        text: "ཤུ",
        start: 21,
        length: 2
    },
    {
        text: "་",
        start: 23,
        length: 1
    },
    {
        text: "པ",
        start: 24,
        length: 1
    },
    {
        text: "།",
        start: 25,
        length: 1
    }
];

describe('SegmentedTextHtml', () => {
    const segmentedText = segmentTibetanText(text);
    const segmentedTextHtml = new SegmentedTextHtml(segmentedText);

    const expectedHtml = '<span id="s_0">༄༅།</span><span id="s_3"> </span><span id="s_4">།</span><span id="s_5">ཐེག</span><span id="s_8">་</span><span id="s_9">པ</span><span id="s_10">་</span><span id="s_11">ཆེན</span><span id="s_14">་</span><span id="s_15">པོ</span><span id="s_17">་</span><span id="s_18">ཉི</span><span id="s_20">་</span><span id="s_21">ཤུ</span><span id="s_23">་</span><span id="s_24">པ</span><span id="s_25">།</span>';

    it('should return the correct html', () => {
        expect(
            segmentedTextHtml.html()
        ).toEqual(expectedHtml);
    });

    it('should return the correct segmentId for the given position', () => {
        expect(
            segmentedTextHtml.segmentIdAtPosition(12)
        ).toEqual('s_11');
    });

    it('should get the correct segmentIds for the given range', () => {
        const expectedIds = ['s_11', 's_14', 's_15'];

        expect(
            segmentedTextHtml.segmentIdsInRange(12, 5)
        ).toEqual(expectedIds);
    });
});