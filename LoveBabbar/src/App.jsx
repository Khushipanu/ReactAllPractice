import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <UserCard name="Love rana"/>
      <UserCard name="Khushi panu"/>
      <UserCard name="khushi "/>
    </div>
  )
}

export default App
