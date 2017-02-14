const React = require('react');
const {Provider} = require('react-redux');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');
const Layout = require('../views/Layout');
const Home = require('../views/Home');
const EditPosts = require('../views/EditPosts');
const EditPost = require('../views/EditPost');
const AddPost = require('../views/AddPost');
const EditPageInfo = require('../views/EditPageInfo');


let createElement = function createElement(Component, props) {
    return <Component {...props} />;
}
if(typeof window === 'object') {
    createElement = function createElement(Component, props) {
        return <Component {...props} {...window.PROPS}/>;
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/admin' component={Layout}>
            <IndexRoute component={Home}/>
            <Route path='edit_posts' component={EditPosts} />
            <Route path='edit_post/:postId' component={EditPost} />
            <Route path='add_post' component={AddPost} />
            <Route path='edit_page_info' component={EditPageInfo} />
        </Route>
    </Router>
);