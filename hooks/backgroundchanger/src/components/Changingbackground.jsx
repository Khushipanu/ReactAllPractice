import React from 'react'
import { useState } from 'react'

const Changingbackground = () => {
    const [color,setColor]=useState("red");
    const [text,setText]=useState("click here")
    const changeColor=()=>{
        setColor("pink")
        setText("color changed")

    }
    const previousChange=()=>{
        setColor("red");
        setText("click here")
    }

  return (
    <div style={{backgroundColor:color}} className="box">
        <button onClick={changeColor} onDoubleClick={previousChange} > {text}</button>
      
    </div>
  )
}

export default Changingbackground
