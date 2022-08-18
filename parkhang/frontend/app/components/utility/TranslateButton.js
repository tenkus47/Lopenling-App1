import React from "react";
import styles from "./TranslateButton.css";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import { Button, Typography } from "@mui/material";
const mapStateToProps = (state) => {
    const locales = reducers.getLocales(state);
    const activeLocale = reducers.getActiveLocale(state);
    return {
        locales: locales,
        activeLocale,
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (locale: string) => {
            dispatch(actions.selectedLocale(locale));
        },
        dispatch,
    };
};

function TranslateButton(props) {
    let { onChangeLanguage } = props;
    let language = props.activeLocale;
    const handleLanguage = () => {
        if (language === "bo") {
            onChangeLanguage("en");
        } else {
            onChangeLanguage("bo");
        }
    };
    return (
        <Button onClick={() => handleLanguage()} size="small">
            {language !== "bo" ? (
                <Typography>A</Typography>
            ) : (
                <Typography style={{ paddingTop: "-10px", marginTop: "-10px" }}>
                    ཀ
                </Typography>
            )}
        </Button>
    );
}

const TranslateButtonContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(TranslateButton);
export default TranslateButtonContainer;
