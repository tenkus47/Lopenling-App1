import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import AppContainer from "components/App/AppContainer";

// For dev only
import { composeWithDevTools } from "redux-devtools-extension";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { batchActions } from "redux-batched-actions";

// Saga
import createSagaMiddleware from "redux-saga";

// Action
import { loadInitialData, userLoggedIn } from "actions";
import { enableBatching } from "redux-batched-actions";

// Reducers
import rootReducer from "reducers";

// Redux state helpers
import textMiddleware from "state_helpers/textMiddleware";

// Sagas
import "core-js/fn/string/pad-start";
import "core-js/fn/string/pad-end";
import "regenerator-runtime/runtime";
import rootSaga from "sagas";

// i18n
import { IntlProvider, updateIntl } from "react-intl-redux";
import * as actions from "actions";
import { i18n_cookie_name } from "i18n";
// Support for Intl in Safari 12 and below
if (!Intl.PluralRules) {
    require("@formatjs/intl-pluralrules/polyfill");
    require("@formatjs/intl-pluralrules/dist/locale-data/bo");
}
if (!Intl.RelativeTimeFormat) {
    require("@formatjs/intl-relativetimeformat/polyfill");
    require("@formatjs/intl-relativetimeformat/dist/locale-data/bo");
}

import en from "i18n/en/app.translations.json";
import bo from "i18n/bo/app.translations.json";
const locales = {
    en: en,
    bo: bo
};

// App Constants
import * as constants from "app_constants";

// For react-intl - prevents FormattedMessage from always
// outputting a <span>
// see https://github.com/yahoo/react-intl/issues/999#issuecomment-335799491
function Fragment(props) {
    return props.children || <span {...props} /> || null;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, textMiddleware];
let store = createStore(
    enableBatching(rootReducer),
    applyMiddleware(...middlewares)
);
if (process.env.NODE_ENV === "development") {
    store = createStore(
        enableBatching(rootReducer),
        composeWithDevTools(applyMiddleware(...middlewares))
    );
}

sagaMiddleware.run(rootSaga);

// TODO: use batch dispatcher?
store.dispatch(
    actions.updateLocales({
        en: en,
        bo: bo
    })
);

if (USER_LOGGED_IN) {
    store.dispatch(userLoggedIn(USER_ID, USER_NAME, USER_LOCALE));
} else {
    const cookieLang = Cookies.get(i18n_cookie_name);
    if (cookieLang) {
        USER_LOCALE = cookieLang;
    }
}
let batchedActions = [];

let textListWidth = Cookies.get(constants.TEXT_LIST_WIDTH_COOKIE);
if (!textListWidth) textListWidth = constants.DEFAULT_TEXT_LIST_WIDTH;
batchedActions.push(actions.changedTextListWidth(Number(textListWidth)));
batchedActions.push(actions.selectedLocale(USER_LOCALE));
batchedActions.push(updateIntl(locales[USER_LOCALE]));
store.dispatch(batchActions(batchedActions));

function intlSelector(state) {
    return {
        ...state.intl,
        key: state.intl.locale
    };
}

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider textComponent={Fragment} intlSelector={intlSelector}>
            <AppContainer />
        </IntlProvider>
    </Provider>,
    document.getElementById("app")
);

store.dispatch(loadInitialData());
