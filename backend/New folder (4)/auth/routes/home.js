const express=require('express');
const home=require('../controller/home')
const authmiddleware=require('../middleware/authmiddleware')
const router=express.Router();

router.get('/home',authmiddleware,home)

module.exports=router