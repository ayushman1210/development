const express=require('express')
const app=express();


let user={}
setInterval(()=>{
user={}
},1000)

app.use(function(req,res,next){
const userid=[req.headers["user-id"]]
if(user[userid]){
    user[userid]=user[userid]+1;
    if(user[userid]>5){
        res.status(404).json({msg:"no entry "})
    }
    else{next();}
}
else{
    user[userid]=1;
    next();
}
})

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{console.log("hello everyone ")})