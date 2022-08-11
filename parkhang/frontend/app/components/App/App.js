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
import { Stack, Typography, Box } from "@mui/material";
import { history } from "redux-first-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import MessageIcon from "@mui/icons-material/Message";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { Snackbar, Alert } from "@mui/material";
import { prayer } from "./prayerMarquee";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Marquee from "react-fast-marquee";

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
    let mode = props.theme;
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    navbar: {
                        main: "#FBFBFA",
                    },
                    links: {
                        main: mode !== "dark" ? "#666666" : "#eee",
                    },
                    heading: {
                        main: mode !== "dark" ? "#eee" : "#383838",
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
                        fontFamily:
                            "'Qomolangma-UchenSarchen', 'Overpass', sans-serif",
                    },
                },
            }),
        [mode]
    );

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
            icon: (
                <EditIcon
                    htmlColor={props.isAnnotating ? "#ff7961" : undefined}
                />
            ),
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
                    htmlColor={props.isSecondWindowOpen ? "#ff7961" : undefined}
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
            <Box
                sx={{
                    bgcolor: "background.default",
                    color: "text.primary",
                }}
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
                        <ErrorBoundary>
                            {/* check for any unknown error on Homepage without causing render error  */}
                            <HomePage />
                        </ErrorBoundary>
                        <Stack
                            style={{
                                width: "100%",
                                position: "fixed",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bottom: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    background: "#292826",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: 55,
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
                            </Box>
                            <Marquee
                                pauseOnHover={true}
                                gradient={false}
                                style={{
                                    background: "#292826",
                                    color: "white",
                                }}
                            >
                                {prayer}
                            </Marquee>
                        </Stack>
                    </>
                ) : SelectedText ? (
                    <>
                        <Editor props={props} />
                        <SpeedDial
                            ariaLabel="SpeedDial basic"
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
            </Box>
        </ThemeProvider>
    );
};

export default App;
