const mongoose =require("mongoose");

const connectdb=async(url)=>{
return await mongoose.connect(url);
}
module.exports=connectdb