import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import AnnotationControls from './AnnotationControls'
import addTibetanShay from 'lib/addTibetanShay'
import { addedAnnotation, removedAnnotation, changedActiveAnnotation } from 'actions'
import { BASE_ANNOTATION_ID } from 'lib/AnnotatedText'
import _ from 'lodash'

const getAnnotationsData = (annotations) => {
    let annotationsData = [];
    if (annotations) {
        let annotationsById = {};
        for (let i=0; i < annotations.length; i++) {
            let annotation = annotations[i];
            const id = annotation.content + annotation.start;
            if (annotationsById[id]) {
                let existingAnnotation = annotationsById[id];
                existingAnnotation.name += ' ' + addTibetanShay(annotation.getSourceName());
                if (annotation.id < existingAnnotation.id) {
                    existingAnnotation.id = annotation.id;
                }
            } else {
                annotationsById[id] = {
                    name: addTibetanShay(annotation.getSourceName()),
                    content: annotation.content,
                    id: annotation.id
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

const getAvailableAnnotations = (annotatedText, activeAnnotation, annotationPositions) => {

    let availableAnnotations = [activeAnnotation];
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
            availableAnnotations.push(annotation);
        }
    }

    return availableAnnotations;
};

const mapStateToProps = (state, ownProps) => {
    if (!ownProps.activeAnnotation) {
        return {
            annotationsData: null,
            activeAnnotation: null,
            baseAnnotation: null,
            availableAnnotations: null
        }
    }
    let activeAnnotation = ownProps.activeAnnotation;
    const annotations = getAvailableAnnotations(ownProps.annotatedText, activeAnnotation, ownProps.annotationPositions);
    if (annotations.length == 0) {
        return {
            annotationsData: [],
            activeAnnotation: null,
            baseAnnotation: null
        }
    }
    let annotationsData = getAnnotationsData(annotations);

    let baseAnnotation = null;
    if (activeAnnotation.id == BASE_ANNOTATION_ID) {
        baseAnnotation = activeAnnotation;
    } else {
        let [start, length] = ownProps.annotatedText.getPositionOfAnnotation(activeAnnotation);
        baseAnnotation = ownProps.annotatedText.getBaseAnnotation(start, length);
        const baseAnnotationData = getAnnotationsData([baseAnnotation]);
        annotationsData = baseAnnotationData.concat(annotationsData);
    }

    // make sure base annotation is first
    annotationsData.sort((a, b) => a.id - b.id);


    return {
        annotationsData: annotationsData,
        activeAnnotation: activeAnnotation,
        baseAnnotation: baseAnnotation,
        availableAnnotations: annotations
    }
};

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
            let actions = [];
            if (annotationId != stateProps.activeAnnotation.id) {
                if (annotationId != BASE_ANNOTATION_ID) {
                    actions.push(addedAnnotation(selectedAnnotation));
                }
                if (stateProps.activeAnnotation.id != BASE_ANNOTATION_ID) {
                    actions.push(removedAnnotation(stateProps.activeAnnotation))
                }
                actions.push(changedActiveAnnotation(selectedAnnotation));

                dispatch(
                    batchActions(actions)
                )
            }
        }
    }
};

const AnnotationControlsContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(AnnotationControls);

export default AnnotationControlsContainer;

