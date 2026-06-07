'use client';

import React from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const { getCartCount, setIsCartOpen } = useCart();

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/70 premium-blur border-b border-brand-gold/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        
        {/* Left Links */}
        <nav className="hidden md:flex items-center space-x-12 text-[10px] font-bold tracking-[0.25em] uppercase text-text-primary/80">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="hover:text-brand-crimson transition-colors duration-300 cursor-pointer relative py-1 group"
          >
            THE SENSES
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-crimson transition-all duration-300 group-hover:w-full" />
          </button>
          <button 
            onClick={() => handleNavClick('timeline')} 
            className="hover:text-brand-crimson transition-colors duration-300 cursor-pointer relative py-1 group"
          >
            LINEAGE
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-crimson transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Center Title Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex flex-col items-center justify-center cursor-pointer select-none text-center"
        >
          <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-[0.12em] text-brand-crimson leading-none">
            FELU MODAK
          </span>
          <div className="flex items-center space-x-2 mt-1.5">
            <span className="w-1.5 h-[1px] bg-brand-gold" />
            <span className="text-[7.5px] tracking-[0.5em] uppercase text-brand-gold font-bold">
              RISHRA • ESTD 1851
            </span>
            <span className="w-1.5 h-[1px] bg-brand-gold" />
          </div>
        </div>

        {/* Right Links & Bag */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-12 text-[10px] font-bold tracking-[0.25em] uppercase text-text-primary/80">
            <button 
              onClick={() => handleNavClick('masterpieces')} 
              className="hover:text-brand-crimson transition-colors duration-300 cursor-pointer relative py-1 group"
            >
              MASTERPIECES
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-crimson transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('craft')} 
              className="hover:text-brand-crimson transition-colors duration-300 cursor-pointer relative py-1 group"
            >
              THE CRAFT
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-crimson transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Cart Icon trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center w-11 h-11 border border-brand-gold/20 hover:border-brand-crimson rounded-full hover:bg-bg-secondary transition-all duration-300 active:scale-95 group cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-4.5 h-4.5 text-text-primary group-hover:text-brand-crimson transition-colors" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-crimson text-bg-primary text-[8px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md border border-bg-primary animate-pulse">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navigation;
