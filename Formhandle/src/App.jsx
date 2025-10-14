
import React,{useState} from 'react'
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Card2 from './components/Card2'


const App=()=>{

  //function
  // const submitHandler=(e)=>{
  //  e.preventDefault()
  //  console.log(username)
  //  setUsername('')
  // }

  // const[username,setUsername]=useState('')
  // return (

  //   <div>

  //      <form onSubmit={(e)=>{
  //       submitHandler(e);
  //      }}> 

  //       <input
  //       value={username}
  //       onChange={(e)=>{
  //        setUsername(e.target.value)
  //       }}
        
  //       type="text"
  //        placeholder="enter your name" />
  //       <button>submit</button>
  //      </form>
  //   </div>
  // )
  const users=[
    {
      "name":"khushi",
      "age":20,
      "city":"haldwani"
    },
    {
      "name":"sarthak",
      "age":21,
      "city":"bhopal"
    }
  ]
  

  return(
  <>
 {/* <Card username="sarthak" /> */}
{/* <Card2 user="sarthak" age='34' city="haldwani" /> */}
  <div>
    <div>
      {users.map(function(e,idx){
        return <Card2 key={idx} name={e.name} age={e.age} city={e.city}/>
      })}
    </div>
  </div>
  </>
  )
}
export default App