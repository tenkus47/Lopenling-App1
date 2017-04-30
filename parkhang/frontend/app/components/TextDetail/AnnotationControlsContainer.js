import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import AnnotationControls from './AnnotationControls'
import addTibetanShay from 'lib/addTibetanShay'
import * as reducers from 'reducers'
import * as actions from 'actions'
import { BASE_ANNOTATION_ID } from 'lib/AnnotatedText'
import Annotation, { ANNOTATION_TYPES, getNaturalId, TemporaryAnnotation } from 'lib/Annotation'
import _ from 'lodash'

const TEMPORARY_ANNOTATION_ID = -3;

const getAnnotationsData = (annotations) => {
    let annotationsData = [];
    if (annotations) {
        let annotationsById = {};
        for (let i=0; i < annotations.length; i++) {
            let annotation = annotations[i];
            const id = annotation.content + annotation.start;
            if (annotation.isTemporary) {
                annotationsById[TEMPORARY_ANNOTATION_ID] = {
                    name: annotation.getSourceName(),
                    content: annotation.content,
                    id: annotation.id,
                    isTemporary: true
                }
            } else if (annotationsById[id]) {
                let existingAnnotation = annotationsById[id];
                existingAnnotation.name += ' ' + addTibetanShay(annotation.getSourceName());
                if (annotation.id < existingAnnotation.id) {
                    existingAnnotation.id = annotation.id;
                }
            } else {
                annotationsById[id] = {
                    name: addTibetanShay(annotation.getSourceName()),
                    content: annotation.content,
                    id: annotation.id,
                    userCreated: annotation.userCreated
                };
            }
        }
        annotationsData = Object.keys(annotationsById).reduce((arr, key) => {
            arr.push(annotationsById[key]);
            return arr;
        }, []);
    }

    return annotationsData;
};

const getAvailableAnnotations = (annotatedText, activeAnnotation, temporaryAnnotation, annotationPositions) => {

    let availableAnnotations = [];
    if (!temporaryAnnotation || activeAnnotation.naturalId !== temporaryAnnotation.naturalId) {
        availableAnnotations.push(activeAnnotation);
    }
    if (temporaryAnnotation) {
        availableAnnotations.push(temporaryAnnotation);
    }
    let [ start, length ] = annotatedText.getPositionOfAnnotation(activeAnnotation);
    let end = start + length;

    // Only include annotations if they encompass the whole annotation
    // i.e. not if activeAnnotation is a user annotation and combines
    // annotated text with normal text.
    let startAnnotations = annotationPositions[start];
    let endAnnotations = annotationPositions[end];
    let possibleAnnotations = [];
    if (startAnnotations) {
        possibleAnnotations = startAnnotations;
    }
    if (endAnnotations) {
        possibleAnnotations = possibleAnnotations.concat(endAnnotations);
    }
    for (let i=0; i < possibleAnnotations.length; i++) {
        const annotation = possibleAnnotations[i];
        if (annotation.start === activeAnnotation.start && annotation.length === activeAnnotation.length) {
            // If an annotation is being edited, there will be a temporary annotation
            // with the same natural id. If so, don't show the orignal version.
            //
            // We use natualId, as it normalises the id regardless of the original's
            // save state. e.g. Upon editing a witness variant, a new annotation will be
            // created. If the user is offline, that will not have been saved via the
            // API yet. The user could then edit this new annotation, creating a temporary
            // annotation based upon it. While this is being edited, the user could come
            // back online and the save operation will succeed. This will mean the id of
            // the temporary annotation will be different to the original edit, but naturalId
            // will be the same.
            if (!temporaryAnnotation || annotation.naturalId !== temporaryAnnotation.naturalId) {
                availableAnnotations.push(annotation);
            }
        }
    }

    availableAnnotations = _.uniqWith(availableAnnotations, (a, b) => a.id === b.id);

    return availableAnnotations;
};

const getTemporaryAnnotation = (state, type, user, text, start, length) => {
    const annotations = reducers.getTemporaryAnnotations(state, text.id);
    const temporaryId = getNaturalId(type, user, text, start, length);
    if (annotations && annotations[temporaryId]) {
        return annotations[temporaryId].annotation;
    } else {
        return null;
    }
};

