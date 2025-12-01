const express=require('express');
const connectdb = require('./db/db');
const { router } = require('./routes/auth');
const app=express();
require('dotenv').config();
port=process.env.PORT;


app.use(cors());
app.use(express.json());
app.use('/api/v1',router)
app.get('/',(req,res)=>{
    res.send("hello paytm");
})

app.listen(port,async()=>{
    console.log(`server is running on the port ${port} ` ); 
    await connectdb(process.env.MONGO_URL);
    console.log('database connectef');
})