// @flow
import React from "react";
import { connect } from "react-redux";
import TextsSearch from "./TextsSearch";
import { changedSearchValue, changedTextListVisible } from "actions";
import type { AppState } from "reducers";

const mapStateToProps = (state: AppState) => {
    return {
        searchValue: state.ui.searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchChanged: (e: SyntheticEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            dispatch(changedSearchValue(value));
        },
        minimiseButtonClicked: () => {
            const textListIsVisible = false;
            dispatch(changedTextListVisible(textListIsVisible));
        }
    };
};

const TextsSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
    TextsSearch
);

export default TextsSearchContainer;
