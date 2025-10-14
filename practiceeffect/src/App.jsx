import React from 'react'
import Ref from './assets/components/Ref'
import Eff from './assets/components/Eff'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(1);
  const handleClick=()=>{
    setCount(count+1)
    
  }
  //runs on every render
const handleClickTotal=()=>{
  setTotal(count+1)
}
  // useEffect(()=>{
  //   alert(`i will win ${count} `)

  // })

  //runs of only first render
  // useEffect(()=>{
  //   alert("i ll never quit")
  // },[])

  //variation 3
  // useEffect(()=>{
  //   alert(`count is here ${count}`)

  // },[count])

  //variation 4 ->multiple dependencies
  // useEffect(()=>{
  //   alert("I will run everytime count/total is updated ")

  // },[count,total])

  //add a clean up function
  useEffect(()=>{
    alert(`count is updated ${count} `)
    return ()=>{
      alert(`count is unmounred from ui ${count}`)
    }

  },[count])
  return (
    <div>
      hhii count is {count}
      <button onClick={handleClick}>click me!!</button>

      <br /><br />

      total count is {total}
      <button onClick={handleClickTotal}>click me!!</button>
    </div>
  
  )
}

export default App
