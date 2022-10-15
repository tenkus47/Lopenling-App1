import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import DraggableMedia from "./DraggableMedia";
const mapStateToProps = (state) => {
    const scrollToId = reducers.getScrollToId(state);
    const syncIdOnClick = reducers.getSyncIdOnClick(state);
    const videoData = reducers.getVideoData(state);
    let Media = reducers.getMediaData(state);
    const selectedText = reducers.getSelectedText(state);
    const alignmentData = reducers.getAlignment(state);
    const witness = reducers.getSelectedTextWitnessId(state, selectedText.id);
    const witnesses = reducers.getTextWitnesses(state, selectedText.id);
    //  const selectedSegmentId=reducers.getSelectedSegmentId(state);
    const isPanelLinked = reducers.isPanelLinked(state);

    return {
        isPanelLinked,
        scrollToId,
        syncIdOnClick,
        videoData,
        selectedMedia: Media,
        selectedText,
        alignmentData,
        witness,
        witnesses,
        mediaInterval: reducers.getMediaInterval(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    const toggleImage = (data) => dispatch(actions.changedShowPageImages(data));
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));

    const onSelectedSearchResult = (
        text: api.TextData,
        start: number,
        length: number,
        selectedText: api.TextData | null
    ) => {
        if (!selectedText || selectedText.id !== text.id) {
            dispatch(
                batchActions([
                    actions.selectedSearchResult(text.id, start, length),
                    actions.selectedText(text),
                ])
            );
        } else {
            dispatch(actions.selectedSearchResult(text.id, start, length));
        }
    };
    const changeMediaInterval = (interval) => {
        dispatch(actions.selectMediaInterval(interval));
    };
    return {
        toggleImage,
        onSelectedSearchResult,
        changeMediaSelection,
        changeMediaInterval,
        changeSelectedRange: (payload) => {
            dispatch(actions.changeSelectedRange(payload));
        },
        changeScrollToId: (payload) =>
            dispatch(actions.changeScrollToId(payload)),
    };
};

const MediaContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(DraggableMedia);

export default MediaContainer;
