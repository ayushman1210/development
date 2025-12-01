const jwt=require('jsonwebtoken')
const login=async(req,res)=>{
    const {username,password}=await req.body;
if(!username || !password) {res.status(400).send("please provide username and password")}
const id=new Date().getDate()
const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
res.send({msg:"user created",token})
}
const dashboard=(req,res)=>{
  const authheader=req.headers.authorization;
  if(!authheader){res.send("no token provided ")}
  try {
    const decode=jwt.verify(authheader,process.env.JWT_SECRET)
    res.send(`you r on dashboad ${decode}`)
    console.log("hey")
  } catch (error) {
    
  }
  
}

module.exports={login,dashboard}