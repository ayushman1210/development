const express=require('express')
const adminpage=require('../controller/admin')
const router=express.Router();
const authmiddleware=require('../middleware/authmiddleware')
const adminmiddleware=require('../middleware/adminmiddleware')

router.get('/admin',authmiddleware,adminmiddleware,adminpage);

module.exports=router;