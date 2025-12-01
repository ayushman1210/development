const mongoose=require('mongoose');
const Product=require('./model/product')
const productroute=require('./router/product')
mongoose.connect('mongodb://localhost:27017/query-intermediate').then(console.log("connected")).catch("not connected")
require('dotenv').config();
const express=require('express');

const app=express();

app.use(express.json());
app.use('/',productroute)



app.listen(3000,()=>{console.log("connected")})