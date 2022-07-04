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
    let TableContent = [{ id: 231 }, { id: 1000 }, { id: 6000 }];
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

    function handleScroll(id) {
        console.log(id);
        props.onSelectedSearchResult(139, id, 10, 139);
    }
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

            <h2>Table of Content</h2>
            {TableContent.map((eachChapter, i) => {
                return (
                    <div
                        className={styles.EachPage}
                        style={{ cursor: "pointer" }}
                        key={`TableContent-${i}`}
                    >
                        <div onClick={() => handleScroll(eachChapter.id)}>
                            Chapter {i}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

const mapStateToProps = (state: AppState): {} => {
    let selectedMedia = reducers.getMediaData(state);
    const alignmentData = reducers.getAlignment(state);
    return {
        alignmentData,
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
        onSelectedSearchResult: (
            text: number,
            start: number,
            length: number
        ) => {
            dispatch(actions.selectedSearchResult(text, start, length));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
