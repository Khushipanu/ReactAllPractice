//special type of functions porvide features like state management
//a =0 -> 0 to 1 called state change hona
import React, { useState } from 'react'
import "./App.css";   

// const App = () => {
//   const a=10;
//   let user="khushi";
//   const abc=()=>{
//     console.log("hello")
//   }
//   const changeUser=()=>{
//     //react user ko change krdo 
//     user="harsh"
//     console.log(user)
//   }
//   return (
//     <div>
//       <h1>hello {user} </h1>
//       <button onClick={changeUser}>change user</button>
//     </div>
//   )
// }


// const App=()=>{
//   //react mai ese const a krke nhi krte neeche dekho ese krte hai
//   //if you want to change the value of A you can do it with setA


//   const [a,setA]= useState(10)
//   const changeA=()=>{
//     console.log("chal gaya")
//     setA(a+1)
//   }

//   return(
//     <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={changeA}>change</button>
//     </div>
//   )
// }





// const App=()=>{
//   const[count,setCount]=useState(10);
  
//   const decrement=()=>{
//     if(count>0)
//      setCount(count-1)

//   }
//   return(
//     <>
//     <h2>Number is {count} </h2>
//     <button onClick={()=>(setCount(20))}>change me</button>
//     <button onClick={decrement}>decrement</button>
//     </>
//   )
// }

// const App=()=>{
//   return(
//     <div>
//       <h2> hello everyone!! </h2>
//     </div>
//   )

// }

export default App
