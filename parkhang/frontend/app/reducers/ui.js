// @flow
import * as actions from "actions";
import Annotation, { TemporaryAnnotation } from "lib/Annotation";
import * as api from "api";

export type UIState = {
    selectedText: api.TextData | null,
    selectedTextWitness: { [textId: number]: number },
    searchValue: string,
    showPageImages: boolean,
    activeAnnotations: { [witnessId: number]: Annotation },
    textListVisible: boolean,
    temporaryAnnotations: {
        [witnessId: number]: {
            [tempAnnotationKey: string]: TemporaryAnnotation[]
        }
    }
};

export const initialUIState = {
    selectedText: null,
    selectedTextWitness: {},
    searchValue: "",
    showPageImages: false,
    activeAnnotations: {},
    textListVisible: true,
    temporaryAnnotations: {}
};

function selectedText(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    return {
        ...state,
        selectedText: action.text
    };
}

function selectedTextWitness(
    state: UIState,
    action: actions.SelectedTextWitnessAction
): UIState {
    return {
        ...state,
        selectedTextWitness: {
            ...selectedTextWitness,
            [action.text.id]: action.witness.id
        }
    };
}

function changedSearchValue(
    state: UIState,
    action: actions.ChangedSearchValueAction
): UIState {
    let searchValue = action.searchValue;
    if (!searchValue) {
        searchValue = "";
    }
    return {
        ...state,
        searchValue: searchValue
    };
}

function changedShowPageImages(
    state: UIState,
    action: actions.ChangedShowPageImagesAction
): UIState {
    return {
        ...state,
        showPageImages: action.showPageImages
    };
}

// TODO: delete? Doesn't seem to be used anywhere.
// function changedSelectedSegment(state, action) {
//     let selectedSegments = {
//         ...state.selectedSegments
//     };
//     const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
//     selectedSegments[activeWitnessId] = action.segment;
//     return {
//         ...state,
//         selectedSegments: selectedSegments
//     }
// }

function changedActiveAnnotation(
    state: UIState,
    action: actions.AnnotationAction
): UIState {
    if (!state.selectedText) {
        console.warn("changedActiveAnnotation without selectedText");
        return state;
    }

    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    return {
        ...state,
        activeAnnotations: {
            ...state.activeAnnotations,
            [activeWitnessId]: action.annotation
        }
    };
}

function textListVisibleChanged(
    state: UIState,
    action: actions.ChangedTextListVisibleAction
): UIState {
    return {
        ...state,
        textListVisible: action.isVisible
    };
}

function getTemporaryAnnotationKey(start: number, length: number): string {
    return [start, length].join("-");
}

function addedTemporaryAnnotation(
    state,
    action: actions.AddedTemporaryAnnotationAction
): UIState {
    const annotation = action.annotation;
    // const textId = annotation.witness.text.id;
    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    let temporaryAnnotations = state.temporaryAnnotations[activeWitnessId]
        ? state.temporaryAnnotations[activeWitnessId]
        : {};
    let textTemporaryAnnotations =
        state.temporaryAnnotations[activeWitnessId] &&
        state.temporaryAnnotations[activeWitnessId][key]
            ? state.temporaryAnnotations[activeWitnessId][key]
            : [];

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [activeWitnessId]: {
                ...temporaryAnnotations,
                [key]: [...textTemporaryAnnotations, annotation]
            }
        }
    };
}

// function updatedTemporaryAnnotation(state, action) {
//     return addedTemporaryAnnotation(state, action);
// }

function removedTemporaryAnnotation(
    state,
    action: actions.RemovedTemporaryAnnotationAction
): UIState {
    const annotation = action.annotation;
    // const textId = annotation.witness.text.id;
    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [activeWitnessId]: {
                ...state.temporaryAnnotations[activeWitnessId],
                [key]: state.temporaryAnnotations[activeWitnessId][key].filter(
                    a => a.uniqueId !== annotation.uniqueId
                )
            }
        }
    };
}

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.SELECTED_WITNESS] = selectedTextWitness;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
uiReducers[actions.CHANGED_SHOW_PAGE_IMAGES] = changedShowPageImages;
// uiReducers[actions.CHANGED_SELECTED_SEGMENT] = changedSelectedSegment;
uiReducers[actions.CHANGED_ACTIVE_ANNOTATION] = changedActiveAnnotation;
uiReducers[actions.CHANGED_TEXT_LIST_VISIBLE] = textListVisibleChanged;
uiReducers[actions.ADDED_TEMPORARY_ANNOTATION] = addedTemporaryAnnotation;
uiReducers[actions.REMOVED_TEMPORARY_ANNOTATION] = removedTemporaryAnnotation;
export default uiReducers;

export const getSelectedText = (state: UIState): api.TextData | null => {
    return state.selectedText;
};

export const getSelectedTextWitnessId = (
    state: UIState,
    textId: number
): number | null => {
    return state.selectedTextWitness[textId];
};

export const showPageImages = (state: UIState): boolean => {
    return state.showPageImages;
};

export const getActiveAnnotation = (state: UIState): Annotation | null => {
    if (state.selectedText) {
        const activeWitnessId =
            state.selectedTextWitness[state.selectedText.id];
        return state.activeAnnotations[activeWitnessId];
    } else {
        return null;
    }
};

export const getTextListVisible = (state: UIState): boolean => {
    return state.textListVisible;
};

export const getTemporaryAnnotations = (
    state: UIState,
    witnessId: number,
    start: number,
    length: number,
    type: string
): TemporaryAnnotation[] => {
    let annotations = [];
    const key = getTemporaryAnnotationKey(start, length);
    if (
        type &&
        state.temporaryAnnotations[witnessId] &&
        state.temporaryAnnotations[witnessId][key]
    ) {
        annotations = state.temporaryAnnotations[witnessId][key].filter(
            a => a.type === type
        );
    }
    return annotations;
};
