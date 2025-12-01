const mongoose=require('mongoose');

const FileSchema=new mongoose.Schema({
url:{
    type:String,
    requied:true,
},
public_Id:{
    type:String,
    required:true,
}
},{timestamps:true})

const File=mongoose.model('File',FileSchema)

module.exports=File;