import React from 'react'
import { connect } from 'react-redux'
import TextHeading from './TextHeading'
import { changedShowPageImages } from 'actions'

const mapStateToProps = (state) => {
    return {
        showPageImages: state.ui.showPageImages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changedShowPageImages: (e) => {
            console.log('e.target.checked: %o', e.target.checked);
            dispatch(changedShowPageImages(e.target.checked))
        }
    }
};

const TextHeadingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextHeading);

export default TextHeadingContainer;

