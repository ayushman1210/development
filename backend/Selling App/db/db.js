const mongoose=require('mongoose');

const dbconnect=async(URL)=>{
    return await mongoose.connect(URL);
}


module.exports=dbconnect;