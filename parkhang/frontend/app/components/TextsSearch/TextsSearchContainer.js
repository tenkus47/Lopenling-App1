import React from 'react'
import { connect } from 'react-redux';
import TextsSearch from './TextsSearch'
import { changedSearchValue } from 'actions'

const mapStateToProps = (state) => {
    return {
        searchValue: state.ui.searchValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchChanged: (e) => {
            const value = e.target.value;
            dispatch(changedSearchValue(value));
        }
    }
};

const TextsSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextsSearch);

export default TextsSearchContainer;