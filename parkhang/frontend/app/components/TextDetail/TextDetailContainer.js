// @flow
import React from "react";
import { connect } from "react-redux";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import Source, { WORKING_VERSION_SOURCE_NAME } from "lib/Source";
import Witness from "lib/Witness";
import Text from "lib/Text";
import type { AppState } from "reducers";
import type { AnnotationData, TextData } from "api";
import {
    WORKING_VERSION_ANNOTATION_ID,
    INSERTION_KEY,
    DELETION_KEY
} from "lib/AnnotatedText";
import TextDetail from "components/TextDetail";
import { changedActiveAnnotation } from "actions";
import {
    showPageImages,
    getAnnotationsForWitnessId,
    getActiveAnnotationsForWitnessId,
    getActiveAnnotation,
    getBaseWitness,
    getWorkingWitness,
    getSelectedText,
    annotationFromData,
    getAnnotationData,
    getUser,
    getTextListVisible,
    getSelectedTextWitnessId,
    getTextWitnesses,
    getWitness,
    hasLoadedWitnessAnnotations,
    getRemovedDefaultAnnotationsForWitnessId,
    hasLoadedWitnessAppliedAnnotations
} from "reducers";
import _ from "lodash";

import AnnotatedText from "lib/AnnotatedText";
import segmentTibetanText from "lib/segmentTibetanText";
import SegmentedText from "lib/SegmentedText";

function getInsertionKey(annotation) {
    return [annotation.start, annotation.length].join("-");
}

let _posAnnotatedText;
let _posAnnotations;
let _positions;
const getAnnotationPositions = (
    annotatedText: AnnotatedText,
    annotations: Annotation[]
): { [string]: Annotation[] } => {
    if (
        annotatedText === _posAnnotatedText &&
        annotations === _posAnnotations
    ) {
        return _positions;
    }

    let positions = {};
    let activeInsertions = {};

    for (let i = 0; i < annotations.length; i++) {
        let annotation = annotations[i];
        let [startPos, length] = annotatedText.getPositionOfAnnotation(
            annotation
        );
        if (startPos == null) {
            continue;
        }
        if (length === 0) {
            if (annotation.isInsertion) {
                // group with any active insertions at the same position
                const activeKey = getInsertionKey(annotation);
                const activeInsertionPositions = activeInsertions[activeKey];
                if (activeInsertionPositions) {
                    activeInsertionPositions.map(pos =>
                        positions[pos].push(annotation)
                    );
                    continue;
                }
                startPos = INSERTION_KEY + startPos;
            }
            if (annotation.isDeletion && annotation.length > 0) {
                // active deletion
                startPos = DELETION_KEY + startPos;
            }
            if (positions[startPos] === undefined) {
                positions[startPos] = [];
            }
            if (positions[startPos].indexOf(annotation) === -1) {
                positions[startPos].push(annotation);
            }
        } else {
            let annotationPositions = [];
            for (let j = startPos; j < startPos + length; j++) {
                if (positions[j] === undefined) {
                    positions[j] = [];
                }
                if (positions[j].indexOf(annotation) === -1) {
                    positions[j].push(annotation);
                }
                annotationPositions.push(j);
            }
            // Store the positions this annotation is displayed at.
            // This can then be used later to group with inactive insertions
            if (annotation.isInsertion) {
                const key = getInsertionKey(annotation);
                activeInsertions[key] = annotationPositions;
            }
        }
    }

    _posAnnotatedText = annotatedText;
    _posAnnotations = annotations;
    _positions = positions;
    return positions;
};

let _annotationsFromData = null;
const annotationsFromData = (
    state: AppState,
    annotationList: { [string]: AnnotationData } | null
): Annotation[] => {
    let annotations = [];
    if (annotationList) {
        for (let key in annotationList) {
            if (annotationList.hasOwnProperty(key)) {
                let annotationData = annotationList[key];
                let annotation = annotationFromData(state, annotationData);
                if (annotation) {
                    annotations.push(annotation);
                }
            }
        }
    }
    return annotations;
};

