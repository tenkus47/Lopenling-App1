import * as actions from 'actions'

export const initialUIState = {
    selectedText: false
};

function selectedText(state, action) {
    return {
        ...state,
        selectedText: action.text
    };
}

const uiReducers = {};
uiReducers[actions.SELECTED_TEXT] = selectedText;
export default uiReducers;
