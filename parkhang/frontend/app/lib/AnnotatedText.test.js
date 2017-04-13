import AnnotatedText, { BASE_ANNOTATION_ID, WORKING_VERSION_ANNOTATION_ID } from './AnnotatedText'
import Annotation from './Annotation'
import Source from './Source'
import Text from './Text'
import Witness from './Witness'
import TextSegment from './TextSegment'
import User, { getAnonymousUser } from 'lib/User'
import segmentTibetanText from './segmentTibetanText'

const baseTextContent = "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";

const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");

const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");

const baseWitness = new Witness(1, text, source1, baseTextContent, true);
const otherWitness = new Witness(2, text, source2);

const annotations = [
    new Annotation(1, baseWitness, 0,  27, "༄༅༅", otherWitness),
    new Annotation(2, baseWitness, 45, 5,  "ས",    otherWitness),
    new Annotation(3, baseWitness, 57, 4,  "ཤྲི",    otherWitness),
    new Annotation(4, baseWitness, 78, 2,  "ན",    otherWitness),
    // below is gramatically incorrect but useful for testing a single char syllable replacement
    new Annotation(5, baseWitness, 204, 1,  "ན་ལ",  otherWitness),
    new Annotation(6, baseWitness, 256, 2,  "",    otherWitness),
    new Annotation(7, baseWitness, 268, 0,  "དང་",  otherWitness)
];

function segmenter(text) {
    return segmentTibetanText(text).sortedSegments();
}

