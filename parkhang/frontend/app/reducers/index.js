import { combineReducers } from 'redux'
import dataReducers, * as data from './data'
import uiReducers, * as ui from './ui'
import userReducers, * as user from './user'
//initialUIState, showPageImages as showPageImagesUI

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const dataReducer = createReducer(data.initialDataState, dataReducers);
const uiReducer = createReducer(ui.initialUIState, uiReducers);
const userReducer = createReducer(user.initialUserState, userReducers);

/* Selectors */

// user

export const getUser = (state) => {
    return user.getUser(state.user);
};

// ui

export const getSelectedText = (state) => {
    return ui.getSelectedText(state.ui);
};

export const showPageImages = (state) => {
    return ui.showPageImages(state.ui);
};

export const getSelectedSegment = (state) => {
    return ui.selectedSegment(state.ui);
};

export const getActiveAnnotation = (state) => {
    return ui.getActiveAnnotation(state.ui);
};

export const getTextListVisible = (state) => {
    return ui.getTextListVisible(state.ui);
};

// data

export const getText = (state, textId) => {
    return data.getText(state.data, textId);
};

export const getSource = (state, sourceId) => {
    return data.getSource(state.data, sourceId);
};

export const getWitness = (state, witnessId) => {
    return data.getWitness(state.data, witnessId);
};

export const getBaseWitness = (state, textId) => {
    return data.getBaseWitness(state.data, textId);
};

export const getAnnotationsForWitnessId = (state, witnessId) => {
    return data.getAnnotationsForWitnessId(state.data, witnessId);
};

export const getActiveAnnotationsForWitnessId = (state, witnessId) => {
    return data.getActiveAnnotationsForWitnessId(state.data, witnessId);
};

export const annotationFromData = (state, annotationData) => {
    return data.annotationFromData(state.data, annotationData);
};

export const getAnnotationData = (state, witnessId, annotationId) => {
    return data.getAnnotationData(state.data, witnessId, annotationId);
};


// Root

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
    user: userReducer
});

export default rootReducer;
