const express =require('express')

const app=express();
    let request=0;


app.get('/total',(req,res)=>{
res.json({
    request
})
})

app.use(function(req,res,next){

     request=request+1;
     next();
})

app.get('/user',(req,res)=>{
res.json({
    name:"ayushman"
})
})



app.listen(3000,()=>{
    console.log("server ready ")
})