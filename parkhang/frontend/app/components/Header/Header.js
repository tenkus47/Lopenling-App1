import React from 'react';
import classnames from 'classnames'
import styles from './Header.css';

const LoginControls = (props) => (
    <div className={classnames(styles.notLoggedIn, styles.controls)} >
        <div className={classnames(styles.login, styles.textLink)}><a href="/accounts/login/">Login</a></div>
        <div className={classnames(styles.signUp, styles.buttonLink)}><a href="/accounts/signup/">Sign Up</a></div>
    </div>
);

const LoggedInControls = (props) => (
    <div className={styles.controls}>{USER_NAME} |&nbsp;<a href="/accounts/logout/">Logout</a></div>
);

const Header = (props) => {
    let controls = null;
    if (USER_LOGGED_IN) {
        controls = <LoggedInControls/>
    } else {
        controls = <LoginControls/>
    }
    return (
        <header className={styles.header}>
            <p>Esukhia</p>

            {controls}
        </header>
    )
};

export default Header;