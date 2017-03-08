
export default class Annotation {

    /**
     * Text annotation
     * @param {number} id
     * @param {Witness} witness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {boolean} isVariant
     * @param {Witness|User|null} creator
     * @param {string} note
     */
    constructor(id, witness, start, length, content,
                creator=null, isVariant=true, note=null)
    {
        this.id = id;
        this.witness = witness;
        this.start = start;
        this.length = length;
        this.content = content;
        this.creator = creator;
        this._isVariant = isVariant;
        this.note = note;
    }

    get isVariant() {
        return this._isVariant;
    }
}
