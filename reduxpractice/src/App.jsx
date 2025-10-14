import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset} from './features/counter/CounterSlice'

const App = () => {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
   function handleIncrementClick(){
    dispatch(increment())
   

      }
      function handleDecrementClick(){
        dispatch(decrement())
        
      }
      function handlerResetClick(){
        dispatch(reset())
        
      }
  return (
    <div className="container">
      <button onClick={handleIncrementClick}> + </button>
      <p>Count:{count} </p>
      <br />
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handlerResetClick}>reset</button>
      <input type="text" />

     
    </div>
  )
}

export default App 
