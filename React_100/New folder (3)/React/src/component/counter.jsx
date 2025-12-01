import React, { useReducer } from 'react'


const initialstate={count:0}

const reducer=(state,action)=>{
 switch (action.type) {
    case "increment":
      return {...state,count:state.count+1}

    case "decrement":
        return {...state,count:state.count-1}
        break;
 
    default:
        break;
 }
}
const Counter = () => {

    const[state,dispatch]=useReducer(reducer,initialstate)


  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}

export default Counter
