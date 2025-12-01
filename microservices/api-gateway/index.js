require('dotenv').config();

const express=require('express');
const cors=require('cors')
const Redis=require('ioredis');
const helmet=require('helmet')
const rateLimiter=require('express-rate-limit');
const {RedisStore}=require('rate-limit-redis')
const logger=require('./src/utils/logger')
const proxy=require('express-http-proxy')
const app=express();
const errorhandler=require('./src/middleware/errorhandler')
console.log(process.env.PORT)
const port=process.env.PORT


const redisclient=new Redis(process.env.REDIS_URL)

const ratelimitoptions=rateLimiter({
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

app.use(ratelimitoptions)
app.use((req,res,next)=>{
    logger.info(`recieved ${req.method} and ${req.url} `)
    next();
})


const proxyoptions={
    proxyReqPathResolver:(req)=>{
        return req.originalUrl.replace(/^\/v1/, "/api")
    },
    proxyerrorhandler:(err,res,next)=>{
        logger.error(`proxy error ${err.message}`)
        res.status(500).json({
            message:'internal serveer error '
        })
    }
}

app.use('/v1/auth/register',proxy(process.env.IDENTITY_SERVICE_URL,{...proxyoptions,
   proxyReqOptDecorator : (proxyReqOpts,srcReq)=>{ 
    proxyReqOpts.headers['Content-Type']='application/json'
    return proxyReqOpts
   },
   userResDecorator: (proxyRes, proxyResData, userReq, userRes )=>{ 
    logger.info(`resopnse recieved from identity service  ${proxyRes.statusCode}`)

    return proxyResData
   }
}
 ))

 app.use('/v1/auth/login',proxy(process.env.IDENTITY_SERVICE_URL,{...proxyoptions,
   proxyReqOptDecorator : (proxyReqOpts,srcReq)=>{ 
    proxyReqOpts.headers['Content-Type']='application/json'
    return proxyReqOpts
   },
   userResDecorator: (proxyRes, proxyResData, userReq, userRes )=>{ 
    logger.info(`resopnse recieved from identity service  ${proxyRes.statusCode}`)

    return proxyResData
   }
}
 ))

app.use(express.json());
app.use(cors());
app.use(helmet());


 app.use(errorhandler)


app.listen(port,()=>{
    logger.info('api gateway is running ');
    logger.info(`identity service is running on port ${process.env.IDENTITY_SERVICE_URL}`)
    logger.info(`redis is running on port ${process.env.REDIS_URL}`)
})