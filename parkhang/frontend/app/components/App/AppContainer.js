import React from 'react';
import { connect } from 'react-redux';

import { getTextListVisible } from 'reducers'

import App from 'components/App'

const mapStateToProps = (state) => {
    return {
        textListIsVisible: getTextListVisible(state)
    }
};

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;