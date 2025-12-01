const express=require('express');
const { connectdb } = require('./db/db');
const logger = require('./utils/logger');
const helmet=require('helmet');
const cors=require('cors');
const { RateLimiterRedis}=require('rate-limiter-flexible')
const Redis=require('ioredis')
const app=express();
const ratelimiter=require('express-rate-limit')
const {RedisStore}=require('rate-limit-redis')
require('dotenv').config();
const routes=require('../src/routes/identity-service');
const errorhandler = require('./middleware/error-handler');
port=process.env.PORT


const redisclient=new Redis(process.env.REDIS_URL)

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    logger.info(`recieved ${req.method} and ${req.url} `)
    next();
})



process.on('unhandledRejection',(reason,promise)=>{
    logger.error('unhandled rejection at ', promise ,'reason', reason)
})

const ratelimit=  new RateLimiterRedis({
    storeClient: redisclient,
    keyPrefix : 'middleware',
    points: 10,
    duration : 1
})

app.use((req,res,next)=>{
    ratelimit.consume(req.ip).then(()=> next()).catch(()=>{
        res.status(429).json({
            success:false,
            message:"to much request"
        })
    })
})

const sensitivelimit= ratelimiter({
    windowMs: 15*60*1000,
    max: 50,
    standardHeaders:true,
    legacyHeaders:false,
    handler:(req,res)=>{
        logger.warn('sensitive endpoint '+req.ip)
        res.status(429).json({success:false, message :'too many request'})
    },
    store: new RedisStore({
        sendCommand:(...args)=>redisclient.call(...args),
    }),
})

app.use('/api/auth/register',sensitivelimit)
app.use('/api/auth',routes)
app.use(errorhandler)


app.listen(port,async ()=>{
    console.log('server started ')

    await connectdb(process.env.MONGO_URI);
        logger.info('connected to the databases ')
})