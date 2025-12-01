const mongoose =require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250, `tweet can't be more than 250 char` ]
    },
    hastags:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hastag'
}
]
},
{timestamps:true}
);
const tweet=mongoose.model('Tweet',tweetSchema);
module.exports=tweet;