const React = require('react');
const {Link} = require('react-router');
const style = require('./Sidebar.css');

const Sidebar = (props) => {
    return (
        <div className={style.container}>
            <div>
                <Link to='/admin/edit_posts'>
                    Edit Posts
                </Link>
            </div>
            <div>
                <Link to='/admin/add_post'>
                    Add Post
                </Link>
            </div>
            <div>
                <Link to='/admin/edit_page_info'>
                    Edit basic info
                </Link>
            </div>
        </div>
    );
};

module.exports = Sidebar;