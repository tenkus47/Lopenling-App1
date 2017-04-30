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
export const LOADED_WITNESS_APPLIED_ANNOTATIONS = 'LOADED_WITNESS_APPLIED_ANNOTATIONS';

export const LOADED_TEXT_DATA = 'LOADED_TEXT_DATA';

// These are intended for when the data will be saved via the server API
export const APPLIED_ANNOTATION = 'text/APPLIED_ANNOTATION';
export const REMOVED_APPLIED_ANNOTATION = 'text/REMOVED_APPLIED_ANNOTATION';

export const CREATED_ANNOTATION = 'text/CREATED_ANNOTATION';
export const UPDATED_ANNOTATION = 'text/UPDATED_ANNOTATION';
export const DELETED_ANNOTATION = 'text/DELETED_ANNOTATION';
export const SAVED_ANNOTATION = 'text/SAVED_ANNOTATION';

// These are for local UI changes
export const ADDED_TEMPORARY_ANNOTATION = 'text/ADDED_TEMPORARY_ANNOTATION';
export const UPDATED_TEMPORARY_ANNOTATION = 'text/UPDATED_TEMPORARY_ANNOTATION';
export const REMOVED_TEMPORARY_ANNOTATION = 'text/REMOVED_TEMPORARY_ANNOTATION';

// UI

export const SELECTED_TEXT = 'textList/SELECTED_TEXT';
export const CHANGED_SEARCH_VALUE = 'textList/CHANGED_SEARCH_VALUE';

export const CHANGED_SHOW_PAGE_IMAGES = 'text/CHANGED_SHOW_PAGE_IMAGES';

export const CHANGED_SELECTED_SEGMENT = 'text/CHANGED_SELECTED_SEGMENT';
export const DESELECTED_SEGMENT = 'text/DESELECTED_SEGMENT';

export const CHANGED_ACTIVE_ANNOTATION = 'text/CHANGED_ACTIVE_ANNOTATION';

export const CHANGED_TEXT_LIST_VISIBLE = 'textList/CHANGED_TEXT_LIST_VISIBLE';

// User
export const USER_LOGGED_IN = 'users/USER_LOGGED_IN';


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

export function loadedWitnessAppliedAnnotations(witness, annotations) {
    return {
        type: LOADED_WITNESS_APPLIED_ANNOTATIONS,
        witness,
        annotations
    }
}

/**
 *
 * @param {Annotation} annotation
 */
export function appliedAnnotation(annotation) {
    return {
        type: APPLIED_ANNOTATION,
        annotation
    }
}

export function removedAppliedAnnotation(annotation) {
    return {
        type: REMOVED_APPLIED_ANNOTATION,
        annotation
    }
}

/**
 * The given annotation has been created and applied.
 * @param {Annotation} annotation
 * @return {{type: string, annotation: *}}
 */
export function createdAnnotation(annotation) {
    return {
        type: CREATED_ANNOTATION,
        annotation
    }
}

/**
 * The given annotation has been updated with new data.
 *
 * @param {Annotation} annotation
 * @return {{type: string, annotation: *}}
 */
export function updatedAnnotation(annotation) {
    return {
        type: UPDATED_ANNOTATION,
        annotation
    }
}

/**
 * The given annotation has been updated with new data.
 *
 * @param {Annotation} annotation
 * @return {{type: string, annotation: *}}
 */
export function deletedAnnotation(annotation) {
    return {
        type: DELETED_ANNOTATION,
        annotation
    }
}

/**
 * The annotation has been succesfully saved and given a
 * valid id.
 * @param {Annotation} annotation
 * @return {{type: string, annotation: *}}
 */
export function savedAnnotation(annotation) {
    return {
        type: SAVED_ANNOTATION,
        annotation
    }
}


/* USER */
export function userLoggedIn(userId, userName) {
    return {
        type: USER_LOGGED_IN,
        userId,
        userName
    }
}

/* UI */

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

export function changedShowPageImages(showPageImages) {
    return {
        type: CHANGED_SHOW_PAGE_IMAGES,
        showPageImages,
    }
}

/**
 *
 * @param {TextSegment} segment
 * @returns {{type}}
 */
export function changedSelectedSegment(segment) {
    return {
        type: CHANGED_SELECTED_SEGMENT,
        segment,
    }
}

/**
 *
 * @param {Annotation} annotation
 * @param {boolean} isActive - whether the annotation is currently active
 */
export function addedTemporaryAnnotation(annotation, isActive) {
    return {
        type: ADDED_TEMPORARY_ANNOTATION,
        annotation,
        isActive
    }
}

/**
 *
 * @param {Annotation} annotation
 * @param {boolean} isActive - whether the annotation is currently active
 */
export function updatedTemporaryAnnotation(annotation, isActive) {
    return {
        type: UPDATED_TEMPORARY_ANNOTATION,
        annotation,
        isActive
    }
}

export function removedTemporaryAnnotation(annotation) {
    return {
        type: REMOVED_TEMPORARY_ANNOTATION,
        annotation
    }
}

export function changedActiveAnnotation(annotation) {
    return {
        type: CHANGED_ACTIVE_ANNOTATION,
        annotation
    }
}

export function changedTextListVisible(isVisible) {
    return {
        type: CHANGED_TEXT_LIST_VISIBLE,
        isVisible
    }
}