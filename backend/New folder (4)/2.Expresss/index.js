const express=require('express');

const app=express();
const port=3000;

 const product=[
        {
            id:1,
            product:'gift'
        },
        {
            id:2,
            product:'boy'
        },
        {
            id:3,
            product:'girl'
        }
    ]


app.get('/product',(req,res)=>{
    res.send(product)
})

app.get('/',(req,res)=>{res.send("welcome")})

app.get('/product/:id',(req,res)=>{
        const productid=parseInt(req.params.id);
        const data=product.find(item=>item.id==productid);
       console.log(data);
       console.log(productid);
     res.json(data);
       
    })

app.listen(port,()=>{
   console.log("port started")
})