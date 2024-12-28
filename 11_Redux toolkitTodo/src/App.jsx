import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {AddTodo} from './components/AddTodo'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <h1>Welcom to React Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
