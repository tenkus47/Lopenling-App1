const ANONYMOUS_USER_ID = -1;
// TODO: update when implementing localisation
const ANONYMOUS_USER_NAME = 'User';

/**
 * Represents a user of the system.
 *
 * @param {number} id - The id of the user, as returned by the server API.
 */
export default class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * Whether the user is currently logged in to the server.
     *
     * @return {boolean}
     */
    get isLoggedIn() {
        return this.id !== ANONYMOUS_USER_ID;
    }
}

let _anonymousUser = null;
export const getAnonymousUser = () => {
    if (!_anonymousUser) {
        _anonymousUser = new User(ANONYMOUS_USER_ID, ANONYMOUS_USER_NAME);
    }
    return _anonymousUser;
};