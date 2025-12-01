const User=require('../model/user')

const getusers=async(req,res)=>{
    const data=await User.find();
    try {
        
        res.status(200).json({
            success:true,
            data
        })
    } catch (error) {
        next(error)
    }
}
const getuser=async(req,res)=>{
   
    try {
        const data=await User.findById(req.params.id).select('-password');
        if(!data){
            const error=new Error('user not foound');
                throw Error;
        }
        res.status(200).json({
            success:true,
            data
        })
    } catch (error) {
        next(error)
    }
}



module.exports={getusers,getuser}