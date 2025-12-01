// user registration 
//user login
// user refresh tooken 
// user logout 

const { error } = require('winston');
const logger=require('../utils/logger')
const {validateregister,validatelogin} = require('../utils/validation');
const User = require('../model/user');
const generate = require('../utils/generatetoken');
const Refresh=require('../model/refreshtoken')

const register=async(req,res)=>{
    logger.info('registration endpoint ')
    try {
        const {error}=validateregister(req.body);
        if(error){
            logger.warn('validatiion error ',error)
            return res.status(400).json({
                message:error.details[0].message,
                success:false,
            })
        }

        const {email,password,username}=req.body

        let user=await User.findOne({
            $or:[{email:email},{username:username}]
        })
        if(user){
            logger.warn('user already exist ')
             return res.status(400).json({
                message:"already user exist ",
                success:false,
            })
        }

        let newUser =new User({username,email,password});
        await newUser.save();
        logger.warn('user saved successfully ',`${newUser._id}`)

        const {accesstoken, refreshtoken}=await generate(newUser);
        console.log(refreshtoken,accesstoken)
        res.status(200).json({
            success:true,
            message:'user registered successfully',
            accesstoken,
            refreshtoken
        })
    } catch (error) {
        logger.error('registration error occured ',error);
        res.status(500).json({
            success:false,
            message:'internal server error '
        })
    }
}



const login=async(req,res)=>{
    logger.info('login is happening ')
    try {
        const {error}=validatelogin(req.body);
        if(error){
            res.status(500).json({
                message:"there is error in login ",
                success:false,
            })
    }
            const {email,password}=req.body
            console.log(password,email)
            const user=await User.findOne({email:email})
            if(!user){ 
                logger.warn('invalid login ')
                res.status(500).json({message:"user is not present "})}

                const isvalid=await user.comparePassword(password)
                        if(!isvalid){ 
                logger.warn('invalid login ')
                res.status(500).json({message:"password  is wrong "})}

                const {accesstoken, refreshtoken}=await generate(user);
                res.status(200).json({
                    success:true,
                    accesstoken:accesstoken,
                    refreshtoken:refreshtoken
                })

        }
 catch (error) {
        logger.error('registration error occured ',error);
        res.status(500).json({
            success:false,
            message:'internal server error '
        })
    }
}


const Refreshtoken=async(req,res)=>{
logger.info("login endpoint hit....")
try {
    
    const {refreshtoken}=req.body;
    if(!refreshtoken){
        res.status(404).json({
            message:"refresh token is missing",
            success:false,
        })
    }

    const storedtoken=await Refresh.findOne({token: refreshtoken})
     if(!storedtoken || storedtoken.expiresAt<new Date()){
        res.status(500).json({
            success:false,
            message:"refresh token is invalid "
        })
     }

     const user=await User.findById(storedtoken.user)

     if(!user){
        logger.warn('user not found') 
        return res.status(401).json({
            success:false,
            message:"user not found "
        })
    }

    const {accesstoken:newaccesstoken,refreshtoken:newrefreshtoken}=await generate(user);

 await Refresh.deleteOne({_id: storedtoken._id })
res.status(200).json({
    message: "here is your token ",
    accesstoken:newaccesstoken,
    refreshtoken:newrefreshtoken
})
} catch (error) {
     logger.error('refreshtoken error occured ',error);
        res.status(500).json({
            success:false,
            message:'internal server error '
        })
}
}

const logout=async(req,res)=>{
     logger.info('logout endpoint hits ')
    try {
        const {refreshtoken}= req.body;
        if(!refreshtoken){
            logger.warn('refresh token missing')
            return res.status(400).json({
                success:false,
                message:"refresh token missing ",
            })
        }

        await Refresh.deleteOne({token:refreshtoken})
        logger.info('refresh token deleted for logout')

        res.status(200).json({
            success:true,
            message:"logout successfully"
        })
    } catch (error) {
           logger.error('logout error occured ',error);
        res.status(500).json({
            success:false,
            message:'logout  server error '
        })
    }

}

module.exports={register,login,Refreshtoken,logout };