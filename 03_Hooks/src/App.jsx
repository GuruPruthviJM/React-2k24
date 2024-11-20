import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = ()=>{
    if(counter<20)
      /* This is the interview question */
      // if we use this multiple setCounter then also it is going to update by one value such as 15 -> 16
      // because the fiber algorithm is going to update the UI in batch execution format so it will not update by 4 values
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)

      // If we need to update four times at a single click then we need to use this method
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
  }

  const removeValue = ()=>{
    if(counter>0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Couter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
