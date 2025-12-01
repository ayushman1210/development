import React, { useContext } from 'react'
import { Globalcontext } from '../context'

const ContextButton = () => {
    const {theme, settheme,handle }=useContext(Globalcontext)
  return (
    <div>
      <button style={{backgroundColor : theme ==="light" ? "red" :"grey"}}  onClick={handle}>click me</button>
    </div>
  )
}

export default ContextButton
