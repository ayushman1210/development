const mongoose =require('mongoose');

const hastagschema=new mongoose.Schema({
    title:{
        type:String,
    },
    tweet:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]
},{timestamp:true});

const hastag= mongoose.model('hastag',hastagschema);

module.exports=hastag;