const express=require('express')
const mongoose=require('mongoose')
const Redis=require('ioredis')
const cors=require('cors')
const helmet=require('helmet')
const postroutes=require('../src/routes/postroute')
const errorhandler=require('../src/middleware/error-handler')
const logger=require('./utils/logger')
require('dotenv').config();
const app=express();
const port=process.env.PORT;
console.log(port)
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('database connected')}).catch((e)=>{console.log(e)})

const redisclient=new Redis(process.env.REDIS_URL)

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    logger.info(`recieved the ${req.url} and ${req.method}`)
    next();
})

// adding the ip bassed rate limiting for senstitve data 

app.use('/api/post',(req,res,next)=>{
    req.redisclient=redisclient;
    next();
}, postroutes)

app.use(errorhandler);

app.listen(port,()=>{
    logger.info('connected to port '+port)
})

process.on('unhandledRejection',(reason,promise)=>{
logger.error('unhandled rejection',promise,"reason",reason)    
})