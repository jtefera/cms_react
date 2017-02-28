const React = require('react');
const Link = require('react-router').Link;
const style = require('./style.css');
const dateFormatter = require('../../../shared/utils/dateFormatter');
const ReactMarkdown = require('react-markdown');
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
                    <ReactMarkdown source={content} />
                </p>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    authorId: React.PropTypes.string.isRequired,
    date: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
};

module.exports = Post;