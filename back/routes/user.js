const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// route to signup
router.post('/signup', userCtrl.signup);

// route to login
router.post('/login', userCtrl.login);

module.exports = router;