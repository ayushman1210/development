import {  WebSocketServer } from "ws";

const wss=new WebSocketServer({port:3000});

wss.on("connection",function(socket){
    console.log("user connected ")
    setInterval(() => {
        socket.on("anything",(e)=>{
            console.log(e.toString());
        })
        socket.send(`count ${Math.floor(Math.random()*100)}`)
    }, 1000);
socket.send("hello")
})

