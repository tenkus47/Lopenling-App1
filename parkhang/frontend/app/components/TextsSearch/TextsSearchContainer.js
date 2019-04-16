// @flow
import React from "react";
import { connect } from "react-redux";
import TextsSearch from "./TextsSearch";
import { changedSearchValue } from "actions";
import type { AppState } from "reducers";

const mapStateToProps = (state: AppState) => {
    return {
        searchValue: state.ui.searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchChanged: (searchTerm: string) => {
            // const value = e.currentTarget.value;
            dispatch(changedSearchValue(searchTerm));
        }
    };
};

const TextsSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
    TextsSearch
);

export default TextsSearchContainer;
