const mongoose=require('mongoose');


const user= new mongoose.Schema({
 Name:{
    type:String,
 },
 Password:{
    type:String,
    Maxlength:12,
    Minlength:8
 },
 Email:{
    type:String,
    unique:true
 },
 role:{
    type:String,
    enum:["user","admin"],
    required:true,
    default:"user"

 }
},{timestamps:true});

const User=new mongoose.model('user',user);

module.exports=User;