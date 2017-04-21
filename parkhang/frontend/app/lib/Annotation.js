
export const ANNOTATION_TYPES = {
    variant: 'V'
};

export default class Annotation {

    /**
     * Text annotation
     * @param {number} id
     * @param {Witness} witness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {Witness|User|null} creator
     * @param {string} type - one of ANNOTATION_TYPES
     */
    constructor(id, witness, start, length, content,
                creator=null, type=ANNOTATION_TYPES.variant)
    {
        this._id = id;
        this.witness = witness;
        this.start = start;
        this.length = length;
        this.content = content;
        this.creator = creator;
        this.type = type;
    }

    toString() {
        return [this.id, this.start, this.length, this.content].join("_");
    }

    getSourceName() {
        if (this.creator.hasOwnProperty('content')) {
            // is witness
            return this.creator.source.name;
        } else {
            // TODO: implement correctly
            return "User";
        }
    }

    get end() {
        return this.start + this.length - 1;
    }

    isWithinRange(start, length) {
        const rangeEnd = start + length - 1;
        if (
                (this.start <= start
                    && this.end >= start
                    && this.end <= rangeEnd)
                    ||
                    (this.start >= start
                    && this.end <= rangeEnd
                    )
                    ||
                    (this.start <= rangeEnd
                    && this.end >= rangeEnd
                )
            )
        {
            return true;
        } else {
            return false;
        }
    }

    get isVariant() {
        return this._isVariant;
    }

    get isInsertion() {
        return this.length === 0;
    }

    get isDeletion() {
        return this.content.length === 0;
    }
}
