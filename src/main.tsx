import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Button from './components/common/Button'
import HomePage from './pages/Homepage';
import CharityPage from './pages/CharityPage';
import Header from './components/common/header';
import HeroCarousel from './components/common/hero-carousel';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <HeroCarousel />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charity" element={<CharityPage />} /> 
    </Routes>
    <Button />
    </BrowserRouter>
  </StrictMode>,
)