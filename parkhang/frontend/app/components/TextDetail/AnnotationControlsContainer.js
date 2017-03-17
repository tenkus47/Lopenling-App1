import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import AnnotationControls from './AnnotationControls'
import { getWitness } from 'reducers'
import addTibetanShay from 'lib/addTibetanShay'
import { addedAnnotation, removedAnnotation, changedActiveAnnotation } from 'actions'
import { getActiveAnnotation } from 'reducers'
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
                let exisitngAnnotation = annotationsById[id];
                exisitngAnnotation.name += ' ' + addTibetanShay(annotation.getSourceName());
                if (annotation.id < exisitngAnnotation.id) {
                    exisitngAnnotation.id = annotation.id;
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

    for (let i=start; i <= end; i++) {
        let annotations = annotationPositions[i];
        if (annotations) {
            availableAnnotations = availableAnnotations.concat(annotations);
        }
    }
    let uniqueAnnotations = _.uniqWith(availableAnnotations, (a,b) => a.toString() == b.toString());
    return uniqueAnnotations;
};

const mapStateToProps = (state, ownProps) => {
    let activeAnnotation = getActiveAnnotation(state);
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
        let [ start, length ] = ownProps.annotatedText.getPositionOfAnnotation(activeAnnotation);
        // let end = start + length;
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
            let selectedAnnotation = _.find(
                stateProps.availableAnnotations,
                (value) => value.id == annotationId
            );
            if (annotationId == BASE_ANNOTATION_ID) {
                let actions = stateProps.availableAnnotations.reduce(
                    (actions, annotation) => {
                        actions.push(removedAnnotation(annotation));
                        return actions;
                }, []);
                actions.push(changedActiveAnnotation(stateProps.baseAnnotation));
                dispatch(
                    batchActions(actions)
                )
            } else {
                dispatch(
                    batchActions([
                        addedAnnotation(selectedAnnotation),
                        changedActiveAnnotation(selectedAnnotation)
                    ])
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

