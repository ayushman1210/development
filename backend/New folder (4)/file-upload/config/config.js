const cloud=require('cloudinary');
require('dotenv').config();
const config=async()=>{
    try {
        await cloud.config({
        cloud_name: 'dggeqbkpu', 
        api_key: process.env.key, 
        api_secret: process.env.secret
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports=config;