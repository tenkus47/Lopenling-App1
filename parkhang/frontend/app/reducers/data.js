import arrayToObject from 'lib/arrayToObject'
import * as actions from 'actions'

// Data

export const initialDataState = {
    texts: [],
    textsById: {},
    sources: [],
    sourcesById: {},
    textWitnessesById: {},
    witnessAnnotationsById: {},
    loadingInitialData: false,
    loadedInitialData: false,
    loadingTexts: false,
    loadedTexts: false,
    loadingSources: false,
    loadedSources: false,
    loadingWitnesses: false,
    loadedWitnesses: false,
    loadingAnnotations: false,
    loadedAnnotations: false,
};

function loadingInitialData(state) {
    return {
        ...state,
        loadingInitialData: true,
        loadedInitialData: false
    };
}

function loadedInitialData(state) {
    return {
        ...state,
        loadingInitialData: false,
        loadedInitialData: true
    };
}

function loadingTexts(state) {
    return {
        ...state,
        loadingTexts: true,
        loadedTexts: false
    }
}

function loadedTexts(state, action) {
    const textsById = arrayToObject(action.texts, 'id');
    return {
        ...state,
        texts: action.texts,
        textsById: textsById,
        loadingTexts: false,
        loadedTexts: true
    };
}

function loadingSources(state, action) {
    return {
        ...state,
        loadingSources: true,
        loadedSources: false
    }
}

function loadedSources(state, action) {
    const sourcesById = arrayToObject(action.sources, 'id');
    return {
        ...state,
        sources: action.sources,
        sourcesById: sourcesById,
        loadingSources: false,
        loadedSources: true
    };
}

function loadingWitnesses(state) {
    return {
        ...state,
        loadingWitnesses: true,
        loadedWitnesses: false
    };
}

function loadedWitnesses(state, action) {
    const witnessesById = arrayToObject(action.witnesses, 'id');
    const textWitnessesById = {
        ...state.textWitnessesById,
        [action.text.id]: witnessesById
    };
    return {
        ...state,
        textWitnessesById: textWitnessesById,
        loadingWitnesses: false,
        loadedWitnesses: true
    };
}

function loadingAnnotations(state) {
    return {
        ...state,
        loadingAnnotations: true,
        loadedAnnotations: false
    };
}

function loadedAnnotations(state, action) {
    const annotationsById = arrayToObject(action.annotations, 'id');
    const witnessAnnotationsById = {
        ...state.witnessAnnotationsById,
        [action.witness.id]: annotationsById
    };
    return {
        ...state,
        witnessAnnotationsById: witnessAnnotationsById,
        loadingAnnotations: false,
        loadedAnnotations: true
    };
}


const dataReducers = {};
dataReducers[actions.LOADING_INITIAL_DATA] = loadingInitialData;
dataReducers[actions.LOADED_INITIAL_DATA] = loadedInitialData;
dataReducers[actions.LOADING_TEXTS] = loadingTexts;
dataReducers[actions.LOADED_TEXTS] = loadedTexts;
dataReducers[actions.LOADING_SOURCES] = loadingSources;
dataReducers[actions.LOADED_SOURCES] = loadedSources;
dataReducers[actions.LOADING_WITNESSES] = loadingWitnesses;
dataReducers[actions.LOADED_WITNESSES] = loadedWitnesses;
dataReducers[actions.LOADING_WITNESS_ANNOTATIONS] = loadingAnnotations;
dataReducers[actions.LOADED_WITNESS_ANNOTATIONS] = loadedAnnotations;
export default dataReducers;