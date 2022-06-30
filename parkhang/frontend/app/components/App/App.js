// @flow
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import HeaderContainer from "components/Header";

import type { AppState } from "reducers";
import * as actions from "actions";
import styles from "./App.css";
import utilStyles from "css/util.css";

import { handleKeyDown } from "../../shortcuts";
import { useFlags } from "flagsmith/react";
import favimage from "images/favicon.png";
import Main from "bodyComponent/Main";
import { useActive } from "../UI/activeHook";
import { history as his } from "redux-first-router";
import Notification from "bodyComponent/utility/Notification";
import Favicon from "react-favicon";
import Editor from "components/Editors/EditorContainer";

type Props = {
    title: string,
    textListIsVisible: boolean,
    textListWidth: number,
    state: AppState,
    dispatch: (action: actions.Action) => void,
    onChangedTextWidth: (width: number) => void,
    onChangedTextListVisible: (isVisible: boolean) => void,
    onChangedNotification: (data: Object) => void,
};

function setTitle(title: string) {
    document.title = title;
}

const App = (props: Props) => {
    setTitle(props.title);
    const isActive = useActive(4000);
    const history = his();
    const path = history.location.pathname;
    const isSearchActive = path.includes("/search/");

    useEffect(() => {
        if (isActive === false)
            props.onChangedNotification({
                message:
                    "YOU ARE NOT ACTIVE FOR SOME TIME NOW, CAN WE HELP YOU?",
                time: 8000,
                type: "warning",
            });
    }, [isActive]);

    let SelectedText = props.state?.ui?.selectedText;

    if (!SelectedText) {
        setTitle("Parkhang");
    }

    return (
        <div
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
            {SelectedText !== null ? <Editor props={props} /> : <Main />}
            {/* <Notification/> */}
        </div>
    );
};

export default App;
