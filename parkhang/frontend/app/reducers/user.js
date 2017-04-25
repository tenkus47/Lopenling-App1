import * as actions from 'actions'
import User, { getAnonymousUser } from 'lib/User'

const anonymousUser = getAnonymousUser();

export const initialUserState = {
    userId: anonymousUser.id,
    userName: anonymousUser.name
};

function userLoggedIn(state, action) {
    return {
        ...state,
        userId: action.userId,
        userName: action.userName
    }
}

const userReducers = {};
userReducers[actions.USER_LOGGED_IN] = userLoggedIn;
export default userReducers;

let _user = null;

/**
 * Get the current user.
 *
 * If not logged in, it will be anonymousUser
 * @param state
 * @return {User}
 */
export function getUser(state) {
    if (state.userId === anonymousUser.id) {
        return anonymousUser;
    } else {
        if (!_user) {
            _user = new User(state.userId, state.userName);
        }
        return _user;
    }
}