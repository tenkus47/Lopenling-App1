import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    LOAD_INITIAL_DATA,
    loadedTexts,
    loadedSources,
    loadingInitialData,
    loadedInitialData,
    LOAD_WITNESSES,
    loadingWitnesses,
    loadedWitnesses,
    LOAD_WITNESS_ANNOTATIONS,
    loadWitnessAnnotations,
    loadingWitnessAnnotations,
    loadedWitnessAnnotations,
    SELECTED_TEXT,
    ADDED_ANNOTATION,
    REMOVED_ANNOTATION
} from 'actions'

import * as api from 'api'
import { BATCH } from 'redux-batched-actions'

// INITIAL DATA

export function* loadTexts() {
    try {
        const texts = yield call(api.fetchTexts);
        yield put(loadedTexts(texts))
    } catch(e) {
        console.log("FAILED loadTexts! %o", e);
    }
}

function* loadSources() {
    try {
        const sources = yield call(api.fetchSources);
        yield put(loadedSources(sources));
    } catch(e) {
        console.log("FAILED loadSources! %o", e);
    }
}

function* loadInitialData() {
    yield [
        call(loadTexts),
        call(loadSources)
    ];

    yield put(loadedInitialData());
}

export function* watchLoadInitialData() {
    //yield takeLatest(LOAD_INITIAL_DATA, loadInitialData);
    yield takeLatest(LOAD_INITIAL_DATA, typeCalls[LOAD_INITIAL_DATA]);
    yield put(loadingInitialData())
}


// SELECTED TEXT

function* selectedText(action) {
    yield put(loadingWitnesses());
    yield [
        call(loadWitnesses, action)
    ];
}

function* watchSelectedText() {
    yield takeLatest(SELECTED_TEXT, selectedText)
}


// WITNESSES

function* loadWitnesses(action) {
    try {
        const witnesses = yield call(api.fetchTextWitnesses, action.text);
        yield put(loadedWitnesses(action.text, witnesses));
        let baseWitness = null;
        for (const witness of witnesses) {
            if (witness.is_base) {
                baseWitness = witness;
                break;
            }
        }
        if (baseWitness) {
            yield put(loadWitnessAnnotations(baseWitness));
        }
    } catch(e) {
        console.log("FAILED loadWitnesses! %o", e);
    }
}


// ANNOTATIONS

function *loadAnnotations(action) {
    yield put(loadingWitnessAnnotations(action.witness));
    const annotations = yield call(api.fetchWitnessAnnotations, action.witness);
    yield put(loadedWitnessAnnotations(action.witness, annotations));
}

function* watchLoadAnnotations() {
    yield takeLatest(LOAD_WITNESS_ANNOTATIONS, loadAnnotations)
}

function *applyAnnotation(action) {
    try {
        yield call(api.applyAnnotation, action.annotation);
    } catch(e) {
        console.log('applyAnnotation failed: %o, %o', e, action);
    }
}

function* watchAddedAnnotation() {
    yield takeEvery(ADDED_ANNOTATION, typeCalls[ADDED_ANNOTATION])
}

function *removedAnnotation(action) {
    try {
        yield call(api.removeAnnotation, action.annotation);
    } catch(e) {
        console.log('removedAnnotation failed: %o, %o', e, action);
    }

}

function* watchRemovedAnnotation() {
    yield takeEvery(REMOVED_ANNOTATION, typeCalls[REMOVED_ANNOTATION])
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
    [LOAD_INITIAL_DATA]: loadInitialData,
    [ADDED_ANNOTATION]: applyAnnotation,
    [REMOVED_ANNOTATION]: removedAnnotation,
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