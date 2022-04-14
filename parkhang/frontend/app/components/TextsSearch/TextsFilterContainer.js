// @flow
import React from "react";
import { connect } from "react-redux";
import Textsfilter from "./TextsFilter";
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

const TextsFilterContainer = connect(mapStateToProps, mapDispatchToProps)(
    Textsfilter
);

export default TextsFilterContainer;
