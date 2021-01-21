
const express = require("express");
const path = require('path'); 
const bodyparser = require('body-parser');
const session = require('express-session');
const{v4:uuidv4}= require('uuid');
const router = require('./router')

const app = express();

const port = process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/img',express.static(path.join(__dirname,'public/img')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router)

app.get('/',(req,res)=>{
    res.render('base',{title:"login System"});
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});