const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.get('/',(req,res)=>{
    res.send('hello welcome to mongodb ')
})
let db="mongodb://localhost:27017";

app.listen(3000,async()=>{
    console.log("server started")
    await mongoose.connect(db);
    console.log("database connected")
})