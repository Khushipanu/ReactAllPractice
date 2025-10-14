import React from 'react'
import '../App.css'
import { useState } from 'react'
const Formpractice = () => {
    const [fname,setFname]=useState("")
    const [show,setShow]=useState("")
    const getName=(e)=>{
        setFname(e.target.value)
        

    }

    const submitBtn=(e)=>{
       e.preventDefault()
       setShow(fname)
    }

  return (
   <>
   <form onSubmit={submitBtn} >
    <h1>{show}</h1>
    <label >Enter fist name</label>
    <input type="text" 
    onChange={getName}
    value={fname}
    />
    <input type="text"
    value={}
    onChange={}
    />
    <button type="submit">Submit</button>
   </form>
   </>
  )
}

export default Formpractice
