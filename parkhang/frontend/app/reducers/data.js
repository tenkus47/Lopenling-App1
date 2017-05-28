import _ from 'lodash'
import arrayToObject from 'lib/arrayToObject'
import * as actions from 'actions'
import Annotation, { ANNOTATION_TYPES } from 'lib/Annotation'
import Witness from 'lib/Witness'
import Source from 'lib/Source'
import Text from 'lib/Text'
import User from 'lib/User'
import { getUniqueId } from 'lib/Annotation'

// Data

let _annotationCache = {};
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
    loadedAppliedAnnotations: false
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

function uniqueIdFromAnnotationData(data) {
    const userCreated = data.creator_user !== null;
    const creatorId = (userCreated) ? data.creator_user : data.creator_witness;
    return getUniqueId(data.type, userCreated, creatorId, data.witness, data.start, data.length);
}

function markSaved(annotations) {
    for (let i=0; i < annotations.length; i++) {
        annotations[i].is_saved = true;
    }
}

function loadedAnnotations(state, action) {
    _annotationCache = {};
    const annotations = markSaved(action.annotations);
    const annotationsById = arrayToObject(
        action.annotations,
        'unique_id'
    );
    const witnessAnnotationsById = {
        ...state.witnessAnnotationsById,
        [action.witness.id]: annotationsById
    };
    return {
        ...state,
        witnessAnnotationsById: witnessAnnotationsById,
        loadingAnnotations: (!state.loadedAppliedAnnotations),
        loadedAnnotations: true
    };
}

function loadedAppliedAnnotations(state, action) {
    const witnessActiveAnnotationsById = {
        ...state.witnessActiveAnnotationsById,
        [action.witness.id]: action.annotations
    };
    return {
        ...state,
        witnessActiveAnnotationsById: witnessActiveAnnotationsById,
        loadingAnnotations: (!state.loadedAnnotations),
        loadedAppliedAnnotations: true
    }
}

function appliedAnnotation(state, action) {
    let annotation = action.annotation;
    let witness = annotation.witness;
    let witnessAnnotations = state.witnessActiveAnnotationsById[witness.id];
    if (witnessAnnotations && witnessAnnotations.indexOf(annotation.uniqueId) !== -1) {
        return state;
    }
    if (!witnessAnnotations) {
        witnessAnnotations = [];
    }

    return {
        ...state,
        witnessActiveAnnotationsById: {
            ...state.witnessActiveAnnotationsById,
            [witness.id]: [
                ...witnessAnnotations,
                annotation.uniqueId
            ]
        }
    };
}

function removedAppliedAnnotation(state, action) {
    let annotation = action.annotation;
    let witness = annotation.witness;
    let activeAnnotations = state.witnessActiveAnnotationsById[witness.id];
    if (activeAnnotations) {
        activeAnnotations = activeAnnotations.filter(element => element != annotation.uniqueId);
    }

    return {
        ...state,
        witnessActiveAnnotationsById: {
            ...state.witnessActiveAnnotationsById,
            [witness.id]: activeAnnotations
        }
    }
}

function createdAnnotation(state, action) {
    const annotation = action.annotation;
    annotation.save();
    const annotationData = dataFromAnnotation(annotation);
    const witness = annotation.witness;

    return {
        ...state,
        witnessAnnotationsById: {
            ...state.witnessAnnotationsById,
            [witness.id]: {
                ...state.witnessAnnotationsById[witness.id],
                [annotation.uniqueId]: annotationData
            }
        }
    }
}

function updatedAnnotation(state, action) {
    const annotation = action.annotation;
    if (!annotation.isSaved) {
        console.warn('Updating annotation which is not saved: %o', action);
    }
    return createdAnnotation(state, action);
}

function deletedAnnotation(state, action) {
    const annotation = action.annotation;
    if (!annotation.isSaved) {
        console.warn('Deleting annotation which is not saved: %o', action);
    }
    const witness = annotation.witness;
    let witnessAnnotations = state.witnessAnnotationsById[witness.id];
    if (witnessAnnotations) {
        witnessAnnotations = {
            ...witnessAnnotations
        };
        if (witnessAnnotations.hasOwnProperty(annotation.uniqueId)) {
            delete witnessAnnotations[annotation.uniqueId];
        }
    } else {
        witnessAnnotations = {};
    }

    return {
        ...state,
        witnessAnnotationsById: {
            ...state.witnessAnnotationsById,
            [witness.id]: witnessAnnotations
        }
    }
}

