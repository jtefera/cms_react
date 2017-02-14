const React = require('react');
const PostEditor = require('../../presentations/PostEditor');
const {connect} = require('react-redux');
const {editPost} = require('../../actions');

const EditPost = ({post, saveHandler}) => {
    return (
        <div>
            <h3>Post Editor</h3>
            <hr />
            <PostEditor 
                {...post}
                saveHandler={saveHandler}
                cancelLink='/admin/edit_posts'
            />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.params.postId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    saveHandler: (title, author, content) => {
        dispatch(editPost(
            ownProps.params.postId,
            title,
            author,
            content
        ));
    }
});

const wrapper = connect(
    mapStateToProps,
    mapDispatchToProps
);

module.exports = wrapper(EditPost);