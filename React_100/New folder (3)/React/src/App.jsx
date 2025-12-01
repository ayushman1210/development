
import React from 'react'
import ClassBasedComponent from './component/classbased'
import Function from './component/function'
import Fetch from './component/Fetch'
import ContextButton from './component/ContextButton'
import ContextText from './component/ContextText'
import Usereducer from './component/Usereducer'
import Todo from './component/todolist'
import Profile from './component/profile'
import Effect from './component/Effect'

import { createContext } from 'react'
import A from './component/a'
import B from './component/b'
import Usecontext from './component/Usecontext'
import Counter from './component/counter'
import Ref from './component/useRef'
export const Global =createContext();
const App = () => {
const name="ayushmna";
  return (
    <div>
    {/* <h1>hello</h1> */}
   {/* <ClassBasedComponent/>
   <Function/>
   <Fetch/> */}
     {/* <ContextText/>
   <ContextButton/>
 <Usereducer/> */}
 {/* <Todo/> */}
 {/* <Profile/> */}
 {/* <Effect/> */}

      {/* <Global.Provider value={name} >
        <A/>
        <B/>
      </Global.Provider> */}
      {/* <Usecontext/> */}
{/* <Counter/> */}
<Ref/>
    </div>
  )
}

export default App
