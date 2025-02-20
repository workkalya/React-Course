import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(0);

 const addValue = () => {
  if (counter < 20){
    counter = counter + 1;
  setCounter(counter);
  console.log(counter);
  }

  
  // or 
  // setCounter(counter + 1);
  
  
 }

 const removeValue = () => {
  if (counter > 0){
    

    counter = counter - 1;
    setCounter(counter);
    // or 
    // setCounter(counter - 1);
    console.log(counter);
  
 }}


  return (
    <>
    <h1>Ahabib here</h1>
    <h2>Counter Value :{counter}</h2>
    <button
    onClick={addValue}>Increment on {counter}</button><br/>
    <button
    onClick = {removeValue}>Decrement on {counter}</button>
    <p> Current Value is {counter}</p>
      
    </>
  )
}

export default App
