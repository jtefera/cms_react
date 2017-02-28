const React = require('react');
const {Link} = require('react-router');
const TextareaMDPreview = require('../TextareaMDPreview');

const PostEditor = ({title, author, content, saveHandler, cancelLink}) => {
    let titleInput, authorInput, contentInput;
    return (
        <form>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text' 
                    id='title'
                    ref={(node) => {titleInput = node}}
                    placeholder='Title'
                    className="form-control"
                    defaultValue={title || ''}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input 
                    type='text' 
                    id='author'
                    ref={(node) => {authorInput = node}}
                    placeholder='Author'
                    className="form-control"
                    defaultValue={author || ''}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='content'>Content <b>(Markdown accepted!)</b></label>
                <TextareaMDPreview 
                    type='text' 
                    id='content'
                    placeholder='Content'
                    inputRef={(node) => {contentInput = node}}
                    className="form-control"
                    defaultValue={content || ''}
                    rows='10'
                />
            </div>
            <button
                type="submit" 
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();
                    const titleVal = titleInput.value;
                    const authorVal = authorInput.value;
                    const contentVal = contentInput.value;
                    saveHandler(titleVal, authorVal, contentVal);
                }}
            >
                Save
            </button>
            <Link to={cancelLink}> Cancel</Link>
        </form>
    )
}

module.exports = PostEditor;