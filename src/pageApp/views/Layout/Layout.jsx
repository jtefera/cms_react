const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const path = require('path');
const Header = require('../../presentations/Header/');
const style = require('./Layout.css');
const Index = (props) => {
    const customProps = props.custom;
    return (<html>
        <head>
            <title>{customProps.pageInfo.title}</title>
        </head>
        <body className={style.body}>
            <div className={style.container}>
                <Header />
                <div id='main'>
                    {props.children}
                </div>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(customProps),
            }} />
            <script type='text/javascript' src='/js/index.js' />
        </body>
    </html>)
};

const mapStateToProps = (state) => ({
    custom: state
});

const wrapper = connect(
    mapStateToProps,
    null
);
 
module.exports = wrapper(Index);