import React, { memo } from "react";
import TextDetailContainer from "components/TextDetail/TextDetailContainer";
import TextDetailContainer2 from "components/TextDetail2/TextDetailContainer";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import MediaComponent from "./MediaComponent/MediaOptions";

function TextSheet(props) {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: props.bodyHeight,
                overflow: "hidden",
            }}
        >
            <TextDetailContainer />
            {props.isSecondWindowOpen && <TextDetailContainer2 />}

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
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const toggleImage = (data) => dispatch(actions.changedShowPageImages(data));
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    const changeIsImagePortrait = (payload) =>
        dispatch(actions.setIsImagePortrait(payload));
    return {
        ...ownProps,
        ...stateProps,
        toggleImage,
        changeMediaSelection,
        changeIsImagePortrait,
    };
};
const TextSheetContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextSheet);

export default memo(TextSheetContainer);
