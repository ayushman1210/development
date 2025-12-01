const express =require('express');
const app=express();
const {connectdb}=require('./database/db')
const authroutes=require('./routes/authroute')
const homeroute=require('./routes/home')
const adminroute=require('./routes/admin')
require('dotenv').config();
app.use(express.json());

app.use('/api',authroutes)
app.use('/api',homeroute)
app.use('/api',adminroute)

let port=process.env.PORT


app.listen(port,async()=>{
console.log("port connected "+ port)
await connectdb(process.env.MONGO_URI);
})