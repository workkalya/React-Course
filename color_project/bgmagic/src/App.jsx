import React, { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center align-middle bottom-200 inset-y-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        Color Changer
      </div>
      

      </div>


      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"red"}} 
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"blue"}} 
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black' 
            style={{backgroundColor:"white"}} 
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"green"}} 
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"yellow"}} 
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"purple"}} 
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"orange"}} 
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"pink"}} 
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"cyan"}} 
            onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"brown"}} 
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white' 
            style={{backgroundColor:"gray"}} 
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App