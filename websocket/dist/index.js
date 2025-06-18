"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
wss.on("connection", function (socket) {
    console.log("user connected ");
    setInterval(() => {
        socket.on("anything", (e) => {
            console.log(e.toString());
        });
        socket.send(`your crush friends count ${Math.floor(Math.random() * 100)}`);
    }, 1000);
    socket.send("hello");
});
