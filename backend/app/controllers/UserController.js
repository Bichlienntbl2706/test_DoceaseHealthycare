const Users = require('../models/User');
const User = require('../models/User')


class UserController {
    //[GET] /users/register
    register(req, res, next) {
        res.render('users/register');
    }

    //[POST] /users/store   
    async store(req, res, next) {
        try {
            const { name, email, password } = req.body;

            const data = {
                name: name,
                email: email,
                password: password,
            };
            const check =  await User.findOne({email: email});
            
            if(check){
                 res.json("exist");
                 // res.redirect('/home');
             }else{
                res.json("notexist");

                await User.insertMany([data]);
              
                // res.redirect('/users/login');
             }
           
        } catch (error) {
            
            console.error('Error inserting user:', error);
            next(error);
        }
    }

    //[POST] /users/login
    async login(req, res, next) {
        try {
            const { email, password } = req.body;

           const check =  await User.findOne({email: email, password: password});
            
           if(check){
                res.json("exist");
                // res.redirect('/home');
            }else{
                res.json("notexist");
            }

        } catch (error) {
            console.error('not exist');
            next(error);
        }
    }
}

module.exports = new UserController();