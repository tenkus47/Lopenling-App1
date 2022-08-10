import React from "react";
import ImageComponent from "./Image";
import AudioComponent from "./Audio";
import VideoComponent from "./Video";
import styles from "./MediaOptions.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, IconButton } from "@mui/material";

function MediaOptions(props) {
    if (props.selectedMedia.isImageVisible)
        return <ImageComponent {...props} />;

    return (
        <Box
            className={styles.MediaOption}
            sx={{
                boxShadow: 2,
            }}
        >
            <div className={styles.header}>
                <h3>
                    {props.selectedMedia.isVideoVisible && "VIDEO"}
                    {props.selectedMedia.isAudioVisible && "AUDIO"}
                    {/* {isPortraitImage?"portrait":"landscape"} */}
                </h3>
                <IconButton
                    className={styles.closeBtn}
                    onClick={() => props.changeMediaSelection(null)}
                >
                    <CancelIcon />
                </IconButton>
            </div>
            <div style={{ marginTop: 20, paddingInline: 10 }}>
                {props.selectedMedia.isVideoVisible && (
                    <VideoComponent {...props} />
                )}
                {props.selectedMedia.isAudioVisible && (
                    <AudioComponent {...props} />
                )}
            </div>
        </Box>
    );
}

export default MediaOptions;
