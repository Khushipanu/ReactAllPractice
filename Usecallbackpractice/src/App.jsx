import React from 'react'
import './App.css'
import { useState } from 'react'
import ChildComponent from './components/ChildComponent'
import { useCallback } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  
  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[count])
  
  return (
    <div>
     <div> Count : {count} </div>
     <div>
      <button onClick={handleClick} >Increment!!</button>
     </div>
      <div>
        <ChildComponent buttonName="click me"/>
      </div>
    </div>
  )
}

export default App
