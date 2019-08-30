import React from "react";
import { connect } from "react-redux";

import * as reducers from "reducers";
import * as actions from "actions";
import App from "components/App";

const mapStateToProps = state => {
    return {
        title: reducers.getTranslation(state, "header.title"),
        textListIsVisible: reducers.getTextListVisible(state),
        textListWidth: reducers.getTextListWidth(state),
        state: state
    };
};

const matchDispatchToProps = dispatch => {
    return {
        onChangedTextWidth: (width: number) => {
            dispatch(actions.changedTextListWidth(width));
        },
        onChangedTextListVisible: (isVisible: boolean) => {
            dispatch(actions.changedTextListVisible(isVisible));
        },
        dispatch
    };
};

const AppContainer = connect(mapStateToProps, matchDispatchToProps)(App);

export default AppContainer;
