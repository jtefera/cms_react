'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const PostsList = require('../../presentations/PostsList');

const AuthorPage = ({authorName, posts}) => {
    return (
        <div>
            Posts by {authorName}
            <PostsList posts={posts} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    posts: Object.keys(state.posts)
            .map((key) => state.posts[key])
            .filter(post => (post.authorId === ownProps.params.authorId)),
    authorName: state.authors[ownProps.params.authorId].name
});
const wrapper = connect(
    mapStateToProps,
    null
);
module.exports = wrapper(AuthorPage);