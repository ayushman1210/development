import React from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Comment from './pages/comment'
import Recipe from './pages/recipe'
import { Link } from 'react-router-dom'
import Details from './pages/Details'
import Notfound from './pages/not-found'
import Layout from './layout'

const App = () => {

  const navigate=useNavigate()
  return (
    <div>
      <h1>hello</h1>
        <div>
        {/* <Link to={"/recipe"}>aa</Link> */}
      </div>
      <button onClick={()=>navigate("/home/recipe")}>Recipe</button>
      <button  onClick={()=>navigate("/home/comment")}>Comment </button>
     <Routes>
      <Route path='/home' element={<Layout/>}>
       <Route path="recipe" element={<Recipe/>}/>
       <Route path="comment" element={<Comment/>}/>
       <Route path="recipe/:id" element={<Details/>}/>
       </Route>
     
       <Route path="*" element={<Notfound/>}/>
     </Routes>
    </div>
  )
}

export default App
