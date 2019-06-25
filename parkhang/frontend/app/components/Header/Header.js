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
import AccountButton from "./AccountButton";
import AccountOverlay from "./AccountOverlay";
import { getTextListVisible, getAccountOverlayVisible } from "reducers";
import * as actions from "actions";

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
    user: User,
    overlayVisible: boolean,
    accountButtonClicked: () => void
};

export const LoggedInControls = (props: LoggedInControlsProps) => (
    <div className={styles.controls}>
        <AccountButton
            name={props.user.name}
            onClick={props.accountButtonClicked}
        />
        {props.overlayVisible && (
            <AccountOverlay top={60} right={0} user={props.user} />
        )}
    </div>
);

type HeaderProps = {
    user: User,
    activeLocale: string,
    accountOverlayVisible: boolean,
    navigationButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string },
    accountButtonClicked: () => void
};

export const Header = (props: HeaderProps) => {
    let controls = null;
    if (props.user.isLoggedIn) {
        controls = (
            <LoggedInControls
                user={props.user}
                overlayVisible={props.accountOverlayVisible}
                accountButtonClicked={props.accountButtonClicked}
            />
        );
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
        textListIsVisible: getTextListVisible(state),
        accountOverlayVisible: getAccountOverlayVisible(state)
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...stateProps,
        navigationButtonClicked: () => {
            dispatchProps.dispatch(
                actions.changedTextListVisible(!stateProps.textListIsVisible)
            );
        },
        accountButtonClicked: () => {
            dispatchProps.dispatch(
                actions.changedAccountOverlay(!stateProps.accountOverlayVisible)
            );
        }
    };
};

const HeaderContainer = connect(mapStateToProps, null, mergeProps)(Header);

export default injectIntl(HeaderContainer);
