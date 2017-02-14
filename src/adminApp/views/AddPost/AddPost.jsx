const React = require('react');
const PostEditor = require('../../presentations/PostEditor');
const {connect} = require('react-redux');
const {addPost} = require('../../actions');
const AddPost = ({saveHandler}) => {
    return (
        <div>
            <h3>New Post</h3>
            <hr />
            <PostEditor
                saveHandler={saveHandler}
                cancelLink='/admin/'
            />
        </div>        
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    saveHandler: (title, author, content) => {
        dispatch(addPost(title, author, content));
    }
});


const wrapper = connect(
    null,
    mapDispatchToProps
);

module.exports = wrapper(AddPost);