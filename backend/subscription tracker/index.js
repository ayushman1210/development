const express=require('express');
const cookieParser=require('cookie-parser')
const connectdb = require('./src/database/db');
require('dotenv').config();
const port=process.env.PORT || 5000

const authrouter=require('./src/routes/authroute');
const userrouter=require('./src/routes/userroute')
const subsroute=require('./src/routes/subscriptionroute');
const error = require('./src/middleware/error');


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());




app.use('/api/v1/auth',authrouter)
app.use('/api/v1/user',userrouter)
app.use('/api/v1/subscription',subsroute)
app.use(error);


app.get('/',(req,res)=>{
    res.send("welcome to tracker")
})


app.listen(port,async()=>{
    console.log(`${port} is connected` )
    await connectdb(process.env.MONGO_URI)
    console.log("db connected");
})