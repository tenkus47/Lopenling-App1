import React, { useEffect } from "react";
import ImageSvg from "images/image.svg";
import VideoSvg from "images/video.svg";
import AudioSvg from "images/audio.svg";
import Check from "images/checkmark.png";
import { connect } from "react-redux";
import styles from "./Resources.css";

import classnames from "classnames";
import * as actions from "actions";
import * as reducers from "reducers";
function Resources(props) {
    const handleMediaToggle = (data) => {
        props.changeMediaSelection(data);
    };
    useEffect(() => {
        if (
            props.selectedMedia.isAudioVisible ||
            props.selectedMedia.isVideoVisible
        ) {
            props.onChangeWindowOpen(true);
        }
    }, [
        props.selectedMedia.isVideoVisible,
        props.selectedMedia.isAudioVisible,
    ]);
    return (
        <>
            <ul className={styles.ResourcesListed}>
                <li onClick={() => handleMediaToggle("IMAGE")}>
                    <ImageSvg /> Image{" "}
                    {props.selectedMedia.isImageVisible && (
                        <img src={Check}></img>
                    )}
                </li>
                <li onClick={() => handleMediaToggle("VIDEO")}>
                    <VideoSvg />
                    Video{" "}
                    {props.selectedMedia.isVideoVisible && (
                        <img src={Check}></img>
                    )}{" "}
                </li>
                <li onClick={() => handleMediaToggle("AUDIO")}>
                    <AudioSvg />
                    Audio{" "}
                    {props.selectedMedia.isAudioVisible && (
                        <img src={Check}></img>
                    )}
                </li>
            </ul>
            <h2>Commentary Lists:</h2>
            <details>
                <summary>Commentary 1</summary>
                <p>this is description for Commentary</p>
            </details>
            <details>
                <summary>Commentary 2</summary>
                <p>this is description for Commentary</p>
            </details>{" "}
            <details>
                <summary>Commentary 3</summary>
                <p>this is description for Commentary</p>
            </details>
        </>
    );
}

const mapStateToProps = (state: AppState): {} => {
    let selectedMedia = reducers.getMediaData(state);
    return {
        selectedMedia,
    };
};

const mapDispatchToProps = (dispatch) => {
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    return {
        changeMediaSelection,
        onChangeWindowOpen: (data: boolean) => {
            dispatch(actions.toggleSecondWindow(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
