import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Button } from './components/common/Button';
import HomePage from './pages/Homepage';
import CharityPage from './pages/CharityPage';
import Header from './components/common/header';
import HeroCarousel from './components/common/hero-carousel';
import DonationStats from './components/donation-stats';
import FeaturedWish from './components/featured-wish';
import { charities, type Wish, type Charity } from './lib/data';



const findFeaturedWish = () => {
  let featuredWish: Wish | null = null;
  let featuredCharity: Charity | null = null;
  let highestProgress = -1;
  charities.forEach((charity) => {
    charity.wishes.forEach((wish) => {
      const progress = (wish.quantityDonated / wish.quantityNeeded) * 100;
      if (progress < 100 && progress > highestProgress) {
        highestProgress = progress;
        featuredWish = wish;
        featuredCharity = charity;
      }
    });
  });
  return { wish: featuredWish, charity: featuredCharity };
};

const { wish, charity } = findFeaturedWish();


import { Toaster } from './components/common/toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Header />
      <HeroCarousel />
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <DonationStats />
        {wish && charity && (
          <FeaturedWish wish={wish} charity={charity}/>
        )}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charity" element={<CharityPage />} />
      </Routes>
      <Button />
    </BrowserRouter>
  </StrictMode>
);