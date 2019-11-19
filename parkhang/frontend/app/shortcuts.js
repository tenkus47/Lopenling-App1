// @flow

import type { AppState } from "reducers";
import * as actions from "actions";
import * as reducers from "reducers";
import * as TextStore from "state_helpers/TextStore";
import AnnotatedText from "lib/AnnotatedText";
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

const addPageBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    addBreak(state, dispatch, ANNOTATION_TYPES.pageBreak);
};

const addLineBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    addBreak(state, dispatch, ANNOTATION_TYPES.lineBreak);
};

const addBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void,
    breakType: string
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    if (
        !activeAnnotation ||
        activeAnnotation.isType(ANNOTATION_TYPES.pageBreak) ||
        activeAnnotation.isType(ANNOTATION_TYPES.lineBreak)
    ) {
        return;
    }
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }

    const user = reducers.getUser(state);
    if (activeAnnotation && selectedWitness && annotatedText && user) {
        const breakAnnotation = new Annotation(
            null,
            activeAnnotation.witness,
            activeAnnotation.end + 1,
            0,
            null,
            breakType,
            selectedWitness,
            user
        );

        if (!breakExists(annotatedText, breakAnnotation)) {
            let selectedWitnessData = reducers.dataFromWitness(selectedWitness);
            let actionsBatch = [];
            actionsBatch.push(actions.createdAnnotation(breakAnnotation));
            actionsBatch.push(
                actions.appliedAnnotation(
                    breakAnnotation.uniqueId,
                    selectedWitnessData
                )
            );
            dispatch(batchActions(actionsBatch));
        }
    }
};

const breakExists = (
    annotatedText: AnnotatedText,
    breakAnnotation: Annotation
): boolean => {
    return (
        annotationTypeExists(
            annotatedText,
            ANNOTATION_TYPES.pageBreak,
            breakAnnotation.start
        ) ||
        annotationTypeExists(
            annotatedText,
            ANNOTATION_TYPES.lineBreak,
            breakAnnotation.start
        )
    );
};

const annotationTypeExists = (
    annotatedText: AnnotatedText,
    type: string,
    position: number
): boolean => {
    const annotations = annotatedText.getAnnotationsOfType(type);
    for (let id in annotations) {
        if (annotations.hasOwnProperty(id)) {
            const annotation = annotations[id];
            if (position === annotation.start) {
                return true;
            }
        }
    }
    return false;
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
