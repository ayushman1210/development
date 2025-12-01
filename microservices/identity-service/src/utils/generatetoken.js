const jwt=require('jsonwebtoken')
const crypto=require('crypto');
const refresh = require('../model/refreshtoken');


const generate=async(user)=>{


const accesstoken=jwt.sign({
    userId:user._id,
    username:user.username
}, process.env.JWT_SECRET,{expiresIn:'10m'})

const refreshtoken=crypto.randomBytes(40).toString('hex');
const expiresat= new Date();
expiresat.setDate(expiresat.getDate()+7)

await refresh.create({
    token:refreshtoken,
    user:user._id,
    expiresAt: expiresat
})

return { accesstoken, refreshtoken }
}

module.exports=generate