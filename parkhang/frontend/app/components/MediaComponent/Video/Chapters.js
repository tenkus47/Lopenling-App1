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

let YOUTUBE_ID = "2MMM_ggekfE";

function Chapters(props) {
    let target = props.mediaInterval.target_segment;

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
    return {
        videoData: videoData.alignment,
        mediaInterval: reducers.getMediaInterval(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, matchDispatchToProps)(Chapters);
