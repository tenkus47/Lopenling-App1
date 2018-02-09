// @flow
import React from "react";
import { connect } from "react-redux";
import { batchActions } from "redux-batched-actions";
import TextHeading from "./TextHeading";
import type { Props } from "./TextHeading";
import { selectedTextWitness, changedActiveAnnotation } from "actions";
import * as reducers from "reducers";
import Witness from "lib/Witness";
import type { AppState } from "reducers";

const mapStateToProps = (state: AppState) => {
    const selectedText = reducers.getSelectedText(state);
    let witnesses = [];
    let selectedWitness;
    if (selectedText) {
        witnesses = reducers.getTextWitnesses(state, selectedText.id);
        const selectedWitnessId = reducers.getSelectedTextWitnessId(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = reducers.getWitness(state, selectedWitnessId);
        } else {
            selectedWitness = reducers.getWorkingWitness(
                state,
                selectedText.id
            );
        }
    }

    return {
        witnesses,
        selectedText,
        selectedWitness
    };
};

const mergeProps = (stateProps: Props, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { selectedText } = stateProps;
    return {
        ...stateProps,
        ...ownProps,
        onSelectedWitness: (witness: Witness) => {
            dispatch(
                batchActions([
                    changedActiveAnnotation(null),
                    selectedTextWitness(selectedText.id, witness.id)
                ])
            );
        }
    };
};

const TextHeadingContainer = connect(mapStateToProps, null, mergeProps)(
    TextHeading
);

export default TextHeadingContainer;
