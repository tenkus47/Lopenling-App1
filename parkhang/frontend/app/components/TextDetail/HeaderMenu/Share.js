import React, { useState, useRef } from "react";
import classnames from "classnames";
import ShareIcon from "@mui/icons-material/Share";
import {
    Button,
    Tooltip,
    Fade,
    ClickAwayListener,
    Snackbar,
    Alert,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
function Share(props) {
    let [showShare, setShowShare] = useState(false);
    let [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <ClickAwayListener onClickAway={() => setShowShare(false)}>
                <Button
                    size="small"
                    // ref={domNode3}
                    variant="text"
                    style={{ padding: 0, color: "black" }}
                    onClick={() => setShowShare((prev) => !prev)}
                >
                    <Tooltip title="Share">
                        <ShareIcon />
                    </Tooltip>
                    <ShareOption
                        {...props}
                        showShare={showShare}
                        setOpen={setOpen}
                    />
                </Button>
            </ClickAwayListener>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    The Url Copied to Clipboard !
                </Alert>
            </Snackbar>
        </>
    );
}

export default Share;

function ShareOption(props) {
    const [coppied, setcoppied] = useState(false);
    let textid = props.selectedText;
    let textid2 = props.selectedText2;
    let witnessid = props.selectedWitness;
    let witnessid2 = props.selectedWitness2;
    let url = "";
    if (textid2 && witnessid2) {
        url =
            window.location.origin +
            `/texts/${textid.id}/witnesses/${witnessid?.id}/texts2/${textid2.id}/witnesses2/${witnessid2.id}`;
    } else {
        url =
            window.location.origin +
            `/texts/${textid.id}/witnesses/${witnessid?.id}`;
    }
    const handleCopy = () => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                setcoppied(true);
                setTimeout(() => {
                    setcoppied(false);
                }, 3000);
            })
            .catch((e) => console.log(e.message))
            .finally(() => props.setOpen(true));
    };

    return (
        <Fade in={props.showShare}>
            <div
                style={{
                    position: "absolute",
                    top: 30,
                    background: "white",
                    width: 240,
                    right: 10,
                    boxShadow: "1px 1px 2px black",
                    zIndex: 9999,
                    padding: 10,
                    borderRadius: 10,
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 10 }}>
                    {props.selectedText.name}
                </div>
                <div style={{ textAlign: "center", display: "flex", gap: 10 }}>
                    <input type="text" defaultValue={url} disabled={coppied} />
                    <div
                        onClick={handleCopy}
                        style={{ color: coppied && "green" }}
                    >
                        <ContentCopyIcon />
                    </div>
                </div>
            </div>
        </Fade>
    );
}
