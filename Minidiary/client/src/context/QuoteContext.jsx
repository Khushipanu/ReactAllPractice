import axios from 'axios';

import { createContext, useContext, useState } from "react"
import { server } from "../main"
const QuoteContext=createContext()

export const QuoteContextProvider=({children})=>{
    const [quotes,setQuotes]=useState([])

    async function fetchQuotes(){
        try{
            const {data}=await axios.get(`${server}/api/quotes`)
            setQuotes(data.quotes)

        }catch(err){
            console.log(err)

        }
    }
    return <QuoteContext.Provider
    value={{quotes,fetchQuotes}} 
    >
        {children}
    </QuoteContext.Provider>


    
}
export const QuoteData=()=>useContext(QuoteContext)