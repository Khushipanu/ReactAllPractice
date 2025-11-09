import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import { QuoteContextProvider } from './context/QuoteContext.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

export const server='http://localhost:8080'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
     <UserContextProvider>
      <QuoteContextProvider>
        <App/>
         <Toaster/>
      </QuoteContextProvider>
      
     </UserContextProvider>
     </BrowserRouter>
  </StrictMode>,
)
