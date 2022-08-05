const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

// route to signup
router.post('/signup',multer, userCtrl.signup);

// route to login
router.post('/login', userCtrl.login);

// route to get user infos (to display on the layout)
router.get('/:id', userCtrl.userInfos);

router.put('/update/:id', multer, userCtrl.userUpdate);

module.exports = router;