let _activeAnnotationsList;
let _activeAnnotations;
const getActiveAnnotations = (
    state: AppState,
    witnessId,
    baseWitnessId
): Annotation[] => {
    const loadedAppliedAnnotations = hasLoadedWitnessAppliedAnnotations(
        state,
        witnessId
    );
    if (!loadedAppliedAnnotations) {
        return [];
    }
    const activeAnnotationList = getActiveAnnotationsForWitnessId(
        state,
        witnessId
    );
    if (!activeAnnotationList) {
        return [];
    }
    if (activeAnnotationList === _activeAnnotationsList) {
        return _activeAnnotations;
    } else {
        _activeAnnotationsList = activeAnnotationList;
    }

    let activeAnnotationDataList = {};
    for (let activeAnnotationId in activeAnnotationList) {
        if (activeAnnotationList.hasOwnProperty(activeAnnotationId)) {
            let activeAnnotationData = getAnnotationData(
                state,
                baseWitnessId,
                activeAnnotationId
            );
            if (activeAnnotationData) {
                activeAnnotationDataList[
                    activeAnnotationData.unique_id
                ] = activeAnnotationData;
            }
        }
    }

    _activeAnnotations = annotationsFromData(state, activeAnnotationDataList);
    return _activeAnnotations;
};

let _annotatedTextsCache: {
    textId: number | null,
    texts: { [id: string]: AnnotatedText }
} = {
    textId: null,
    texts: {}
};
function getCachedAnnotatedText(
    text: AnnotatedText,
    witness: Witness
): AnnotatedText {
    let textId = witness.text.id;
    if (_annotatedTextsCache.textId === textId) {
        if (_annotatedTextsCache.texts.hasOwnProperty(text.getUniqueId())) {
            return _annotatedTextsCache.texts[text.getUniqueId()];
        } else {
            _annotatedTextsCache.texts[text.getUniqueId()] = text;
            return text;
        }
    } else {
        _annotatedTextsCache.textId = textId;
        _annotatedTextsCache.texts = {
            [text.getUniqueId()]: text
        };
        return text;
    }
}

// TODO: clear cache when changing texts
let _segmentedWitnesses: { [number]: SegmentedText } = {};
function getSegmentedWitness(witness: Witness): SegmentedText {
    if (!_segmentedWitnesses[witness.id]) {
        _segmentedWitnesses[witness.id] = segmentTibetanText(
            witness.content || ""
        );
    }

    return _segmentedWitnesses[witness.id];
}

