import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import CustomerReviews from './components/CustomerReviews';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="max-w-[960px] flex-1">
            <HeroBanner />
            <FeaturedCollections />
            <ProductGrid 
              title="New Arrivals" 
              products={newArrivals} 
            />
            <ProductGrid 
              title="Best Sellers" 
              products={bestSellers} 
            />
            <CustomerReviews />
            <CallToAction />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Product data (would normally come from API/database)
const newArrivals = [
  { 
    name: "Classic Chronograph", 
    description: "A timeless classic for any occasion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFA-AbEetgapypOhkquXC13dP0X6uSSoMjMOCAgixDc91lZmePNyHYNNJMYLb-85FiLVdS4nnU5LQuoozHUsiRKoAvESDgNNGu0e0rQbk95nKcaK1Ds_r3yKDEZpYQUnNCzr-Sh_xi0nDaal7WTsRY_Q2SCqPIFywKy5kMfnGWany2kdSG22dwk_MFVPEENv1eeKUSlpP8r6WNdgIwcxo-3bcmTjrJ490Tx-uliXTIziS0DLmKgS_Pmokd7UNemBH7zKuRUB9-ym0"
  },
  // Add other products similarly
];

const bestSellers = [
  { 
    name: "The Navigator", 
    description: "Perfect for the modern traveler.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV-lp8-N9XKO_EW6qUIsrRUUZGZC8kD9ZuSJaFAQSecU-a8B2GbcnU3Hf93tToMQ9P75pzJky6umgKfZ47yadGxFlZMgmpitVpCbgIzb7Qlt_TTC9lAQMtYSdlzedAbi9Fk24mCnYnDVNGBKbSOuTOmqbrHvx9FZOuwkP2xotcZrWwV5Fpb1a75YATeW4uWLKYk95eWt5JSUjQPvJaXX4z1h4Qp2h6MYoCQuYbC6JDt4KLx1V7-0srHEn4EuJR-fZKQycgo8PX-pU"
  },
  // Add other products similarly
];

export default App;