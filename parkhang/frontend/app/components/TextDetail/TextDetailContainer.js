import React from 'react';
import { connect } from 'react-redux';
import Annotation, { ANNOTATION_TYPES } from 'lib/Annotation';
import Source, { WORKING_VERSION_SOURCE_NAME } from 'lib/Source';
import Witness from 'lib/Witness';
import { WORKING_VERSION_ANNOTATION_ID } from 'lib/AnnotatedText';
import TextDetail from 'components/TextDetail';
import { changedSelectedSegment, changedActiveAnnotation } from 'actions'
import { showPageImages, getSelectedSegment, getAnnotationsForWitnessId, getActiveAnnotationsForWitnessId, getActiveAnnotation, getWitness, getBaseWitness, getSelectedText, annotationFromData, getAnnotationData, getUser, getTextListVisible } from 'reducers'
import _ from 'lodash'

import AnnotatedText from 'lib/AnnotatedText'
import segmentTibetanText from 'lib/segmentTibetanText'

const getAnnotationPositions = (annotatedText, annotations) => {
    let positions = {};
    for (let i=0; i < annotations.length; i++) {
        let annotation = annotations[i];
        let [ startPos, length ] = annotatedText.getPositionOfAnnotation(annotation);
        if (length === 0) {
            if (positions[startPos] === undefined) {
                positions[startPos] = [];
            }
            if (positions[startPos].indexOf(annotation) === -1) {
                positions[startPos].push(annotation);
            }
        } else {
            for (let j = startPos; j < startPos + length; j++) {
                if (positions[j] === undefined) {
                    positions[j] = [];
                }
                if (positions[j].indexOf(annotation) === -1) {
                    positions[j].push(annotation);
                }
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
    const user = getUser(state);
    const loading = state.data.loadingWitnesses || state.data.loadingAnnotations;
    const textListVisible = getTextListVisible(state);
    if (loading) {
        return {
            text: null,
            witnesses: null,
            baseWitness: null,
            annotations: null,
            loading: loading,
            paginated: null,
            annotatedText: null,
            selectedAnnotatedSegments: null,
            annotationPositions: null,
            activeAnnotations: null,
            activeAnnotation: null,
            user: user,
            textListVisible
        };
    }

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
        loading: loading,
        paginated: showPageImages(state),
        annotatedText: annotatedText,
        selectedAnnotatedSegments: selectedAnnotatedSegments,
        annotationPositions: annotationPositions,
        activeAnnotations: activeAnnotations,
        activeAnnotation: activeAnnotation,
        user: user,
        textListVisible
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { annotatedText, annotationPositions } = stateProps;

    const didSelectSegment = (segment) => {
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
    };

    const getAnnotation = (id) => {
        let validAnnotation = null;
        _.forOwn(annotationPositions, (annotations, position) => {
            if (annotations) {
                let validAnnotations = annotations.filter((annotation) => annotation.uniqueId === id);
                    if (validAnnotations.length > 0) {
                        validAnnotation = validAnnotations[0];
                        return false;
                    }
            }
        });
        return validAnnotation;
    };

    const didSelectAnnotation = (annotation) => {
        let activeAnnotation = null;
        if (_.some(annotatedText.annotations, (active) => annotation.uniqueId == active.uniqueId)) {
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
    };

    const isInsertion = (id) => {
        return id.indexOf('i_') !== -1;
    };

    const isDeletion = (id) => {
        return id.indexOf('ds_') !== -1;
    };

    const idFromSegmentId = (id) => {
        let start = 0;
        if (isInsertion(id)) {
            start = id.substr(2);
        } else if (isDeletion(id)) {
            start = id.substr(3);
        } else {
            start = id.substr(2);
        }

        return start;
    };

    return {
        ...stateProps,
        ...ownProps,
        didSelectSegment: didSelectSegment,
        didSelectSegmentIds: (segmentIds) => {
            let segmentAnnotations = [];
            let segments = [];
            for (let segmentId of segmentIds) {
                if (isDeletion(segmentId) || isInsertion(segmentId)) {
                    continue;
                }

                let segmentPosition = idFromSegmentId(segmentId);
                let textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);
                segments.push(textSegment);
                const annotations = annotationPositions[textSegment.start];
                if (annotations) {
                    segmentAnnotations = segmentAnnotations.concat(annotations);
                }
            }
            segmentAnnotations = _.uniqWith(segmentAnnotations, (a, b) => a.toString() == b.toString());

            let activeAnnotations = _.intersectionWith(segmentAnnotations, annotatedText.annotations, (a, b) => a.toString() == b.toString());

            const range = getSegmentsRange(segments, activeAnnotations, segmentAnnotations);
            const baseAnnotation = annotatedText.getBaseAnnotation(range.start, range.length);
            let activeAnnotation = null;
            if (range.annotation) {
                activeAnnotation = range.annotation;
            } else if (activeAnnotations.length > 0) {
                const content = segments.reduce((content, segment) => content + segment.text, "");
                activeAnnotation = new Annotation(
                    WORKING_VERSION_ANNOTATION_ID,
                    getWorkingWitness(stateProps.text),
                    baseAnnotation.start,
                    baseAnnotation.length,
                    content,
                    stateProps.user,
                    ANNOTATION_TYPES.variant
                );
            } else {
                activeAnnotation = baseAnnotation;
            }
            dispatch(changedActiveAnnotation(activeAnnotation));
        },
        didSelectAnnotation: didSelectAnnotation,
        selectedSegmentId: (segmentId) => {
            if (isInsertion(segmentId)) {
                const annotationId = idFromSegmentId(segmentId);
                const annotation = getAnnotation(annotationId);
                didSelectAnnotation(annotation);
            } else {
                let segmentPosition = Number(idFromSegmentId(segmentId));
                let textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);
                if (textSegment) {
                    didSelectSegment(textSegment);
                }
            }
        },
        getAnnotation: getAnnotation
    }
};

const getWorkingWitness = (selectedText) => {
    const source = new Source(
        WORKING_VERSION_ANNOTATION_ID,
        WORKING_VERSION_SOURCE_NAME
    );
    const witness = new Witness(
        WORKING_VERSION_ANNOTATION_ID,
        selectedText,
        source,
        "",
        false
    );

    return witness;
};

const getSegmentsRange = (segments, activeAnnotations, annotations) => {
    if (segments.length === 0) {
        return null;
    }
    let first = segments[0];
    let last = segments[segments.length - 1];

    let start = first.start;
    let end = last.end;

    let startAnnotation = null;
    let endAnnotation = null;
    for (let i=0; i < annotations.length; i++) {
        const annotation = annotations[i];
        if (annotation.start < start) {
            start = annotation.start;
            startAnnotation = annotation;
        }
        let annotationEnd = null;
        if (activeAnnotations.indexOf(annotation) !== -1) {
            annotationEnd = annotation.start + annotation.content.length - 1;
        } else {
            annotationEnd = annotation.end;
        }

        if (annotationEnd > end) {
            end = annotationEnd;
            endAnnotation = annotationEnd;
        }
    }

    // Set if the whole range is encompassed by a single annotation
    let rangeAnnotation = null;
    if (startAnnotation === endAnnotation) {
        rangeAnnotation = startAnnotation;
    }

    return {
        start: start,
        length: end - start,
        annotation: rangeAnnotation
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
