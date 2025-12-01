const express=require('express');
const upload = require('../controller/upload');
const uploadmiddleware=require('../middleware/upload');
const router=express.Router();


router.post('/upload',uploadmiddleware.single('image'),upload);

module.exports=router;