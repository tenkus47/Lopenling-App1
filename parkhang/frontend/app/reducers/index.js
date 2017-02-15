import { combineReducers } from 'redux'
import dataReducers, { initialDataState } from './data'
import uiReducers, { initialUIState } from './ui'

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            // console.log('got type: %s, state: %o', action.type, state);
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const dataReducer = createReducer(initialDataState, dataReducers);
const uiReducer = createReducer(initialUIState, uiReducers);

// Root

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

export default rootReducer;
