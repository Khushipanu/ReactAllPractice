import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  let val=useRef(0);
  let btnRef=useRef();

  function handlerIncrement(){
    val.current=val.current +1;
    console.log("value of val is ",val)
    setCount(count+1)
  }

  function changeColor(){
    btnRef.current.style.backgroundColor="yellow"

  }

  //it ll run on every render
  useEffect(()=>{
    alert(`mai firse render hogya hu ${count}`)

  })
  
  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handlerIncrement} >
        Increment
      </button >
      <br />
      
      <button onClick={changeColor} >
        Change color of 1st Button
      </button>
      <br />
      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App
