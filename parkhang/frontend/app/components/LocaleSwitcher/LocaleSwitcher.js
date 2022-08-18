import * as React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import * as reducers from "reducers";
import * as actions from "actions";
import { LocalesList } from "reducers/locales";
import type { AppState } from "reducers";
import styles from "./LocaleSwitcher.css";
import { Button } from "@mui/material";
type Props = {
    locales: LocalesList,
    selectLocale: (locale: string) => void,
};

class LocaleSwitcher extends React.Component<Props> {
    render() {
        const activeLocale = this.props.activeLocale;
        const locales = this.props.locales.map((localeData) => {
            let isActive = localeData.locale === activeLocale;
            let classname = [styles.localeOption];
            if (isActive) {
                classname.push(styles.activeLocale);
            }
            return (
                <Button
                    key={localeData.locale}
                    // className={classnames(classname)}
                    size="small"
                    onClick={() => this.props.selectLocale(localeData.locale)}
                >
                    {localeData.displayName}
                </Button>
            );
        });
        return (
            <Button size="small" onClick={this.handleLocaleClick}>
                {/* <div className={styles.Globe}> */}
                {/* <Globe/> */}
                <div style={{ cursor: "pointer" }}>{activeLocale}</div>
                {/* </div> */}
                <div className={styles.localeOptions}> {locales}</div>
            </Button>
        );
    }
}

function mapStateToProps(state: AppState) {
    const locales = reducers.getLocales(state);
    const activeLocale = reducers.getActiveLocale(state);
    return {
        locales: locales,
        activeLocale,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectLocale: (locale: string) => {
            dispatch(actions.selectedLocale(locale));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
