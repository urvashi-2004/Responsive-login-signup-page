var express = require('express');
var router = express.Router();
var pool=require('./pool')



router.get('/index', function(req, res, next) {
  res.render('index',{status:0});
});






router.post('/registered', function(req, res, next) {
    pool.query("insert into register(name, username, email, pwd) values(?,?,?,?)",[req.body.name, req.body.username, req.body.email, req.body.pwd],function(error,result){

        if(error){
            console.log(error)
              res.render('index',{status:1})
            }
            else{
         
              res.render('user',{status:2})
            }
  
        })
    });
  
  

module.exports = router;
