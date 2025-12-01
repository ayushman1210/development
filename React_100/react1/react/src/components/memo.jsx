import React, { memo, useState } from 'react'

const Memo = () => {
    const[count,setCount]=useState(0);

    function inputfunction(){
        console.log("clicked here !!")
    }
  return (
    <div>
      <Child onClick={inputfunction}/>
      <button onClick={()=>{ 
        setCount(count+1);
      }}> click me {count}</button>
    </div>
  )
}

const Child= memo(({inputfunction})=>{
console.log("child render ")
return <div>
    <button onClick={inputfunction}>button clicked </button>
</div>
})

export default Memo
  