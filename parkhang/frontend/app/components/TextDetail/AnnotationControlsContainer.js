import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import AnnotationControls from './AnnotationControls'
import addTibetanShay from 'lib/addTibetanShay'
import * as reducers from 'reducers'
import * as actions from 'actions'
import { BASE_ANNOTATION_ID } from 'lib/AnnotatedText'
import Annotation, { ANNOTATION_TYPES, TemporaryAnnotation } from 'lib/Annotation'
import _ from 'lodash'

const TEMPORARY_ANNOTATION_ID = -3;
const BASE_NAME = 'Working';

const getAnnotationsData = (annotations, sources) => {
    let annotationsData = [];
    let baseSources = sources.map(source => source.name);
    if (annotations) {
        let annotationsById = {};
        for (let i=0; i < annotations.length; i++) {
            let annotation = annotations[i];
            let id = annotation.content + annotation.start;
            if (annotation.isTemporary) {
                annotationsById[TEMPORARY_ANNOTATION_ID] = {
                    name: annotation.getSourceName(),
                    content: annotation.content,
                    id: annotation.uniqueId,
                    isTemporary: true,
                    annotation: annotation
                };
                baseSources = baseSources.filter(a => a !== annotation.getSourceName());
                id = TEMPORARY_ANNOTATION_ID;
            } else if (annotationsById[id]) {
                let existingAnnotation = annotationsById[id];
                existingAnnotation.name += ' ' + addTibetanShay(annotation.getSourceName());
                baseSources = baseSources.filter(a => a !== annotation.getSourceName());
            } else {
                annotationsById[id] = {
                    name: addTibetanShay(annotation.getSourceName()),
                    content: annotation.content,
                    id: annotation.uniqueId,
                    userCreated: annotation.userCreated,
                    annotation: annotation
                };
                baseSources = baseSources.filter(a => a !== annotation.getSourceName());
            }
            if (!annotation.userCreated && annotation.creator.isBase) {
                annotationsById[id].isBase = true;
            } else {
                annotationsById[id].isBase = false;
            }
        }
        baseSources.unshift(BASE_NAME);
        annotationsData = Object.keys(annotationsById).reduce((arr, key) => {
            const annotationData = annotationsById[key];
            if (annotationData.isBase) {
                annotationData.name = baseSources.reduce((prev, cur) => prev += " " + addTibetanShay(cur, ";"), '');
            }
            arr.push(annotationData);
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

    let possibleAnnotations = [];

    if (activeAnnotation.isInsertion) {
        const insertionAnnotations = annotationPositions['i'+start];
        if (insertionAnnotations) {
            possibleAnnotations = possibleAnnotations.concat(insertionAnnotations);
        }
        const activeInsertionAnnotations = annotationPositions[start];
        if (activeInsertionAnnotations) {
            possibleAnnotations = possibleAnnotations.concat(activeInsertionAnnotations);
        }
    } else {
        // Only include annotations if they encompass the whole annotation
        // i.e. not if activeAnnotation is a user annotation and combines
        // annotated text with normal text.
        let startAnnotations = annotationPositions[start];
        let endAnnotations = annotationPositions[end];

        if (startAnnotations) {
            possibleAnnotations = startAnnotations;
        }
        if (endAnnotations) {
            possibleAnnotations = possibleAnnotations.concat(endAnnotations);
        }
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

const getTemporaryAnnotation = (state, type, user, witness, start, length) => {
    const annotations = reducers.getTemporaryAnnotations(state, witness.text.id, start, length, type);
    if (annotations.length > 0) {
        return annotations[0];
    } else {
        return null;
    }
};

export const mapStateToProps = (state, ownProps) => {
    const user = reducers.getUser(state);
    const activeAnnotation = ownProps.activeAnnotation;
    if (!activeAnnotation) {
        return {
            annotationsData: null,
            activeAnnotation: null,
            baseAnnotation: null,
            availableAnnotations: null,
            user: user,
            temporaryAnnotation: null,
            inline: null,
            firstSelectedSegment: null,
            splitTextRect: null
        }
    }
    const inline = ownProps.inline;
    const witness = activeAnnotation.witness;

    const temporaryVariant = getTemporaryAnnotation(state, ANNOTATION_TYPES.variant, user, witness, activeAnnotation.start, activeAnnotation.length);
    const annotations = getAvailableAnnotations(ownProps.annotatedText, activeAnnotation, temporaryVariant, ownProps.annotationPositions);
    const sources = reducers.getSources(state);
    let annotationsData = getAnnotationsData(annotations, sources);

    let baseAnnotation = null;
    if (activeAnnotation.id == BASE_ANNOTATION_ID) {
        baseAnnotation = activeAnnotation;
    } else {
        const [start, length] = ownProps.annotatedText.getPositionOfAnnotation(activeAnnotation);
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
            return a.annotation.id - b.annotation.id
        }
    });


    return {
        annotationsData: annotationsData,
        activeAnnotation: activeAnnotation,
        baseAnnotation: baseAnnotation,
        availableAnnotations: annotations,
        user: user,
        temporaryAnnotation: temporaryVariant,
        inline: inline,
        firstSelectedSegment: ownProps.firstSelectedSegment,
        splitTextRect: ownProps.splitTextRect
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    return {
        ...stateProps,
        ...ownProps,
        didSelectAnnotation: (annotation) => {
            let selectedAnnotation = null;
            if (annotation.id == BASE_ANNOTATION_ID) {
                selectedAnnotation = stateProps.baseAnnotation;
            } else {
                selectedAnnotation = _.find(
                    stateProps.availableAnnotations,
                    (value) => value.uniqueId == annotation.uniqueId
                );
            }
            let actionsBatch = [];
            if (annotation.uniqueId != stateProps.activeAnnotation.uniqueId) {
                if (annotation.id != BASE_ANNOTATION_ID) {
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
        editAnnotation: (selectedAnnotation) => {
            const basedOn = (selectedAnnotation.isBaseAnnotation || selectedAnnotation.userCreated) ? null : selectedAnnotation;
            const temporaryAnnotation = new TemporaryAnnotation(
                basedOn,
                selectedAnnotation.witness,
                selectedAnnotation.start,
                selectedAnnotation.length,
                selectedAnnotation.content,
                stateProps.user,
                selectedAnnotation.type
            );
            if (selectedAnnotation.userCreated) {
                // user annotations are updated
                temporaryAnnotation.uniqueId = selectedAnnotation.uniqueId;
                temporaryAnnotation.isSaved = selectedAnnotation.isSaved;
            }

            dispatch(
                actions.addedTemporaryAnnotation(temporaryAnnotation, true)
            );
        },
        saveAnnotation: (selectedAnnotation, content) => {

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
                stateProps.user,
                selectedAnnotation.type,
                selectedAnnotation.uniqueId,
                selectedAnnotation.basedOn
            );
            newAnnotation.isSaved = selectedAnnotation.isSaved;
            let actionsBatch = [];
            let action = null;
            if (newAnnotation.isSaved) {
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
        cancelEditAnnotation: (selectedAnnotation) => {
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

