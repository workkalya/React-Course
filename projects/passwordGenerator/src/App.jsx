import { useState,useCallback,useEffect,useRef} from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()_+"
    }
    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)


  }, [length, numAllowed, charAllowed,setPassword])
  useEffect(()=>{passwordGenerator()} ,[length, numAllowed, charAllowed,passwordGenerator])
  const passwordRef = useRef()
  const copyToClipboard = () => {
    passwordRef.current?.select()
    document.execCommand("copy")
  }

  return (
    <>
     <div className="w-full  max-w-md mx-auto  shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className='outline-none bg-white w-full py-1 px-3 ' 
        placeholder='password'
        readOnly
        ref={passwordRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyToClipboard}>Copy</button>

      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>setLength(e.target.value)}
           />
           <label>Lentgh : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=> {setNumAllowed((prev)=>!prev);}}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={()=> {setCharAllowed((prev)=>!prev);}}
          />
          <label>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
