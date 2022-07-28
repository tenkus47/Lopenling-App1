// @flow
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import HeaderContainer from "components/Header";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import type { AppState } from "reducers";
import * as actions from "actions";
import styles from "./App.css";
import utilStyles from "css/util.css";
import { handleKeyDown } from "../../shortcuts";
import favimage from "images/favicon.png";
import Main from "bodyComponent/Main";
import Favicon from "react-favicon";
import Editor from "components/Editors/EditorContainer";
import useDelayUnmount from "../UI/useDelayUnmount";
import { history } from "redux-first-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, lightBlue } from "@mui/material/colors";
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
    setTitle(props.title);
    let [loadScreen, setLoadScreen] = useState(true);
    const shouldRenderChild = useDelayUnmount(loadScreen, 1000);
    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadScreen(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
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
                {shouldRenderChild && (
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                    </Box>
                )}
                <HeaderContainer />
                {url.location.pathname === "/textSelection" ||
                url.location.pathname === "" ? (
                    <Main />
                ) : SelectedText ? (
                    <Editor props={props} />
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
