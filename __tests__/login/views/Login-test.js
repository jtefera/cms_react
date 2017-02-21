const React = require('react');
jest.mock('../../../src/shared/utils/sendJson.js', () => {
    return jest.fn(({method, url, data, onLoad, onSuccess, onFailure}) => {
        if (url === '/login') {
            if (onLoad) {
                onSuccess = onLoad;
                onFailure = onLoad;
            }
            if (data) {
                if (!data.username || !data.password) {
                    Promise.reject({
                        error: 'username or password missing'
                    }).catch(onFailure);
                    return;
                }
                if (data.username === 'hello@jtefera.com' && data.password === 'Testing1234!') {
                    Promise.resolve({
                        message: 'Succesfully logged',
                        user: {
                            email: 'hello@jtefera.com'
                        }
                    }).then(onSuccess);
                }
            }
        }
    });
});
const sendJson = require('../../../src/shared/utils/sendJson.js');
const Login = require('../../../src/login/views/Login/Login.jsx');
const { shallow, mount, render } = require('enzyme');

describe('Login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Login />);
    })
    it('should have a username input', () => {
        expect(wrapper.find('input#username')).toHaveLength(1);
    });

    it('should have a password input', () => {
        expect(wrapper.find('input#password')).toHaveLength(1);
    });

    it('should have a submit button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should show any alert at the begginig', () => {
        expect(wrapper.find('.alert')).toHaveLength(0);
    });

    describe('logged out', () => {
        let wrapperLogout;
        beforeEach(() => {
            wrapper = mount(<Login logout={true} />);
        });

        it('should have showLogout state as true', () => {
            expect(wrapper.state('showLogout')).toBeTruthy();
        });

        it('should have a success alert', () => {
            expect(wrapper.find('.alert-success')).toHaveLength(1);
        });

        it('should have showLogout as false when typing in username input', () => {
            wrapper.find('input#username').simulate('change', 'Hello');
            expect(wrapper.state('showLogout')).not.toBeTruthy();
        });

        it('should have showLogout as false when typing in password input', () => {
            wrapper.find('input#password').simulate('change', 'Hello');
            expect(wrapper.state('showLogout')).not.toBeTruthy();
        });

        it('should not have any alert-success after typing in input', () => {
            expect(wrapper.find('.alert-success')).toHaveLength(1);
            wrapper.find('input#username').simulate('change', 'Hello');
            expect(wrapper.find('.alert-success')).toHaveLength(0);
        });
    });

    describe('response from server', () => {
        it('should show an alert-danger for an error', () => {
            expect(wrapper.find('.alert-danger')).toHaveLength(0);
            wrapper.setState({error: 'Error!'});            
            expect(wrapper.find('.alert-danger')).toHaveLength(1);
        });
        it('should show an alert-success for a success', () => {
            expect(wrapper.find('.alert-success')).toHaveLength(0);
            wrapper.setState({success: 'Success!'});            
            expect(wrapper.find('.alert-success')).toHaveLength(1);
        });
    });
});

