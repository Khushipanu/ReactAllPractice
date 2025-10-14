import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Ref = () => {
    const [val,setVal]=useState("");
    
    const change=(e)=>{
        setVal(e.target.value)
        // refElement.current=refElement.current +1;

    }

   const refElement= useRef(0);

    // useEffect(()=>{
    //     setNum(num+1)
    // })
    const submit=()=>{
        refElement.current.style.color="red"
        refElement.current.style.backgroundColor="pink"
        setVal("")

    }
  return (
   <>
   <div className="container">
    <h1>use ref hook</h1>
    <input type="text"
    ref={refElement}
     value={val} 
     onChange={change} />
     <button onClick={submit}>  submit</button>
     

   </div>
   </>
  )
}

export default Ref;

