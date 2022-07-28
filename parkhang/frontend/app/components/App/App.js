// @flow
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import HeaderContainer from "components/Header";
import type { AppState } from "reducers";
import * as actions from "actions";
import styles from "./App.css";
import utilStyles from "css/util.css";
import { handleKeyDown } from "../../shortcuts";
import favimage from "images/favicon.png";
import HomePage from "components/HomePage";
import Favicon from "react-favicon";
import Editor from "components/Editors/EditorContainer";
import Indrajala from "images/indrajala_logo.png";
import { Typography } from "@mui/material";
import { history } from "redux-first-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import MessageIcon from "@mui/icons-material/Message";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { Snackbar, Alert } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            light: "#6cf",
            main: "#08c",
            dark: "#069",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        button: {
            fontWeight: "normal",
            lineHeight: "normal",
            textTransform: "capitalize",
            textDecoration: "none",
            letterSpacing: 0,
            borderRadius: "4px",
            fontFamily: "'Qomolangma-UchenSarchen', 'Overpass', sans-serif",
        },
    },
});

type Props = {
    title: string,
    textListIsVisible: boolean,
    textListWidth: number,
    state: AppState,
    dispatch: (action: actions.Action) => void,
    onChangedTextWidth: (width: number) => void,
    onChangedTextListVisible: (isVisible: boolean) => void,
};

function setTitle(title: string) {
    document.title = title;
}

const App = (props: Props) => {
    const [open, setOpen] = useState();
    const handleShare = () => {
        let textid = props.selectedText;
        let textid2 = props.selectedText2;
        let witnessid = props.selectedWitness;
        let witnessid2 = props.selectedWitness2;
        if (textid2 && witnessid2) {
            url =
                window.location.origin +
                `/texts/${textid.id}/witnesses/${witnessid?.id}/texts2/${textid2.id}/witnesses2/${witnessid2.id}`;
        } else {
            url =
                window.location.origin +
                `/texts/${textid.id}/witnesses/${witnessid?.id}`;
        }

        navigator.clipboard
            .writeText(url)
            .then()
            .catch((e) => console.log(e.message))
            .finally(() => setOpen(true));
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    const actions = [
        {
            icon: <EditIcon htmlColor={props.isAnnotating && "#ff7961"} />,
            name: "Annotate",
            condition: props.isAnnotating,
            function: () => props.changeIsAnnotating(!props.isAnnotating),
        },
        {
            icon: <MessageIcon />,
            name: "Contact Us",
            function: () => console.log("message"),
        },
        {
            icon: <ShareIcon />,
            name: "Share",
            function: handleShare,
        },
        {
            icon: (
                <VerticalSplitIcon
                    htmlColor={props.isSecondWindowOpen && "#ff7961"}
                />
            ),
            name: "Split Window",
            condition: props.isSecondWindowOpen,
            function: () =>
                props.onChangeWindowOpen(!props.isSecondWindowOpen, 140),
        },
    ];
    setTitle(props.title);
    let SelectedText = props.state?.ui?.selectedText;
    let url = history();
    if (!SelectedText) {
        setTitle("Parkhang");
    }
    return (
        <ThemeProvider theme={theme}>
            <div
                style={{ position: "relative" }}
                className={classnames(
                    styles.container,
                    utilStyles.flex,
                    utilStyles.flexColumn
                )}
                onKeyDown={(e: SyntheticKeyboardEvent<*>) => {
                    handleKeyDown(e, props.state, props.dispatch);
                }}
            >
                <Favicon url={favimage} />

                <HeaderContainer />
                {url.location.pathname === "/textSelection" ||
                url.location.pathname === "" ? (
                    <>
                        <HomePage />
                        <div
                            style={{
                                height: 45,
                                width: "100%",
                                position: "fixed",
                                background: "#292826",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bottom: 0,
                            }}
                        >
                            <Typography
                                textAlign={"center"}
                                variant="h6"
                                fontSize={{ md: "20px", xs: "10px" }}
                                textTransform={"capitalize"}
                                color="white"
                            >
                                Our Trusted partner
                            </Typography>

                            <img
                                src={Indrajala}
                                alt="indrajala logo"
                                style={{
                                    objectFit: "contain",
                                    maxHeight: "100%",
                                    marginLeft: "40px",
                                }}
                            />
                        </div>
                    </>
                ) : SelectedText ? (
                    <>
                        <Editor props={props} />
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: "absolute", bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon />}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    onClick={action.function}
                                    open={action.condition}
                                    style={{ backgroundColor: "red" }}
                                />
                            ))}
                        </SpeedDial>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <Alert
                                onClose={handleClose}
                                severity="success"
                                sx={{ width: "100%" }}
                            >
                                The Url Copied to Clipboard !
                            </Alert>
                        </Snackbar>
                    </>
                ) : (
                    <div>
                        Refresh the page here <a href="/"> click </a>
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
};

export default App;
