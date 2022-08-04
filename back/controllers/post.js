const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

// create a post function 
exports.newPost = ((req, res, next)=> {
    const post = new Post({
        ...req.body
    });
    post.save()
        .then(()=> res.status(201).json({ message : ' post enregistré '}))
        .catch((err)=> {res.status(400).json({ err} )});
});

// get all posts
exports.allPosts = ((req, res, next)=> {

});

// get one post (by id)
exports.onePost = ((req, res, next)=> {

});

// edit a post 
exports.editPost = ((req, res, next)=> {

});

// delete a post 
exports.deletePost = ((req, res, next)=> {

});
