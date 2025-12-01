

class ApiError extends Error{
    constructor(message,statuscode){

        super(message)
        this.statuscode=statuscode;
        this.name='APIERROR'
    }
}

const handler=(fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}


const globalerrorhandler=(err,req,res,next)=>{
    console.log(err.stack)

    if(err instanceof ApiError){
        res.status(err.statuscode).json({
            status:"error",
            message:err.message
        })
    }
}
