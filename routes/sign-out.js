// Created the required variables

var express = require('express');
var router = express.Router();
var request = require('request'); 

// GET the sign-out page

router.get('/', function(req, res, next) {
    // sets default
    req.app.locals.login = false;
    req.app.locals.user = '';
    req.app.locals.signIn = '';
    req.app.locals.regError = '';
    
    // Create a cookie
    res.clearCookie('userId');
    console.log(req.cookies.userId);

    // Redirect to home page after sign-out
    res.redirect('/');
});

module.exports = router;


