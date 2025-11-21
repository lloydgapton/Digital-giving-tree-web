import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/common/Button'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className='bg-yellow-500 text-blue-500'>Hello BigMan</h1>
    <Button />
  </StrictMode>,
)