export const mapStateToProps = (state, ownProps) => {
    const text = reducers.getSelectedText(state);
    const user = reducers.getUser(state);
    const activeAnnotation = ownProps.activeAnnotation;
    const inline = ownProps.inline;
    if (!activeAnnotation) {
        return {
            annotationsData: null,
            activeAnnotation: null,
            baseAnnotation: null,
            availableAnnotations: null,
            user: user,
            temporaryAnnotation: null,
            inline: inline
        }
    }

    const [start, length] = ownProps.annotatedText.getPositionOfAnnotation(activeAnnotation);
    const temporaryVariant = getTemporaryAnnotation(state, ANNOTATION_TYPES.variant, user, text, start, activeAnnotation.length);
    const annotations = getAvailableAnnotations(ownProps.annotatedText, activeAnnotation, temporaryVariant, ownProps.annotationPositions);
    let annotationsData = getAnnotationsData(annotations);

    let baseAnnotation = null;
    if (activeAnnotation.id == BASE_ANNOTATION_ID) {
        baseAnnotation = activeAnnotation;
    } else {
        baseAnnotation = ownProps.annotatedText.getBaseAnnotation(start, length);
        const baseAnnotationData = getAnnotationsData([baseAnnotation]);
        annotationsData = baseAnnotationData.concat(annotationsData);
    }

    // make sure temporary annotation is first, then user created, then base annotation
    annotationsData.sort((a, b) => {
        if (a.isTemporary) {
            return -1;
        } else if (b.isTemporary) {
            return 1;
        } else if (a.userCreated) {
            return -1;
        } else if (b.userCreated) {
            return 1;
        } else {
            return a.id - b.id
        }
    });


    return {
        annotationsData: annotationsData,
        activeAnnotation: activeAnnotation,
        baseAnnotation: baseAnnotation,
        availableAnnotations: annotations,
        user: user,
        temporaryAnnotation: temporaryVariant,
        inline: inline
    }
};

function getAnnotation(annotationId, stateProps) {
    let selectedAnnotation = null;
    if (annotationId == BASE_ANNOTATION_ID) {
        selectedAnnotation = stateProps.baseAnnotation;
    } else {
        if (stateProps.temporaryAnnotation
            && stateProps.temporaryAnnotation.id === annotationId)
        {
            selectedAnnotation = stateProps.temporaryAnnotation;
        } else {
            selectedAnnotation = _.find(
                stateProps.availableAnnotations,
                (value) => value.id == annotationId
            );
        }
    }
    return selectedAnnotation;
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    return {
        ...stateProps,
        ...ownProps,
        didSelectAnnotation: (annotationId) => {
            let selectedAnnotation = null;
            if (annotationId == BASE_ANNOTATION_ID) {
                selectedAnnotation = stateProps.baseAnnotation;
            } else {
                selectedAnnotation = _.find(
                    stateProps.availableAnnotations,
                    (value) => value.id == annotationId
                );
            }
            let actionsBatch = [];
            if (annotationId != stateProps.activeAnnotation.id) {
                if (annotationId != BASE_ANNOTATION_ID) {
                    actionsBatch.push(actions.appliedAnnotation(selectedAnnotation));
                }
                if (stateProps.activeAnnotation.id != BASE_ANNOTATION_ID) {
                    actionsBatch.push(actions.removedAppliedAnnotation(stateProps.activeAnnotation))
                }
                actionsBatch.push(actions.changedActiveAnnotation(selectedAnnotation));

                dispatch(
                    batchActions(actionsBatch)
                )
            }
        },
        editAnnotation: (annotationId) => {
            const selectedAnnotation = getAnnotation(annotationId, stateProps);
            const temporaryAnnotation = new TemporaryAnnotation(
                selectedAnnotation,
                selectedAnnotation.witness,
                selectedAnnotation.start,
                selectedAnnotation.length,
                selectedAnnotation.content,
                stateProps.user
            );
            dispatch(
                actions.addedTemporaryAnnotation(temporaryAnnotation, true)
            );
        },
        saveAnnotation: (annotationId, content) => {
            const selectedAnnotation = getAnnotation(annotationId, stateProps);

            if (!selectedAnnotation.isTemporary) {
                console.warn('Tried to save a non-temporary annotation: %o', selectedAnnotation);
                return;
            }
            const newAnnotation = new Annotation(
                selectedAnnotation.id,
                selectedAnnotation.witness,
                selectedAnnotation.start,
                selectedAnnotation.length,
                content,
                stateProps.user
            );
            newAnnotation.basedOn = selectedAnnotation.basedOn;
            let actionsBatch = [];
            let action = null;
            if (newAnnotation.savedId) {
                action = actions.updatedAnnotation;
            } else {
                action = actions.createdAnnotation;
            }
            actionsBatch.push(action(newAnnotation));
            actionsBatch.push(actions.removedTemporaryAnnotation(selectedAnnotation));
            actionsBatch.push(actions.appliedAnnotation(newAnnotation));
            actionsBatch.push(actions.changedActiveAnnotation(newAnnotation));

            dispatch(
                batchActions(actionsBatch)
            );
        },
        cancelEditAnnotation: (annotationId) => {
            const selectedAnnotation = getAnnotation(annotationId, stateProps);
            if (!selectedAnnotation.isTemporary) {
                console.warn('Tried to save a non-temporary annotation: %o', selectedAnnotation);
                return;
            }

            const cancelAction = actions.removedTemporaryAnnotation(selectedAnnotation);
            dispatch(cancelAction);
        }
    }
};

const AnnotationControlsContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(AnnotationControls);

export default AnnotationControlsContainer;

