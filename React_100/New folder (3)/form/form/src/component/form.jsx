import React, { useState } from 'react'

const Form = () => {
    const [data,setdata]=useState([])
    const [value,setvalue]=useState("")


    function handle(e){
        setvalue(e.target.value);
    }

    function handle1(e){
        e.preventDefault();
        setdata([...data],value
        );
        setvalue("");
    }
    function handle2(){
        console.log(data)
    }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handle1}>
        <input type="text"
       placeholder='enter the detail' 
       value={value} 
       onChange={handle}
       />
       <button typeof='submit'>Submit</button>
       <button onClick={handle2}>show</button>
      </form>
      
    </div>
  )
}

export default Form