describe('AnnotatedText', () => {

    const expectedTextContent = "༄༅༅། །རྒྱ་གར་སྐད་དུ། ས་པྲཛྙཱ་ཤྲི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ན་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ན་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་གསུས་ཁྱིམ་དང་ཡངས།";

    const segmentedText = segmentTibetanText(baseWitness.content);
    const annotatedText = new AnnotatedText(segmentedText, annotations, segmenter, baseWitness);

    test('Return the correct text', () => {
        expect(
            annotatedText.getText()
        ).toEqual(expectedTextContent);
    });

    test('Annotation content is segmented correctly', () => {
        const testSegment = new TextSegment(174, "ན");
        expect(
            annotatedText.segmentedText.segmentAtPosition(174)
        ).toEqual(testSegment);
    });

    test('Get segment at original position', () => {

        let testSegment = new TextSegment(224, "དྲག");
        expect(
           annotatedText.segmentAtOriginalPosition(252)
        ).toEqual(testSegment);

        expect(
           annotatedText.segmentAtOriginalPosition(253)
        ).toEqual(testSegment);

        testSegment = new TextSegment(0, "༄༅༅");
        expect(
           annotatedText.segmentAtOriginalPosition(5)
        ).toEqual(testSegment);

        expect(
           annotatedText.segmentAtOriginalPosition(256)
        ).toEqual(228);

        testSegment = new TextSegment(241, "ཡངས");
        expect(
            annotatedText.segmentAtOriginalPosition(268)
        ).toEqual(testSegment);
    });

    const noAnnotatedText = new AnnotatedText(segmentedText, []);
    test('Return the correct text when no annotation', () => {
        expect(
            noAnnotatedText.getText()
        ).toEqual(baseWitness.content);
    });

    test('Get correct segments for annotation', () => {
        let testAnnotation = new Annotation(4, baseWitness, 78, 2,  "ན", otherWitness);
        let testMissingAnnotation = new Annotation(27, baseWitness, 256, 7,  "ལ་གསུས་",    otherWitness);
        let testMissingAnnotationSingle = new Annotation(8, baseWitness, 256, 1,  "ལ",    otherWitness);
        let expectedSegment = new TextSegment(49, "ན");

        expect(
            annotatedText.segmentsForAnnotation(testAnnotation)
        ).toEqual([expectedSegment]);

        expect(
            annotatedText.segmentsForAnnotation(testMissingAnnotationSingle)
        ).toEqual([228]);

        let expectedPartialSegment = new TextSegment(228, "གསུས");
        let expectedPartialSegmentSpace = new TextSegment(232, "་");
        expect(
            annotatedText.segmentsForAnnotation(testMissingAnnotation)
        ).toEqual([228, expectedPartialSegment, expectedPartialSegmentSpace]);

        let deletedSegment = new TextSegment(228, "");
        expect(
            annotatedText.segmentedText.sortedSegments()
        ).toContainEqual(deletedSegment);

        let unchangedAnnotation = new Annotation(17, baseWitness, 223, 15, "", baseWitness);
        let unchangedSegments = [
            new TextSegment(195, "སྟབས"),
            new TextSegment(199, "་"),
            new TextSegment(200, "ཀྱིས"),
            new TextSegment(204, "་"),
            new TextSegment(205, "བཞུགས"),
        ];
        expect(
            annotatedText.segmentsForAnnotation(unchangedAnnotation)
        ).toEqual(unchangedSegments);

        let multipleAdded = new Annotation(5, baseWitness, 204, 1,  "ན་ལ",    otherWitness);
        let addedSegments = [
            new TextSegment(174, "ན"),
            new TextSegment(175, "་"),
            new TextSegment(176, "ལ"),
        ];
        expect(
            annotatedText.segmentsForAnnotation(multipleAdded)
        ).toEqual(addedSegments);

        let insertion = new Annotation(7, baseWitness, 268, 0,  "དང་",  otherWitness);
        let insertionSegment = new TextSegment(238, "དང");
        let insertionSegment2 = new TextSegment(240, "་");
        expect(
            annotatedText.segmentsForAnnotation(insertion)
        ).toEqual([insertionSegment, insertionSegment2]);

    });


    test('Get original segments from amended version', () => {
        let expectedSegment = new TextSegment(87, "བོད");
        expect(
            annotatedText.originalSegmentAtPosition(57)
        ).toEqual(expectedSegment);

        expectedSegment = new TextSegment(268, "ཡངས");
        expect(
            annotatedText.originalSegmentAtPosition(241)
        ).toEqual(expectedSegment);

        expect(
            annotatedText.originalSegmentAtPosition(1000)
        ).toEqual(null);
    });


    test('Get base annotation', () => {
       let expectedAnnotation = new Annotation(
           BASE_ANNOTATION_ID,
           annotatedText.baseWitness,
           99,
           3,
           "དཔལ",
           annotatedText.baseWitness,
           false
       );

        expect(
            annotatedText.getBaseAnnotation(69, 3)
        ).toEqual(expectedAnnotation);

        let expectedAdditionAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            0,
            27,
            "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅",
            annotatedText.baseWitness,
            false
        );

        expect(
          annotatedText.getBaseAnnotation(0, 3)
        ).toEqual(expectedAdditionAnnotation);

        let expectedInsertion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            268,
            0,
            "",
            annotatedText.baseWitness,
            false
        );

        expect(
            annotatedText.getBaseAnnotation(238, 3)
        ).toEqual(expectedInsertion);

        let expectedDeletion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            256,
            2,
            "ལ་",
            annotatedText.baseWitness,
            false
        );

        expect(
            annotatedText.getBaseAnnotation(228, 0)
        ).toEqual(expectedDeletion);

        let crossBoundaryAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            41,
            10,
            "དུ། སྟྲཱི་",
            annotatedText.baseWitness,
            false
        );

        expect(
            annotatedText.getBaseAnnotation(17, 6)
        ).toEqual(crossBoundaryAnnotation);

        let crossBoundaryAnnotationStart = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            45,
            17,
            "སྟྲཱི་པྲཛྙཱ་ཤྲཱི་",
            annotatedText.baseWitness,
            false
        );

        expect(
            annotatedText.getBaseAnnotation(21, 12)
        ).toEqual(crossBoundaryAnnotationStart);

        let includesDeletion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            248,
            15,
            "ཐུང་དྲག་ལ་གསུས་",
            annotatedText.baseWitness,
            false
        );

        expect(
            annotatedText.getBaseAnnotation(220, 13)
        ).toEqual(includesDeletion);

        // TODO: add test for annotation immediately after deletion

    });


    test('Annotations for position', () => {
        let expectedAnnotation1 = new Annotation(1, baseWitness, 0,  27, "༄༅༅", otherWitness);
        let expectedAnnotation3 = new Annotation(3, baseWitness, 57, 4,  "ཤྲི",    otherWitness);
        let expectedAnnotation5 = new Annotation(5, baseWitness, 204, 1,  "ན་ལ",    otherWitness);
        //let expectedAnnotation7 = new Annotation(7, baseWitness, 261, 1, "", otherWitness);

        expect(
            annotatedText.annotationsForPosition(0)
        ).toEqual([expectedAnnotation1]);

        expect(
            annotatedText.annotationsForPosition(29)
        ).toEqual([expectedAnnotation3]);

        expect(
            annotatedText.annotationsForPosition(174)
        ).toEqual([expectedAnnotation5]);

        expect(
            annotatedText.annotationsForPosition(229)
        ).toEqual([]);

        let deletedAnnotation = new Annotation(6, baseWitness, 256, 2,  "",    otherWitness);
        expect(
            annotatedText.annotationsForPosition(228)
        ).toEqual([deletedAnnotation]);

        let expectedInsertion= new Annotation(7, baseWitness, 268, 0,  "དང་",  otherWitness);
        expect(
            annotatedText.annotationsForPosition(238)
        ).toEqual([expectedInsertion]);
    });

    test('Get current position of annotation', () => {
        let annotation = new Annotation(1, baseWitness, 0,  27, "", otherWitness);
        let annotation2 = new Annotation(6, baseWitness, 256, 2,  "",    otherWitness);
        let annotation3 = new Annotation(3, baseWitness, 57, 4,  "ཤྲི",    otherWitness);
        let annotation4 = new Annotation(5, baseWitness, 204, 1,  "ན་ལ",    otherWitness);
        let annotations = [
            annotation,
            annotation2,
            annotation3,
            annotation4
        ];
        const newAnnotatedText = new AnnotatedText(segmentedText, annotations, segmenter, baseWitness);

        let expectedPosition = [0, 0];
        expect(
            newAnnotatedText.getPositionOfAnnotation(annotation)
        ).toEqual(expectedPosition);

        expectedPosition = [230, 0];
        expect(
            newAnnotatedText.getPositionOfAnnotation(annotation2)
        ).toEqual(expectedPosition);

        expectedPosition = [30, 3];
        expect(
            newAnnotatedText.getPositionOfAnnotation(annotation3)
        ).toEqual(expectedPosition);

        expectedPosition = [176, 3];
        expect(
            newAnnotatedText.getPositionOfAnnotation(annotation4)
        ).toEqual(expectedPosition);

        expectedPosition = [197, 15];
        let unchangedAnnotation = new Annotation(9, baseWitness, 223, 15, "", baseWitness);
        expect(
            newAnnotatedText.getPositionOfAnnotation(unchangedAnnotation)
        ).toEqual(expectedPosition);

        let endAdditionAnnotation = new Annotation(10, baseWitness, 272, 13, "མངྒཱ་ལཾམངྒཱལཾ", baseWitness);
        expectedPosition = [272, 0];
        expect(
            newAnnotatedText.getPositionOfAnnotation(endAdditionAnnotation)
        ).toEqual(expectedPosition);

        let insertion = new Annotation(7, baseWitness, 268, 0,  "དང་",  otherWitness);
        expectedPosition = [238, 3];
        expect(
            annotatedText.getPositionOfAnnotation(insertion)
        ).toEqual(expectedPosition);

        let nonactiveInsertion = new Annotation(77, baseWitness, 268, 0,  "དང་",  otherWitness);
        expectedPosition = [241, 3];
        expect(
            annotatedText.getPositionOfAnnotation(nonactiveInsertion)
        ).toEqual(expectedPosition);


        let includesDeletion = new Annotation(
            WORKING_VERSION_ANNOTATION_ID,
            baseWitness,
            248,
            15,
            "ཐུང་དྲག་གསུས་",
            getAnonymousUser()
        );
        expectedPosition = [220, 13];
        expect(
            annotatedText.getPositionOfAnnotation(includesDeletion)
        ).toEqual(expectedPosition);

        // TODO: write some more tests for multi-segment changes
    });
});