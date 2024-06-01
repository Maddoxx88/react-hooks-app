import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      default:
        break;
    }
  }

  const [count2, dispatch] = useReducer(reducer, 0);

  const handleSubmit = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleSubmit}>Increment</button>
      <h1>Count 1</h1>
      <h3>{count}</h3>
      <button onClick={()=>dispatch('increment')}>Increment 2</button>
      <h1>Count 2</h1>
      <h3>{count2}</h3>
    </>
  )
}

export default App
