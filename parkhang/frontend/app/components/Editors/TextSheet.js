import React, { memo, Suspense } from "react";
const TextDetailContainer = React.lazy(() =>
    import("components/TextDetail/TextDetailContainer")
);
const TextDetailContainer2 = React.lazy(() =>
    import("components/TextDetail2/TextDetailContainer")
);
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import MediaComponent from "./MediaComponent/MediaOptions";
import { batchActions } from "redux-batched-actions";
function TextSheet(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    height: props.bodyHeight,
                }}
            >
                <Suspense fallback={<div> Loading</div>}>
                    <TextDetailContainer />
                </Suspense>

                <Suspense fallback={<div> Loading</div>}>
                    {props.isSecondWindowOpen && <TextDetailContainer2 />}
                </Suspense>
            </div>
            {props.Media.isPanelVisible && (
                //  && props.isSecondWindowOpen
                <MediaComponent
                    toggleImage={props.toggleImage}
                    syncIdOnScroll={props.syncIdOnScroll}
                    syncIdOnClick={props.syncIdOnClick}
                    imageData={props.imageData}
                    videoData={props.videoData}
                    selectedMedia={props.Media}
                    changeMediaSelection={props.changeMediaSelection}
                    selectedText={props.selectedText}
                    isImagePortrait={props.isImagePortrait}
                    changeIsImagePortrait={props.changeIsImagePortrait}
                    selectedSegmentId={props.selectedSegmentId}
                    alignmentData={props.alignmentData}
                    onSelectedSearchResult={props.onSelectedSearchResult}
                    witness={props.witness}
                    witnesses={props.witnesses}
                    ImageVersion={props.ImageVersion}
                    changeImageVersion={props.changeImageVersion}
                    changeSelectedImage={props.changeSelectedImage}
                    selectedImage={props.selectedImage}
                />
            )}
        </div>
    );
}

const mapStateToProps = (state: AppState): { user: User } => {
    const syncIdOnScroll = reducers.getSyncIdOnScroll(state);
    const syncIdOnClick = reducers.getSyncIdOnClick(state);
    const isSecondWindowOpen = reducers.isSecondWindowOpen(state);
    let Media = reducers.getMediaData(state);
    const imageData = reducers.getImageData(state);
    const videoData = reducers.getVideoData(state);
    const selectedText = reducers.getSelectedText(state);
    const isImagePortrait = reducers.isImagePortrait(state);
    //  const selectedSegmentId=reducers.getSelectedSegmentId(state);
    const witness = reducers.getSelectedTextWitnessId(state, selectedText.id);
    const ImageVersion = reducers.getSelectedImageVersion(state);
    const alignmentData = reducers.getAlignment(state);
    const selectedImage = reducers.getSelectedImage(state);
    return {
        isSecondWindowOpen,
        Media,
        syncIdOnScroll,
        syncIdOnClick,
        imageData,
        videoData,
        selectedText,
        isImagePortrait,
        // selectedSegmentId
        alignmentData,
        witness,
        witnesses: reducers.getTextWitnesses(state, selectedText.id),
        ImageVersion,
        selectedImage,
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const toggleImage = (data) => dispatch(actions.changedShowPageImages(data));
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    const changeIsImagePortrait = (payload) =>
        dispatch(actions.setIsImagePortrait(payload));
    const changeSelectedImage = (payload) => {
        dispatch(actions.selectImage(payload));
    };
    return {
        ...ownProps,
        ...stateProps,
        toggleImage,
        changeSelectedImage,
        changeMediaSelection,
        changeIsImagePortrait,
        changeImageVersion: (imageVersionId) => {
            dispatch(actions.selectImageVersion(imageVersionId));
        },
        onSelectedSearchResult: (
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
        },
    };
};
const TextSheetContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextSheet);

export default memo(TextSheetContainer);
