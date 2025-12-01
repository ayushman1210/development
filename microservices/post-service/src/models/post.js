const mongoose=require('mongoose');

const Postschema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },

    content:{
        type:String,
        required:true,
    },

    mediaurl:[{
        type:String
    }],
    createdat:{
        type:String,
        default:Date.now(),
    }

},{timestamps:true})

const Post=new mongoose.model('Post',Postschema);

module.exports={Post};
