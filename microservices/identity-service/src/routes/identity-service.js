const express=require('express');
const {register,login,Refreshtoken,logout} = require('../controller/identitycontroller');

const userrouter=express.Router();


userrouter.post('/register',register);
userrouter.post('/login',login )
userrouter.post('/refreshtoken',Refreshtoken)
userrouter.post('/logout',logout)

module.exports=userrouter;