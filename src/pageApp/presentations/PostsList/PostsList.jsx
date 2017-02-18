'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const Post = require('../Post');

const Posts = ({posts}) => {
    const postElems = posts.map(post => (
        <Post {...post} key={post.date + post.title} />
    ));
    return (
        <div>
            {postElems}
        </div>
    );
};

Posts.propTypes = {
    posts: React.PropTypes.array
}

module.exports = Posts;