import React from 'react';
import { connect } from 'react-redux';
import TextDetail from 'components/TextDetail';
import { changedSelectedSegment, changedActiveAnnotation } from 'actions'
import { showPageImages, getSelectedSegment, getAnnotationsForWitnessId, getActiveAnnotationsForWitnessId, getActiveAnnotation, getWitness, getBaseWitness, getSelectedText, annotationFromData, getAnnotationData } from 'reducers'
import _ from 'lodash'

import AnnotatedText from 'lib/AnnotatedText'
import segmentTibetanText from 'lib/segmentTibetanText'

const getAnnotationPositions = (annotatedText, annotations) => {
    let positions = {};
    for (let i=0; i < annotations.length; i++) {
        let annotation = annotations[i];
        let [ startPos, length ] = annotatedText.getPositionOfAnnotation(annotation);
        for (let j=startPos; j < startPos + length; j++) {
            if (positions[j] == undefined) {
                positions[j] = [];
            }
            if (positions[j].indexOf(annotation) == -1) {
                positions[j].push(annotation);
            }
        }
    }

    return positions;
};

const annotationsFromData = (state, annotationList) => {
    let annotations = [];
    if (annotationList) {
        for (let key in annotationList) {
            if (annotationList.hasOwnProperty(key)) {
                let annotationData = annotationList[key];
                let annotation = annotationFromData(state, annotationData);

                annotations.push(annotation);
            }
        }
    }
    return annotations;
};

const getActiveAnnotations = (state, baseWitnessId) => {
    const activeAnnotationList = getActiveAnnotationsForWitnessId(state, baseWitnessId);
    if (!activeAnnotationList) {
        return [];
    }

    let activeAnnotationDataList = [];
    for(let i=0; i < activeAnnotationList.length; i++) {
        let activeAnnotationId = activeAnnotationList[i];
        let activeAnnotationData = getAnnotationData(state, baseWitnessId, activeAnnotationId);
        if (activeAnnotationData) {
            activeAnnotationDataList.push(activeAnnotationData);
        }
    }

    return annotationsFromData(state, activeAnnotationDataList);
};

const mapStateToProps = (state) => {
    const selectedText = getSelectedText(state);
    let witnesses = {};
    let baseWitness = getBaseWitness(state, selectedText.id);

    let annotationPositions = {};
    let annotations = [];
    let annotatedText = null;
    let activeAnnotation = getActiveAnnotation(state);
    let selectedAnnotatedSegments = [];
    let activeAnnotations = [];
    if (baseWitness && selectedText
        && state.data.witnessAnnotationsById.hasOwnProperty(baseWitness.id))
    {
        let annotationList = getAnnotationsForWitnessId(state, baseWitness.id);
        annotations = annotationsFromData(state, annotationList);
        activeAnnotations = getActiveAnnotations(state, baseWitness.id);
        annotatedText = new AnnotatedText(
            segmentTibetanText(baseWitness.content),
            activeAnnotations,
            (text) => {
                return segmentTibetanText(text).sortedSegments();
            },
            baseWitness
        );
        annotationPositions = getAnnotationPositions(annotatedText, annotations);

        // Get the segments that are part of the current active annotation.
        // These are used by Text to highlight the currently selected segment.
        if (activeAnnotation) {
            selectedAnnotatedSegments = annotatedText.segmentsForAnnotation(activeAnnotation);
        }
    }

    return {
        text: selectedText,
        witnesses: witnesses,
        baseWitness: baseWitness,
        annotations: annotations,
        loading: state.data.loadingWitnesses || state.data.loadingAnnotations,
        paginated: showPageImages(state),
        annotatedText: annotatedText,
        selectedAnnotatedSegments: selectedAnnotatedSegments,
        annotationPositions: annotationPositions,
        activeAnnotations: activeAnnotations,
        activeAnnotation: activeAnnotation
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { annotatedText, annotationPositions } = stateProps;

    return {
        ...stateProps,
        ...ownProps,
        didSelectSegment: (segment) => {
            let segmentAnnotations = annotationPositions[segment.start];
            let activeAnnotations = _.intersectionWith(segmentAnnotations, annotatedText.annotations, (a, b) => a.toString() == b.toString());
            let activeAnnotation = null;
            if (activeAnnotations.length > 0) {
                // get any active annotations
                activeAnnotation = activeAnnotations[0];
            } else if (segmentAnnotations && segmentAnnotations.length > 0) {
                // get base text annotation for longest annotation highlighted in text
                let longestAvailable = getLongestAnnotation(segmentAnnotations);
                let [ start, length ] = annotatedText.getPositionOfAnnotation(longestAvailable);
                activeAnnotation = annotatedText.getBaseAnnotation(start, length);
            } else {
                // get base annotation of just the segment
                activeAnnotation = annotatedText.getBaseAnnotation(segment.start, segment.length);
            }

            dispatch(changedActiveAnnotation(activeAnnotation));
        },
        didSelectAnnotation: (annotation) => {
            let activeAnnotation = null;
            if (_.some(annotatedText.annotations, (active) => annotation.id == active.id)) {
                activeAnnotation = annotation;
            } else {
                let [ start, length ] = annotatedText.getPositionOfAnnotation(annotation);
                // if it is an insertion, use 0 length
                if (annotation.length == 0) {
                    length = 0;
                }
                activeAnnotation = annotatedText.getBaseAnnotation(start, length);
            }
            dispatch(changedActiveAnnotation(activeAnnotation));
        }
    }
};

const getLongestAnnotation = (annotations) => {
    let longest = null;
    for (let i=0; i < annotations.length; i++) {
        let annotation = annotations[i];
        if (!longest) {
            longest = annotation;
        } else {
            if (annotation.length > longest.length) {
                longest = annotation;
            }
        }
    }
    return longest;
};

const TextDetailContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextDetail);

export default TextDetailContainer;
