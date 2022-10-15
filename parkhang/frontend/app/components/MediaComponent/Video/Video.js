import React, { useRef, useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import _ from "lodash";
import { Collapse } from "@mui/material";
import Chapters from "./Chapters";

function Video(props) {
    let textIdfromAlignment = props.alignmentData.text;
    const syncIdOnClick = props.syncIdOnClick;
    const videoRef = useRef();
    let sourceId = props?.videoData?.source?.text;
    const VideoData = props?.videoData?.alignment || [];
    const url = "https://www.youtube.com/watch?v=2MMM_ggekfE";
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
                }
            }
        }
    }, [syncIdOnClick]);

    const jumpToTime = (time) => {
        let newData = calTimeToSeek(state.duration, time);
        videoRef.current.seekTo(parseFloat(newData));
    };

    const handleProgress = (e) => {
        const played = e.playedSeconds;

        const Interval = VideoData.find(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );

        if (!_.isEmpty(Interval) || Interval) {
            props.changeMediaInterval(Interval);
            props.isPanelLinked &&
                props.changeScrollToId({
                    id: Interval.source_segment.start || null,
                    from: "video",
                });
        }
    };
    if (VideoData.length === 0) return <div />;
    if (sourceId !== props.selectedText.id) return <div />;
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
                onProgress={handleProgress}
                onError={() => console.log("error in media sec")}
            />

            <Chapters jumpToTime={jumpToTime} />
        </Collapse>
    );
}

export default Video;

function toHMS(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}
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
function getClosestNumber(arr, d) {
    return arr.reduce((a, b) => (b <= d && a < b ? b : a), 0);
}
