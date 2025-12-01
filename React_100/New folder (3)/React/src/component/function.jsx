import React, { useEffect } from 'react'
   import { useState } from 'react';
const Function = () => {
 const [cond,setcond]=useState(""); 
//  const [data,setdata]=useState(false);
useEffect(()=>{
  console.log("changed")
})
useEffect(()=>{
  console.log("cond")
},[cond])
//  let cond=false;
    function handle(){
      setcond(!cond);
      // cond=!cond;
      console.log(cond)
    }
    
  return ( 
  <div>
    {cond ? <h1>hello</h1> : " "}
     <button onClick={handle}>click me</button>
    </div>
  )
}

export default Function
