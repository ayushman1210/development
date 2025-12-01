const express=require('express');


const app=express();

app.set('view engine','ejs');

// app.get('/',(req,res)=>{})
    // post,put,delete

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

    app.get('/api/product/:id',(req,res)=>{
        const productid=parseInt(req.params.id);
        const data=product.find(id===productid);
        res.send(data);
    })