import React from 'react'
import { connect } from 'react-redux'
import { batchActions } from 'redux-batched-actions'
import TextHeading from './TextHeading'
import { selectedTextWitness, changedActiveAnnotation } from 'actions'
import * as reducers from 'reducers'

const mapStateToProps = (state) => {
    const selectedText = reducers.getSelectedText(state);
    let witnesses = [];
    let selectedWitness;
    if (selectedText) {
        witnesses = reducers.getTextWitnesses(state, selectedText.id);
        const selectedWitnessId = reducers.getSelectedTextWitnessId(state, selectedText.id);
        if (selectedWitnessId) {
            selectedWitness = reducers.getWitness(state, selectedWitnessId);
        } else {
            selectedWitness = reducers.getWorkingWitness(state, selectedText.id);
        }
    }

    return {
        witnesses,
        selectedText,
        selectedWitness,
        showPageImages: state.ui.showPageImages
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { selectedText } = stateProps;
    return {
        ...stateProps,
        ...ownProps,
        onSelectedWitness: (witness) => {
            dispatch(
                batchActions([
                    changedActiveAnnotation(null),
                    selectedTextWitness(selectedText, witness)
                ])
            );

        }
    }
};

const TextHeadingContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextHeading);

export default TextHeadingContainer;

