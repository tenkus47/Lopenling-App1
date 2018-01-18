import { combineReducers } from 'redux'
import dataReducers, * as data from './data'
import uiReducers, * as ui from './ui'
import userReducers, * as user from './user'
import Annotation, { ANNOTATION_TYPES } from 'lib/Annotation'

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

/**
 * Get the current user.
 *
 * If not logged in, it will be anonymousUser
 * @param state
 * @return {User}
 */
export const getUser = (state) => {
    return user.getUser(state.user);
};

// ui

export const getSelectedText = (state) => {
    return ui.getSelectedText(state.ui);
};

export const getSelectedTextWitnessId = (state, textId) => {
    return ui.getSelectedTextWitnessId(state.ui, textId);
};

export const getSelectedTextWitness = (state) => {
    const text = getSelectedText(state);
    const selectedWitnessId = getSelectedTextWitnessId(state, text.id);
    return getWitness(state, selectedWitnessId);
};

export const showPageImages = (state) => {
    return ui.showPageImages(state.ui);
};

export const getActiveAnnotation = (state) => {
    return ui.getActiveAnnotation(state.ui);
};

export const getTextListVisible = (state) => {
    return ui.getTextListVisible(state.ui);
};

export const getTemporaryAnnotations = (state, textId, start, length, type=null) => {
    return ui.getTemporaryAnnotations(state.ui, textId, start, length, type);
};

// data

export const getText = (state, textId) => {
    return data.getText(state.data, textId);
};

export const getSources = (state) => {
    return data.getSources(state.data);
};

export const getSource = (state, sourceId) => {
    return data.getSource(state.data, sourceId);
};

export const getWitness = (state, witnessId) => {
    return data.getWitness(state.data, witnessId);
};

export const getTextWitnesses = (state, witnessId) => {
    return data.getTextWitnesses(state.data, witnessId);
};

export const getBaseWitness = (state, textId) => {
    return data.getBaseWitness(state.data, textId);
};

export const getWorkingWitness = (state, textId) => {
    return data.getWorkingWitness(state.data, textId);
};

export const hasLoadedWitnessAnnotations = (state, witnessId) => {
    return (state.data['witnessAnnotationsById'].hasOwnProperty(witnessId));
};

export const getAnnotationsForWitnessId = (state, witnessId, annotationType=ANNOTATION_TYPES.variant) => {
    return data.getAnnotationsForWitnessId(state.data, witnessId, annotationType);
};

export const getActiveAnnotationsForWitnessId = (state, witnessId) => {
    return data.getActiveAnnotationsForWitnessId(state.data, witnessId);
};

export const annotationFromData = (state, annotationData) => {
    let annotation = data.annotationFromData(state.data, annotationData);
    if (annotation.creatorUser) {
        const user = getUser(state);
        if (user.id === annotation.creatorUser.id) {
            annotation.creatorUser = user;
        }
    }
    return annotation;
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
