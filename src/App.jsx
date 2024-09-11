import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Evaluator from './Evaluator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Evaluator />
    </>
  )
}

export default App
