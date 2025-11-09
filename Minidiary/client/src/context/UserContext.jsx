import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";



const UserContext=createContext(); 

export const UserContextProvider=({children})=>{
    
    const navigate=useNavigate();

    const [user,setUser]=useState(null)
    const [isAuth,setIsAuth]=useState(false)
    
    async function registerUser(name,email,password,role){
        try{
            const {data}=await axios.post(`${server}/api/user/register`,
                {name,email,password,role}
            )
            localStorage.setItem("registerToken",data.registerToken)
            navigate("/verify")
            
        }catch(err){
            toast.error(err.response?.data?.message)
            console.log(err)
            

        }
    }
    async function loginUser(email,password){
        try{
            const {data}=await axios.post(`${server}/api/user/login`,{
                email,password
            })
            localStorage.setItem("token",data.token);
            setUser(data.user)
            setIsAuth(true)
            navigate("/")
            
        }catch(err){
            setIsAuth(false)
            toast.error(err.response.data.message);

        }
    }
    async function verifyOtp(otp){
        const registerToken=localStorage.getItem("registerToken")
        try{
            const {data}=await axios.post(`${server}/api/user/verify`,{otp,registerToken})
            toast.success(data.message)
            navigate("/login")
        }catch(err){
            toast.error(err.response.data.message)
            console.log(err)

        }
    }
    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/")
        }
    },[])
    return(
        <UserContext.Provider 
        value={{user,setUser,setIsAuth,isAuth,loginUser,registerUser,verifyOtp}}>
            {children}

        </UserContext.Provider>
    )

}

export const UserData=()=>useContext(UserContext);