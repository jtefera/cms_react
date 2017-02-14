const React = require('react');
const Layout = require('../views/Layout');
const Home = require('../views/Home');
const Post = require('../views/Post');
const Author = require('../views/Author');
const About = require('../views/About');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');

let createElement = function (Component, props) {
    // make sure you pass all the props in!
    return <Component {...props} />
}
if (typeof window === 'object') {
    createElement = function (Component, props) {
        return <Component {...props} custom={window.PROPS}/>;
    }
}
module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home}/>
            <Route path='post/:postId' component={Post} />
            <Route path='author/:authorId' component={Author} />
            <Route path='about' component={About} />
        </Route>
    </Router>
);