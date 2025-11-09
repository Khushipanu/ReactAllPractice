import React,{useState,createContext} from 'react'

import ChildA from './components/ChildA';
export const userContext=createContext();

const App = () => {
  const [user,setUser]=useState({name:"khushi"});
  
  
  return (
    <div>
      <userContext.Provider value={user}>
        <ChildA/>
      </userContext.Provider>
      
      
    </div>
  )
}

export default App
