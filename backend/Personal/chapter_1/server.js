const express =require('express');

const app=express();

const PORT=3000;
app.use(express.json())


let doe=["ayush"];
app.get('/get',(req,res)=>{
    res.send(`${JSON.stringify(doe)}`);
})

app.post('/post',(req,res)=>{
    const data=(req.body);
    console.log(data);
    doe.push(data.name);
    res.send(`${doe}`);
})

app.delete('/delete',(req,res)=>{
 doe.pop();
 res.send("data removed ")
})


app.listen(PORT,()=>{
    console.log("server is connected ");
})