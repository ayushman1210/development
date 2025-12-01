import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        async function getdata(){
 const data1=fetch('https://jsonplaceholder.typicode.com/todos')
 const res=data1.json();
 setdata(res);
}
getdata();
},[data])

  return (
    <div>
      <ul>
        {data.map((d)=>(<li>{d.title}</li>))}
      </ul>
    </div>
  )
}

export default Effect
