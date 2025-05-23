const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const objectId=mongoose.ObjectId;


const User= new Schema({
    name:String,
    email:{
        unique:true,
        type:String
    },
    password:String
});

const Todo=new Schema({
    userId:objectId,
    title:String,
});

const userModel=mongoose.model('user',User);
const todomodel=mongoose.model('todos',Todo);


module.exports={
    userModel,todomodel
}