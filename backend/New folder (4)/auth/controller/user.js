const User = require("../model/user");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const register=async(req,res)=>{
    const {Name, Email, Password, role}= req.body;

    const checkuser=await User.findOne({Email:Email});

    if(checkuser){
        return res.status(404).json({
        message:"user is already "
    })}

    const salt=await bcrypt.genSalt(10);
    const hashpass= await bcrypt.hash(Password,salt)


    const newuser=await User.create({
        Name:Name,
        Email:Email,
        Password:hashpass,
        role:role || "user"
    })
 console.log("user saved ")
res.status(200).json({data:newuser,message:"created the user "});
}

const login=async(req,res)=>{
const {email,password}=req.body;

const exist=await User.findOne({Email:email});
if(exist){
    const ismatch=await bcrypt.compare(password,exist.Password)

    if(!ismatch){return res.json("password incorrect")}

    const accesstoken= jwt.sign({
        Id:exist._id,
        Name:exist.Name,
        role:exist.role
    }, process.env.JWT, {
        expiresIn:"15m"
    })
res.status(200).json({
    token:accesstoken,
    message:"jwt stores token"
})

}
else{
    res.send("user not exist")
} 
}

module.exports={register,login};