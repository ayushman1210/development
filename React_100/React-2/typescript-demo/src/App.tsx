import React from 'react'
// import User from './component/user'
import Button from './component/button'
import Admininfo from './component/Admininfo'
import Userinfo from './component/Userinfo'
import { Info, Infoc } from './type'
const App = () => {
  
  const user :Info={
    id:2,
    name:"ayushmna",
    email:"ayushmangupt@gmail.com"
  }

  const admin :Infoc={
    id:3,
    name:"admin",
    email:"admin@akgec",
    role:"mannger",
    login:new Date()
  }
  return (
    <div>

      {/* <User name="ayushmna" age={20}/> */}
      {/* <User>
         <p>helllo</p>
      </User> */}

        <Button label="click me "  onclick={()=> console.log("button clicked ") } disabled={false}/>
          <Userinfo user={user}/>
          <Admininfo admin={admin}/>
    </div>
  )
}

export default App