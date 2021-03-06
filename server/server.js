'use strict';
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});
require('babel-register')({
    presets: ['react', 'es2015', 'stage-2']
});

var sessions = require('client-sessions');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const PATHS = {
    public: path.join(__dirname, '../public/'),
    indexPug: path.join(__dirname, '../src/pageApp/pug/index')
};
const {loginRouter, logoutRouter, requiredAuth} = require('./login/api.js');
//Express app
const app = express();
//Static pages
app.use(express.static(PATHS.public));
//Parses json files so they can be usable
app.use(bodyParser.json());
//parses url files spliting the url in its different categoriesssss
app.use(bodyParser.urlencoded({extended: true}));
//Morgan as logger
app.use(morgan('combined'));
//jade/pug as templating engine
app.set('view engine', 'pug');

app.use(sessions({
        cookieName: 'session',
        secret: 'sdhfjaklxloiqojqnnasdpiapia',
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
        httpOnly: true,
        ephemeral: true
    })
);
app.use('/api', require('./admin/api.js'));
app.use('/login', loginRouter);
app.get('/login', require('../src/login/routes/index.js'));
app.use('/admin', requiredAuth, require('../src/adminApp/routes/index.js'));
app.get('/logout', logoutRouter);
app.use(require('../src/pageApp/routes/index.jsx'));


const PORT = 8080;
app.listen(PORT, function(req, res) {
    console.log('listening in http://localhost:' + PORT);
    /*ref.once("value", function(snapshot) {
        console.log(snapshot.val());
    });*/
});