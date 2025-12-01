const express=require('express')
const configcors=require('./config/cors');
const { requestlogger, timestamp } = require('./middleware/custommiddleware');
const app=express();
const apiversion=require('./middleware/apiversioning')
require('dotenv').config();


app.use(apiversion('v1'))
app.use(requestlogger)
app.use(timestamp)
app.use(express.json())
app.use(configcors())
port=process.env.PORT

app.listen(port,()=>{
    console.log("connected ")
})