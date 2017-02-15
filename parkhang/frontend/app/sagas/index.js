import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
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
    SELECTED_TEXT
} from 'actions'

import {
    fetchTexts,
    fetchSources,
    fetchTextWitnesses,
    fetchWitnessAnnotations
} from 'api'

// INITIAL DATA

export function* loadTexts() {
    try {
        const texts = yield call(fetchTexts);
        yield put(loadedTexts(texts))
    } catch(e) {
        console.log("FAILED loadTexts! %o", e);
    }
}

function* loadSources() {
    try {
        const sources = yield call(fetchSources);
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
    yield takeLatest(LOAD_INITIAL_DATA, loadInitialData);
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
        const witnesses = yield call(fetchTextWitnesses, action.text);
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
    const annotations = yield call(fetchWitnessAnnotations, action.witness);
    yield put(loadedWitnessAnnotations(action.witness, annotations));
}

function* watchLoadAnnotations() {
    yield takeLatest(LOAD_WITNESS_ANNOTATIONS, loadAnnotations)
}

/** Root **/

export default function* rootSaga() {
    yield [
        watchLoadInitialData(),
        watchSelectedText(),
        watchLoadAnnotations()
    ]
}