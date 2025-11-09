import React,{useReducer} from 'react'

const Second = () => {

    const reducer=(state,action)=>{
         if(action.type==='INCREMENT'){
            return state + 1;
         }
         if(action.type==='DECREMENT'){
            return state - 1;
         }
         if(action.type==='RESET'){
            return 0;
         }
         return state;
    }

    const [count,dispatch]=useReducer(reducer,0);
  return (
    <div>
        <h1>Counter using reducer</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}

export default Second;
