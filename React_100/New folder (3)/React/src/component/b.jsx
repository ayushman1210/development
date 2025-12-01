import React, { useContext } from 'react'
import { Global } from '../App'
const B = () => {
   const name= useContext(Global)
  return (  <h1>{name}</h1> )
}

export default B
