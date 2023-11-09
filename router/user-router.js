const express = require('express');

const userAuthenticate = require('../middleware/auth')
const userController = require('../controllers/signupcontroller');

const router = express.Router();

router.post('/signup', userController.postUser); 
router.post('/login', userController.loginUser); 

module.exports = router;
