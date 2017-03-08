
class Text {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.baseWitness = null;
    }

    get content() {
        if (this.baseWitness) {
            return this.baseWitness.content;
        } else {
            return null;
        }
    }

    get witness() {
        return this.baseWitness
    }

    set witness(witness) {
        this.baseWitness = witness;
    }
}

export default Text;