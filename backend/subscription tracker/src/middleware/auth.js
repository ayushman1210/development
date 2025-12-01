const jwt=require('jsonwebtoken')
require('dotenv').config()
const user=require('../model/user')
const authorize=async (req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1];
        }
        if(!token) return res.status(401).json({message:'unauthorized'})
            const decode =jwt.verify(token,process.env.JWT_SECRET)

        const User=await user.findById(decode.userId)
    //  console.log(User)
    if(!User) return re.status(401).json({message:'unauthorize'})
        req.User=User;
    next()
        
    } catch (error) {
      res.status(401).json({
        message:"unauthorize",
        error:error.message
      })  
    }
}

module.exports=authorize;