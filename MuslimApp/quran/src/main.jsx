import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { QuranProvider } from './QuranContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuranProvider>
        <App />
      </QuranProvider>
    </BrowserRouter>
  </React.StrictMode>,
)