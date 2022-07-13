import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Resources.css";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import * as actions from "actions";
import * as reducers from "reducers";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
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
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <ListItemButton
                    selected={props.selectedMedia.isImageVisible}
                    onClick={() => handleMediaToggle("IMAGE")}
                >
                    <ListItemIcon>
                        <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Image" />
                </ListItemButton>
                <ListItemButton
                    selected={props.selectedMedia.isVideoVisible}
                    onClick={() => handleMediaToggle("VIDEO")}
                >
                    <ListItemIcon>
                        <OndemandVideoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Video" />
                </ListItemButton>
                <ListItemButton
                    selected={props.selectedMedia.isAudioVisible}
                    onClick={() => handleMediaToggle("AUDIO")}
                >
                    <ListItemIcon>
                        <AudiotrackIcon />
                    </ListItemIcon>
                    <ListItemText primary="Audio" />
                </ListItemButton>
            </List>
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
