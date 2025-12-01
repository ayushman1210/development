import React, { useEffect, useState } from 'react'
// const data=['ayush','gupta','asdhfk']

const Fetch = () => {
    const [data,setdata]=useState([]);
    const [pending,setpending]=useState(true)

useEffect(()=>{
     async function getdata(){
       
        setpending(false);
        const data1=await fetch("https://jsonplaceholder.typicode.com/todos");
    const response=await data1.json();

    setdata(response);
    setpending(true);
     }
       getdata();
    },[])

    if(!pending){return <h1>wait for a sec...</h1>}


    // function fetch(){

    // }

  return (
    <div>
        <ul>{data.map((d)=>
         <li>{d.title}</li>
            )}
            </ul>
            {/* <button onClick={fetch}>FETCH DATA</button> */}
    </div>
     
)}


// return(<>
// <ul>{data.map((item,index)=><li key={index}>{item}</li>)}</ul>
// </>)
export default Fetch
