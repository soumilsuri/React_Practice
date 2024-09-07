import { useState } from 'react'
import './App.css'
import { CardOne } from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name : "soumil",
    age : 19
  }

  return (
    <>
    <CardOne hw="hello world!" username="soumil"/>
    <CardOne display={obj}/>
    </>
  )
}

export default App
