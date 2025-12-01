const express =require('express');
const cors= require('cors');
const app=express();
const {db} =require('./db/db')
const {readdirSync}=require('fs')
require('dotenv').config();
const port=process.env.port ||4000;

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello world");
})


readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))

const server=()=>{
db()
app.listen(port,()=>{
  console.log(  "server running baby");
})
}

server();