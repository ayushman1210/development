const cors=require('cors');

const configcors=()=>{
return cors({
    origin:(origin,callback)=>{
        const allowedorigin=['http://localhost:3000',
            'yordomain.com'
        ]

        if(!origin || allowedorigin.indexOf(origin)!==-1){
            callback(null,true)
        }
        else{
            callback(new Error("not allowed by cors "))
        }
    },
    methods:['GET',"POST","PUT","PATCH"],
    credentials:true,
    preflightContinue:false,
    maxAge:600,
    optionsSuccessStatus:204
})
}

module.exports=configcors