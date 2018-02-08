import React from "react";
import { connect } from "react-redux";
import TextsSearch from "./TextsSearch";
import { changedSearchValue, changedTextListVisible } from "actions";

const mapStateToProps = state => {
    return {
        searchValue: state.ui.searchValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchChanged: e => {
            const value = e.target.value;
            dispatch(changedSearchValue(value));
        },
        minimiseButtonClicked: e => {
            const textListIsVisible = false;
            dispatch(changedTextListVisible(textListIsVisible));
        }
    };
};

const TextsSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
    TextsSearch
);

export default TextsSearchContainer;
