import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
   const [socket,setsocket]=useState<WebSocket | null>();
const sendmessage=()=>{
 //@ts-ignore
 socket.send("hello")
}

useEffect(()=>{
  const ws= new WebSocket("ws://localhost:3000")
  setsocket(ws);

  ws.onmessage=(ev)=>{
    alert(ev.data);
  }
},[])
  return (
    <div>
      <input type="text" placeholder='type your message ' />
      <button onClick={sendmessage}>Send</button>
    </div>
  )
}

export default App