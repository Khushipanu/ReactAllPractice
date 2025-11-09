import React,{useState,useRef} from 'react'



const App = () => {
  const [count,setCount]=useState(0);
  let val=useRef(0)
  let btnref=useRef();

  const changecolor=()=>{
    btnref.current.style.backgroundColor="yellow";
  }


  const handleclick=()=>{
    val.current=val.current+1;
    console.log(val)
    setCount(count+1)
     
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={handleclick} >Add</button>
      <button 
      ref={btnref}
      onClick={changecolor} >Change</button>
    </div>
  )
}

export default App
