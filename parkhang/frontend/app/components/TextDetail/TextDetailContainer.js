import React from 'react';
import { connect } from 'react-redux';
import TextDetail from 'components/TextDetail';
import { changedSelectedSegment, changedActiveAnnotation } from 'actions'
import { showPageImages, getSelectedSegment, getAnnotationsForWitnessId, getActiveAnnotationsForWitnessId, getActiveAnnotation, getWitness } from 'reducers'
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

const mapStateToProps = (state) => {
    const selectedText = state.ui.selectedText;
    let witnesses = {};
    let baseWitness = null;
    if (selectedText && state.data.textWitnessesById.hasOwnProperty(selectedText.id)) {
        witnesses = state.data.textWitnessesById[selectedText.id];
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

    let annotationPositions = {};
    let annotations = [];
    let annotatedText = null;
    let activeAnnotation = getActiveAnnotation(state);
    let selectedAnnotatedSegments = [];
    let activeAnnotations = [];
    if (baseWitness && selectedText
        && state.data.witnessAnnotationsById.hasOwnProperty(baseWitness.id))
    {
        annotations = getAnnotationsForWitnessId(state, baseWitness.id);
        activeAnnotations = getActiveAnnotationsForWitnessId(state, baseWitness.id);
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
                // console.log('activeAnnotation start: %d, length: %d', start, length);
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
