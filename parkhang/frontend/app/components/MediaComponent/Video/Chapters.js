import React, { useEffect } from "react";
import styles from "./Chapters.css";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classnames from "classnames";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
let YOUTUBE_ID = "2MMM_ggekfE";

function Chapters(props) {
    let target = props.mediaInterval.target_segment;

    React.useEffect(() => {
        if (props.isPanelLinked)
            props.changeScrollToId({
                id: props.mediaInterval.source_segment.start || null,
                from: "video",
            });
    }, [target]);

    return (
        <Accordion sx={{ border: "#eee 1px solid", maxHeight: "80vh" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="video-chapter-content"
                id="chapter-accordion"
            >
                <Typography>Chapters</Typography>
            </AccordionSummary>

            <AccordionDetails
                sx={{
                    position: "relative",
                    overflow: "scroll",
                    maxHeight: "400px",
                }}
            >
                {props.videoData.map((l, index) => {
                    return (
                        <Box key={l.source_segment.start}>
                            <TimeStamp
                                img={
                                    "//img.youtube.com/vi/" +
                                    YOUTUBE_ID +
                                    "/0.jpg"
                                }
                                topic={"first chapter of chojuk"}
                                startTime={l.target_segment.start}
                                active={
                                    l.target_segment.start === target?.start
                                }
                                jumpToTime={props.jumpToTime}
                            />
                        </Box>
                    );
                })}
            </AccordionDetails>
        </Accordion>
    );
}

function TimeStamp(props) {
    const classname = [styles.time_stamp];
    if (props.active) {
        classname.push(styles.active_stamp);
    }
    return (
        <Box
            className={classnames(classname)}
            onClick={() => props.jumpToTime(props.startTime)}
        >
            <Box className={styles.image}>
                <img src={props.img} alt="timestamp image" />
            </Box>
            <Box className={styles.chapter_info}>
                <Box className={styles.topic}>{props.topic}</Box>
                <Box className={styles.startTime}>{props.startTime}</Box>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state) => {
    const videoData = reducers.getVideoData(state);
    const isPanelLinked = reducers.isPanelLinked(state);

    return {
        isPanelLinked,
        videoData: videoData.alignment,
        mediaInterval: reducers.getMediaInterval(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        changeScrollToId: (payload) =>
            dispatch(actions.changeScrollToId(payload)),
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(Chapters);
