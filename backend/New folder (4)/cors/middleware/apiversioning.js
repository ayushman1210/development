const urlversion=(version)=>(req,res,next)=>{
if(req.path.startWith(`/api/${version}`)){next();}
else{
    res.status(404).json({
        message:'api versioning is not supported '
    })
}
}


module.exports=urlversion