// @flow
import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getUser } from "reducers";
import styles from "./Header.css";
import User from "lib/User";
import type { AppState } from "reducers";

export const LoginControls = () => (
    <div className={classnames(styles.notLoggedIn, styles.controls)}>
        <div className={classnames(styles.login, styles.textLink)}>
            <a href="/accounts/login/">Login</a>
        </div>
        <div className={classnames(styles.signUp, styles.buttonLink)}>
            <a href="/accounts/signup/">Sign Up</a>
        </div>
    </div>
);

type LoggedInControlsProps = {
    user: User
};

export const LoggedInControls = (props: LoggedInControlsProps) => (
    <div className={styles.controls}>
        {props.user.name} |&nbsp;<a href="/accounts/logout/">Logout</a>
    </div>
);

type HeaderProps = {
    user: User
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
            <p>Esukhia</p>

            {controls}
        </header>
    );
};

const mapStateToProps = (state: AppState): { user: User } => {
    const user = getUser(state);

    return {
        user: user
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
