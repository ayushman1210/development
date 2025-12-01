const mongoose =require('mongoose')
const argon2=require('argon2')
const userschema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
password:{
    type:String,
    required:true
},
// createdAt:{
// type:Date(),
// default:Date.now()
// }
},{timestamps:true})

userschema.pre('save', async function (next){
    if(this.isModified('password')){
        try {
            this.password=await argon2.hash(this.password)
        } catch (error) {
            return next(error);
        }
    }
})

userschema.methods.comparePassword=async function (candidpass)
{ return await argon2.verify(this.password, candidpass)}

userschema.index({username:'text'})

const User=mongoose.model('user',userschema);
module.exports=User