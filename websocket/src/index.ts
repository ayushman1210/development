import {  WebSocketServer } from "ws";

const ws=new WebSocketServer({port:3000});

ws.on("connection",function(socket){
socket.send("hello")
})

