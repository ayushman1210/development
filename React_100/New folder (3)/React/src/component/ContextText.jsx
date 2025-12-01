import React, { useContext } from 'react'
import { Globalcontext } from '../context'

const ContextText = () => {
    const {size,setsize}=useContext(Globalcontext);
  return (
    <div>
      <h1 style={{font: size==="fit" ? "120px":"20px"}}>Ayushman</h1>
    </div>
  )
}

export default ContextText
