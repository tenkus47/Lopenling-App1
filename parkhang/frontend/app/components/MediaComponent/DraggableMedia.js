import React from "react";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import Paper, { PaperProps } from "@mui/material/Paper";
import Video from "./Video/Video";
import Audio from "./Audio";
import { IconButton } from "@mui/material";

const MEDIA_MAX_WIDTH = "400px";

function PaperComponent(props: PaperProps) {
    return (
        <Draggable handle="#draggable-dialog-title" bounds="parent">
            <Paper {...props} />
        </Draggable>
    );
}

function DraggableMedia(props) {
    const [hide, setHide] = React.useState(false);

    const handleClose = () => {
        props.changeMediaSelection(null);
    };
    const toggleHide = () => {
        setHide((prev) => !prev);
    };
    if (props.selectedMedia.isImageVisible) return null;

    return (
        <PaperComponent
            sx={{
                position: "absolute",
                zIndex: 1,
                right: 0,
                maxWidth: MEDIA_MAX_WIDTH,
            }}

            // onClose={handleClose}
        >
            <div className="Resizable-media-div">
                <div
                    style={{
                        cursor: "move",
                        paddingInline: 20,
                        paddingTop: 10,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    id="draggable-dialog-title"
                >
                    <h3>{props.selectedMedia.isVideoVisible && "VIDEO"}</h3>
                    <h3>{props.selectedMedia.isAudioVisible && "AUDIO"}</h3>
                    <div className="buttons-hide-close">
                        <IconButton onClick={toggleHide} disableRipple>
                            {hide ? "+" : "-"}
                        </IconButton>
                        <IconButton onClick={handleClose} disableRipple>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                <>
                    {props.selectedMedia.isVideoVisible && (
                        <Video {...props} open={!hide} setOpen={setHide} />
                    )}
                    {props.selectedMedia.isAudioVisible && (
                        <Audio open={!hide} setOpen={setHide} />
                    )}
                </>
            </div>
        </PaperComponent>
    );
}

export default DraggableMedia;
