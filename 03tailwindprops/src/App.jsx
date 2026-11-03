import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "kangna",
    age: 21
  }

  return (
    <>
      <h2 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h2>

      <Card username="chaiaurcode" btnText="click me"/>
      {/* <Card channel="chai" someObje={myObj}/> */}
      <Card username="kangna" btnText="visit me"/>
      {/* <Card/> */}

      {/* <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img className="size-12 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLspggJu8aH_w86V9R1neP4y_91V18oOXJmoYEz6GWuw&s=10" alt="ChitChat Logo" />
  <div>
    <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div> */}
    </>
  )
}

export default App
