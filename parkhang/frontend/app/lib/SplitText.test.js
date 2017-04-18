import SplitText from './SplitText'
import AnnotatedText, { BASE_ANNOTATION_ID } from './AnnotatedText'
import segmentTibetanText from './segmentTibetanText'
import stringSplitter from './text_splitters/stringSplitter'

function segmenter(text) {
    return segmentTibetanText(text).sortedSegments();
}

const baseTextContent = "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ།། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ།། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";
const segmentedText = segmentTibetanText(baseTextContent);
const annotatedText = new AnnotatedText(segmentedText, [], segmenter);

const splitter = stringSplitter("།།");
const splitText = new SplitText(annotatedText, splitter);

describe('SplitText', () => {

    const texts = splitText.texts;

    test('Returns the correct number of SegmentedTexts', () => {
        expect(
            texts.length
        ).toEqual(3);
    });

    test('Segmented texts contain the correct text', () => {

        expect(
            texts[0].getText()
        ).toEqual('༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ།།');

        expect(
            texts[1].getText()
        ).toEqual(' སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ།།');

        expect(
            texts[2].getText()
        ).toEqual(' བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།');
    });

    test('Get correct text index for position', () => {
        expect(
            splitText.getTextIndexOfPosition(92)
        ).toEqual(1);

    });
});