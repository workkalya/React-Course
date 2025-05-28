import { useState,useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('')
  const inputRef = useRef(null)
  const handleSubmit = () => {
    if (inputRef.current) {
      inputRef.current.value = `You entered: ${count}`;
    }
    
  }

  return (
    <>
    <input type='number' value={count} onChange={(e) => setCount(e.target.value)} /><br/>
    <input type='text' ref={inputRef} /><br/>
    <button onClick={handleSubmit}>   Show Result </button>

     
    </>
  )
}

export default App
