const express=require('express');
const {createpost}=require('../controller/postcontroller')
const {authenticationreq}=require('../middleware/authentication')
const router=express.Router();

router.use(authenticationreq);

router.post('/create',createpost)







module.exports=router