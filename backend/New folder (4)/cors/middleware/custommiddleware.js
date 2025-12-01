const requestlogger=(req,res,next)=>{
    const timestamp=new Date().toISOString();
    const method=req.method
    const url=req.url
    const agent=req.get('User-Agent');
    console.log(`${timestamp} ${method} ${url} ${agent}`)
    next();
}

const  timestamp=(req,res,next)=>{
    req.timestamp=new Date().toISOString();
    next();
}
module.exports={requestlogger,timestamp}