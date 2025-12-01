const express=require('express');
const { getusers, getuser } = require('../controller/user');
const authorize=require('../middleware/auth.js')

const router=express.Router();

router.get('/',getusers)
router.get('/:id',authorize,getuser)
router.post('/',(req,res)=>{res.send("create user ")})
router.put('/:id',(req,res)=>{res.send("update  users")})
router.delete('/:id',(req,res)=>{res.send("delete  users")})


module.exports=router;