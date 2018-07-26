// @flow
import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getUser, getActiveLocale, getIntlLocale } from "reducers";
import styles from "./Header.css";
import User from "lib/User";
import type { AppState } from "reducers";
import { FormattedMessage } from "react-intl";
import LocaleSwitcher from "components/LocaleSwitcher/LocaleSwitcher";

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
    activeLocale: string
};

export const Header = (props: HeaderProps) => {
    let controls = null;
    if (props.user.isLoggedIn) {
        controls = <LoggedInControls user={props.user} />;
    } else {
        controls = <LoginControls />;
    }

    return (
        <header className={styles.header}>
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
        activeLocale: activeLocale
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
