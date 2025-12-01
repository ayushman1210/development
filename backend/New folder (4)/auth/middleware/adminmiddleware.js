const check=(req,res,next)=>{
    const {role}=req.info
    if(role!='admin'){return res.status(404).json({
        message:"you are not allowed to  visit "
    })}
    next();
}

module.exports=check