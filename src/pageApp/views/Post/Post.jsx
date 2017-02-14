'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const Post = require('../../presentations/Post');
const mapStateToProps = (state, ownProps) => ({
    ...state.posts[ownProps.params.postId]
});
const wrapper = connect(
    mapStateToProps
);

module.exports = wrapper(Post);