let _selectedWitness;
const mapStateToProps = state => {
    const user = getUser(state);
    const loading =
        state.data.loadingWitnesses || state.data.loadingAnnotations;
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
    let workingWitness;
    let baseWitness;
    if (selectedText) {
        workingWitness = getWorkingWitness(state, selectedText.id);
        baseWitness = getBaseWitness(state, selectedText.id);
    }

    let annotationPositions = {};
    let annotations = [];
    let annotatedText = null;
    let activeAnnotation = getActiveAnnotation(state);
    let selectedAnnotatedSegments = [];
    let appliedAnnotations = [];
    let pageBreaks = [];
    let imagesBaseUrl = "";
    let selectedWitness;
    // Whether to show the text's page images
    let paginated = false;
    if (
        workingWitness &&
        selectedText &&
        state.data.witnessAnnotationsById.hasOwnProperty(workingWitness.id)
    ) {
        witnesses = getTextWitnesses(state, selectedText.id);
        let selectedWitnessId = getSelectedTextWitnessId(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = getWitness(state, selectedWitnessId);
            if (selectedWitness) {
                activeAnnotation = getActiveAnnotation(
                    state,
                    selectedWitness.id
                );
            }
        }

        if (!selectedWitness) {
            selectedWitness = workingWitness;
            selectedWitnessId = workingWitness.id;
        }

        // set cached witness
        _selectedWitness = selectedWitness;

        let workingAnnotationList = getAnnotationsForWitnessId(
            state,
            workingWitness.id
        );

        appliedAnnotations = getActiveAnnotations(
            state,
            selectedWitness.id,
            workingWitness.id
        );

        if (selectedWitness.id !== workingWitness.id) {
            // If we are not viewing the working version,
            // get all the annotations created by the selected witness
            // BUT NOT BY A USER to apply to the base text.
            // User-created annotations need to be in appliedAnnotations.
            
            let removedDefaultAnnotations = getRemovedDefaultAnnotationsForWitnessId(
                state,
                selectedWitness.id
            );

            let selectedWitnessAnnotations = {};
            let selectedWitnessAnnotationData = getAnnotationsForWitnessId(
                state,
                selectedWitness.id
            );

            for (let key in selectedWitnessAnnotationData) {
                if (selectedWitnessAnnotationData.hasOwnProperty(key)) {
                    let annotationData = selectedWitnessAnnotationData[key];
                    if (
                        !annotationData.creator_user &&
                        !removedDefaultAnnotations.hasOwnProperty(
                            annotationData.unique_id
                        )
                    ) {
                        selectedWitnessAnnotations[
                            annotationData.unique_id
                        ] = annotationData;
                    }
                }
            }

            for (let key in workingAnnotationList) {
                if (workingAnnotationList.hasOwnProperty(key)) {
                    let annotationData = workingAnnotationList[key];
                    if (
                        annotationData.creator_witness === selectedWitness.id &&
                        !removedDefaultAnnotations.hasOwnProperty(
                            annotationData.unique_id
                        )
                    ) {
                        selectedWitnessAnnotations[
                            annotationData.unique_id
                        ] = annotationData;
                    }
                }
            }

            let selectedWitnessAnnotationsList = annotationsFromData(
                state,
                selectedWitnessAnnotations
            );

            appliedAnnotations = appliedAnnotations.concat(
                selectedWitnessAnnotationsList
            );

            workingAnnotationList = _.pickBy(workingAnnotationList, anno => {
                return anno.creator_witness === selectedWitnessId;
            });

            // always show images if we are viewing a specific edition
            // i.e. not the working edition.
            paginated = true;
        }

        annotations = annotationsFromData(state, workingAnnotationList);
        annotations = _.unionWith(
            appliedAnnotations,
            annotations,
            (first, second) => {
                return first.uniqueId == second.uniqueId;
            }
        );

        let segmentedWorkingWitness = getSegmentedWitness(workingWitness);
        annotatedText = new AnnotatedText(
            segmentedWorkingWitness,
            appliedAnnotations,
            text => {
                return segmentTibetanText(text).segments;
            },
            workingWitness,
            selectedWitness
        );
        // A cached text will already have it text generated
        // so it's more performant than doing so again.
        annotatedText = getCachedAnnotatedText(annotatedText, selectedWitness);

        annotationPositions = getAnnotationPositions(
            annotatedText,
            annotations
        );

        // Get the segments that are part of the current active annotation.
        // These are used by Text to highlight the currently selected segment.
        if (activeAnnotation) {
            selectedAnnotatedSegments = annotatedText.segmentsForAnnotation(
                activeAnnotation
            );
        }

        if (baseWitness) {
            pageBreaks = getAnnotationsForWitnessId(
                state,
                baseWitness.id,
                ANNOTATION_TYPES.pageBreak
            );
            let starts = [];
            _.forIn(pageBreaks, o => starts.push(o.start));
            pageBreaks = starts.sort((a, b) => a - b);
            if (paginated) {
                imagesBaseUrl =
                    "/static/images/texts/" +
                    selectedText.name +
                    "/" +
                    selectedWitness.source.name +
                    "/";
            }
        }
    }

    return {
        text: selectedText,
        witnesses: witnesses,
        workingWitness: workingWitness,
        baseWitness: baseWitness,
        annotations: annotations,
        loading: loading,
        paginated: paginated,
        annotatedText: annotatedText,
        selectedAnnotatedSegments: selectedAnnotatedSegments,
        annotationPositions: annotationPositions,
        activeAnnotations: appliedAnnotations,
        activeAnnotation: activeAnnotation,
        pageBreaks: pageBreaks,
        imagesBaseUrl: imagesBaseUrl,
        user: user,
        textListVisible,
        selectedWitness
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { annotatedText, annotationPositions } = stateProps;

    const didSelectSegmentPosition = (segmentPosition, start, length) => {
        let segmentAnnotations = annotationPositions[segmentPosition];
        let activeAnnotations = _.intersectionWith(
            segmentAnnotations,
            annotatedText.annotations,
            (a, b) => a.toString() == b.toString()
        );
        let activeAnnotation = null;
        if (activeAnnotations.length > 0) {
            // get any active annotations
            activeAnnotation = activeAnnotations[0];
        } else if (segmentAnnotations && segmentAnnotations.length > 0) {
            // get base text annotation for longest annotation highlighted in text
            let longestAvailable = getLongestAnnotation(segmentAnnotations);
            let [start, length] = annotatedText.getPositionOfAnnotation(
                longestAvailable
            );
            if (longestAvailable && longestAvailable.isInsertion) {
                length = 0;
            }
            activeAnnotation = annotatedText.getBaseAnnotation(start, length);
        } else {
            // get base annotation of just the segment
            activeAnnotation = annotatedText.getBaseAnnotation(start, length);
        }

        dispatch(changedActiveAnnotation(activeAnnotation));
    };

    const isInsertion = id => {
        return id.indexOf("i_") !== -1;
    };

    const isDeletion = id => {
        return id.indexOf("ds_") !== -1;
    };

    const idFromSegmentId = id => {
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
        didSelectSegmentIds: segmentIds => {
            if (segmentIds.length === 0) {
                return;
            }
            let segmentAnnotations = [];
            let segments = [];
            for (let segmentId of segmentIds) {
                if (isDeletion(segmentId) || isInsertion(segmentId)) {
                    continue;
                }

                let segmentPosition = idFromSegmentId(segmentId);
                let textSegment = annotatedText.segmentedText.segmentAtPosition(
                    segmentPosition
                );
                segments.push(textSegment);
                const annotations = annotationPositions[textSegment.start];
                if (annotations) {
                    segmentAnnotations = segmentAnnotations.concat(annotations);
                }
            }
            segmentAnnotations = _.uniqWith(
                segmentAnnotations,
                (a, b) => a.toString() == b.toString()
            );

            let activeAnnotations = _.intersectionWith(
                segmentAnnotations,
                annotatedText.annotations,
                (a, b) => a.toString() == b.toString()
            );

            const range = getSegmentsRange(
                segments,
                activeAnnotations,
                segmentAnnotations
            );
            if (!range) {
                console.warn(
                    "No range for selected segment ids: %o",
                    segmentIds
                );
                return;
            }
            const baseAnnotation = annotatedText.getBaseAnnotation(
                range.start,
                range.length
            );
            let activeAnnotation = null;
            if (range.annotation) {
                activeAnnotation = range.annotation;
            } else if (activeAnnotations.length > 0) {
                const content = segments.reduce(
                    (content, segment) => content + segment.text,
                    ""
                );
                // TODO: test this when editing non-working edition.
                // Check if getTextWorkingWitness works as required
                if (!stateProps.selectedWitness) {
                    console.log(
                        "no stateProps.selectedWitness: %o",
                        stateProps.selectedWitness
                    );
                }
                activeAnnotation = new Annotation(
                    WORKING_VERSION_ANNOTATION_ID,
                    getTextWorkingWitness(stateProps.text),
                    baseAnnotation.start,
                    baseAnnotation.length,
                    content,
                    ANNOTATION_TYPES.variant,
                    stateProps.selectedWitness,
                    stateProps.user
                );
            } else {
                activeAnnotation = baseAnnotation;
            }
            dispatch(changedActiveAnnotation(activeAnnotation));
        },
        selectedSegmentId: segmentId => {
            if (isInsertion(segmentId)) {
                const start = idFromSegmentId(segmentId);
                const length = 0;
                const positionKey = INSERTION_KEY + start;
                didSelectSegmentPosition(positionKey, start, length);
            } else if (isDeletion(segmentId)) {
                const start = idFromSegmentId(segmentId);
                const length = 0;
                const positionKey = DELETION_KEY + start;
                didSelectSegmentPosition(positionKey, start, length);
            } else {
                let segmentPosition = Number(idFromSegmentId(segmentId));
                let textSegment = annotatedText.segmentedText.segmentAtPosition(
                    segmentPosition
                );
                if (textSegment) {
                    didSelectSegmentPosition(
                        textSegment.start,
                        textSegment.start,
                        textSegment.length
                    );
                }
            }
        }
    };
};

const getTextWorkingWitness = (textData: TextData): Witness => {
    const source = new Source(
        WORKING_VERSION_ANNOTATION_ID,
        WORKING_VERSION_SOURCE_NAME
    );
    const text = new Text(textData.id, textData.name);
    const witness = new Witness(
        WORKING_VERSION_ANNOTATION_ID,
        text,
        source,
        "",
        false
    );

    return witness;
};

const getSegmentsRange = (
    segments,
    activeAnnotations,
    annotations
): { start: number, length: number, annotation: Annotation | null } | null => {
    if (segments.length === 0) {
        return null;
    }
    let first = segments[0];
    let last = segments[segments.length - 1];

    let start = first.start;
    let end = last.end;

    let startAnnotation = null;
    let endAnnotation = null;
    for (let i = 0; i < annotations.length; i++) {
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
        length: end - start + 1,
        annotation: rangeAnnotation
    };
};

const getLongestAnnotation = (annotations: Annotation[]): Annotation | null => {
    let longest = null;
    for (let i = 0; i < annotations.length; i++) {
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

const TextDetailContainer = connect(mapStateToProps, null, mergeProps)(
    TextDetail
);

export default TextDetailContainer;
