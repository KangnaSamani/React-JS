import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setcounter] = useState(15)

  // let counter = 15

  const addValue = () => {
     if (counter < 50){
    // console.log("value added", Math.random())
    console.log("clicked", counter);
    setcounter(counter + 1);// if we write only one time it will increase by 1 means 15 will be 16

    // setcounter(counter + 1);
    // setcounter(counter + 1);
    // setcounter(counter + 1);
    // setcounter(counter + 1);// and if we write more than one time then also it will increase by 1 means 15 will be 16 and not 19

    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)// this will directly increase the counter by 4 and 15 then 19 and so on
     }
  }

  const removeValue = () => {
     if (counter > 0){
    setcounter(counter - 1);
     }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
