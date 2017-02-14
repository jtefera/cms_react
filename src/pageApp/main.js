'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const pageRouter = require('./router/index.jsx');
const Provider = require('react-redux').Provider;
const {createStore, applyMiddleware, compose} = require('redux');
const reducer = require('./reducer/reducer.js');
const thunkMiddleware = require('redux-thunk').default;
const store = createStore(
    reducer, 
    window.PROPS,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        {pageRouter}
    </Provider>,
    document
);