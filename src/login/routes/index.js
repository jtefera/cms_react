const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Login = require('../views/Login');


router.get('*', function (req, res) {
    if(req.session && req.session.user) {
        res.redirect('/admin');
    } else {
        const props = (req.query.logout) ? {logout: true} : {};
        
        const html = ReactDOMServer.renderToString(
            <Login {...props}/>
        );
        res.send(html);
    }
})

module.exports = router;