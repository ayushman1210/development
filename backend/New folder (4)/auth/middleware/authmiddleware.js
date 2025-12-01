const jwt=require('jsonwebtoken')

const authmiddleware=(req,res,next)=>{
    const header=req.headers["authorization"]
    console.log(header);
    const token= header  && header.split(" ")[1];
    if(!token){return res.status(404).json({success:false})}


    try {
        const decode=jwt.verify(token,process.env.JWT)
req.info=decode
console.log(req.info)
    next();
    } catch (error) {
        
    }
}

module.exports=authmiddleware