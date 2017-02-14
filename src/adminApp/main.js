const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore, compose, applyMiddleware} = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const reducer = require('./reducer');
const adminRouter = require('./router');

const store = createStore(
    reducer, 
    window.PROPS,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
ReactDOM.render(
    <Provider store={store}>
        {adminRouter}
    </Provider>,
    document
);