// @flow
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import HeaderContainer from "components/Header";

import type { AppState } from "reducers";
import * as actions from "actions";
import styles from "./App.css";
import utilStyles from "css/util.css";
import waterStyles from "./Water.css";
import { handleKeyDown } from "../../shortcuts";
import favimage from "images/favicon.png";
import Main from "bodyComponent/Main";
import Favicon from "react-favicon";
import Editor from "components/Editors/EditorContainer";
import useDelayUnmount from "../UI/useDelayUnmount";
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

    if (!SelectedText) {
        setTitle("Parkhang");
    }
    const mountedStyle = { opacity: 1, transition: "opacity 500ms ease-in" };
    const unmountedStyle = { opacity: 0, transition: "opacity 500ms ease-in" };
    return (
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
                <div
                    style={loadScreen ? mountedStyle : unmountedStyle}
                    className={waterStyles.divBody}
                >
                    <div className={waterStyles.water}></div>
                </div>
            )}
            <HeaderContainer />
            {SelectedText !== null ? <Editor props={props} /> : <Main />}
        </div>
    );
};

export default App;
