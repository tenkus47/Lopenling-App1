import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import MediaComponent from "components/MediaComponent";
import { batchActions } from "redux-batched-actions";
import { Box, Divider } from "@mui/material";
import Loader from "react-loader";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import SplitPane from "react-split-pane";
import styles from "./resizerStyle.css";
import classnames from "classnames";
import TextDetailContainer2 from "components/TextDetail2/TextDetailContainer";
import TextDetailContainer from "components/TextDetail/TextDetailContainer";

function TextSheet(props) {
    let [landScape, setLandScape] = useState(true);
    let editorRef = useRef(null);
    const handleResize = (e) => {
        let width = editorRef.current.clientWidth;
        let height = editorRef.current.clientHeight;
        if (width > height) {
            setLandScape(true);
        } else {
            setLandScape(false);
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={editorRef}
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#F8F9FA",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* <SplitPane
                defaultSize={props.Media.isPanelVisible ? "35vh" : 0}
                size={props.Media.isPanelVisible ? "35vh" : 0}
                split="horizontal"
                resizerClassName={classnames(styles.Resizer, styles.horizontal)}
                resizerStyle={{
                    display: !props.Media.isPanelVisible ? "none" : "block",
                }}
            >
                {props.Media.isPanelVisible ? <MediaComponent /> : <div />} */}
            <SplitPane
                split={landScape ? "vertical" : "horizontal"}
                size={
                    props.isSecondWindowOpen && props.selectedText
                        ? "50%"
                        : "70%"
                }
                style={
                    !props.isSecondWindowOpen && {
                        marginLeft: "20%",
                        marginTop: 10,
                    }
                }
                resizerStyle={!props.isSecondWindowOpen && { display: "none" }}
                resizerClassName={
                    !props.isSecondWindowOpen
                        ? classnames(
                              styles.Resizer,
                              { [styles.vertical]: landScape },
                              { [styles.horizontal]: !landScape }
                          )
                        : null
                }
                onDragFinished={(width: number) => {
                    if (width > 0) window.dispatchEvent(new Event("resize"));
                }}
            >
                <ErrorBoundary>
                    <TextDetailContainer />
                </ErrorBoundary>
                <ErrorBoundary>
                    {props.isSecondWindowOpen && props.selectedText && (
                        <TextDetailContainer2 />
                    )}
                </ErrorBoundary>
            </SplitPane>
            {props.Media.isPanelVisible && (
                <ErrorBoundary>
                    <MediaComponent />
                </ErrorBoundary>
            )}
            {/* </SplitPane> */}
        </div>
    );
}

const mapStateToProps = (state: AppState): { user: User } => {
    const isSecondWindowOpen = reducers.isSecondWindowOpen(state);
    const Media = reducers.getMediaData(state);
    const selectedText = reducers.getSelectedText(state);
    return {
        selectedText,
        isSecondWindowOpen,
        Media,
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
    };
};
const TextSheetContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextSheet);

export default TextSheetContainer;
