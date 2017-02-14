const React = require('react');
const Link = require('react-router').Link;
const style = require('./Post.css');
const dateFormatter = require('../../../shared/utils/dateFormatter');
const Post = ({title, author, authorId, date, content, id}) => {
    const authorEl = (author) ? 
        <Link to={'author/' + authorId}>{author}</Link>
        : 'Anonymous';
    return (
        <div className={style.Post}>
            <div>
                <h4 className={style.title}>
                    <Link to={'post/' + id}>
                        {title || 'Missing Post Title'}
                    </Link>
                </h4>
                <h6 className={style.subtitle}>
                    {authorEl} {dateFormatter(date) || ''}
                </h6>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}
module.exports = Post;