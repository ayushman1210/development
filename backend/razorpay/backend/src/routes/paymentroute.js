const express=require('express')
const router=express.Router();

const {order,verifypayment}=require('../controller/paymentcontrol')

router.post('/createOrder',order);
router.post('/verifypayment',verifypayment);

module.exports=router;