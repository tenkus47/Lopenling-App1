import * as actions from 'actions'

export const initialUIState = {
    selectedText: false,
    selectedTextWitness: {},
    searchValue: "",
    showPageImages: false,
    activeAnnotations: {},
    textListVisible: true,
    temporaryAnnotations: {}
};

function selectedText(state, action) {
    return {
        ...state,
        selectedText: action.text
    };
}

function selectedTextWitness(state, action) {
    return {
        ...state,
        selectedTextWitness: {
            ...selectedTextWitness,
            [action.text.id]: action.witness.id
        }
    }
};

function changedSearchValue(state, action) {
    let searchValue = action.searchValue;
    if (searchValue == undefined) {
        searchValue = "";
    }
    return {
        ...state,
        searchValue: searchValue
    }
}

function changedShowPageImages(state, action) {
    return {
        ...state,
        showPageImages: action.showPageImages
    }
}

function changedSelectedSegment(state, action) {
    let selectedSegments = {
        ...state.selectedSegments
    };
    selectedSegments[state.selectedText.id] = action.segment;
    return {
        ...state,
        selectedSegments: selectedSegments
    }
}

function changedActiveAnnotation(state, action) {
    let activeAnnotations = {
        ...state.activeAnnotations
    };
    activeAnnotations[state.selectedText.id] = action.annotation;
    return {
        ...state,
        activeAnnotations: activeAnnotations
    }
}

function textListVisibleChanged(state, action) {
    return {
        ...state,
        textListVisible: action.isVisible
    }
}

function getTemporaryAnnotationKey(start, length) {
    return [start, length].join("-");
}

function addedTemporaryAnnotation(state, action) {
    const annotation = action.annotation;
    const textId = annotation.witness.text.id;
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    let temporaryAnnotations = (state.temporaryAnnotations[textId]) ? state.temporaryAnnotations[textId] : {};
    let textTemporaryAnnotations = (state.temporaryAnnotations[textId] && state.temporaryAnnotations[textId][key]) ? state.temporaryAnnotations[textId][key] : [];

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [textId]: {
                ...temporaryAnnotations,
                [key]: [
                    ...textTemporaryAnnotations,
                    annotation
                ]
            }
        }
    };
}

function updatedTemporaryAnnotation(state, action) {
    return addedTemporaryAnnotation(state, action);
}

function removedTemporaryAnnotation(state, action) {
    const annotation = action.annotation;
    const textId = annotation.witness.text.id;
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [textId]: {
                ...state.temporaryAnnotations[textId],
                [key]: state.temporaryAnnotations[textId][key].filter(a => a.uniqueId !== annotation.uniqueId)
            }
        }
    }
}

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.SELECTED_WITNESS] = selectedTextWitness;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
uiReducers[actions.CHANGED_SHOW_PAGE_IMAGES] = changedShowPageImages;
uiReducers[actions.CHANGED_SELECTED_SEGMENT] = changedSelectedSegment;
uiReducers[actions.CHANGED_ACTIVE_ANNOTATION] = changedActiveAnnotation;
uiReducers[actions.CHANGED_TEXT_LIST_VISIBLE] = textListVisibleChanged;
uiReducers[actions.ADDED_TEMPORARY_ANNOTATION] = addedTemporaryAnnotation;
uiReducers[actions.REMOVED_TEMPORARY_ANNOTATION] = removedTemporaryAnnotation;
export default uiReducers;

export const getSelectedText = (state) => {
    return state.selectedText;
};

export const getSelectedTextWitnessId = (state, textId) => {
    return state.selectedTextWitness[textId];
};

export const showPageImages = (state) => {
    return state.showPageImages;
};

export const getActiveAnnotation = (state) => {
    if (state.selectedText) {
        return state.activeAnnotations[state.selectedText.id];
    } else {
        return null;
    }
};

export const getTextListVisible = (state) => {
    return state.textListVisible;
};

export const getTemporaryAnnotations = (state, textId, start, length, type) => {
    let annotations = [];
    const key = getTemporaryAnnotationKey(start, length);
    if (type && state.temporaryAnnotations[textId] && state.temporaryAnnotations[textId][key]) {
        annotations =  state.temporaryAnnotations[textId][key].filter(a => a.type === type);
    }
    return annotations;
};