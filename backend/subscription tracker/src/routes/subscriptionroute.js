const express=require('express');
const authorize = require('../middleware/auth');
    const {createsubs,getusersubs} = require('../controller/subs');

const subrouter=express.Router();

subrouter.get('/',(req,res)=>{res.send("fetch all subscription")})
subrouter.get('/:id',authorize)
subrouter.post('/',authorize,createsubs)
subrouter.put('/:id',(req,res)=>{res.send("update  subscription")})
subrouter.delete('/:id',(req,res)=>{res.send("delete  subscription")})
subrouter.get('/user/:id',authorize,getusersubs)


module.exports=subrouter