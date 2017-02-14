const React = require('react');
const {Link} = require('react-router');
const {connect} = require('react-redux');
const {deletePost} = require('../../actions');
const dateFormatter = require('../../../shared/utils/dateFormatter');


const PostPresentational = ({author, authorId, date, id, title, deletePost}) => {
    return (
        <div>
            <div>
                <h4>
                    <Link to={'/admin/edit_post/' + id}>
                        {title}
                    </Link>
                </h4>
                <div>
                    {author} | {dateFormatter(date)}
                </div>
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        deletePost(id);
                    }}
                    >
                    Delete link </a> |
                <Link to={'/admin/edit_post/' + id}> Edit link</Link>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => dispatch(deletePost(id))
})
const wrapper = connect(null, mapDispatchToProps);
const Post = wrapper(PostPresentational);
const PostsList = ({posts}) => {
    const postsEl = posts.map((post) => <Post {...post} key={post.id}/>)
    return (
        <div>
            {postsEl}
        </div>
    );
}

module.exports = PostsList;