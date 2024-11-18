import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const anotherElement = "| Guru"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google ',
  anotherElement // We can use children in both the methods
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <p>This is done by using the custom react element: {reactElement}</p> 
    <p>We use evaluated expression ('Flower Brackets') for mentioning the variable</p>
  </>
)
