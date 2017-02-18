const React = require('react');
const ReactDOM = require('react-dom');
const Login = require('./views/Login');

const props = window.PROPS;

ReactDOM.render(
    <Login {...props}/>,
    document
);