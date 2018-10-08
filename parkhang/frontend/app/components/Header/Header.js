// @flow
import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getUser, getActiveLocale } from "reducers";
import styles from "./Header.css";
import User from "lib/User";
import type { AppState } from "reducers";
import { FormattedMessage, injectIntl } from "react-intl";
import LocaleSwitcher from "components/LocaleSwitcher/LocaleSwitcher";
import NavigationButton from "components/UI/NavigationButton";
import { getTextListVisible } from "reducers";
import { changedTextListVisible } from "actions";

export const LoginControls = () => (
    <div className={classnames(styles.notLoggedIn, styles.controls)}>
        <div className={classnames(styles.login, styles.textLink)}>
            <a href="/accounts/login/">
                <FormattedMessage id="header.login" />
            </a>
        </div>
        <div className={classnames(styles.signUp, styles.buttonLink)}>
            <a href="/accounts/signup/">
                <FormattedMessage id="header.signUp" />
            </a>
        </div>
    </div>
);

type LoggedInControlsProps = {
    user: User
};

export const LoggedInControls = (props: LoggedInControlsProps) => (
    <div className={styles.controls}>
        {props.user.name} |&nbsp;<a href="/accounts/logout/">
            <FormattedMessage id="header.logout" />
        </a>
    </div>
);

type HeaderProps = {
    user: User,
    activeLocale: string,
    navigationButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string }
};

export const Header = (props: HeaderProps) => {
    let controls = null;
    if (props.user.isLoggedIn) {
        controls = <LoggedInControls user={props.user} />;
    } else {
        controls = <LoginControls />;
    }

    let toggleTitle = props.intl.formatMessage({
        id: "header.toggleTextList"
    });

    return (
        <header className={styles.header}>
            <NavigationButton
                onClick={props.navigationButtonClicked}
                className={styles.navigationButton}
                title={toggleTitle}
            />
            <p>
                <FormattedMessage id="header.title" key={props.activeLocale} />
            </p>
            <LocaleSwitcher />
            {controls}
        </header>
    );
};

const mapStateToProps = (state: AppState): { user: User } => {
    const user = getUser(state);
    const activeLocale = getActiveLocale(state);

    return {
        user: user,
        activeLocale: activeLocale,
        textListIsVisible: getTextListVisible(state)
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...stateProps,
        navigationButtonClicked: () => {
            dispatchProps.dispatch(
                changedTextListVisible(!stateProps.textListIsVisible)
            );
        }
    };
};

const HeaderContainer = connect(mapStateToProps, null, mergeProps)(Header);

export default injectIntl(HeaderContainer);
