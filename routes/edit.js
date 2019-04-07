// Get before you edit

var express = require('express');
var router = express.Router();
var posts = required('../db.json');

router.get('/', function(req, res, next) {
    console.log(req.params.postId);

    // make a post request to our database
    request({
    url: 'http://localhost.3004/posts' + req.params.postId,
    method: 'DELETE',
    },
    function(error, response, body) {
        var data = {
            title: "Car-",
            posts: Posts,
            message: 'Successfully deleted'
          };

          res.redirect('...');
    });
  
  });

  module.exports = router;