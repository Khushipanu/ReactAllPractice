import React from 'react'
import Card from './components/Card'
import { useState } from 'react'



const App = () => {
  const [name,setName]=useState('');
  return (
    <div>
      <Card name={name} setName={setName}  />
      <p>here is the parent: {name}</p>
    </div>
  )
}

export default App
