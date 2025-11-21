import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Button from './components/common/Button'
import Homepage from './pages/Homepage';
import CharityPage from './pages/CharityPage';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Button />
      <Homepage />
      <CharityPage />
    </BrowserRouter>
  </StrictMode>,
)

