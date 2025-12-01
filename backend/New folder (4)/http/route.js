const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/'){res.end("welcome to home page ")}
    else if(url=='/project'){res.end("welcome to the project page")}
    else {
        res.writeHead('400',{"Content-Type":"text/plain"})
        res.end("page not found")
    }
})

server.listen(3000);