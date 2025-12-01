const fs=require('fs');
const path=require('path');


const datafolder=path.join(__dirname,"data");

if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log("data folder created ")
}

const filepath=path.join(datafolder,'example.txt');
fs.writeFileSync(filepath,"hello");
console.log("file created ")

const readfile=fs.readFileSync(filepath,'utf8')
console.log(readfile);

fs.appendFileSync(filepath,'\n this is a new line added');
console.log(readfile);

const asyncfile=path.join(datafolder,'async-exmp.txt');
fs.writeFile(asyncfile, "hello everyone",(err)=>{
    if(err) throw err;
    console.log("async file created ")

    fs.readFile(asyncfile,"utf8",(err,data)=>{
    if(err) throw err;
    console.log("async file created ",data);

    fs.appendFile(asyncfile,'this is added ',(err)=>{
        if(err) throw err;
        console.log("data added ");
    })
})
})