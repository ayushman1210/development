const express =require('express')
const jwt=require('jsonwebtoken')
const JWT_SECRET="manlovesyani"
const app=express();


const user=[];

app.use(express.json())
function tokener(){
random=Math.floor(Math.random()*10001);
return random;
}

app.get('/',(req,res)=>{
    res.json({
        user:user
    })
})

app.post('/signin',(req,res)=>{
    const {username, password}=req.body;
    user.push(
        {
            username:username,
            password:password,
 } );

    res.status(200).json({
        success:true,
        message:"user created"
    })
    console.log(user)
})

app.post('/signup',(req,res)=>{
    const {username, password}=req.body;

    let founduser=null;
    for(let i=0; i<user.length; i++){
        if (username==user[i].username && password==user[i].password){founduser=user[i];}
    }
     if(founduser){
        const token=jwt.sign({username:username},JWT_SECRET)
        founduser.token=token;
        res.json({
            user:founduser,
            token:token
        })
     }
     else{
        res.json({
            message:"invalid user and password"
        })
     }
})

app.get('/me',(req,res)=>{
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_SECRET)
    const username=decoded.username

    let founduser=null;

for(let i=0; i<user.length; i++){
        if (username==user[i].username ){founduser=user[i]}
    
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