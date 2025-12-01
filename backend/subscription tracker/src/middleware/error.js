const error=(err,req,res,next)=>{
    try {
        let error={...err};

        error.message=err.message;
        console.log(err);

        // mongoose error 

        if(err.name === 'castError'){
        const message='resource not found';
        error=new Error(message);
        error.statusCode=404;

    } 
    if(err.code === 11000){
        const message='resource not found';
        error=new Error(message);
        error.statusCode=404;
    }
    if(err.name === 'ValidationError'){
        const message='validation error'
        error=new Error(message);
        error.statusCode=404;

    } 
res.status(400).json({success:false,error:error.message || 'server Error'})
    
    }
    catch (error) {
        next(error);
    }
}

module.exports=error;