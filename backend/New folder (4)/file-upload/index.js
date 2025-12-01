const express=require('express');
const app=express();
require('dotenv').config();
const {connectdb}=require('./db/db');
const fileupload = require('./routes/file');
const config = require('./config/config');
const port=process.env.PORT;


app.use(express.json());
app.use('/api',fileupload)



app.listen(port,async()=>{
    console.log("server started"+port)
    await connectdb(process.env.MONGO_URI)
    console.log("connected db")
    await config();
    console.log("connected the imsge ")
})