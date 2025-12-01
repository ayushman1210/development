const mongoose =require('mongoose');

const CommentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
    },

},{timestamps:true});

const Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment;