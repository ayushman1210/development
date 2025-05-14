const express=require('express');
const app=express();
const fs=require('fs')
const path=require('path');
const user=[{
    name:"ayush",
    kidney:[{
        kidneyhealth:false
    }]
}];



app.get('/',(req,res)=>{
    const ayushkidney=user[0].kidney;
    const noofkid=ayushkidney.length;
    let healthkid=0;
    for(let i=0; i<noofkid.length; i++){
        if(ayushkidney[i].kidneyhealth){
            healthkid==healthkid+1;
        }
    }
const unhealth=noofkid-healthkid;
res.json({
    noofkid,
    healthkid,
    unhealth,
})
})

app.get('/files/:filename',(req,res)=>{
    const fileName=req.params.filename
    console.log(fileName)
const files= fs.readFile(fileName,'utf-8',(err,data)=>{
    if(err){console.log(err);
    }
    else{
  console.log(data)
    }
})
res.send(files)
})
app.listen(3000,()=>{
    console.log("started")
})
