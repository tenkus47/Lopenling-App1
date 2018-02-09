// @flow
import { combineReducers } from "redux";
import dataReducers, * as data from "./data";
import uiReducers, * as ui from "./ui";
import userReducers, * as user from "./user";
import * as actions from "actions";
import Annotation, {
    ANNOTATION_TYPES,
    TemporaryAnnotation
} from "lib/Annotation";
import type { AnnotationUniqueId } from "lib/Annotation";
import Witness from "lib/Witness";
import Source from "lib/Source";
import Text from "lib/Text";
import type { WitnessData, AnnotationData, TextData } from "api";
import User from "lib/User";

function createReducer(
    initialState: {},
    handlers
): (state: {}, action: actions.Action) => {} {
    return function reducer(state = initialState, action: actions.Action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

export const dataReducer = createReducer(data.initialDataState, dataReducers);
const uiReducer = createReducer(ui.initialUIState, uiReducers);
const userReducer = createReducer(user.initialUserState, userReducers);

export type AppState = {
    data: data.DataState,
    ui: ui.UIState,
    user: user.UserState
};

/* Selectors */

// user

/**
 * Get the current user.
 *
 * If not logged in, it will be anonymousUser
 * @param state
 * @return {User}
 */
export const getUser = (state: AppState): User => {
    return user.getUser(state.user);
};

// ui

export const getSelectedText = (state: AppState): TextData | null => {
    return ui.getSelectedText(state.ui);
};

export const getSelectedTextWitnessId = (
    state: AppState,
    textId: number
): number | null => {
    return ui.getSelectedTextWitnessId(state.ui, textId);
};

export const getSelectedTextWitness = (state: AppState): Witness | null => {
    const text = getSelectedText(state);
    let witness = null;
    if (text) {
        const selectedWitnessId = getSelectedTextWitnessId(state, text.id);
        if (selectedWitnessId) {
            witness = getWitness(state, selectedWitnessId);
        }
    }

    return witness;
};

export const showPageImages = (state: AppState): boolean => {
    return ui.showPageImages(state.ui);
};

export const getActiveAnnotation = (state: AppState): Annotation | null => {
    return ui.getActiveAnnotation(state.ui);
};

export const getTextListVisible = (state: AppState): boolean => {
    return ui.getTextListVisible(state.ui);
};

export const getTemporaryAnnotations = (
    state: AppState,
    witnessId: number,
    start: number,
    length: number,
    type: string | null = null
): TemporaryAnnotation[] => {
    return ui.getTemporaryAnnotations(state.ui, witnessId, start, length, type);
};

// data

export const getText = (state: AppState, textId: number): Text | null => {
    return data.getText(state.data, textId);
};

export const getSources = (state: AppState): Source[] => {
    return data.getSources(state.data);
};

export const getSource = (state: AppState, sourceId: number): Source | null => {
    return data.getSource(state.data, sourceId);
};

export const getWitness = (
    state: AppState,
    witnessId: number
): Witness | null => {
    return data.getWitness(state.data, witnessId);
};

export const getWitnessData = (
    state: AppState,
    witnessId: number
): WitnessData | null => {
    return data.getWitnessData(state.data, witnessId);
};

export const getTextWitnesses = (
    state: AppState,
    textId: number
): Witness[] => {
    return data.getTextWitnesses(state.data, textId);
};

export const getBaseWitness = (
    state: AppState,
    textId: number
): Witness | null => {
    return data.getBaseWitness(state.data, textId);
};

export const getWorkingWitness = (
    state: AppState,
    textId: number
): Witness | null => {
    return data.getWorkingWitness(state.data, textId);
};

export const hasLoadedWitnessAnnotations = (
    state: AppState,
    witnessId: number
): boolean => {
    return state.data["witnessAnnotationsById"].hasOwnProperty(witnessId);
};

export const hasLoadedWitnessAppliedAnnotations = (
    state: AppState,
    witnessId: number
): boolean => {
    return state.data["witnessActiveAnnotationsById"].hasOwnProperty(witnessId);
};

export const getAnnotationsForWitnessId = (
    state: AppState,
    witnessId: number,
    annotationType: string = ANNOTATION_TYPES.variant
): AnnotationData[] => {
    return data.getAnnotationsForWitnessId(
        state.data,
        witnessId,
        annotationType
    );
};

export const getActiveAnnotationsForWitnessId = (
    state: AppState,
    witnessId: number
): AnnotationUniqueId[] => {
    return data.getActiveAnnotationsForWitnessId(state.data, witnessId);
};

export const annotationFromData = (
    state: AppState,
    annotationData: AnnotationData
): Annotation | null => {
    let annotation = data.annotationFromData(state.data, annotationData);
    if (annotation && annotation.creatorUser) {
        const creatorUser = annotation.creatorUser;
        const user = getUser(state);
        if (user.id === creatorUser.id) {
            annotation.creatorUser = user;
        }
    }

    return annotation;
};

export const getAnnotationData = (
    state: AppState,
    witnessId: number,
    annotationId: AnnotationUniqueId
): AnnotationData | null => {
    return data.getAnnotationData(state.data, witnessId, annotationId);
};

// Root

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
    user: userReducer
});

export default rootReducer;
