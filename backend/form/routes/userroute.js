const express=require('express');
const register = require('../controller/user');

const router=express.Router();

router.route('/').post(register);

module.exports=router;