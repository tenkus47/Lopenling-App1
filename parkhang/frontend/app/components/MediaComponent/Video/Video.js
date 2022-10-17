import React, { useRef, useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import _ from "lodash";
import { Collapse } from "@mui/material";
import Chapters from "./Chapters";

function Video(props) {
    let textIdfromAlignment = props.alignmentData.text;
    const syncIdOnClick = props.syncIdOnClick;
    const videoRef = useRef();
    const VideoData = props?.videoData?.alignment || [];
    const url = "https://www.youtube.com/watch?v=2MMM_ggekfE"; //url should be from db api
    let VideoIdListRange = [];
    let closestID = [];
    const [state, setState] = useState({
        played: 0,
        duration: 0,
        playing: true,
    });
    if (!_.isEmpty(VideoData)) {
        VideoIdListRange = VideoData.map((l) => [
            parseInt(l.source_segment.start),
            parseInt(l.source_segment.end),
        ]);
    }
    useEffect(() => {
        if (
            textIdfromAlignment === props.selectedText.id &&
            props.isPanelLinked
        ) {
            let ClickId = syncIdOnClick;

            closestID = VideoIdListRange.find(
                ([start, end]) => ClickId > start && ClickId < end
            );
            if (closestID) {
                let data = VideoData.find(
                    (l) => l.source_segment.start === closestID[0]?.toString()
                );

                if (!_.isEmpty(data)) {
                    jumpToTime(data.target_segment.start);
                    props.changeMediaInterval(data);
                }
            }
        }
    }, [syncIdOnClick]);
    const handleProgress = (state) => {
        // We only want to update time slider if we are not currently seeking
        const played = state.playedSeconds;
        const Interval = VideoData.find(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );
        if (!_.isEmpty(Interval)) {
            props.changeMediaInterval(Interval);
        }
    };
    const jumpToTime = (time) => {
        let timeInSec = calTimeToSeek(state.duration, time);
        console.log(state);
        videoRef.current.seekTo(parseFloat(timeInSec));
    };

    if (VideoData.length === 0) return <div />;
    if (props.videoData.source.witness !== parseInt(props.witness))
        return <div />;
    return (
        <Collapse in={props.open}>
            <ReactPlayer
                url={url}
                style={{
                    maxWidth: "100%",
                    objectFit: "contain",
                }}
                width="400px"
                height="250px"
                ref={videoRef}
                controls={true}
                onDuration={(duration) =>
                    setState({ ...state, duration: duration })
                }
                light
                playing
                onPlay={() => setState({ ...state, playing: true })}
                onPause={() => setState({ ...state, playing: false })}
                onError={() => console.log("error in media sec")}
                onSeek={(e) => console.log("onSeek", e)}
                onProgress={handleProgress}
            />

            <Chapters
                jumpToTime={jumpToTime}
                changeMediaInterval={props.changeMediaInterval}
            />
        </Collapse>
    );
}

export default Video;

function toSec(hms = "") {
    var a = hms.split(":"); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
}
function calTimeToSeek(maxValue, currentTime) {
    let i = toSec(currentTime) / maxValue;
    return parseFloat(i);
}
