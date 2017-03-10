import { combineReducers } from 'redux'
import dataReducers, { initialDataState } from './data'
import uiReducers, { initialUIState, showPageImages as showPageImagesUI } from './ui'

import uiReducers, * as ui from './ui'
function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const dataReducer = createReducer(initialDataState, dataReducers);
const uiReducer = createReducer(initialUIState, uiReducers);
const uiReducer = createReducer(ui.initialUIState, uiReducers);

// Selectors

export const getSelectedText = (state) => {
    return ui.getSelectedText(state.ui);
};

export const showPageImages = (state) => {
    return showPageImagesUI(state.ui);
};

// Root

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

export default rootReducer;
