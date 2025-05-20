const express =require('express')

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
        const token=tokener();
        founduser.token=token;
        res.json({
            user:founduser,
        })
     }
     else{
        res.json({
            message:"invalid user and password"
        })
     }
       console.log(user);

})

app.get('/me',(req,res)=>{
    const token=req.headers.token;
for(let i=0; i<user.length; i++){
        if (token==user[i].token )
    
     if(user){
        res.json({
          user:user
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