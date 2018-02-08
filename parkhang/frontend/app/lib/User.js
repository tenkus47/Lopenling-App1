// @flow

const ANONYMOUS_USER_ID = -1;
// TODO: update when implementing localisation
const ANONYMOUS_USER_NAME = "User";

/**
 * Represents a user of the system.
 *
 * @param id - The id of the user, as returned by the server API.
 */
export default class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = Number(id);
        this.name = name;
    }

    /**
     * Whether the user is currently logged in to the server.
     */
    get isLoggedIn(): boolean {
        return this.id !== ANONYMOUS_USER_ID;
    }
}

let _anonymousUser = null;
export const getAnonymousUser = (): User => {
    if (!_anonymousUser) {
        _anonymousUser = new User(ANONYMOUS_USER_ID, ANONYMOUS_USER_NAME);
    }
    return _anonymousUser;
};
