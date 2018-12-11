// @flow
import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import HeaderContainer from "components/Header";
import TextsSearchContainer from "components/TextsSearch/TextsSearchContainer";
import TextListContainer from "containers/TextListContainer";
import TextDetailContainer from "components/TextDetail/TextDetailContainer";
import TextListTabContainer from "components/TextList/TextListTabContainer";
import type { AppState } from "reducers";
import * as actions from "actions";

import styles from "./App.css";
import utilStyles from "css/util.css";

import { handleKeyDown } from "../../shortcuts";

type Props = {
    textListIsVisible: boolean,
    state: AppState,
    dispatch: (action: actions.Action) => void
};

const App = (props: Props) => {
    let textListClassnames = [styles.listContainer];
    if (props.textListIsVisible) {
        textListClassnames.push(styles.showListContainer);
    } else {
        textListClassnames.push(styles.hideListContainer);
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
            <HeaderContainer />
            <div className={classnames(styles.interface, utilStyles.flex)}>
                <div className={classnames(...textListClassnames)}>
                    <TextsSearchContainer />
                    <TextListContainer />
                </div>
                <TextDetailContainer />
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        state: state
    };
};

export default connect(mapStateToProps, null, null)(App);
