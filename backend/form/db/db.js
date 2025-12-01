const mongoose=require('mongoose')

const connectdb=async(URI)=>{
 return await mongoose.connect(URI);
}

module.exports=connectdb;