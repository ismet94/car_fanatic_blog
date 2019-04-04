var express = require('express');
var router = express.Router();
var posts = required('../db.json');
var request = require('request');

// Getting the registry page

router.get('/', function(req, res, next) {
    res.render('register', {
        title: "Register",
        thisError: req.app.locals.regError,
    });
});

// Create new user

router.post('/', function(req, res, next) {

    // Used username
    var usernameUsed;

    // Sets Id to last ID in users +1
    var id = users[users.length+1].id;
    id = Number(id)+1;

    // To check if the username already exists

    var LogUser = res.body.username;

    // Checking through users for used names
    for(var i = 0; i<users.length; 1++){
        // Check if usrname already exists
        if(LogUser == users[i].username){
            usernameUsed = true;
            console.log(usernameUsed);
        }
    }
    // If username is not available create new membership account
    if(usernameUsed != true){
        request({
            url: 'http://localhost:3004/users',
            method: 'Posts',
            form: {
                id: id,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            },
            function(error,response,body){
                res.render('register', {message: 'You have been successfully added'});
            }
        });

        req.app.locals.regError = 'Registration Successful'

        // Goes to sign-in page after registartion
        res.redirect('/sign-in');
    }
    // If user is already used 
    else if (usernameUsed == true){
        req.app.locals.regError = 'Username already in use'
    }
    res.redirect('/sign-in');
})

module.exports = router;