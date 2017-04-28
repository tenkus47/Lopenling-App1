import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from 'actions'

import * as api from 'api'
import { BATCH } from 'redux-batched-actions'

// INITIAL DATA

export function* loadTexts() {
    try {
        const texts = yield call(api.fetchTexts);
        yield put(actions.loadedTexts(texts))
    } catch(e) {
        console.log("FAILED loadTexts! %o", e);
    }
}

function* loadSources() {
    try {
        const sources = yield call(api.fetchSources);
        yield put(actions.loadedSources(sources));
    } catch(e) {
        console.log("FAILED loadSources! %o", e);
    }
}

function* loadInitialData() {
    yield [
        call(loadTexts),
        call(loadSources)
    ];

    yield put(actions.loadedInitialData());
}

export function* watchLoadInitialData() {
    yield takeLatest(actions.LOAD_INITIAL_DATA, typeCalls[actions.LOAD_INITIAL_DATA]);
    yield put(actions.loadingInitialData())
}


// SELECTED TEXT

function* selectedText(action) {
    yield put(actions.loadingWitnesses());
    yield [
        call(loadWitnesses, action)
    ];
}

function* watchSelectedText() {
    yield takeLatest(actions.SELECTED_TEXT, selectedText)
}


// WITNESSES

function* loadWitnesses(action) {
    try {
        const witnesses = yield call(api.fetchTextWitnesses, action.text);
        yield put(actions.loadedWitnesses(action.text, witnesses));
        let baseWitness = null;
        for (const witness of witnesses) {
            if (witness.is_base) {
                baseWitness = witness;
                break;
            }
        }
        if (baseWitness) {
            yield put(actions.loadWitnessAnnotations(baseWitness));
        }
    } catch(e) {
        console.log("FAILED loadWitnesses! %o", e);
    }
}


// ANNOTATIONS

function *loadAnnotations(action) {
    yield put(actions.loadingWitnessAnnotations(action.witness));
    const annotations = yield call(api.fetchWitnessAnnotations, action.witness);
    yield put(actions.loadedWitnessAnnotations(action.witness, annotations));
}

function* watchLoadAnnotations() {
    yield takeLatest(actions.LOAD_WITNESS_ANNOTATIONS, loadAnnotations)
}

function *applyAnnotation(action) {
    try {
        yield call(api.applyAnnotation, action.annotation);
    } catch(e) {
        console.log('applyAnnotation failed: %o, %o', e, action);
    }
}

function* watchAddedAnnotation() {
    yield takeEvery(actions.ADDED_ANNOTATION, typeCalls[actions.ADDED_ANNOTATION])
}

function *removedAnnotation(action) {
    try {
        yield call(api.removeAnnotation, action.annotation);
    } catch(e) {
        console.log('removedAnnotation failed: %o, %o', e, action);
    }

}

function* watchRemovedAnnotation() {
    yield takeEvery(actions.REMOVED_ANNOTATION, typeCalls[actions.REMOVED_ANNOTATION])
}

function *dispatchedBatch(action) {
    const actions = action.payload;
    for (let i=0; i < actions.length; i++) {
        const batchedAction = actions[i];
        if (typeCalls.hasOwnProperty(batchedAction.type)) {
            yield fork(typeCalls[batchedAction.type], batchedAction);
        }
    }
}

function* watchBatchedActions() {
    yield takeEvery(BATCH, dispatchedBatch);
}


/**
 * Stores functions by action type.
 * Used primarily to allow batched actions to be handled
 * automatically by dispatchedBatch.
 *
 * @type {Object.<string, function>}
 */
const typeCalls = {
    [actions.LOAD_INITIAL_DATA]: loadInitialData,
    [actions.ADDED_ANNOTATION]: applyAnnotation,
    [actions.REMOVED_ANNOTATION]: removedAnnotation,
};


/** Root **/

export default function* rootSaga() {
    yield [
        watchLoadInitialData(),
        watchSelectedText(),
        watchLoadAnnotations(),
        watchAddedAnnotation(),
        watchRemovedAnnotation(),
        watchBatchedActions()
    ]
}