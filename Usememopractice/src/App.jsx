import React from 'react'
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const [input,setInput]=useState(0)

  function expensivefunc(num){
    console.log("inside expensice task")
    for(let i=0;i<=1000000000;i++){}
            return num*2;
  }
    
   
    let doubleValue=useMemo(()=>expensivefunc(input)
    ,[input])
    

  
  return (
    <div>
      <button onClick={()=>setCount(count+1)} >Increment</button>
      <div>Count: {count} </div>
      <div>
        Double:{doubleValue}
      </div>
      <input type="number"
      placeholder="enter number"
      value={input}
      onChange={(e)=>setInput(e.target.value) }
      />
    </div>
    
  )
}

export default App
