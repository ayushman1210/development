const express=require('express')
const app=express();
require('dotenv').config();
const port=process.env.PORT
const connectdb=require('./db/db')
const rateLimit=require('express-rate-limit')
const cron=require('node-cron')
const register=require('./routes/userroute')
const cors=require('cors')

app.use(express.json())
app.use(cors());
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later",
    headers: true,
  });


  app.use(limiter);
app.use('/api/v1',register)



const schedule= cron.schedule('*/10 * * * *', () => {
    console.log("server running")
});
app.get('/',(req,res)=>{
    res.send("welcome");
    console.log('/')
})
app.listen(port,async()=>{
    console.log("server is listening ")
    await connectdb(process.env.MONGO_URI);
    console.log("database connected")
})