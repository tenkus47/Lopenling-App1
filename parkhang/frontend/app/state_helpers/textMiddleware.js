// @flow
import * as textStore from "./TextStore";
import * as reducers from "reducers";
import * as actions from "actions";
import type { Store, Reducer } from "redux";
import { BATCH } from "redux-batched-actions";

const middleware = (store: Store<reducers.AppState, actions.Action>) => (
    next: Reducer<actions.Action>
) => (action: actions.Action) => {
    const result = next(action);
    const state = store.getState();
    if (actionHandlers.hasOwnProperty(action.type)) {
        actionHandlers[action.type](state, action);
    } else if (action.type === BATCH) {
        const actions = action.payload;
        for (let i = 0; i < actions.length; i++) {
            const batchedAction = actions[i];
            if (actionHandlers.hasOwnProperty(batchedAction.type)) {
                actionHandlers[batchedAction.type](state, batchedAction);
            }
        }
    }

    return result;
};

export default middleware;

const textReducer = (state, action) => {};

const actionHandlers = {
    [actions.APPLIED_ANNOTATION]: (state, action) => {
        const annotation = reducers.getAnnotation(
            state,
            action.witnessData.id,
            action.annotationId
        );
        if (annotation) {
            textStore.addTextAnnotation(
                state,
                action.witnessData.id,
                annotation
            );
        } else {
            console.log('store: APPLIED_ANNOTATION no annotation found for %o', action);
        }
    },
    [actions.REMOVED_APPLIED_ANNOTATION]: (state, action) => {
        const annotation = reducers.getAnnotation(
            state,
            action.witnessData.id,
            action.annotationId
        );
        if (annotation) {
            textStore.removeTextAnnotation(
                state,
                action.witnessData.id,
                annotation
            );
        } else {
            console.log('store: REMOVED_APPLIED_ANNOTATION no annotation found for %o', action);
        }
    },
    [actions.APPLIED_DEFAULT_ANNOTATION]: (state, action) => {
        const annotation = reducers.getAnnotation(
            state,
            action.witnessData.id,
            action.annotationId
        );
        if (annotation) {
            textStore.addTextAnnotation(
                state,
                action.witnessData.id,
                annotation
            );
        } else {
            console.log('store: APPLIED_DEFAULT_ANNOTATION no annotation found for %o', action);
        }
    },
    [actions.REMOVED_DEFAULT_ANNOTATION]: (state, action) => {
        const annotation = reducers.getAnnotation(
            state,
            action.witnessData.id,
            action.annotationId
        );
        if (annotation) {
            textStore.removeTextAnnotation(
                state,
                action.witnessData.id,
                annotation
            );
        } else {
            console.log('store: REMOVED_DEFAULT_ANNOTATION no annotation found for %o', action);
        }
    }
};
