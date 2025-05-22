const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {userModel,todomodel}=require('./db');
const jwt=require('jsonwebtoken')
const JWT_SECRET="manloveyani"
let db="mongodb://localhost:27017/todo";

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello welcome to mongodb ')
})

app.post('/signin',async(req,res)=>{
const {email,password,name}=req.body 

 await userModel.create({
    email:email,
    password:password,
    name:name,
})


res.json({
    success:true,
    message:"your account has been created"
})
})




app.post('/signup',async(req,res)=>{
    const {email,password}=req.body 
   const user=await userModel.findOne({email:email,password:password})
    if(user){
        const token=jwt.sign({
            id:user._id
        },   JWT_SECRET);
        res.json({
            token:token
        })
    }
    else{
        res.json({
            message:"unauthenticated user "
        })
    }
})

app.post('/todo',(req,res)=>{

})

app.get('todos',(req,res)=>{
    
})

app.listen(3000,async()=>{
    console.log("server started")
    await mongoose.connect(db);
    console.log("database connected")
})