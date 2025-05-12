const fs=require('fs');
const path=require('path')
const path1=path.join(__dirname+'/a.txt');
// console.log(path1);
// fs.readFile(path1,'utf-8',(err,data)=>{
// if(err){console.log(err)}
// else{
//     console.log(data);
// }
// })

fs.writeFile(path1,"hello why r u coding ",(err,data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('data has been written');
    }
})