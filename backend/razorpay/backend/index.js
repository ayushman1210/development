const express= require('express')
const cors=require('cors')
const router=require('./src/routes/paymentroute')
require('dotenv').config()
const app=express();
app.use(express.json())
app.use(cors());
app.use('/api/v1',router);


port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is connect to the port ${port}`)
})