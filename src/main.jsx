import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routing } from './routing/Routing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Routing/>
  </StrictMode>,
)
