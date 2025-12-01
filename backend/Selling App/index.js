const express =require('express')
const dbconnect=require('./db/db')
const app=express();
require('dotenv').config();
port=process.env.PORT;

app.listen(port,async()=>{
    console.log("port started ")
    await dbconnect(process.env.MONGO_URL)
    console.log("database connected ")
})