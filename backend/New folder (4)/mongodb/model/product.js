const mongoose=require('mongoose');

const Product=new mongoose.Schema({
name:String,
categoy:String,
price:Number,
instock:Boolean,
tags:[String]
})

const product=new mongoose.model('product',Product);

module.exports=product