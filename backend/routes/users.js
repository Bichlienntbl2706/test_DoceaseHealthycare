var express = require('express');
var router = express.Router();

var UserController = require('../app/controllers/UserController');
router.get('/register', UserController.register );
router.post('/store', UserController.store );
router.post('/login', UserController.login );

module.exports = router;
