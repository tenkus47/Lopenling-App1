import uuidV4 from 'uuid/v4'

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

export function getUniqueId() {
    return uuidV4();
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
     * @param {string} [type=ANNOTATION_TYPES.variant] - one of ANNOTATION_TYPES
     * @param {string|null} [uniqueId=null] - UUID4. Generates a new one if not provided.
     * @param {Annotation} [basedOn=null] - The annotation this is based on (if any).
     */
    constructor(id, witness, start, length, content,
                creator=null, type=ANNOTATION_TYPES.variant, uniqueId=null, basedOn=null)
    {
        this._id = id;
        this.witness = witness;
        this.start = start;
        this.length = length;
        this.content = content;
        this.creator = creator;
        this.type = type;
        this._uniqueId = uniqueId;
        this.basedOn = basedOn;
        this._isSaved = false;
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
        if (this._uniqueId === null) {
            this._uniqueId = getUniqueId();
        }
        return this._uniqueId;
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
        return this._isSaved;
    }

    set isSaved(newIsSaved) {
        this._isSaved = newIsSaved;
    }

    save() {
        this._isSaved = true;
    }

    get isBaseAnnotation() {
        return (!this.userCreated && this.creator.isBase);
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
     * @param {string} uniqueId - UUID4
     */
    constructor(basedOn, witness, start, length, content,
                creator, type=ANNOTATION_TYPES.variant, uniqueId=null)
    {
        super(null, witness, start, length, content, creator, type, uniqueId);
        this.basedOn = basedOn;
        if (!uniqueId && basedOn) {
            this._uniqueId = basedOn.uniqueId;
        }
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