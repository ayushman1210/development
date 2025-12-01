const express=require('express');
const app=express();
const connect=require('./src/config/databases')

const hastagRepository=require('./src/Repository/hastag-repository')
const PORT=3000;
app.listen(PORT,async ()=>{
    console.log("server is on ")
    await connect();
    console.log("mongodb is connected")
    let repo=new hastagRepository();
  let response= await repo.findByName(['trends','sugar']);
  console.log(response);
  response=response.map(tags=> tags.title);
  console.log(response);

    })