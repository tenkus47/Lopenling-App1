import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import App from "components/App";

let user;

const mapStateToProps = (state) => {
    const selectedText = reducers.getSelectedText(state);
    const selectedText2 = reducers.getSelectedText2(state);
    let selectedWitness;
    let selectedWitness2;
    let witnesses = [];

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
    if (selectedText2) {
        // witnesses = reducers.getTextWitnesses(state, selectedText2.id);
        const selectedWitnessId2 = reducers.getSelectedTextWitnessId2(
            state,
            selectedText2.id
        );
        if (selectedWitnessId2) {
            selectedWitness2 = reducers.getWitness2(state, selectedWitnessId2);
        } else {
            selectedWitness2 = reducers.getWorkingWitness2(
                state,
                selectedText2.id
            );
        }
    }
    if (!state.user.userId === -1) {
        user = state.user;
    }
    return {
        selectedText,
        selectedText2,
        selectedWitness,
        selectedWitness2,
        title: reducers.getTranslation(state, "header.title"),
        textListIsVisible: reducers.getTextListVisible(state),
        textListWidth: reducers.getTextListWidth(state),
        state: state,
        page: state.page,
        isAnnotating: reducers.isAnnotating(state),
        isSecondWindowOpen: reducers.isSecondWindowOpen(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        onChangedTextWidth: (width: number) => {
            dispatch(actions.changedTextListWidth(width));
        },
        onChangedTextListVisible: (isVisible: boolean) => {
            dispatch(actions.changedTextListVisible(isVisible));
        },
        changeIsAnnotating: (payload) => {
            dispatch(actions.changeIsAnnotating(payload));
            if (payload === false) {
                const dismissTextAnnotation =
                    actions.changedActiveTextAnnotation(null);
                dispatch(dismissTextAnnotation);
                dispatch(actions.changedActiveTextAnnotation(null));
            }
        },
        onChangeWindowOpen: (data: boolean, textId) => {
            dispatch(actions.toggleSecondWindow(data, textId));
        },
        dispatch,
    };
};

const AppContainer = connect(mapStateToProps, matchDispatchToProps)(App);

export default AppContainer;
