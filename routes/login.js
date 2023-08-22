var express = require('express');
var router = express.Router();
var pool=require('./pool')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/.scratch');




router.get('/user', function(req, res, next) {
    res.render('user');
  });
  
  




  router.post('/login_succesfully', function(req, res, next) {
    pool.query('select * from register where email=? and pwd=?',[req.body.email, req.body.pwd],function(error,result){

        if(error){
            console.log(error)
            res.render('user',{msg:'database error'})
        }

        else{
            if(result.length==1){
                res.render('userpage')
            }
            else{
            res.render('user',{msg:'invalid emai/password'})
            }
        }
        })
    });
  





    
router.get('/logout', function(req, res, next) {
    localStorage.clear()
    res.redirect('/login/user')
})





module.exports = router;
