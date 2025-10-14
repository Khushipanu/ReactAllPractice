import React, { useRef, useState } from 'react'

const CountA = () => {

    const [count,setCount]=useState(0);

    const [inputv,setInputv]=useState(0);
    
    const incre=()=>{
        setCount(count+Number(inputv));

    }
    const decre=()=>{
        if(count>=1){
            setCount(count-1);
        }
        
    }
/*
input box value (x)-> count+x 

*/

  return (
    <div>
        <input type="text"  
        value={inputv}
        onChange={(e)=>{
            setInputv(e.target.value)
        }}
        />
         <h2>{count}</h2>
        <button onClick={incre} >
            Increment

        </button>


      
      <br />
      <button onClick={decre} >Decrement</button>
    </div>
  )
}

export default CountA
