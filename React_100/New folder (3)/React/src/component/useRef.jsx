import React, { useRef } from 'react'

const Ref = () => {
    const data=useRef(null);

    function focus(){
        data.current.focus();
        data.current.value="ayushman";
    }
  return (
    <div>
      <input type="text"   ref={data}/>
      <button onClick={()=>focus()}>focus</button>
    </div>
  )
}

export default Ref
