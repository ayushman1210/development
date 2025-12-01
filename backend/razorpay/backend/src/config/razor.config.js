const razorpay=require('razorpay')
require('dotenv').config();


exports.createRazorpayInstance=()=>{
    return new razorpay({
        key_id:process.env.RAZOR_ID,
        key_secret:process.env.RAZOR_KEY
    });
}



