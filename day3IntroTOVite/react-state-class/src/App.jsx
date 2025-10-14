import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Like from './assets/Like'
import Counter from './assets/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h5>States in React</h5>

    {/* <Like/> */}
    <Counter/>
    </>
  )
}

export default App
