"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
wss.on("connection", function (socket) {
    console.log("user connected ");
    // setInterval(() => {
    //     socket.on("anything",(e)=>{
    //         console.log(e.toString());
    //     })
    //     // socket.send(`count ${Math.floor(Math.random()*100)}`)
    // }, 1000);
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
    socket.send("hello");
});
