import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hooks in react</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment {count}</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement{count}</button>
      <p>count har jagha badega useState hook use karne se.{count}</p>
      <p>Hooks let you use state and other React features without writing a class.{count}</p> 
    </>
  )
}

export default App
