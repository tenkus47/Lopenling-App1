import React from 'react'
import { connect } from 'react-redux';

import { getTextListVisible } from 'reducers'
import { changedTextListVisible } from 'actions'

import TextListTab from 'components/TextList/TextListTab'

const mapStateToProps = (state) => {
    return {
        textListIsVisible: getTextListVisible(state)
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        tabClicked: (e) => {
            const textListIsVisible = true;
            dispatch(changedTextListVisible(textListIsVisible));
        }
    }
};

const TextListTabContainer = connect(
    mapStateToProps,
    mapStateToDispatch
)(TextListTab);

export default TextListTabContainer;