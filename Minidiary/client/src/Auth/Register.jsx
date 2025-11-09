import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { UserData } from '../context/UserContext';
const Register = () => {

    const navigate=useNavigate();
    const {registerUser}=UserData();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("")
    const submitHandler=async(e)=>{
        e.preventDefault();
        await registerUser(name,email,password,role);

    }

  return (
    <div className="main">
        <h1>Register</h1>
        <form onSubmit={submitHandler} >
            <label htmlFor="name">Name</label>
            <input type="text" 
            value={name}
            onChange={(e)=>e.target.value}
            /> <br /><br />
            <label htmlFor="email">Email</label>
            <input type="email" 
            value={email}
            onChange={(e)=>e.target.value}
            /> <br/> <br/>

            <label htmlFor="password">Password</label>
            <input type="password"
            value={password}
            onChange={(e)=>e.target.value} 
            /> <br /><br />

             <label htmlFor="password">Role</label>
            <input type="role"
            value={role}
            onChange={(e)=>e.target.value} 
            />
            <button type="submit" >Register </button>
        </form>
        <p>Have an account? <Link to="/login">Login</Link> </p>


      
    </div>
  )
}

export default Register
