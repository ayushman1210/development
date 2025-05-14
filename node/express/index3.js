const express=require('express')

const app=express();
app.get('/sum',(req,res)=>{
    const A=parseInt(req.query.a);
    const B=req.query.b;
    function sum(A,B){
        return A+B;
    }
    res.send(sum(A,B));
})

app.get('/multiply',(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;
    function multiply(a,b){
        return a*b;
    }

    res.json({
       multiple:multiply(a,b)
    })
})

app.listen(3000,()=>{
console.log('server started ')
})