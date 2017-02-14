const React = require('react');
const {connect} = require('react-redux');
const {editPageInfo} = require('../../actions');
const {Link} = require('react-router');

const EditPageInfo = ({title, description, admin, saveHandler}) => {
    let titleInput, descriptionInput, adminInput;
    return (
        <div>
            <h3>Page Info Editor</h3>
            <hr />
            <form>
                <div className='form-group'>
                    <label htmlFor='title'>Title of the Blog</label>
                    <input 
                        id='title' 
                        type='text' 
                        defaultValue={title}
                        placeholder='Title'
                        className='form-control'
                        ref={(node) => titleInput = node}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='admin'>Admin of the Blog</label>
                    <input 
                        id='admin' 
                        type='text' 
                        defaultValue={admin}
                        placeholder='Admin'
                        className='form-control'
                        ref={(node) => adminInput = node}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description of the Blog</label>
                    <textarea 
                        id='description' 
                        type='text' 
                        defaultValue={description}
                        placeholder='Description'
                        className='form-control'
                        ref={(node) => descriptionInput = node}
                        rows='12'
                    />
                </div>
                <button
                    className='btn btn-primary'
                    onClick={(e) => {
                        e.preventDefault();
                        const newInfo = {
                            admin: adminInput.value,
                            title: titleInput.value,
                            description: descriptionInput.value
                        };
                        saveHandler(newInfo);
                    }}
                > Save
                </button>
                <Link to='/admin'> Cancel</Link>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    ...state.pageInfo
});

const mapDispatchToProps = (dispatch) => ({
    saveHandler: (newInfo) => dispatch(editPageInfo(newInfo))
});

const wrapper = connect(
    mapStateToProps,
    mapDispatchToProps
);

module.exports = wrapper(EditPageInfo);