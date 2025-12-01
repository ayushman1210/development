const { uploadcloud}=require('../helper/upload');
const File = require('../model/file');

const upload=async(req,res)=>{
try {
    if(!req.file){
      return  res.status(400).json({
            message:"no file present",
            success:false
        })
    }

      const {url,public_Id}=await uploadcloud(req.file.path)
    const newImage=new File({
        url:url,
        public_Id:public_Id
    })

    await newImage.save();

    res.status(200).json({
        message:"uploaded",success:'true'
    })

} 
catch (error) {
    console.log(error)
}

}

module.exports=upload;