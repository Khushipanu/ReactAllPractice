import React, { useEffect } from 'react'
import { QuoteData } from '../../context/QuoteContext'
import "./Home.css"
const Home = () => {
    const {quotes,fetchQuotes}=QuoteData();
    
    useEffect(()=>{
        fetchQuotes();
    },[])
  return (
    <>
   <div>
  <h1>Quotes</h1>

    <div className="quotes">
        


      {quotes.map(q=>(
        <div key={q._id} className="quote-card">
       <h3>{q.title}</h3>
        <h4>{q.book}</h4>
        </div>
))}
        
   </div>

  </div>

</>

  )
}

export default Home
