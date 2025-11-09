import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {UserData} from '../context/UserContext'


 const Login = () => {
  const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {loginUser} =UserData();
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        await loginUser(email,password);
    }

  return (
    <div className="main">
      <h1>Login page</h1>
      <form onSubmit={submitHandler} >
        <label htmlFor="email">Email</label>
        <input type="text"
        placeholder="enter email"
        value={email}
        required
        onChange={(e)=>setEmail(e.target.value)}
        /> <br /><br />
         <label htmlFor="email">Password</label>
        <input type="password"
        placeholder="enter password"
        value={password}
        required
        onChange={(e)=>setEmail(e.target.value)}
        />
       <br /><br />
       <button type="submit">Login</button>
      </form>
      <p>Don't have an account <Link to="/register"> Register </Link> </p>
    </div>
  )
}

export default Login;
