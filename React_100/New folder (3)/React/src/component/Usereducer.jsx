
import React from 'react'
import { useReducer } from 'react';
const initialState={
    textflag:false,
    textstyleflag:false,
}

const HIDE_TEXT="HIDE_TEXT";
const SHOW_TEXT="SHOW_TEXT";
const CHANGE_TEXT="CHANGE_TEXT";

function reducer(state,action){
    switch (action.type) {

        case HIDE_TEXT:
            return {
                textflag:false,
                textstyleflag:false,
            }

     case SHOW_TEXT:
            return{ ...state, textflag:true,}

     case CHANGE_TEXT:
    return { ...state, textstyleflag:true}
        default:
       return state;
    }
}



 const Usereducer=()=>{
 const [state,dispatch] =useReducer(reducer,initialState)
 console.log(state)

return (
<>{state.textflag ? <h1 style={{ backgroundColor:state.textstyleflag ? "red":"black"}}>Hello world</h1> : null}
<button onClick={()=>dispatch({type: "HIDE_TEXT"})}>hide text</button>
<button onClick={()=>dispatch({type: "SHOW_TEXT"})}>show text</button>
<button onClick={()=>dispatch({type: "CHANGE_TEXT"})} >change style</button>

</>
)
}

export default Usereducer;