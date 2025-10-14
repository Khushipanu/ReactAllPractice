import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import ProductTab from './components/ProductTab'
import MessageBox from './components/MessageBox'
import Button from './components/Button'
import Print from './components/K'
import Form from './components/Form'




  // const [season,setSeason]=useState("spring")
  // //Mount phase
  // useEffect(()=>{
  //  console.log("Plant has been planted!(Component Mounted)")
  // //unmounting phase(Clean-up)
  //  return()=>{
  //   console.log("Plant is removed(Component Unmounted")
  //  }
  // },[])
  // //update
  // useEffect(()=>{
  //   console.log(`The season changed to ${season} (component Updated)`)
  // })
  // return(
  //   <>
  //    <h1>Current Season:{season}</h1>
  //    <button onClick={()=>setSeason("summer")} >Change to Summer</button>
  //    <button onClick={()=>setSeason("winter")}> Change to winter</button>
  //   </>
  
  // )
//   function App() {
//   return(
//     <>
//     <MessageBox userName="khushi" textColor="red"/>
//      <MessageBox userName="apna college" textColor="pink"/>

//     </>
//   )
// }
function App(){
  return(
    <>
     
    <Form/>
    </>
  )
}

export default App
