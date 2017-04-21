import arrayToObject from 'lib/arrayToObject'
import * as actions from 'actions'
import Annotation from 'lib/Annotation'
import Witness from 'lib/Witness'
import Source from 'lib/Source'
import Text from 'lib/Text'

// Data

export const initialDataState = {
    texts: [],
    textsById: {},
    sources: [],
    sourcesById: {},
    textWitnessesById: {},
    witnessesById: {},
    witnessAnnotationsById: {},
    witnessActiveAnnotationsById: {},
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
    const allWitnessesById = {
        ...state.witnessesById,
        ...witnessesById
    };
    return {
        ...state,
        textWitnessesById: textWitnessesById,
        witnessesById: allWitnessesById,
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

function addedAnnotation(state, action) {
    let annotation = action.annotation;
    let witness = annotation.witness;
    if (!state.witnessActiveAnnotationsById[witness.id]) {
        state.witnessActiveAnnotationsById[witness.id] = [];
    }
    let activeAnnotations = state.witnessActiveAnnotationsById[witness.id];
    if (!activeAnnotations) {
        activeAnnotations = []
    } else {
        activeAnnotations = [
            ...activeAnnotations
        ]
    }
    if (activeAnnotations.indexOf(annotation.id) == -1) {
        activeAnnotations.push(annotation.id);
    }
    let witnessActiveAnnotationsById = {
        ...state.witnessActiveAnnotationsById
    };
    witnessActiveAnnotationsById[witness.id] = activeAnnotations;

    return {
        ...state,
        witnessActiveAnnotationsById: witnessActiveAnnotationsById
    }
}

function removedAnnotation(state, action) {
    let annotation = action.annotation;
    let witness = annotation.witness;
    let activeAnnotations = state.witnessActiveAnnotationsById[witness.id];
    if (activeAnnotations) {
        activeAnnotations = activeAnnotations.filter(element => element != annotation.id);
    }
    let witnessActiveAnnotationsById = {
        ...state.witnessActiveAnnotationsById
    };
    witnessActiveAnnotationsById[witness.id] = activeAnnotations;
    return {
        ...state,
        witnessActiveAnnotationsById: witnessActiveAnnotationsById
    }
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
dataReducers[actions.ADDED_ANNOTATION] = addedAnnotation;
dataReducers[actions.REMOVED_ANNOTATION] = removedAnnotation;
export default dataReducers;

// Selectors

export const getText = (state, textId) => {
    const textData = state.textsById[textId];
    let text = null;
    if (textData) {
        text = new Text(textData.id, textData.name);
    }
    return text;
};

export const getSource = (state, sourceId) => {
    const sourceData = state.sourcesById[sourceId];
    let source = null;
    if (sourceData) {
        source = new Source(sourceData.id, sourceData.name);
    }
    return source;
};

// cache witnesses as they can have large content values.
const cachedWitnesses = {};
export const getWitness = (state, witnessId) => {
    if (!witnessId) {
        return null;
    }
    if (cachedWitnesses.hasOwnProperty(witnessId)) {
        return cachedWitnesses[witnessId];
    }
    const witnessData = state.witnessesById[witnessId];
    let witness = null;
    if (witnessData) {
        const source = getSource(state, witnessData.source);
        const text = getText(state, witnessData.text);
        witness = new Witness(
            witnessData.id,
            text,
            source,
            witnessData.content,
            witnessData.is_base
        );
    }
    cachedWitnesses[witnessData.id] = witness;
    return witness;
};

export const getBaseWitness = (state, textId) => {
    let baseWitness = null;
    if (state.textWitnessesById.hasOwnProperty(textId)) {
        const witnesses = state.textWitnessesById[textId];
        for (let witnessId of Object.keys(witnesses)) {
            const witness = witnesses[witnessId];
            if (!baseWitness || witness.is_base) {
                baseWitness = witness;
            }
        }
        if (baseWitness) {
            baseWitness = getWitness(state, baseWitness.id);
        }
    }
    return baseWitness;
};

export function annotationFromData(state, annotationData) {
    let witness = getWitness(state, annotationData.witness);
    let creatorWitness = null;
    let creatorUser = null;
    if (annotationData.creator_witness) {
        creatorWitness = getWitness(state, annotationData.creator_witness);
    }
    let annotation = new Annotation(
        annotationData.id,
        witness,
        annotationData.start,
        annotationData.length,
        annotationData.content,
        (creatorWitness) ? creatorWitness : creatorUser
    );
    return annotation;
}

export const getAnnotationsForWitnessId = (state, witnessId) => {
    return state.witnessAnnotationsById[witnessId];
};

export const getActiveAnnotationsForWitnessId = (state, witnessId) => {
    return state.witnessActiveAnnotationsById[witnessId];
};

export const getAnnotationData = (state, witnessId, annotationId) => {
    let annotationData = null;
    const witnessAnnotations = state.witnessAnnotationsById[witnessId];
    if (witnessAnnotations) {
        annotationData = witnessAnnotations[annotationId];
    }
    return annotationData;
};