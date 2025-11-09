import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { UserData } from '../context/UserContext'

const Verify = () => {
    const [otp,setOtp]=useState("")
    const {verifyOtp}=UserData();
    const submitHandler=async(e)=>{
        e.preventDefault();
        await verifyOtp(Number(otp))

    }
  return (
    <div className="main">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler}>
            <label htmlFor="otp">Otp</label>
            <input type="number"
            value={otp}
            onChange={(e)=>e.target.value}
            required
            />
            <button type="submit">
                Verify
            </button>

        </form>
        
      
    </div>
  )
}

export default Verify
