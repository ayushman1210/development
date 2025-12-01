import React, { useState, useEffect } from 'react'

const Useeffect = () => {
  const [value, setinputvalue]=useState(0);
  const [data,setdata]=useState(0)

  useEffect(()=>{
    console.log(value);
    console.log("ok")
  },[data])

   return(
  <>
  <h1>{value}</h1>
  <button onClick={()=>setinputvalue(value+1)}>click</button>
  </>
   )
}

export default Useeffect
