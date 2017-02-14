const React = require('react');
const {connect} = require('react-redux');
const PostsList = require('../../presentations/PostsList');


const EditPosts = ({posts}) => {
    return (
        <div>
            <h3>Edit Posts</h3>
            <hr />
            <i>Select Post to edit or delete</i>
            <PostsList posts={posts} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: Object.keys(state.posts).reverse().map(key => state.posts[key])
});

const wrapper = connect(
    mapStateToProps
);
module.exports = wrapper(EditPosts);