import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <p>This is done by using the custom react element: {reactElement}</p>
  </>
)
