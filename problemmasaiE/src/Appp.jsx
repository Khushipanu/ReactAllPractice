import React, { useRef } from 'react'

const Appp = () => {
    const btnRef=useRef();
    const handleBtn=()=>{
        alert(btnRef.current.value);
    }
  return (
     <div>
      <input type="text"
      ref={btnRef} //connect input with ref
      placeholder="enter something"
      />
      <button 
     
      onClick={handleBtn} type="submit">Submit</button>
    </div>
  )
}

export default Appp
