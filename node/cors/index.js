const express=require('express')

const app=express();


app.use(express.json())
app.use(cors({
    domain:["domains are written here"]
}))

//if BE and FE are in the same host then no use of cors it uses bwteen the cross interaction 
app.get('/sum',(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;

    res.json({
    answer:a+b
    })
})




app.listen(3000,()=>{
    console.log("server started ")
})