import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState([]);
    
    const handleBtn=(e)=>{
        e.preventDefault();
        if(email){
            setMessage([...message,email])
        }else{
            setMessage("nothing to print")
        }
        setEmail("")

    }
  return (
    <>
        <input type="email" 
        placeholder="enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit" 
        onClick={handleBtn}
        >Submit</button>
         
        <div style={{marginTop:"10px"}}>
            {message.map((item,idx)=>(
                <p key={idx}> {item} </p>
            ))}

        </div>

        
      
    </>
  )
}

export default Form
