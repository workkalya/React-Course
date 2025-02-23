import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compoenets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tealiend CSS
      </h1>
      <Card name="Abdullah"/>
      <Card name="Asad"/>
      <Card />
     
        
    </>
  )
}

export default App
