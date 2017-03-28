import * as actions from 'actions'

export const initialUIState = {
    selectedText: false,
    searchValue: "",
    showPageImages: false,
    selectedSegments: {},
    activeAnnotations: {},
    textListVisible: true
};

function selectedText(state, action) {
    return {
        ...state,
        selectedText: action.text
    };
}

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

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
uiReducers[actions.CHANGED_SHOW_PAGE_IMAGES] = changedShowPageImages;
uiReducers[actions.CHANGED_SELECTED_SEGMENT] = changedSelectedSegment;
uiReducers[actions.CHANGED_ACTIVE_ANNOTATION] = changedActiveAnnotation;
uiReducers[actions.CHANGED_TEXT_LIST_VISIBLE] = textListVisibleChanged;
export default uiReducers;

export const getSelectedText = (state) => {
    return state.selectedText;
};

export const showPageImages = (state) => {
    return state.showPageImages;
};

export const selectedSegment = (state) => {
    return state.selectedSegments[state.selectedText.id];
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