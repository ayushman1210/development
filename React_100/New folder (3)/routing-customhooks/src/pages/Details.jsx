import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {

    const params=useParams();
    const {id}=params;
    const location=useLocation();
    const {pathname}=location;
    const res=pathname.split(":").join("");
    console.log(res)
  return (
    <div>
      <h1>Recipe detail {id}</h1>
    </div>
  )
}

export default Details
