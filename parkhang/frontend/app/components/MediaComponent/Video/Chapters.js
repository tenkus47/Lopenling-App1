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

function Chapters(props) {
    let target = props.mediaInterval.target_segment;
    let youtube_video_id = "2MMM_ggekfE";
    const handleClick = (time) => {};

    return (
        <Accordion sx={{ border: "#eee 1px solid" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="video-chapter-content"
                id="chapter-accordion"
            >
                <Typography>Chapters</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.videoData.map((l, index) => {
                    return (
                        <Box key={l.source_segment.start}>
                            <TimeStamp
                                img={
                                    "//img.youtube.com/vi/" +
                                    youtube_video_id +
                                    "/0.jpg"
                                }
                                topic={"first chapter of chojuk"}
                                startTime={l.target_segment.start}
                                active={
                                    l.target_segment.start === target?.start
                                }
                                jumpToTime={props.jumpToTime}
                                handleClick={handleClick}
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
    return {
        videoData: videoData.alignment,
        mediaInterval: reducers.getMediaInterval(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, matchDispatchToProps)(Chapters);
