import React, { useState } from 'react'
import Appp from './Appp';
import Form from './Form';

const App = () => {
  // const [input,setInput]=useState("")

  // const handleBtn=(e)=>{
  //   e.preventDefault();
  //   alert("hi")

  // }
  return (
    <div>
      {/* <input type="text"
      value={input}
      placeholder="enter something"
      onChange={(e)=>setInput(e.target.value)}
      
      />
      <button onClick={handleBtn} type="submit">Submit</button>
    */}

    {/* <Appp/> */}
    <Form/>
     </div>
  )
}

export default App
