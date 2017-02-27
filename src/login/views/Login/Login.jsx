const React = require('react');
const style = require('./style.css');
const {Component} = React;
const sendJson = require('../../../shared/utils/sendJson');

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameInput;
        this.passwordInput;
        this.state = {
            error: null,
            success: null,
            showLogout: this.props.logout,
        }
    }

    showLoginError(errorResponse) {
        console.error(errorResponse);
        this.setState({
            error: 'Was not able to login. Check user and password'
        });
    }

    hideLoginErrorAndLogout() {
        this.setState({
            error: null,
            showLogout: false
        });
    }

    showLoginSuccess() {
        this.setState({
            success: 'Success!! You are being redirected to the correct page'
        });
    }
    handleSuccess() {
        this.showLoginSuccess();
        window.location.reload(true);
    }
    handleFailure(err) {
        this.showLoginError(err);
    }
    handleSubmit(e) {
        e.preventDefault();
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;
        console.log(username, password);

        sendJson({
            method: 'POST',
            url: '/login',
            data: {
                username,
                password
            },
            onSuccess: this.handleSuccess.bind(this),
            onFailure: this.handleFailure.bind(this)
        });
    }

    render() {
        const errorMessageEl = (this.state.error) ? 
                                    <div className='alert alert-danger'>{this.state.error}</div>
                                    : null;
        const successMessageEl = (this.state.success) ? 
                                    <div className='alert alert-success'>{this.state.success}</div>
                                    : null;
        const logoutMessage = (this.state.showLogout) ? 
                                    <div className='alert alert-success'>Successfully logged out!</div>
                                    : null;
        return ( 
            <html>
                <head>
                <title>
                    Login Page
                </title>
                <link 
                    rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" 
                    integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
                    crossOrigin="anonymous"/>
                <link 
                    rel="stylesheet" 
                    href="/css/style.css" 
                    />
                </head>
                <body>
                    <div className={style.container + ' container'}>
                        <h3>Login</h3>
                        <hr />
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            {errorMessageEl}
                            {successMessageEl}
                            {logoutMessage}
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input 
                                    type='text' 
                                    id='username'
                                    placeholder='username'
                                    className='form-control'
                                    onChange={this.hideLoginErrorAndLogout.bind(this)}
                                    ref={(node) => this.usernameInput = node}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input 
                                    type='password' 
                                    id='password'
                                    placeholder='password'
                                    className='form-control'
                                    onChange={this.hideLoginErrorAndLogout.bind(this)}
                                    ref={(node) => this.passwordInput = node}
                                />
                            </div>
                            <button
                                className='btn btn-primary'
                            > Login </button>
                        </form>
                    </div>
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS = ' + JSON.stringify({
                            logout: this.props.logout
                        })
                    }} />
                    <script type='text/javascript' src='/js/vendor/index.js' />
                    <script type='text/javascript' src='/js/login/index.js' />
                </body>
            </html>
        );
    }
}

module.exports = Login;