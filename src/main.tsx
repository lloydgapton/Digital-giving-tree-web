import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Button from './components/common/Button'
import HomePage from './pages/Homepage';
import CharityPage from './pages/CharityPage';
import Header from './components/common/header';
import HeroCarousel from './components/common/hero-carousel';
import DonationStats from './components/donation-stats';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <HeroCarousel />
    <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
    <DonationStats />
    </div>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charity" element={<CharityPage />} /> 
    </Routes>
    <Button />
    </BrowserRouter>
  </StrictMode>,
)