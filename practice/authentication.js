const express=require('express');

const JWT=require('jsonwebtoken')
const JWT_SECRET="ayushman1234"

const app=express();
app.use(express.json());
const user=[];

app.get('/',(req,res)=>{
    res.json({
        user:user
    })
})

app.post('/signin',(req,res)=>{
    const{username,password}=req.body;
     user.push({
        username:username,
        password:password
    }
    )
res.json({
    success:true,
  mesg:"user created "
})
})

app.post('/signup',(req,res)=>{
    const {username,password}=req.body;
    let founduser=null;

    for(let i=0; i<user.length; i++){
        if(username==user[i].username && password==user[i].password){founduser=user[i]}
    }
    if(founduser){
    const token=JWT.sign({username},JWT_SECRET)
    res.json({token:token})
    }
    else{
        res.json({
            mesage:"credential incorrect "
        })
    }
})

app.get('/me',(req,res)=>{
const token=req.headers.token;
const decode=JWT.verify(token,JWT_SECRET)
const users=decode.username;


let founduser=null;
for(let i=0; i<user.length; i++){
        if (users==user[i].username ){founduser=user[i]}
    
     if(founduser){
        res.json({
          user:founduser.username,
          password:founduser.password
        })
     }
     else{
        res.json({
            message:"invalid user and password"
        })
     }
    }


})
app.listen(3000,()=>{
    console.log("server started ")
})