const student=require('../models/UserSchema')
const register=async(req,res)=>{
try{
    const data = req.body;
const user = new student(data)
console.log(data);
await user.save();
// const data=req.body;
// const user=await student.create(data);
console.log(user);

res.status(200).send(user)
}
catch(e){
    console.log(e)
    res.status(400).json({
        success:false,
        message:"something missing"
    })
    process.exit(1);
}
}


module.exports=register;