import * as actions from 'actions'

export const initialUIState = {
    selectedText: false,
    searchValue: "",
    showPageImages: false,
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

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
uiReducers[actions.CHANGED_SHOW_PAGE_IMAGES] = changedShowPageImages;
export default uiReducers;

export const showPageImages = (state) => {
    console.log('in ui showPageImages: %o', state);
    return state.showPageImages;
};
