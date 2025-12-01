const cloud=require('cloudinary').v2

const uploadcloud=async(filepath)=>{
    try {
        const respo=await cloud.uploader.upload(filepath)
        return {
            url:respo.secure_url,
            public_Id:respo.public_id
        }
       
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={uploadcloud}