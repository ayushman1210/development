const express=require('express');
const {sampleproduct,getproduct, analysis, get} = require('../controller/product');
const router=express.Router();

router.post('/add',sampleproduct);
router.get('/get',getproduct)
router.get('/g',get)
router.get('/analysis',analysis)
module.exports=router;