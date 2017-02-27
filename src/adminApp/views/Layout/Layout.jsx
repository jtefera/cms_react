const React = require('react');
const {connect} = require('react-redux');
const style = require('./style.css');
const Sidebar = require('../../presentations/Sidebar');

const Layout = (props) => {
    const {customProps} = props;
    return (
        <html>
        <head>
            <title>
                {
                    (customProps.pageInfo && customProps.pageInfo.title) ? 
                     'Admin: ' + customProps.pageInfo.title
                     : 'Admin Page'
                }
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
                <div className={style.sidebar}>
                    <Sidebar />
                </div>
                <div className={style.main}>
                    {props.children}
                </div>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(customProps)
            }} />
            <script type='text/javascript' src='/js/vendor/index.js' />
            <script type='text/javascript' src='/js/admin/index.js' />            
        </body>
        </html>
    );
}

const mapStateToProps = (state, ownProps) => ({
    customProps: state
})
const wrapper = connect(
    mapStateToProps
);
module.exports = wrapper(Layout);