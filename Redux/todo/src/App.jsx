import { useState } from 'react'
import './App.css'
import AddTodo from './compoenets/AddTodo'
import Todos from './compoenets/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddTodo />
     <Todos />
     

    </>
  )
}

export default App
