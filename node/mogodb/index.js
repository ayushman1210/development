const express=require('express');
const app=express();
const bcrypt=require('bcrypt')
const mongoose=require('mongoose');
const {userModel,todomodel}=require('./db');
const jwt=require('jsonwebtoken')
const {z}=require('zod')
const JWT_SECRET="manloveyani"
let db="mongodb://localhost:27017/todo";

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello welcome to mongodb ')
})

function auth(req,res,next){
const token=req.headers.token;
const decodedata=jwt.verify(token,JWT_SECRET)
if(decodedata){
    req.userId=decodedata.userId;
    console.log(decodedata.userId)
    next(); 
}
else{
    res.json({
    message:"credential wrong "
    })
}
}


app.post('/signin',async(req,res)=>{
const {email,password,name}=req.body 

const required=z.object({
    email:z.string().max(100).min(8).email(),
    name:z.string().max(100).min(8),
    password:z.string().max(100).min(8)
})

const parsedata=required.safeParse(req.body);
if(!parsedata.success){
    res.json({
        message:'incorrect format',
        error:parsedata.error
    })
    return 
}
const hashpassword= await bcrypt.hash(password,5);

 await userModel.create({
    email:email,
    password:hashpassword,
    name:name,
})
    res.json({
        message:"error"
    })

res.json({
    success:true,
    message:"your account has been created"
})

})




app.post('/signup',async(req,res)=>{
    const {email,password}=req.body 
   const user=await userModel.findOne({email:email})
//    console.log(user._id);
if(!user){
    res.status(403).json({
        message:"not registered email "
    })
}
   const match= await bcrypt.compare(password,user.password)

    if(match){
        const token=jwt.sign({
            userId:user._id.toString()
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

app.post('/todo',auth,async(req,res)=>{
    const userId=req.userId
const {title}=req.body;
const todo=await todomodel.create({
    title:title,
    userId: new mongoose.Types.ObjectId(userId)
})
res.json({
   todo
})
})

app.get('/todos',auth,async(req,res)=>{
    const userId=req.userId
    console.log(userId);
    const find=await todomodel.find({
        userId: new mongoose.Types.ObjectId(userId),
    })
    console.log(find);
    res.json({
        find
    })
})


app.listen(3000,async()=>{
    console.log("server started")
    await mongoose.connect(db);
    console.log("database connected")
})