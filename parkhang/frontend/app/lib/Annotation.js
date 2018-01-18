import uuidV4 from 'uuid/v4'

export const ANNOTATION_TYPES = {
    variant: 'V',
    note: 'N',
    marker: 'M',
    pageBreak: 'P'
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
     * @param {Witness} baseWitness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {string} [type=ANNOTATION_TYPES.variant] - one of ANNOTATION_TYPES
     * @param {Witness} creatorWitness
     * @param {User} creatorUser
     * @param {string|null} [uniqueId=null] - UUID4. Generates a new one if not provided.
     * @param {Annotation} [basedOn=null] - The annotation this is based on (if any).
     */
    constructor(id, baseWitness, start, length, content,
                type = ANNOTATION_TYPES.variant, creatorWitness = null, creatorUser = null, uniqueId = null, basedOn = null)
    {
        this._id = id;
        this.witness = baseWitness;
        this.start = Number(start);
        this.length = Number(length);
        this.content = content;
        this.creatorWitness = creatorWitness;
        this.creatorUser = creatorUser;
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

    set uniqueId(newUniqueId) {
        this._uniqueId = newUniqueId;
    }

    get isTemporary() {
        return false;
    }

    toString() {
        return [this.id, this.start, this.length, this.content].join("_");
    }

    get creator() {
        if (this.userCreated) {
            return this.creatorUser;
        } else {
            return this.creatorWitness;
        }
    }

    getSourceName() {
        if (this.userCreated) {
            return this.creatorUser.name;
        } else {
            // is witness
            return this.creatorWitness.source.name;
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
        return Number(this.length) === 0;
    }

    get isDeletion() {
        return !this.isInsertion && this.content.length === 0;
    }

    get userCreated() {
        return !(this.creatorUser === null);
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
        return (!this.userCreated && this.creatorWitness.isBase);
    }

    get isWorkingAnnotation() {
        return (!this.userCreated && this.creatorWitness.isWorking);
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
     * @param {string} type - one of ANNOTATION_TYPES
     * @param {Witness|User|null} creatorWitness
     * @param {string|null} uniqueId - UUID4
     */
    constructor(basedOn, witness, start, length, content,
                type = ANNOTATION_TYPES.variant, creatorWitness = null, creatorUser = null, uniqueId = null)
    {
        super(null, witness, start, length, content, type, creatorWitness, creatorUser, uniqueId);
        this.basedOn = basedOn;
    }

    get isTemporary() {
        return true;
    }
}