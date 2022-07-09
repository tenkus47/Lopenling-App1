// @flow
import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import styles from "./Header.css";
import User from "lib/User";
import type { AppState } from "reducers";
import { FormattedMessage, injectIntl } from "react-intl";
import LocaleSwitcher from "components/LocaleSwitcher/LocaleSwitcher";
import NavigationButton from "components/UI/NavigationButton";
import AccountButton from "./AccountButton";
import AccountOverlay from "./AccountOverlay";
import {
    getTextListVisible,
    getAccountOverlayVisible,
    getUser,
    getActiveLocale,
} from "reducers";
import * as actions from "actions";
import lopenlingLogo from "images/lopenling_logo.png";
import UserIcon from "images/discourse_user.svg";
import { NavLink } from "redux-first-router-link";
import TranslateButton from "bodyComponent/utility/TranslateButton";
import { history } from "redux-first-router";
type LoginProps = {
    successRedirect: string,
    csrfToken: string,
};

export const LoginControls = (props: LoginProps) => (
    <div className={classnames(styles.notLoggedIn, styles.controls)}>
        <div className={classnames(styles.signUp, styles.buttonLink)}>
            <a href={SSO_SIGNUP_URL}>
                <FormattedMessage id="header.signUp" />
            </a>
        </div>
        <form method="post" action="/discourse/login_redirect/">
            <button className={classnames(styles.loginButton)} type="submit">
                <UserIcon width="11" />
                <FormattedMessage id="header.login" />
            </button>
            <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value={props.csrfToken}
            />
            <input
                type="hidden"
                name="success_redirect"
                value={props.successRedirect}
            />
        </form>
    </div>
);

type LoggedInControlsProps = {
    user: User,
    overlayVisible: boolean,
    accountButtonClicked: () => void,
};

export const LoggedInControls = (props: LoggedInControlsProps) => (
    <div className={styles.controls}>
        <AccountButton
            name={props.user.name}
            onClick={props.accountButtonClicked}
        />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 10 }}>
            <div>{props.user.name}</div>
            <a
                href="/discourse/logout"
                style={{ color: "black", fontSize: 12 }}
            >
                logout
            </a>
        </div>
        {console.log(props.overlayVisible)}
        {/* {props.overlayVisible && (
            <AccountOverlay top={60} right={0} user={props.user} />
        )} */}
    </div>
);

type HeaderProps = {
    user: User,
    activeLocale: string,
    accountOverlayVisible: boolean,
    navigationButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string },
    accountButtonClicked: () => void,
    successRedirect: string,
    csrfToken: string,
};

export const Header = (props: HeaderProps) => {
    let locations = history();
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
        controls = (
            <LoginControls
                successRedirect={props.successRedirect}
                csrfToken={props.csrfToken}
            />
        );
    }

    let toggleTitle = props.intl.formatMessage({
        id: "header.toggleTextList",
    });
    const image_location = lopenlingLogo;
    return (
        <header className={styles.header}>
            <div style={{ display: "flex" }}>
                {!locations.location.pathname.includes("/texts") && (
                    <NavLink to="/">
                        <div className={styles.logo}>
                            <img src={image_location} height="30" />
                        </div>
                    </NavLink>
                )}
                <div className={styles.navlinks}>
                    <ul>
                        <li>
                            {locations.location.pathname.includes("/texts") && (
                                <NavigationButton
                                    onClick={props.navigationButtonClicked}
                                    className={styles.navigationButton}
                                    title={toggleTitle}
                                    isListVisible={props.textListVisible}
                                />
                            )}
                        </li>
                        <li>
                            <NavLink to="/textSelection">
                                <FormattedMessage id={"header.texts"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/editor">
                                <FormattedMessage id={"header.editor"} />
                            </NavLink>
                        </li>
                        <li>
                            <a href="http://www.lopenling.org">
                                <FormattedMessage id={"lopenlingForum"} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.loginSection}>
                {/* <LocaleSwitcher /> */}
                <TranslateButton />
                {controls}
            </div>
        </header>
    );
};

const mapStateToProps = (state: AppState): { user: User } => {
    const user = getUser(state);
    const activeLocale = getActiveLocale(state);
    const successRedirect = document.location.pathname;
    // TODO: move global CSRF_TOKEN into redux
    const csrfToken = CSRF_TOKEN;

    return {
        user: user,
        activeLocale: activeLocale,
        textListIsVisible: getTextListVisible(state),
        accountOverlayVisible: getAccountOverlayVisible(state),
        textListVisible: getTextListVisible(state),
        successRedirect: successRedirect,
        csrfToken: csrfToken,
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
        },
    };
};

const HeaderContainer = connect(mapStateToProps, null, mergeProps)(Header);

export default injectIntl(HeaderContainer);
