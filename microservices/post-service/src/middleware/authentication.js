const logger=require('../utils/logger')

const authenticationreq=(req,res,next)=>{
    const userid=req.headers['x-user-id']

    if(!userid){logger.warn('access attempted no user id ')
        return res.status(400).json({
            message:"authentication required please login",
            success:false,
        })
    }
    req.user={userId}
    next();
}

module.exports={authenticationreq}