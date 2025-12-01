function hello(parameter,callback){
    console.log(`${parameter}`);
    callback();
}

hello("ayushman",()=>{
    console.log("hello");
})

//callback hell
const fs=require('fs');

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){console.log("error")};
   console.log(data);
})

fs.writeFile('output.txt','hello i m ayushman',(err)=>{
    if(err){console.log('err')}
    console.log('file created')
})