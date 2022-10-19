// @flow
import React, { Suspense, lazy } from "react";
import classnames from "classnames";
import type { AppState } from "reducers";
import * as actions from "actions";
import styles from "./App.css";
import utilStyles from "css/util.css";
import favimage from "images/favicon.png";
import Favicon from "react-favicon";
import { history } from "redux-first-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";
import LopenlingLogo from "images/lopenling_logo.png";
// import Switcher from "./Switcher";
// import Header from "components/Header";
const Switcher = lazy(() => import("./Switcher"));
const Header = lazy(() => import("components/Header"));

type Props = {
    title: string,
    selectedText: {},
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
                        main: mode !== "dark" ? "#FBFBFA" : "#303030",
                    },
                    links: {
                        main: mode !== "dark" ? "#666666" : "#eee",
                    },
                    heading: {
                        main: mode !== "dark" ? "#eee" : "#383838",
                    },
                    Imagenavbar: {
                        main: mode !== "dark" ? "#aaa" : "#383838",
                    },
                    texts: {
                        main: mode !== "dark" ? "#303030" : "#d3d3d3",
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
                    h6: {
                        color: mode !== "dark" ? "#303030" : "#d3d3d3",
                    },
                },
                props: {
                    MuiButtonBase: {
                        // The properties to apply
                        disableRipple: true, // No more ripple, on the whole application!
                    },
                },
            }),
        [mode]
    );

    let SelectedText = props.selectedText;
    setTitle(props.title);
    if (!SelectedText) {
        setTitle("parkhang");
    } else if (props.page === "Editors") {
        setTitle(SelectedText?.name + "-" + props.title);
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
            >
                <Favicon url={favimage} />
                <Suspense
                    fallback={
                        <Box
                            sx={{
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100vh",
                            }}
                        >
                            <img
                                src={LopenlingLogo}
                                alt="suspence image"
                                height={150}
                                style={{ objectFit: "contain" }}
                            />
                            <CircularProgress />
                        </Box>
                    }
                >
                    <Header />
                    <Switcher />
                </Suspense>
            </Box>
        </ThemeProvider>
    );
};

export default App;
