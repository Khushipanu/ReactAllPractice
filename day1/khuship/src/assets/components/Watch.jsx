import React, { useRef, useState } from 'react'

const Watch = () => {
    
    const [time,setTime]=useState(0);
    let timer=useRef(null)

    const startWatch=()=>{
        if(timer.current) return;
        
       timer.current= setInterval(()=>{
            console.log(time)

            setTime((time)=>time+1);

        },1000)
    }
    const stopWatch=()=>{
        console.log(timer)
        clearInterval(timer.current)
        // timer.current=null
    }

  return (
    <>
    <h1>{time}</h1>
    <button onClick={startWatch} style={{backgroundColor:"green"}} >
        Start
    </button>
    <br />
    <button onClick={stopWatch} style={{backgroundColor:"red"}} >
        stop
    </button>
    </>
  )
}

export default Watch
