import * as actions from 'actions'

export const initialUIState = {
    selectedText: false,
    searchValue: "",
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

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
export default uiReducers;
