import React from 'react'
import ChildA from './components/ChildA'
const App = () => {
  const name1="khushi1"
  const name2="deepak2"
  return (
    <div>
      <h1>prop drilling</h1>
      <ChildA title="1" name={name1} /> 
      <ChildA title="2" name={name2}/>
    </div>
  )
}

export default App
