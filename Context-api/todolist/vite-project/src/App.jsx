import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './context'
import { ToDoContext } from './context/ToDoContext'
import { UseToDO } from './context/ToDoContext'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, {id : Date.now(), ...todo}]) //add todo to the end of the array with exicting todos
  }

  const updatedTodo = (id, todo) => {
    setTodo((prev) => prev.map((item) => (item.id === id ? { ...item, ...todo } : item))) //update the todo with the same id
  }

  const deleteTodo = (id) => {
    
  }

  const toggleComplete = (id) => {}



  return (
    <ToDoProvider value={{todos,addTodo, updatedTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
