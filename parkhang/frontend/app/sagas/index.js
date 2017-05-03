import { call, put, take, actionChannel, fork, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as actions from 'actions'
import * as reducers from 'reducers'

import * as api from 'api'
import { BATCH } from 'redux-batched-actions'

/**
 * Get the required delay for a failed request.
 *
 * @param {number} attempt - the number of attempts that have occurred so far
 * @return {number} The length of delay in milliseconds
 */
function getDelay(attempt) {
    let seconds = 0;
    switch(attempt) {
        case 1:
            seconds = 5;
            break;
        case 2:
            seconds = 10;
            break;
        case 3:
            seconds = 15;
            break;
        case 4:
            seconds = 30;
            break;
        case 5:
            seconds = 60;
            break;
        default:
            seconds = 120;
    }

    return seconds * 1000;
}

// Type of action used to add callbacks to the request queue.
const SAGA_REQUEST = 'SAGA_REQUEST';

/**
 * Sets up a serial queue for requests using the API.
 *
 * Any actions of type SAGA_REQUEST will get processed.
 *
 * The actions needs the following properties:
 * payload: a generator function to be called
 * action: action to be given as an argument to the payload function
 *
 * Any requests failing due to a network error, e.g. the user is offline,
 * will be retried indefinitely until the request is processed. This should
 * make the app more robust in flaky network conditions.
 */
function* watchRequests() {
    const requestChan = yield actionChannel(SAGA_REQUEST);
    while (true) {
        const { payload, action } = yield take(requestChan);
        let complete = false;
        let attempts = 0;
        while (!complete) {
            try {
                yield payload(action);
                complete = true;
            } catch (e) {
                if (e.response) {
                    // if there was a valid HTTP error status code returned just fail now.
                    // e.g. returning a 4xx, 5xx.
                    console.warn('Queued request failed: %o', e);
                    complete = true;
                } else {
                    // otherwise, assume network is down and user is offline.
                    // Try again after reqDelay milliseconds.
                    attempts++;
                    const reqDelay = getDelay(attempts);
                    yield delay(reqDelay);
                }
            }
        }
    }
}

/**
 * Returns a generator function that adds callback to the SAGA_REQUEST queue.
 * @param callback
 * @return {Function}
 */
function reqAction(callback) {
    return function* (action) {
        yield put({
            type: SAGA_REQUEST,
            payload: callback,
            action: action
        });
    }
}

function applyAnnotation(action) {
    return call(api.applyAnnotation, action.annotation);
}

function* watchAppliedAnnotation() {
    yield takeEvery(actions.APPLIED_ANNOTATION, typeCalls[actions.APPLIED_ANNOTATION]);
}


function removeAppliedAnnotation(action) {
    return call(api.removeAppliedAnnotation, action.annotation);
}

function* watchRemovedAppliedAnnotation() {
    yield takeEvery(actions.REMOVED_APPLIED_ANNOTATION, typeCalls[actions.REMOVED_APPLIED_ANNOTATION]);
}

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

function* loadAnnotations(action) {
    const witness = yield select(reducers.getWitness, action.witness.id);
    const annotations = yield call(api.fetchWitnessAnnotations, witness);
    yield put(actions.loadedWitnessAnnotations(action.witness, annotations));
}

function* loadAppliedAnnotations(action) {
    const user = yield select(reducers.getUser);
    if (user.isLoggedIn) {
        const witness = yield select(reducers.getWitness, action.witness.id);
        const annotations = yield call(api.fetchAppliedUserAnnotations, witness);
        let annotationIds = annotations.map(a => a.annotation_unique_id);
        yield put(actions.loadedWitnessAppliedAnnotations(action.witness, annotationIds));
    } else {
        yield put(actions.loadedWitnessAppliedAnnotations(action.witness, []));
    }
}

function* loadWitnessAnnotations(action) {
    yield put(actions.loadingWitnessAnnotations(action.witness));
    yield [
        call(loadAnnotations, action),
        call(loadAppliedAnnotations, action)
    ];
}

function* watchLoadAnnotations() {
    yield takeLatest(actions.LOAD_WITNESS_ANNOTATIONS, loadWitnessAnnotations)
}

function createAnnotation(action) {
    return call(api.createAnnotation, action.annotation);
}

function* watchCreatedAnnotation() {
    yield takeEvery(actions.CREATED_ANNOTATION, typeCalls[actions.CREATED_ANNOTATION]);
}

function updateAnnotation(action) {
    const annotation = getUpdatedAnnotation(action.annotation);
    return call(api.updateAnnotation, annotation);
}

function* watchUpdatedAnnotation() {
    yield takeEvery(actions.UPDATED_ANNOTATION, typeCalls[actions.UPDATED_ANNOTATION]);
}

function deleteAnnotation(action) {
    const annotation = getUpdatedAnnotation(action.annotation);
    return call(api.deleteAnnotation, action.annotation);
}

function* watchDeletedAnnotation() {
    yield takeEvery(actions.DELETED_ANNOTATION, typeCalls[actions.DELETED_ANNOTATION]);
}


// BATCHED ACTIONS

function* dispatchedBatch(action) {
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
    [actions.APPLIED_ANNOTATION]: reqAction(applyAnnotation),
    [actions.REMOVED_APPLIED_ANNOTATION]: reqAction(removeAppliedAnnotation),
    [actions.CREATED_ANNOTATION]: reqAction(createAnnotation),
    [actions.UPDATED_ANNOTATION]: reqAction(updateAnnotation),
    [actions.DELETED_ANNOTATION]: reqAction(deleteAnnotation),
};


/** Root **/

export default function* rootSaga() {
    yield [
        watchLoadInitialData(),
        watchSelectedText(),
        watchLoadAnnotations(),
        watchBatchedActions(),
        watchAppliedAnnotation(),
        watchRemovedAppliedAnnotation(),
        watchCreatedAnnotation(),
        watchUpdatedAnnotation(),
        watchDeletedAnnotation(),
        watchRequests(),
    ]
}