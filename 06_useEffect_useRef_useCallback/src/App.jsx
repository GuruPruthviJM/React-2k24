 import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength]=useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const copyPasswordToClickboard = useCallback(()=>{
    // The main use of useRef is to mention what as been copied to the clipboard
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  // The main Purpose of using of call back was to store the function in cache so it can be executed at optimized method
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*(){}:<>?/.,;~"
    }

    for(let i=0;i<=length;i++){
      let char=str.charAt(Math.floor(Math.random()*str.length+1))
      pass+=char
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const passRef = useRef(null)
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' readOnly placeholder='Password' ref={passRef}/>

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5' onClick={copyPasswordToClickboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='numberInput' onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='charInput' onChange={()=>{
              setCharAllowed((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
