import React from "react";
import Draggable from "react-draggable";

import CloseIcon from "@mui/icons-material/Close";
import Paper, { PaperProps } from "@mui/material/Paper";
import { ResizableBox } from "react-resizable";
import Video from "./Video";
import Audio from "./Audio";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
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
        const widget2 = document.getElementById("widget2");
        if (widget2) {
            widget2.style.display = "hide";
        }
    };
    if (props.selectedMedia.isImageVisible) return null;

    return (
        <PaperComponent
            sx={{ position: "absolute", zIndex: 1 }}

            // onClose={handleClose}
        >
            <ResizableBox height={350} width={400}>
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
                        <div>
                            {props.selectedMedia.isVideoVisible && "VIDEO"}
                        </div>
                        <div className="buttons-hide-close">
                            <IconButton onClick={toggleHide}>-</IconButton>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                    <>
                        {props.selectedMedia.isVideoVisible && (
                            <Video {...props} />
                        )}
                        {props.selectedMedia.isAudioVisible && <Audio />}
                    </>
                </div>
            </ResizableBox>
        </PaperComponent>
    );
}

export default DraggableMedia;
