// @flow
import React from "react";
import { connect } from "react-redux";
import TextList from "components/TextList";
import { selectedText } from "actions";
import { getSelectedText } from "reducers";
import type { AppState } from "reducers";

const mapStateToProps = (state: AppState) => {
    const searchValue = state.ui.searchValue;
    let texts = state.data.texts;
    if (searchValue.length > 0) {
        texts = texts.filter(text => {
            return text.name.indexOf(searchValue) !== -1;
        });
    }

    return {
        texts: texts,
        selectedText: getSelectedText(state),
        searchTerm: searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedText: text => {
            dispatch(selectedText(text));
        }
    };
};

const TextListContainer = connect(mapStateToProps, mapDispatchToProps)(
    TextList
);

export default TextListContainer;
