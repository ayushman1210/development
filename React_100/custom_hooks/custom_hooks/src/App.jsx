// import React from 'react'
// import { useState } from 'react';

// //custom-hooks 
// function useCounter(){
//   const [count,setcount]=useState(1);

//   function handle(){
//     setcount(count+1);
//   }
//   return {count:count, handle:handle}
// }


// const Counter=()=>{
//   // const [count,setcount]=useState(1);

//   // function handle(){
//   //   setcount(count+1);
//   // }

//   //  function handle1(){
//   //   setcount(count-1);
//   // }

// const{count,handle}=useCounter()

//   return (
//   <div>
//     <button onClick={handle}>+</button>
//     {/* <button onClick={handle1}>-</button> */}
//     <h1>{count}</h1>
//   </div>)

// }

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//       <Counter/>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

function Post(){
  const [post,setpost]=useState({});

  
  async function getpost(){
const data=await fetch("")
const response=await data.json();
setpost(response);
  }

  useEffect(()=>{
    getpost();
  },[])

  return (<div>{post.title}</div>)
}

const App = () => {
  return (
    <div>
      <Post/>
    </div>
  )
}

export default App

