import React from 'react';
import { connect } from 'react-redux';
import TextList from 'components/TextList';
import { selectedText } from 'actions'
import { getSelectedText } from 'reducers'

const mapStateToProps = (state) => {
    const searchValue = state.ui.searchValue;
    let texts = state.data.texts;
    if (searchValue.length > 0) {
        // TODO: use reselect to cache this selector
        texts = texts.filter(text => {
            // return text.name.substring(0, searchValue.length) == searchValue;
            return (text.name.indexOf(searchValue) === 0);
        });
    }

    return {
        texts: texts,
        selectedText: getSelectedText(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedText: (text) => {
            dispatch(selectedText(text))
        }
    }
};

const TextListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextList);

export default TextListContainer;
