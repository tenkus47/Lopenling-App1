// @flow

import type { AppState } from "reducers";
import * as actions from "actions";
import * as reducers from "reducers";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import { batchActions } from "redux-batched-actions";

const closeAnnotationControls = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    if (activeAnnotation) {
        const dismissTextAnnotation = actions.changedActiveTextAnnotation(null);
        dispatch(dismissTextAnnotation);
    }
};

// TODO: need to check no existing page break is at location
const addPageBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    const user = reducers.getUser(state);
    if (activeAnnotation && selectedWitness && user) {
        const pageBreak = new Annotation(
            null,
            activeAnnotation.witness,
            activeAnnotation.start,
            0,
            null,
            ANNOTATION_TYPES.pageBreak,
            selectedWitness,
            user
        );
        let selectedWitnessData = reducers.dataFromWitness(selectedWitness);

        let actionsBatch = [];

        actionsBatch.push(actions.createdAnnotation(pageBreak));
        actionsBatch.push(
            actions.appliedAnnotation(pageBreak.uniqueId, selectedWitnessData)
        );

        dispatch(batchActions(actionsBatch));
    }
};

// TODO: need to check no existing line break is at location
const addLineBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    const user = reducers.getUser(state);
    if (activeAnnotation && selectedWitness && user) {
        const lineBreak = new Annotation(
            null,
            activeAnnotation.witness,
            activeAnnotation.start,
            0,
            null,
            ANNOTATION_TYPES.lineBreak,
            selectedWitness,
            user
        );
        let selectedWitnessData = reducers.dataFromWitness(selectedWitness);

        let actionsBatch = [];

        actionsBatch.push(actions.createdAnnotation(lineBreak));
        actionsBatch.push(
            actions.appliedAnnotation(lineBreak.uniqueId, selectedWitnessData)
        );

        dispatch(batchActions(actionsBatch));
    }
};

const shortcuts = {
    Escape: closeAnnotationControls,
    ["shift-Enter"]: addPageBreak,
    ["Enter"]: addLineBreak
};

const getShortcutKey = (e: SyntheticKeyboardEvent<*>) => {
    let key = e.key;
    if (e.shiftKey) {
        key = "shift-" + key;
    }
    return key;
};

export const handleKeyDown = (
    e: SyntheticKeyboardEvent<*>,
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const key = getShortcutKey(e);
    if (shortcuts.hasOwnProperty(key)) {
        shortcuts[key](state, dispatch);
    }
};

export default shortcuts;
