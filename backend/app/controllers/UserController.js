const Users = require('../models/User');

class UserController {
    //[GET] /users/register
    register(req, res, next) {
        res.render('users/register');
    }

    //[POST] /users/store
    store(req, res, next) {
        req.json(req.body)
    }
}

module.exports = new UserController();