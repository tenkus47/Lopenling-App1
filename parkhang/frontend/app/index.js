import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "components/App/AppContainer";

// For dev only
import { composeWithDevTools } from "redux-devtools-extension";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";

// Saga
import createSagaMiddleware from "redux-saga";

// Action
import { loadInitialData, userLoggedIn } from "actions";
import { enableBatching } from "redux-batched-actions";

// Reducers
import rootReducer from "reducers";

// Sagas
import "babel-polyfill";
import rootSaga from "sagas";

// i18n
import { addLocaleData } from "react-intl";
import { IntlProvider, updateIntl } from "react-intl-redux";
import { updateLocales } from "actions";
import boLocaleData from "react-intl/locale-data/bo";
import en from "i18n/en/app.translations.json";
import bo from "i18n/bo/app.translations.json";

addLocaleData([...boLocaleData]);

// For react-intl - prevents FormattedMessage from always
// outputting a <span>
// see https://github.com/yahoo/react-intl/issues/999#issuecomment-335799491
function Fragment(props) {
    return props.children || <span {...props} /> || null;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
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
    updateLocales({
        en: en,
        bo: bo
    })
);

store.dispatch(updateIntl(en));

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

if (USER_LOGGED_IN) {
    store.dispatch(userLoggedIn(USER_ID, USER_NAME));
}
store.dispatch(loadInitialData());
