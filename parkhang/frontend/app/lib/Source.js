
export const WORKING_VERSION_SOURCE_NAME = 'Working Version';

/**
 * A source of text witnesses.
 *
 * Usually a collection e.g. Derge
 */
export default class Source {

    /**
     * Create Source instance.
     * @param {number} id - id from API
     * @param {string} name - name of the source
     */
    constructor(id, name, isDefaultBaseText=false) {
        this.id = id;
        this.name = name;
        this.isDefaultBaseText = isDefaultBaseText;
    }
}