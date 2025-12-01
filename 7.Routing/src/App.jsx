import React, { Suspense } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
// import Landing from './components/landing'
// import DashBoard from './components/dashboard'
const Landing = React.lazy(()=>import("./components/landing"))
const Dashboard=React.lazy(()=>import("./components/dashboard"))
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
    <Route path='/' element={<Suspense fallback={"loading"}><Landing/></Suspense>}/>
  {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
   <Route path='/dashboard' element={<Suspense fallback={"loading"}><Dashboard/></Suspense>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
    const navigate=useNavigate();
  return <>
    <div>
       <button onClick={()=>{
        // window.location.href='/'
        navigate('/');
}}>Landing</button>
       <button onClick={()=>{
        // window.location.href='/dashboard'
        navigate('/dashboard')
        }}>Dashboard</button>
      </div>
  </>
}

export default App
