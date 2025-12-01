const subscription=require('../model/subscription')
const createsubs=async(req,res,next)=>{
try {
    
    console.log(req.User)
    const data = {
        ...req.body,
       user:req.User._id,
      };
    const subs= await subscription.create(data)
    res.status(200).json({
        subs
    })
} catch (error) {
  res.status(400).json({
    success:false,
    message:error
  })
console.log(error)
}
}


const getusersubs=async(req,res,next)=>{

  try {
    if(req.User.id != req.params.id){
const error=new Error('U r not the owner ')
throw error;
    }
    const subscr=await subscription.find({user:req.params.id})
    res.status(200).json({
      data:subscr
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:"no owner"
    })
  } 
}

module.exports={createsubs,getusersubs};