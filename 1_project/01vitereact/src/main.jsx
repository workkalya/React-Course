import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div><h1>A custom App component</h1></div>
    );
}

const element=(
    <a href="www.ggogle.com" target="_blank">Vist google</a>
)

const reactElement= React.createElement(
    "a",
    {href:"www.google.com", target:"_blank"},
    "Vist google just for fun"
)

createRoot(document.getElementById('root')).render(
  
  App()

)
