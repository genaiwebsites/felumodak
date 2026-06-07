'use client';

import React from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import HeroSection from '../components/sections/HeroSection';
import HeritageSection from '../components/sections/HeritageSection';
import MasterpiecesSection from '../components/sections/MasterpiecesSection';
import CraftSection from '../components/sections/CraftSection';
import ContactSection from '../components/sections/ContactSection';
import CartDrawer from '../components/checkout/CartDrawer';

export default function Home() {
  return (
    <CartProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <HeritageSection />
        <MasterpiecesSection />
        <CraftSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
