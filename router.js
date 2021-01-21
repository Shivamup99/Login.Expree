var express = require('express');
var router = express.Router();


const credential={
    email:"admin@gmail.com",
    password:"008090"
}
router.post('/login',(req,res)=>{
    if(req.body.email==credential.email&&req.body.password==credential.password){
        req.session.user=req.body.email;
        //res.redirect('/Home');
        res.end("login suc");
    } else{
        res.end("Invalid User");
    }
});

module.exports=router;