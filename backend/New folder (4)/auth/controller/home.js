

const home=async(req,res)=>{
    const{Id, Name, role}=req.info;
    res.send("hello world"+Id)
}

module.exports=home;