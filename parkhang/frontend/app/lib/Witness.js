
/**
 * Represents a printed version of a text.
 */
export default class Witness {

    /**
     * Create new Witness instance.
     *
     * Witnesses will usually belong to a collection, which
     * is represented by `source`. e.g. Derge.
     *
     * Only the base witness should be expected to have content. Other
     * witnesses are represented by annotations to the base text that
     * contain any differences.
     *
     * @param {number} id - The id of the witness returned from the API
     * @param {Text} text - The text this is a witness of
     * @param {Source} source - The source of this witness
     * @param {string|null} content - The content of the witness
     * @param {boolean} isBase - Whether this is the base witness for this text
     */
    constructor(id, text, source, content=null, isBase=false) {
        this.id = id;
        this.text = text;
        this.source = source;
        this.content = content;
    }
}