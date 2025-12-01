const logger=require('../utils/logger');
const Post=require('../models/post');
const createpost=async(req,res)=>{
    logger.info('create post is created ');
    try {
           const {content,mediaurl}=req.body;
        const newpost= new Post({
            user:req.user.userId,
            mediaurl:mediaurl || [],
            content
        })

        await newpost.save();
        res.status(201).json({
            message:"new post created ",
            success:true,
        })
    } catch (error) {
        res.status(200).json({
            message:"error in the creating a post ",
            success:false,
        })
    }
 
}


module.exports={createpost}