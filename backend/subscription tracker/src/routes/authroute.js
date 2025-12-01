const express=require('express');
const {signup, signout, signin} = require('../controller/auth');


const authrouter=express.Router();


authrouter.post('/sign-in',signin)
authrouter.post('/sign-up',signup)
authrouter.post('/sign-out',signout)


module.exports=authrouter