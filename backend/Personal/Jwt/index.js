const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;
const connectdb=require('./src/db/db.js');
const notfound = require('./src/middleware/not_found.js');
const task  = require('./src/routes/main.js');


app.use(express.json())
app.use('/api/v1',task)

app.use(notfound);

app.listen(port,async()=>{
    console.log("server start listening ")
    await connectdb(process.env.MONGO_URI);
    console.log("db connected ")
})