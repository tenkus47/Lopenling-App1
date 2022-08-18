import React, {
    useRef,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from "react";
import ReactPlayer from "react-player";
import _ from "lodash";
import styles from "./Video.css";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Grid,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

function Video(props) {
    let textIdfromAlignment = props.alignmentData.text;
    const VideoData = props?.videoData?.alignment || [];
    const url = "https://www.youtube.com/watch?v=2MMM_ggekfE";
    const sourceId = parseInt(props.videoData.source);
    const [interval, setInterval] = useState({});
    let VideoIdList = [];
    const syncIdOnScroll = props.syncIdOnScroll;
    const syncIdOnClick = props.syncIdOnClick;
    const [state, setState] = useState({
        seeking: false,
        played: 0,
        duration: 0,
        playing: true,
    });
    if (!_.isEmpty(VideoData)) {
        VideoIdList = VideoData.map((l) => parseInt(l.source_segment.start));
    }

    useEffect(() => {
        if (textIdfromAlignment === props.selectedText.id) {
            //     let intersection = syncIdOnScroll.filter(element => VideoIdList.includes(element));
            //     newList= VideoData.filter(d=>d.source_segment===intersection[0]);
            //     jumpToTime(newList[0]?.target_segment.start)
            let ClickId = syncIdOnClick.toString().replace("s_", "");

            let temp = 0;
            VideoIdList.sort().forEach((l) => {
                if (l <= ClickId) {
                    temp = l;
                }
            });
            let data = VideoData.find(
                (l) => l.source_segment.start === temp.toString()
            );
            if (!_.isEmpty(data)) {
                jumpToTime(data.target_segment.start);
            }
        }
    }, [syncIdOnClick]);

    const changeTextBackground = useCallback(() => {
        let current = interval;
        let sourceRangeSelection = [];
        // if (textIdfromAlignment === props.selectedText.id) {
        //     for (let i = current.start; i < current.end; i++) {
        //         sourceRangeSelection.push(i);
        //     }
        //     props.changeSelectedRange({
        //         source: sourceRangeSelection,
        //         target: [],
        //     });
        // }
    }, [interval]);

    useEffect(() => {
        let timer = setTimeout(() => changeTextBackground(), 300);
        return () => {
            clearTimeout(timer);
        };
    }, [interval.start]);

    const videoRef = useRef();

    const jumpToTime = useCallback(
        (time) => {
            let newData = calTimeToSeek(state.duration, time);
            videoRef.current.seekTo(parseFloat(newData));
        },
        [state]
    );
    const handleProgress = (e) => {
        changeTextBackground();
        const played = e.playedSeconds;
        const Interval = VideoData.filter(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );
        if (!_.isEmpty(Interval)) {
            let source_segment = Interval[0].source_segment;
            setInterval({ ...source_segment });
        }
    };
    if (VideoData.length === 0) return <div />;
    return (
        <ReactPlayer
            url={url}
            style={{
                maxWidth: "100%",
                maxHeight: "100%",
            }}
            ref={videoRef}
            controls={true}
            onDuration={(duration) =>
                setState({ ...state, duration: duration })
            }
            playing={true}
            onPlay={() => setState({ ...state, playing: true })}
            onPause={() => setState({ ...state, playing: false })}
            onProgress={handleProgress}
        />
    );
}

export default Video;

{
    /* <Grid item xs={4}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Text: ###</Typography>
                        <Typography>Explained By :###</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Timeline </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Jump</th>
                                </tr>
                            </thead>
                            <tbody>
                                {VideoData.map((list, i) => (
                                    <tr
                                        key={i + "key"}
                                        className={styles.Timeline}
                                    >
                                        <td>{i + 1}</td>
                                        <td>{list.target_segment.start}</td>
                                        <td>{list.target_segment.end}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    jumpToTime(
                                                        list.target_segment
                                                            .start
                                                    )
                                                }
                                            >
                                                Jump
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </AccordionDetails>
                </Accordion>
            </Grid> */
}
