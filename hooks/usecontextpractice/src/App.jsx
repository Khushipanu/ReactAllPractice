import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';

//step1->create context
const UserContext=createContext();

//step2->wrap all child inside a provider
//step3->pass value
//step4->consumer k andr jaake consume krlo

const App = () => {
  const [user,setUser]=useState({name:"khushi"});
  return (
    <> 
    <UserContext.Provider value={user}>
        <ChildA />
    </UserContext.Provider>
    </>
   
  )
}

export default App
export {UserContext}
