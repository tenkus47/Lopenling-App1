/** Actions types **/

// Data

export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';
export const LOADING_INITIAL_DATA = 'LOADING_INITIAL_DATA';
export const LOADED_INITIAL_DATA = 'LOADED_INITIAL_DATA';

export const LOAD_SOURCES = 'LOAD_SOURCES';
export const LOADING_SOURCES = 'LOADING_SOURCES';
export const LOADED_SOURCES = 'LOADED_SOURCES';

export const LOAD_TEXTS = 'LOAD_TEXTS';
export const LOADING_TEXTS = 'LOADING_TEXTS';
export const LOADED_TEXTS = 'LOADED_TEXTS';

export const LOAD_TEXT_DATA = 'LOAD_TEXT_DATA';
export const LOADING_TEXT_DATA = 'LOADING_TEXT_DATA';

export const LOAD_WITNESSES = 'LOAD_WITNESSES';
export const LOADING_WITNESSES = 'LOADING_WITNESSES';
export const LOADED_WITNESSES = 'LOADED_WITNESSES';

export const LOAD_WITNESS_ANNOTATIONS = 'LOAD_WITNESS_ANNOTATIONS';
export const LOADING_WITNESS_ANNOTATIONS = 'LOADING_WITNESS_ANNOTATIONS';
export const LOADED_WITNESS_ANNOTATIONS = 'LOADED_WITNESS_ANNOTATIONS';

export const LOADED_TEXT_DATA = 'LOADED_TEXT_DATA';

// UI

export const SELECTED_TEXT = 'textList/SELECTED_TEXT';
export const CHANGED_SEARCH_VALUE = 'textList/CHANGED_SEARCH_VALUE';


/** Action creators **/


/* DATA */


// TEXTS

export function loadTexts() {
    return {
        type: LOAD_TEXTS,
    };
}

export function loadingTexts() {
    return {
        type: LOADING_TEXTS,
    };
}

export function loadedTexts(texts) {
    return {
        type: LOADED_TEXTS,
        texts,
    };
}

// SOURCES

export function loadSources() {
    return {
        type: LOAD_SOURCES,
    };
}

export function loadingSources() {
    return {
        type: LOADING_SOURCES,
    };
}

export function loadedSources(sources) {
    return {
        type: LOADED_SOURCES,
        sources,
    };
}

// INITIAL DATA

export function loadInitialData() {
    return {
        type: LOAD_INITIAL_DATA,
    };
}

export function loadingInitialData() {
    return {
        type: LOADING_INITIAL_DATA,
    };
}

export function loadedInitialData() {
    return {
        type: LOADED_INITIAL_DATA,
    };
}

export function loadTextData(text) {
    return {
        type: LOAD_TEXT_DATA,
        text,
    };
}

export function loadingTextData(text) {
    return {
        type: LOADING_TEXT_DATA,
        text,
    };
}

export function loadedTextData(text) {
    return {
        type: LOADED_TEXT_DATA,
        text,
    };
}

// WITNESSES

export function loadWitnesses(text) {
    return {
        type: LOAD_WITNESSES,
        text,
    };
}

export function loadingWitnesses(text) {
    return {
        type: LOADING_WITNESSES,
        text,
    };
}

export function loadedWitnesses(text, witnesses) {
    return {
        type: LOADED_WITNESSES,
        text,
        witnesses,
    };
}

// ANNOTATIONS

export function loadWitnessAnnotations(witness) {
    return {
        type: LOAD_WITNESS_ANNOTATIONS,
        witness,
    };
}

export function loadingWitnessAnnotations(witness) {
    return {
        type: LOADING_WITNESS_ANNOTATIONS,
        witness,
    };
}

export function loadedWitnessAnnotations(witness, annotations) {
    return {
        type: LOADED_WITNESS_ANNOTATIONS,
        witness,
        annotations,
    };
}

// ui

export function selectedText(text) {
    return {
        type: SELECTED_TEXT,
        text,
    };
}

export function changedSearchValue(searchValue) {
    return {
        type: CHANGED_SEARCH_VALUE,
        searchValue,
    };
}
