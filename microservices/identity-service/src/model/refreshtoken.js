const mongoose=require('mongoose');

const refreshSchema=new mongoose.Schema({

token:{
    type:String,
    required:true,

},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
expiresAt:{
    type:String,
    required:true,
}

}, {timestamps:true});


refreshSchema.index({expiresAt : 1},  {expiresAfter:0})

const refresh=mongoose.model('Refresh',refreshSchema);

module.exports=refresh;

