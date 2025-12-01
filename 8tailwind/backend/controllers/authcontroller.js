const zod=require('zod')

const signupschema=zod.object({
firstname:zod.string(),
lastname:zod.string(),
email:zod.string(),
password:zod.string(),  

})

const signup=async(req,res)=>{
try {
    const {username,password}= await req.body;
    res.status(200).json({
        data:password,
        messgage:"data recieved ",
        success:true
    })

    } catch (error) {
    res.status(404).json({
     message:"data is not recieved something error",
     success:false
        })
    }

    
}

const signin=async(req,res)=>{
try {
    const data= await req.body;
    res.status(200).json({
        data:data,
        messgage:"data recieved ",
        success:true
    })

    } catch (error) {
    res.status(404).json({
     message:"data is not recieved something error",
     success:false
        })
    }

    
}





module.exports={signin,signup}