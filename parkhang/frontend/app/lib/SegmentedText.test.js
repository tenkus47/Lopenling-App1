import SegmentedText from './SegmentedText'

const text = "༄༅། །ཐེག་པ་ཆེན་པོ་ཉི་ཤུ་པ།༄༅༅། །རྒྱ་གར་སྐད་དུ།";

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
        text: "།༄༅༅།",
        start: 25,
        length: 5
    },
    {
        text: " ",
        start: 30,
        length: 1
    },
    {
        text: "།",
        start: 31,
        length: 1
    },
    {
        text: "རྒྱ",
        start: 32,
        length: 3
    },
    {
        text: "་",
        start: 35,
        length: 1
    },
    {
        text: "གར",
        start: 36,
        length: 2
    },
    {
        text: "་",
        start: 38,
        length: 1
    },
    {
        text: "སྐད",
        start: 39,
        length: 3
    },
    {
        text: "་",
        start: 42,
        length: 1
    },
    {
        text: "དུ",
        start: 43,
        length: 2
    },
    {
        text: "།",
        start: 45,
        length: 1
    }
];

describe('SegmentedText', () => {

    const segmentedText = new SegmentedText(text, segments);

    it('should return segments', () => {
        expect(
            segmentedText.segments
        ).toEqual(segments);
    });

    it('should return the correct segment for the given position', () => {
        const expectedSegment = {
            text: "ཆེན",
            start: 11,
            length: 3
        };

        expect(
            segmentedText.segmentAtPosition(11)
        ).toEqual(expectedSegment);

        expect(
            segmentedText.segmentAtPosition(12)
        ).toEqual(expectedSegment);

        expect(
            segmentedText.segmentAtPosition(13)
        ).toEqual(expectedSegment);

        expect(
            segmentedText.segmentAtPosition(14)
        ).not.toEqual(expectedSegment);

        expect(
            segmentedText.segmentAtPosition(198)
        ).toEqual(false);
    });

    it('should return the correct segments for the given range', () => {
        const expectedSegments = [
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
            }
        ];

        expect(
            segmentedText.segmentsInRange(1, 6)
        ).toEqual(expectedSegments);

        expect(
            segmentedText.segmentsInRange(0, 8)
        ).toEqual(expectedSegments);

        expect(
            segmentedText.segmentsInRange(1, 1)
        ).toEqual([expectedSegments[0]]);

        expect(
            segmentedText.segmentsInRange(4, 1)
        ).toEqual([expectedSegments[2]]);

        expect(
            segmentedText.segmentsInRange(8, 3)
        ).not.toEqual([expectedSegments[0]]);

    })
});