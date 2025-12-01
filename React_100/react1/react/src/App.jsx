
import React, { useEffect, useState } from 'react'
import Hooks from './components/Hooks'
import Memo from './components/memo';
import Memo1 from './components/Memo1';

const App = () => {
  // const [Todo,SetTodo]=useState([]).
  const[Counter,SetCounter]=useState(0);
  const [Sum,SetSum]=useState(0);
  // const [todo,SetTodo]=useState([
  //   {
  //   title:"helk",
  //   description:"hjkl",
  // },{
  //   title:"asdf",
  //   description:"zxcv"
  // },{
  //   title:"helk",
  //   description:"hjkl",
  // }])
  // return (
  //   <div>
  //    {/* <Headers/>
  //       <Name name="samriddh"/> */}
  //       <button onclick={add} >Add todo</button>
  //       <input type="text" placeholder='title' />
  //       <input type="text" placeholder='description' />
  //       {todo.map((t)=>(
  //         <>
  //       <h1 >{t.title}</h1>
  //       <h2>{t.description}</h2>
  //       </>))}
  //   </div>
  // )
  // useEffect(()=>{
  //   fetch("http://sum-server.100xdevs.com/todos").then(async function(res){
  //     const json=res.json();
  //     SetTodo(json)
  //   })
  // },[])

return <div>
   {/* <CardWrapper innercomponent={<TextComponent/>}/>
      <CardWrapper innercomponent={<TextComponent/>}/> */}
      {/* <CardWrapper>
        <TextComponent/>
      </CardWrapper>

        <CardWrapper>
        <Run/>
      </CardWrapper> */}
     {/* {Todo.map((t)=>{return <Todos title={t.title} description={t.description}/>})}
      */}
      {/* <Hooks/> */}
      {/* <Memo/> */}
      <Memo1/>
      {/* <input type="text" onChange={function(e){
         const value=e.target.value;
         const res=Number(value)
         SetSum(((res+1)*(value))/2)
          }} />
      <h1>{Sum}</h1>
      <button onClick={()=>{SetCounter(Counter+1)}}>Counter :{Counter}</button> */}
</div>
}

function Todos({title,description }){
  return <div>
    <h1>{title}</h1>
  <h1>{description}</h1>
  </div>
}



function TextComponent(){ 
  return <div> Hi there !! </div>
}

function Run(){
  return <div>ayushman</div>
}

// function CardWrapper({innercomponent}){
// return <div style={{border:"2px solid black"}}>{innercomponent}</div>
// }

function CardWrapper({children}){
 return <div style={{border:"2px solid black"}}>{children}</div>
}

function Headers(){
    const [Nam,SetNam]=useState("ayushman")
  return (
    <div>
     <button onClick={function(){SetNam(Math.random())}}> click to change </button>
     <Name name={Nam}/>
     </div>
  )
}

const Name= React.memo(function Name(props){
  return <h1>"hi my name is "{props.name}</h1>
}) 

export default App
