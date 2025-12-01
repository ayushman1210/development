// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const Hooks = () => {
// const [Todo,SetTodo]=useState([])
// const [id,setid]=useState('1');
//     // useEffect(()=>{
//     //    axios.get("https://jsonplaceholder.typicode.com/todos/").then(function(res){
//     //     SetTodo(res.data)
//     //    })
//     // },[])

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(function(res){
//             SetTodo(res.data)
//         })
//     },[id])

//   return (
//     <div>
//       {Todo.map((t)=><Todos id={t.id} title={t.title} />)}
//       <input type="number" onChange={function(e){setid(e.target.value)} } />
//     </div>
//   )
// }

// function Todos({title,id}){
// return <div> 
//     <h1>{title}</h1>
//     <h2>{id}</h2>
// </div>
// }

// export default Hooks


import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hooks = () => {
  const [todo, setTodo] = useState(null)
  const [id, setId] = useState('1')

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTodo(res.data)
      })
  }, [id])

  return (
    <div>
      {todo && <Todos id={todo.id} title={todo.title} />}
      <input
        type="number"
        onChange={(e) => setId(e.target.value)}
      />
    </div>
  )
}

function Todos({ title, id }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default Hooks
