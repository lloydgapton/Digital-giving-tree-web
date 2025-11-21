import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Button from './components/common/Button'
import HomePage from './pages/Homepage';
import CharityPage from './pages/CharityPage';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charity" element={<CharityPage />} /> 
    </Routes>
    <Button />
    </BrowserRouter>
  </StrictMode>,
)