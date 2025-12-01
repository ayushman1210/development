import React, { memo, useState } from 'react'

const Memo1 = () => {
    const [count,SetCount]=useState(0);
  return (
    <div>
      <Bucom/>
      <button onClick={()=>{
        SetCount(count+1)
      }}>{count}</button>
    </div>
  )
}

   const Bucom=memo(()=>{
    console.log("child render")
    return <div>
        <button>Button clicked</button>
    </div>
   })

export default Memo1
