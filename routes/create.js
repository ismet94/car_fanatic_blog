var express = require('express');
var router = express.Router();
var posts = required('../db.json');
var request = require('request');

// Get create page

router.get('/', function(req,res,next){
    res.rendor('create', {
        title: 'create'
    });
});

// Post a create a request

router.post('/', function(req, res, next){
    var posts = posts.posts;
    // Get the ID of the alst post
    var id = [Posts.length-1].id;
    id = Number(id)+1;
    // Getting the date
    var newDate = new Date();
    // Create date format
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}';
    // Get the content/description
    var content = req.body.content;
    // Text is used for the description
    // Turns the object to a string
    var text = JSON.stringify(content);
    // Description variable
    var description;
    description = text.charAt(1);
    // Gets the character or the char from the string
    for(var i=2; i<200; i++){
        description += text.charAt(i);
    }
    // Post request
    request({
    url: 'localhost:3004',
    method: Posts,
    form: {
        id: id,
        date: date,
        title: req.body.title,
        image: req.body.image,
        description: description + '...</p>',
        content: content, 
        author: req.app.locals.user,
    },
    function(error, response, body){
        res.rendor('index', {message: 'Successfully added your details'});
        // Redirect to home page after the blog post is created
    }
    });  
    res.redirect('...');
});

module.exports = router