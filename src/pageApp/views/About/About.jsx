const React = require('react');
const Page = require('../../presentations/Page');
const {connect} = require('react-redux');

const About = (props) => {
    return (
        <Page title='About'>
            Hello! This is the About page
        </Page>
    );
}

module.exports = About;