const mongoose=require('mongoose');

const connectdb=async(URI)=>{
    await mongoose.connect(URI);
}

module.exports= {connectdb};