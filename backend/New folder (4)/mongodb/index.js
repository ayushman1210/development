const mongoose =require('mongoose');


mongoose.connect('mongodb://localhost:27017/query').then(()=>console.log("connected")).catch((e)=>console.log(e));
const User= new mongoose.Schema({
    name:String,
    age:Number,
    isactive:Boolean,
    tags:[String],
    createdAt:{type:Date, default:new Date()}
})

const user=new mongoose.model('user',User);


async function query(){
    const newuser= await user.create({
        name:"ayushman",
        age:18,
        isactive:true,
        tags:["available","not available"]
    })


    // const newuser=  new user({
    //        name:"samriddh ",
    //     age:18,
    //     isactive:true,
    //     tags:["available","not available"]
    // })
    // await newuser.save();
    // console.log("user created", newuser);


// const data=await user.find({})
// console.log(data);

// const data=await user.find({isactive:true})
// console.log(data);

// const data=await user.find({name:"ayushman"})
// console.log(data);

// const data=await user.findById(newuser._id)
// console.log(data);


// const data=await user.find().select("name email -_id")
// console.log(data);

// const data=await user.find().limit(2).skip(1)
// console.log(data);


// const data=await user.countDocuments({isactive:true})
// console.log(data);

// const data=await user.findByIdAndDelete(newuser._id)
// console.log(data);

const data=await user.findByIdAndUpdate(newuser._id,{
$set:{age:10},
$push:["confirm"],
},{new:true})
console.log(data);




}
query();