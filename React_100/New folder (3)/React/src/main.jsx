import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Globalstate from './context/index.jsx'

createRoot(document.getElementById('root')).render(
<Globalstate>
  <App/>
</Globalstate>
)
