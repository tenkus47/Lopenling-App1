import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

// Saga
import createSagaMiddleware from 'redux-saga'

// Action
import { loadInitialData } from 'actions'

// Reducers
import rootReducer from 'reducers'

// Sagas
import 'babel-polyfill'
import rootSaga from 'sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

store.dispatch(loadInitialData());