import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './compoenets';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
          console.log('No user logged in')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? (
    <>
      <Header />
      <div className='bg-red-500 flex flex-col items-center justify-center h-screen'>
        {/* Main content goes here */}
      </div>
      <Footer />
    </>
  ) : null
}

export default App
