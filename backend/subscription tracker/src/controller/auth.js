const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const user = require('../model/user');
require('dotenv').config();
const signup=async(req,res,next)=>{
    const session= await mongoose.startSession()
    session.startTransaction();

    try {
        const {name, email, password}=req.body

        const exist=await user.findOne({email})

        if(exist){
            const error=new Error('user already exist');
            throw error;
        }

        //hash pasword
        const salt =await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt);

        const newUser= await user.create([{name,email, password:hashpassword}])
        console.log(newUser)
        const token=jwt.sign({userId:newUser[0]._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({
            success:true,
            message:"user created successfully",
            data:{
                user:newUser[0],
            token
            }
        })


    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
        console.log(error)
    }




}
const signin=async (req,res,next)=>{
    try {
        const {email, password}=req.body;
        const User= await user.findOne({email});
        if(!User){
            res.status(200).json({
                success:false,
                message:"user not found "
            })
        }

        const valid=await bcrypt.compare(password,User.password);
        if(!valid){
            res.status(200).json({
                success:false,
                message:"user not found "
            })
        }
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(200).json({
            success:true,
            message:"user found successfully",
            data:{
                User,
            token
            }
        })
    } catch (error) {
        next(error)
    }
   
}
const signout=(req,res)=>{

}
module.exports={signup,signin,signout};