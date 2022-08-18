import React from "react";
import Draggable from "react-draggable";

import CloseIcon from "@mui/icons-material/Close";
import Paper, { PaperProps } from "@mui/material/Paper";
import { ResizableBox } from "react-resizable";
import Video from "./Video";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            // bounds={{ top: 30, left: 30, right: 30, bottom: 30 }}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const styles = (theme) => ({
    resizable: {
        position: "relative",
        "& .react-resizable-handle": {
            position: "absolute",
            width: 20,
            height: 20,
            bottom: 0,
            right: 0,
            background:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
            "background-position": "bottom right",
            padding: "0 3px 3px 0",
            "background-repeat": "no-repeat",
            "background-origin": "content-box",
            "box-sizing": "border-box",
            cursor: "se-resize",
        },
    },
});

function DraggableMedia(props) {
    const handleClose = () => {
        props.changeMediaSelection(null);
    };

    return (
        <PaperComponent
            sx={{ position: "absolute", zIndex: 1 }}

            // onClose={handleClose}
        >
            <ResizableBox
                height={400}
                width={600}
                className={props.classes.resizable}
            >
                <>
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
                        <div>Media</div>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Box sx={{ overflow: "hidden" }}>
                        <Video {...props} />
                    </Box>
                </>
            </ResizableBox>
        </PaperComponent>
    );
}

export default withStyles(styles)(DraggableMedia);
