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
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}