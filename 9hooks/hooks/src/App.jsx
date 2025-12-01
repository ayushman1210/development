import React,{useEffect,useState} from 'react'


function useTodos(n){
    const [todos,settodos]=useState([]);
    const [loading,setloading]=useState(false);
   
  useEffect(()=>{ 
     setTimeout(
        fetch('').then(res=>{settodos(res.data.todo)}
        ,n*1000))
        setloading(true)
  })
}

function App() { 
  // let [render,setrender]=useState(true);
  const [todos,loading]=useTodos(5)

  

// useEffect(()=>{
//   setTimeout(() => {
//     setrender(false);
//   }, 1000);
//   return (
//   {render} ? <Myclass/>:null
//   )
// })

return (
  <>
  {loading} ?  {todos}: "loading...."
  </>
)
}

// function Myclass(){
//   useEffect(()=>{
//     console.log('monted');
//   },[])

// return ()=>
//   {console.log('unmounted ')}
// }


export default App