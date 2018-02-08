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

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("app")
);

if (USER_LOGGED_IN) {
    store.dispatch(userLoggedIn(USER_ID, USER_NAME));
}
store.dispatch(loadInitialData());