/**
 * Deletes the existing temporary annotation if it is present,
 * then adds the saved version.
 * @param state
 * @param action
 */
function savedAnnotation(state, action) {
    const annotation = action.annotation;
    const annotationData = dataFromAnnotation(annotation);
    const witness = annotation.witness;

    let witnessAnnotations = state.witnessAnnotationsById[witness.id];
    if (witnessAnnotations) {
        witnessAnnotations = {
            ...witnessAnnotations
        };
    } else {
        witnessAnnotations = {};
    }

    return {
        ...state,
        witnessAnnotationsById: {
            ...state.witnessAnnotationsById,
            [witness.id]: {
                ...witnessAnnotations,
                [annotation.uniqueId]: annotationData
            }
        }
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
dataReducers[actions.LOADED_WITNESS_APPLIED_ANNOTATIONS] = loadedAppliedAnnotations;
dataReducers[actions.APPLIED_ANNOTATION] = appliedAnnotation;
dataReducers[actions.REMOVED_APPLIED_ANNOTATION] = removedAppliedAnnotation;
dataReducers[actions.CREATED_ANNOTATION] = createdAnnotation;
dataReducers[actions.UPDATED_ANNOTATION] = updatedAnnotation;
dataReducers[actions.DELETED_ANNOTATION] = deletedAnnotation;
dataReducers[actions.SAVED_ANNOTATION] = savedAnnotation;
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
        source = new Source(sourceData.id, sourceData.name, sourceData.is_default_base_text);
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
    } else if (annotationData.creator_user) {
        creatorUser = new User(annotationData.creator_user, "");
    } else {
        console.warn('No creator found in annotationData: %o', annotationData);
    }
    let basedOn = null;
    if (annotationData.original) {
        basedOn = getAnnotation(state, annotationData.witness, annotationData.original);
    }
    let annotation = new Annotation(
        annotationData.id,
        witness,
        annotationData.start,
        annotationData.length,
        annotationData.content,
        (creatorWitness) ? creatorWitness : creatorUser,
        annotationData.type,
        annotationData.unique_id,
        basedOn
    );
    if (annotationData.is_saved) {
        annotation.save();
    }

    return annotation;
}

export function dataFromAnnotation(annotation) {
    return {
        id: annotation.id,
        type: annotation.type,
        witness: annotation.witness.id,
        start: annotation.start,
        length: annotation.length,
        content: annotation.content,
        creator_witness: (annotation.userCreated) ? null : annotation.creator.id,
        creator_user: (annotation.userCreated) ? annotation.creator.id : null,
        unique_id: annotation.uniqueId,
        original: (annotation.basedOn) ? annotation.basedOn.uniqueId : null,
        is_saved: annotation.isSaved
    }
}

export const getAnnotationsForWitnessId = (state, witnessId, annotationType=ANNOTATION_TYPES.variant) => {
    if (!_annotationCache[witnessId]) {
        _annotationCache[witnessId] = {};
    }
    if (!_annotationCache[witnessId][annotationType]) {
        let annotations = state.witnessAnnotationsById[witnessId];
        _annotationCache[witnessId][annotationType] = _.pickBy(annotations, (annotation, key) => annotation.type === annotationType);
    }
    return _annotationCache[witnessId][annotationType];
};

export const getAnnotation = (state, witnessId, annotationUniqueId) => {
    const annotations = state.witnessAnnotationsById[witnessId];
    const data = annotations[annotationUniqueId];
    if (data) {
        return annotationFromData(state, data);
    } else {
        return null;
    }
};

export const getActiveAnnotationsForWitnessId = (state, witnessId) => {
    return state.witnessActiveAnnotationsById[witnessId];
};

export const getAnnotationData = (state, witnessId, annotationUniqueId) => {
    let annotationData = null;
    const witnessAnnotations = state.witnessAnnotationsById[witnessId];
    if (witnessAnnotations) {
        annotationData = witnessAnnotations[annotationUniqueId];
    }
    return annotationData;
};