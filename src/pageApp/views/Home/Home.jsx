'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const PostsList = require('../../presentations/PostsList');

const Home = ({posts}) => {
    return (
        <div>
            You are in the Home Page!
            <PostsList posts={posts} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: Object.keys(state.posts).sort().reverse().map((key) => state.posts[key])
});
const wrapper = connect(
    mapStateToProps,
    null
);
module.exports = wrapper(Home);