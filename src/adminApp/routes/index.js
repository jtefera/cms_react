const React = require('react');
const ReactDOMServer  = require('react-dom/server');
const router = require('express').Router();
const {match, RouterContext} = require('react-router');
const reducer = require('../reducer');
const {createStore, applyMiddleware, compose} = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const {Provider} = require('react-redux');
const firebaseAdmin = require('../../shared/firebase-admin');


router.get('*', function routerCallback(req, res) {
    match({
        routes: require('../router'),
        location: req.originalUrl,
    }, function matchCallback(error, isRedirect, renderProps){
        if(renderProps) {
            var db = firebaseAdmin.database();
            var root = db.ref();
            root.once('value').then(function(dataSnapshot) {
                const store = createStore(
                    reducer,
                    dataSnapshot.val(),
                    applyMiddleware(thunkMiddleware)
                );
                var html = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );
                res.send(html);
            });
        } else {
            res.status(404).send('Admin: Page not found: ' + req.path + '. Error' + String(error));
        }
    });
});

module.exports = router;