import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Summit from './Summit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Summit />
  </StrictMode>,
)
