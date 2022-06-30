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
    const VideoData = props.videoData.alignment || [];
    const url = props.videoData.url || "";
    const sourceId = parseInt(props.videoData.source);
    const [interval, setInterval] = useState({});
    const inter = useMemo(() => interval, [interval]);
    let VideoIdList = [];
    let newList = ["0"];
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
        if (139 === props.selectedText.id) {
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
        let current = inter;
        if (139 === props.selectedText.id) {
            for (let i = current.start; i < current.end; i++) {
                let currentIds = document.getElementById(`s_${i}`);
                if (currentIds) {
                    currentIds.style.background = "#eee";
                    currentIds.style.fontWeight = "bold";
                }
            }
        }
    }, [inter]);

    useEffect(() => {
        changeTextBackground();
        return () => {
            let current = interval;
            for (let i = current.start; i < current.end; i++) {
                let currentIds = document.getElementById(`s_${i}`);
                if (currentIds) {
                    currentIds.style.background = "white";
                    currentIds.style.fontWeight = "normal";
                }
            }
        };
    }, [interval]);

    const videoRef = useRef();

    const jumpToTime = useCallback(
        (time) => {
            let newData = calTimeToSeek(state.duration, time);
            videoRef.current.seekTo(parseFloat(newData));
        },
        [state]
    );

    const handleProgress = (e) => {
        const played = e.playedSeconds;
        const Interval = VideoData.filter(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );
        if (!_.isEmpty(Interval)) {
            let source_segment = Interval[0].source_segment;
            setInterval({ ...source_segment, ...e });
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <ReactPlayer
                url={url}
                ref={videoRef}
                width="100%"
                controls={true}
                onDuration={(duration) =>
                    setState({ ...state, duration: duration })
                }
                playing={true}
                onPlay={() => setState({ ...state, playing: true })}
                onPause={() => setState({ ...state, playing: false })}
                onProgress={handleProgress}
            />
            <h2 className={styles.timelineHeading}>Timeline</h2>
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
                        <tr key={i + "key"} className={styles.Timeline}>
                            <td>{i + 1}</td>
                            <td>{list.target_segment.start}</td>
                            <td>{list.target_segment.end}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        jumpToTime(list.target_segment.start)
                                    }
                                >
                                    Jump
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Video;
