var express = require('express');
var router = express.Router();

var LoginUsers = [
    {
        email: "test@gmail.com",
        password: "123456"
    }
];
var RegisterUser = [
    {
        email: "test@gmail.com",
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Marta");
});

router.post('/signin', function(req, res){
    let result =  LoginUsers.find(user => user.email == req.body.email);
    if (result){
        if(result.password == req.body.password){
            res.status(200).send({
                message: "successful login",
                result: "success"
            });
        } else {
            res.status(200).send({
                message: "Password incorrect",
                result: "password"
            });
        }
    }else{
        res.status(200).send({
            message: "user not found",
            result: "user"
        });
    }
    
});
 

router.post('/signup', function(req, res){
    let result =  RegisterUser.find(user => user.email == req.body.email );
    if (result){
            res.status(200).send({
                result: "register"
            });
    }else{
        res.status(200).send({
            result: "exist"
        });
    }
});


module.exports = router;