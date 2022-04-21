import * as React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import * as reducers from "reducers";
import * as actions from "actions";
import { LocalesList } from "reducers/locales";
import type { AppState } from "reducers";
import styles from "./LocaleSwitcher.css";

type Props = {
    locales: LocalesList,
    selectLocale: (locale: string) => void
};

class LocaleSwitcher extends React.Component<Props> {

 
    render() {
 
        const locales = this.props.locales.map(localeData => {
            return (
                <div
                    key={localeData.locale}
                    className={styles.localeOption}
                    onClick={() => this.props.selectLocale(localeData.locale)}
                >
                    {localeData.displayName}
                </div>
            );
        });
        return <div className={styles.localeOptions}>{locales}</div>;
    }
}

function mapStateToProps(state: AppState) {
    const locales = reducers.getLocales(state);
    return {
        locales: locales
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectLocale: (locale: string) => {
            dispatch(actions.selectedLocale(locale));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
