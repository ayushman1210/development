// import React, { useContext, useState } from 'react'
// import { Countcontext } from './context';
// import {  RecoilRoot, useRecoilValue } from 'recoil';
// import { countatom } from './store/atoms/count';
// function App(){
//   const [Count,SetCount] =useState(0);
//   return <>
//   <div>
//     <Countcontext.Provider value={Count}>
//        <Counter count={Count} setcount={SetCount}/>
//     </Countcontext.Provider>
   
//      </div>
//   </>
// }

// function Counter({setcount}){
//   return <div>
//     <CountRender />
// <Buttons setcount={setcount}/>
//   </div>
// }

// function CountRender(){
//   const count=useContext(Countcontext);
//   return <h1>count{count}</h1>
// }

// function Buttons({setcount}){
//     const count=useContext(Countcontext);
// return <>
// <button onClick={()=>{setcount(count+1)}}>increment</button>
// <button onClick={()=> {setcount(count-1)}}>decrement</button>
// </>
// }


//Recoil 

// App.jsx

import React from 'react';
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { countatom } from './store/atoms/count';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRendered />
      <Buttons />
    </div>
  );
}

function CountRendered() {
  const count = useRecoilValue(countatom);
  return <h1>Count: {count}</h1>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countatom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}


export default App;