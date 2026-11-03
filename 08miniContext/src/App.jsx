import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login.'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React JS</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
