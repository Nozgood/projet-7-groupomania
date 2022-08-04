const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

// route to create a new post 
router.post('/new', postCtrl.newPost);

// get all posts 
router.get('/all', postCtrl.allPosts);

// get one post (by id)
router.get('/get/:id', postCtrl.onePost);

// edit a post 
router.put('/put/:id', postCtrl.editPost);

// delete a post (by id)
router.delete('/delete/:id', postCtrl.deletePost);

module.exports = router;