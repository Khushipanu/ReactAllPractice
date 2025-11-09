import React from 'react'
import { UserData } from './context/UserContext'
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminQuotes from './Admin/AdminQuotes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Description from './pages/description/Description';
import Login from './Auth/Login';






const App = () => {
  const {isAuth,user}=UserData();
  return (
  
  <> 
  <Header isAuth={isAuth}/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin/create-quote" element={<AdminQuotes/>}/>
            <Route path="/description" element={<Description/>}/>
            <Route path="/login" element={isAuth? <AdminQuotes user={user} /> : <Login/>}/>
       </Routes>
       <Footer/>
 </>

   
  )
}

export default App
