const mongoose=require('mongoose');

const connectdb=async(URL)=>{
return await mongoose.connect(URL)
}

module.exports=connectdb;