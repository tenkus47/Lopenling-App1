
export const ANNOTATION_TYPES = {
    variant: 'V',
    note: 'N',
    marker: 'M'
};

export const TEMPORARY_TYPE = 'T';

export function getNaturalId(type, userCreated, creatorId, witnessId, start, length) {
    const creatorType = (userCreated) ? 'U' : 'W';
    return [type, creatorType, creatorId, witnessId, start, length].join('-');
}

export function getUniqueId(type, userCreated, creatorId, witnessId, start, length) {
    return getNaturalId(type, userCreated, creatorId, witnessId, start, length);
}

export function getTemporaryId(naturalId) {
    return TEMPORARY_TYPE + naturalId;
}

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
        this.basedOn = null;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = Number(newId);
    }

    get naturalId() {
        return getNaturalId(this.type, this.userCreated, this.creator.id, this.witness.id, this.start, this.length);
    }

    get uniqueId() {
        return this.naturalId;
    }

    get isTemporary() {
        return false;
    }

    toString() {
        return [this.id, this.start, this.length, this.content].join("_");
    }

    getSourceName() {
        if (this.creator.hasOwnProperty('content')) {
            // is witness
            return this.creator.source.name;
        } else {
            return this.creator.name;
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

    get userCreated() {
        return !this.creator.hasOwnProperty('content');
    }

    get isSaved() {
        return this._id === null;
    }
}


/**
 * Intended to be used when editing/adding an annotation.
 */
export class TemporaryAnnotation extends Annotation {
    /**
     *
     * @param {Annotation} basedOn - The annotation this is amending. Set to null if new.
     * @param {Witness} witness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {Witness|User|null} creator
     * @param {string} type - one of ANNOTATION_TYPES
     */
    constructor(basedOn, witness, start, length, content,
                creator=null, type=ANNOTATION_TYPES.variant)
    {
        super(null, witness, start, length, content, creator, type);
        this.basedOn = basedOn;
    }

    get id() {
        const savedId = this.savedId;
        if (savedId) {
            return savedId;
        } else {
            return super.id;
        }
    }

    get isTemporary() {
        return true;
    }

    get savedId() {
        // user-created annotations can be updated/overwitten
        if (this.basedOn && this.basedOn.userCreated) {
            return this.basedOn.id;
        }
        return this._id;
    }
}