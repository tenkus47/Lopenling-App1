import AnnotatedText from './AnnotatedText'
import Annotation from './Annotation'
import Source from './Source'
import Text from './Text'
import Witness from './Witness'
import TextSegment from './TextSegment'
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
    new Annotation(5, baseWitness, 204, 1,  "ན་ལ",    otherWitness),
    new Annotation(6, baseWitness, 256, 2,  "",    otherWitness)
];


describe('AnnotatedText', () => {

    const expectedTextContent = "༄༅༅། །རྒྱ་གར་སྐད་དུ། ས་པྲཛྙཱ་ཤྲི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ན་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ན་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་གསུས་ཁྱིམ་ཡངས།";

    const segmentedText = segmentTibetanText(baseWitness.content);
    const annotatedText = new AnnotatedText(segmentedText, annotations);

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
        // console.log("annotatedText._segmentPositions: %o", annotatedText._segmentPositions);

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
    });

    const noAnnotatedText = new AnnotatedText(segmentedText, []);
    test('Return the correct text when no annotation', () => {
        expect(
            noAnnotatedText.getText()
        ).toEqual(baseWitness.content);
    });

});