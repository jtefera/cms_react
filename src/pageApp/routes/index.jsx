'use strict';
const router = require('express').Router();
const React = require('react');
const ReactDOMServer  = require('react-dom/server');
const ReactRouter = require('react-router');
const path = require('path');
const PATHS = {
    indexPug: path.join(__dirname, '../pug/index.pug'),
};
const pageRouter = require('../router/index.jsx');
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const reducer = require('../reducer/reducer.js');
//Firebase config
const firebaseAdmin = require('../../shared/firebase-admin');


router.get('*', function(req, res){
    ReactRouter.match({
        routes: pageRouter,
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        if(renderProps){
            const props = {
                title: 'new Parent'
            };
            var db = firebaseAdmin.database();
            var root = db.ref();
            root.once('value').then(function(dataSnapshot) {
                const store = createStore(reducer, dataSnapshot.val());
                var html = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <ReactRouter.RouterContext {...renderProps} />
                    </Provider>
                );
                res.send(html);
            });
        } else {
            res.status(404).send(redirectLocation);
        }
    });
});

module.exports = router;