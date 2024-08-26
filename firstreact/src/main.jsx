import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { App } from "./App.jsx"

const SpecialButton = ({ name }) => {
  return (
    <button>
      {name}
    </button>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,

)
