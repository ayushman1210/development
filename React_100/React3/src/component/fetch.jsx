import React, { useEffect, useState } from 'react'


const Fetch = () => {
    const [data,setdata]=useState([]);

    useEffect(()=>{
        async function getdata(){
        const res=await fetch("https://jsonplaceholder.typicode.com/todos");
        const data=await res.json();

        if(data && data.length) setdata(data);
        }

        getdata();
    },[])
  return(  
  <div>
      <ul>
        {data.map((d)=>(
            <li key={d.id}>{d.title}</li>
            ))}
      </ul>
    </div>
  )
}

export default Fetch
