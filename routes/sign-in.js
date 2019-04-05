// Created the required variables

var express = require('express');
var router = express.Router();
var posts = required('../db.json').users;
var request = require('request'); 

// GET the sign-in page

router.get('/', function(req, res, next) {
    res.render('sign-in', {
        title: "Sign-in",
        signinError: req.app.locals.signError,
    });
});

// Sign-in 

router.post('/', function(req, res, next) {

// get inforamtion from the body
var logUser = req.body.username;
var logpassword = req.body.userpassword;

for(var i = 0; i < users.length; i++) {
    // if user info and password is correct 
    if((users[i].username == logUser || users[i].email == logUser)
    && users[i].password == logpassword){
        // Create cookie
        res.cookie('userId', users[i].id);
        // sets log user to the correct user name
        logUser = users[i].username;
        console.log(req.cookies);
        // Sets the correct sign in variables
        req.app.locals.user = logUser;
        req.app.locals.userIndex = i;
        req.app.locals.signError = 'Log-in Successful';
        // must redirect to the home page after sign-in
        res.redirect('/');
    }
};

// Check the user if signed in correctly
    if(req.app.locals.user){
        req.app.locals.signinError = 'Username or Password is incorrect';
        res.redirect('/');
    };
});

module.exports = router;