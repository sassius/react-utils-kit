import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//removed strict mode as it doesnt give any benefits in production


createRoot(document.getElementById('root')).render(
    <App />
  
)
