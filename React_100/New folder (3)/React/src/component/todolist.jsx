import React, { useState } from 'react'

const Todo = () => {
const [data,setdata]=useState([])
const [value,setvalue]=useState("")


function handle(e){
  
    setvalue(e.target.value)
}
function handle1(){
    if(value.trim()){
setdata([...data,value])
setvalue(" ")
}
}

  return (
    <div>
      <input type="text"  onChange={handle} value={value}/>
    <button onClick={handle1} >Add task </button>
   <ul>
    {data.map((d,index)=>(    <li key={index}>{d}</li>
    )
   )}
   </ul>
    </div>
  )
}

export default Todo
