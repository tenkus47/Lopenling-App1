import React from 'react';
import { connect } from 'react-redux';
import TextList from 'components/TextList';
import { selectedText } from 'actions'

const mapStateToProps = (state) => {
    return {
        texts: state.data.texts
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
