const express=require('express');
const app=express();



const middleware=(req,res,next)=>{
    console.log("middleware used")
    next();
}


app.use(middleware);
app.get('/',(req,res)=>
    {
        res.status(200).send("welcome");
    })

app.listen(3000,()=>{
    console.log("startred")
})