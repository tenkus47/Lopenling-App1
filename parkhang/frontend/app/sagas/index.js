// @flow
import {
    call,
    put,
    take,
    actionChannel,
    fork,
    takeEvery,
    takeLatest,
    select,
    all
} from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "actions";
import * as reducers from "reducers";
import Witness from "lib/Witness";
import User from "lib/User";
import { updateIntl } from "react-intl-redux";
import Cookies from "js-cookie";
import { i18n_cookie_name } from "i18n";
import { compare as tibetanCompare } from "tibetan-sort-js";

import * as api from "api";
import { BATCH } from "redux-batched-actions";

import type { Saga } from "redux-saga";

/**
 * Get the required delay for a failed request.
 *
 * @param {number} attempt - the number of attempts that have occurred so far
 * @return {number} The length of delay in milliseconds
 */
function getDelay(attempt) {
    let seconds = 0;
    switch (attempt) {
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
const SAGA_REQUEST = "SAGA_REQUEST";

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
                    console.warn("Queued request failed: %o", e);
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
function reqAction(callback): actions.Action => Generator<*, *, *> {
    return function*(action: actions.Action): Generator<*, *, *> {
        yield put({
            type: SAGA_REQUEST,
            payload: callback,
            action: action
        });
    };
}

function applyAnnotation(action: actions.AppliedAnnotationAction): Promise<*> {
    return (call(
        api.applyAnnotation,
        action.annotationId,
        action.witnessData
    ): any);
}

function* watchAppliedAnnotation() {
    yield takeEvery(
        actions.APPLIED_ANNOTATION,
        typeCalls[actions.APPLIED_ANNOTATION]
    );
}

function removeAppliedAnnotation(
    action: actions.RemovedAppliedAnnotationAction
) {
    return call(
        api.removeAppliedAnnotation,
        action.annotationId,
        action.witnessData
    );
}

function* watchRemovedAppliedAnnotation() {
    yield takeEvery(
        actions.REMOVED_APPLIED_ANNOTATION,
        typeCalls[actions.REMOVED_APPLIED_ANNOTATION]
    );
}

function removeDefaultAnnotation(
    action: actions.RemovedDefaultAnnotationAction
) {
    return call(
        api.removeDefaultAnnotation,
        action.annotationId,
        action.witnessData
    );
}

function* watchRemovedDefaultAnnotation() {
    yield takeEvery(
        actions.REMOVED_DEFAULT_ANNOTATION,
        typeCalls[actions.REMOVED_APPLIED_ANNOTATION]
    );
}

function appliedDefaultAnnotation(
    action: actions.AppliedDefaultAnnotationAction
) {
    return call(
        api.applyDefaultAnnotation,
        action.annotationId,
        action.witnessData
    );
}

function* watchAppliedDefaultAnnotation() {
    yield takeEvery(
        actions.APPLIED_DEFAULT_ANNOTATION,
        typeCalls[actions.APPLIED_DEFAULT_ANNOTATION]
    );
}

// INITIAL DATA

export function* loadTexts(): Saga<void> {
    try {
        const texts = yield call(api.fetchTexts);
        texts.sort((a: api.TextData, b: api.TextData) =>
            tibetanCompare(a.name, b.name)
        );
        yield put(actions.loadedTexts(texts));
    } catch (e) {
        console.log("FAILED loadTexts! %o", e);
    }
}

function* loadSources() {
    try {
        const sources = yield call(api.fetchSources);
        yield put(actions.loadedSources(sources));
    } catch (e) {
        console.log("FAILED loadSources! %o", e);
    }
}

function* loadInitialData(): Saga<void> {
    yield all([call(loadTexts), call(loadSources)]);

    yield put(actions.loadedInitialData());
}

export function* watchLoadInitialData(): any {
    yield takeLatest(
        actions.LOAD_INITIAL_DATA,
        typeCalls[actions.LOAD_INITIAL_DATA]
    );
    yield put(actions.loadingInitialData());
}

// SELECTED TEXT

function* selectedText(action: actions.SelectedTextAction): Saga<void> {
    yield put(actions.loadingWitnesses(action.text));
    yield all([call(loadInitialTextData, action)]);
}

function* watchSelectedText(): Saga<void> {
    yield takeLatest(actions.SELECTED_TEXT, selectedText);
}

// WITNESSES

function* loadInitialTextData(action: actions.TextDataAction) {
    try {
        const witnesses = yield call(api.fetchTextWitnesses, action.text);
        yield put(actions.loadedWitnesses(action.text, witnesses));
        let workingWitnessData: api.WitnessData | null = null;
        let baseWitnessData: api.WitnessData | null = null;
        for (const witness of witnesses) {
            if (witness.is_working) {
                workingWitnessData = witness;
            }
            if (witness.is_base) {
                baseWitnessData = witness;
            }
        }
        if (workingWitnessData) {
            const workingWitness: Witness = yield (select(
                reducers.getWitness,
                workingWitnessData.id
            ): any);
            yield put(actions.loadingWitnessAnnotations(workingWitness.id));
            yield all([
                call(loadAnnotations, workingWitness.id),
                call(loadAnnotationOperations, workingWitness.id)
            ]);
            // auto-select the working witness
            yield put(
                actions.selectedTextWitness(action.text.id, workingWitness.id)
            );
        }
    } catch (e) {
        console.log("FAILED loadInitialTextData %o", e);
    }
}

function* selectedWitness(action: actions.SelectedTextWitnessAction) {
    const witnessId = action.witnessId;
    const hasLoadedAnnotations = yield select(
        reducers.hasLoadedWitnessAnnotations,
        witnessId
    );
    if (!hasLoadedAnnotations) {
        yield call(loadWitnessAnnotations, action);
    }
}

function* watchSelectedTextWitness() {
    yield takeLatest(actions.SELECTED_WITNESS, selectedWitness);
}

// ANNOTATIONS

function* loadAnnotations(witnessId: number) {
    const witnessData = yield select(reducers.getWitnessData, witnessId);
    const annotations = yield call(api.fetchWitnessAnnotations, witnessData);
    yield put(actions.loadedWitnessAnnotations(witnessId, annotations));
}

function* loadAnnotationOperations(witnessId: number) {
    const user = yield select(reducers.getUser);
    if (user.isLoggedIn) {
        const witnessData = yield select(reducers.getWitnessData, witnessId);
        const operationsData = yield call(
            api.fetchUserAnnotationOperations,
            witnessData
        );
        yield put(
            actions.loadedWitnessAnnotationOperations(witnessId, operationsData)
        );
    } else {
        yield put(actions.loadedWitnessAnnotationOperations(witnessId, []));
    }
}

function* loadWitnessAnnotations(action: actions.WitnessAction) {
    yield put(actions.loadingWitnessAnnotations(action.witnessId));
    yield all([
        call(loadAnnotations, action.witnessId),
        call(loadAnnotationOperations, action.witnessId)
    ]);
}

function* watchLoadAnnotations() {
    yield takeLatest(actions.LOAD_WITNESS_ANNOTATIONS, loadWitnessAnnotations);
}

function createAnnotation(action) {
    return call(api.createAnnotation, action.annotation);
}

function* watchCreatedAnnotation() {
    yield takeEvery(
        actions.CREATED_ANNOTATION,
        typeCalls[actions.CREATED_ANNOTATION]
    );
}

function updateAnnotation(action) {
    return call(api.updateAnnotation, action.annotation);
}

function* watchUpdatedAnnotation() {
    yield takeEvery(
        actions.UPDATED_ANNOTATION,
        typeCalls[actions.UPDATED_ANNOTATION]
    );
}

function deleteAnnotation(action) {
    return call(api.deleteAnnotation, action.annotation);
}

function* watchDeletedAnnotation() {
    yield takeEvery(
        actions.DELETED_ANNOTATION,
        typeCalls[actions.DELETED_ANNOTATION]
    );
}

// I18N

function* selectLocale(action: actions.Action) {
    const locale: string = String(action.payload);
    const localeData = yield select(reducers.getLocaleData, locale);

    const user: User = yield select(reducers.getUser);
    if (user.isLoggedIn) {
        yield call(api.setUserLocale, user, locale);
    }

    yield call(Cookies.set, i18n_cookie_name, locale);

    yield put(
        updateIntl({
            locale: locale,
            messages: localeData.messages,
            key: locale
        })
    );
}

function* watchSelectedLocale() {
    yield takeEvery(actions.SELECTED_LOCALE, selectLocale);
}

// BATCHED ACTIONS

function* dispatchedBatch(action): Saga<void> {
    const actions = action.payload;
    for (let i = 0; i < actions.length; i++) {
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
const typeCalls: { [string]: (any) => Saga<void> } = {
    [actions.LOAD_INITIAL_DATA]: loadInitialData,
    [actions.LOAD_WITNESS_ANNOTATIONS]: loadWitnessAnnotations,
    [actions.APPLIED_ANNOTATION]: reqAction(applyAnnotation),
    [actions.REMOVED_APPLIED_ANNOTATION]: reqAction(removeAppliedAnnotation),
    [actions.APPLIED_DEFAULT_ANNOTATION]: reqAction(appliedDefaultAnnotation),
    [actions.REMOVED_DEFAULT_ANNOTATION]: reqAction(removeDefaultAnnotation),
    [actions.CREATED_ANNOTATION]: reqAction(createAnnotation),
    [actions.UPDATED_ANNOTATION]: reqAction(updateAnnotation),
    [actions.DELETED_ANNOTATION]: reqAction(deleteAnnotation),
    [actions.SELECTED_WITNESS]: reqAction(selectedWitness)
};

/** Root **/

export default function* rootSaga(): Saga<void> {
    yield all([
        call(watchLoadInitialData),
        call(watchSelectedText),
        call(watchLoadAnnotations),
        call(watchBatchedActions),
        call(watchAppliedAnnotation),
        call(watchRemovedAppliedAnnotation),
        call(watchAppliedDefaultAnnotation),
        call(watchRemovedDefaultAnnotation),
        call(watchCreatedAnnotation),
        call(watchUpdatedAnnotation),
        call(watchDeletedAnnotation),
        call(watchRequests),
        call(watchSelectedTextWitness),
        call(watchSelectedLocale)
    ]);
}
