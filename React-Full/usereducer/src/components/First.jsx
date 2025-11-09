import React,{useReducer} from 'react'

const First = () => {
  const emptyData={
    name:'',
    password:'',
    email:'',
    city:'',
    address:''
  }
  const reducer=(state,action)=>{
    console.log(action.type);
    // console.log(action.type)
    return {...state,[action.type]:action.val}
  }

    const [state,dispatch]=useReducer(reducer,emptyData);
  console.log(state)
  return (
          <div>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder="enter name"/>
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'password'})}  placeholder="enter password"/>
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder="enter email"/>
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} placeholder="enter address"/>
      <br />
      <button onClick={()=>console.log(state)} >Add details</button>
      <ul>
        <li>Name : {state.name} </li>
        <li>email: {state.email}</li>
      </ul>
      
    </div>
  )
}

export default First
