/**
 * Partial segment of a larger text.
 *
 * For Tibetan texts, this will be one syllable if normal text,
 * otherwise it can be contiguous 'punctuation' characters.
 */
export default class TextSegment {

    constructor(start, text) {
        this._start = start;
        this._text = text;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get length() {
        return this._text.length;
    }
}