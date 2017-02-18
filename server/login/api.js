const loginRouter = require('express').Router();
const logoutRouter = require('express').Router();
const firebase = require('firebase');
const firebaseAdmin = require('../../src/shared/firebase-admin');
const request = require('request');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4idW6W4HTQPZjMyvacjM-EorTk9Qeavs",
    authDomain: "cms-react-91e11.firebaseapp.com",
    databaseURL: "https://cms-react-91e11.firebaseio.com",
    storageBucket: "cms-react-91e11.appspot.com",
    messagingSenderId: "570386227126"
};
firebase.initializeApp(config);

function renderLogin(req, res) {
    request.get('http://' + req.headers.host + '/login', function (err, response, body) {        
        if (!err) {
            res.send(body);
        } else {
            res.json({
                message: 'Error',
                err
            })
        }
    });
}

function requiredAuth(req, res, next) {
    if (req.session && req.session.user) {
        firebaseAdmin.auth().getUserByEmail(
            req.session.user.email
        ).then(function (userRecord) {
            const user = userRecord.toJSON();
            next();
        }).catch(function (error) {
            res.session.reset();
            renderLogin(req, res);
        });
    } else {
        renderLogin(req, res);
    }
}


loginRouter.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        res.status(400).json({
            error: 'username or Password missing',
        });
        return;
    }
    firebase.auth()
        .signInWithEmailAndPassword(username, password)
        .then(function logged(user) {
            req.session.user = user;
            res.status(200).json({
                message: 'Succesufully logged',
                user
            });
        })
        .catch(function errorLogin(error) {
            console.log(error);
            res.status(400).json({
                message: 'Could not login',
                error,
            });
            return;
        });
});

logoutRouter.get('*', function (req, res) {
    req.session.reset();
    res.redirect('/login?logout=true');
});

module.exports = {
    requiredAuth,
    loginRouter,
    logoutRouter
}