'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartProvider } from '../context/CartContext';
import Loader from '../components/ui/Loader';
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    // ─── TICKER DIRECTION REVERSE ───
    const ticker = document.querySelector('.ticker');
    if (ticker && ticker.parentElement) {
      const parent = ticker.parentElement;
      const onMouseEnter = () => {
        ticker.style.animationDirection = 'reverse';
      };
      const onMouseLeave = () => {
        ticker.style.animationDirection = 'normal';
      };
      parent.addEventListener('mouseenter', onMouseEnter);
      parent.addEventListener('mouseleave', onMouseLeave);
    }

    // ─── MAGNETIC BUTTONS ───
    if (!isMobile) {
      document.querySelectorAll('.mag').forEach((wrap) => {
        const btn = wrap.querySelector('.btn-p, .btn-g');
        if (!btn) return;
        
        const onMouseMove = (e) => {
          const r = wrap.getBoundingClientRect();
          const dx = (e.clientX - r.left - r.width / 2) * 0.32;
          const dy = (e.clientY - r.top - r.height / 2) * 0.32;
          gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' });
        };
        
        const onMouseLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, .6)' });
        };

        wrap.addEventListener('mousemove', onMouseMove);
        wrap.addEventListener('mouseleave', onMouseLeave);
        
        wrap._cleanupMag = () => {
          wrap.removeEventListener('mousemove', onMouseMove);
          wrap.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    }

    // ─── SCROLL PROGRESS TINT on hero-bg ───
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      gsap.to(heroBg, {
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // ─── FOOTER BRAND REVEAL ───
    const footerBrand = document.querySelector('.footer-brand');
    if (footerBrand) {
      gsap.fromTo(
        footerBrand,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: 'footer',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const footerColumns = document.querySelectorAll('.footer-inner > div:not(:first-child)');
    if (footerColumns.length > 0) {
      gsap.fromTo(
        footerColumns,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: 'footer',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // ─── LEGACY frame border draw-in ───
    const legacyFrame = document.querySelector('.legacy-frame');
    if (legacyFrame) {
      gsap.fromTo(
        legacyFrame,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.legacy-frame',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      document.querySelectorAll('.mag').forEach((wrap) => {
        if (wrap._cleanupMag) wrap._cleanupMag();
      });
    };
  }, [isLoaded]);

  return (
    <CartProvider>
      <div className="selection:bg-[#C4922A] selection:text-[#120D06] smooth-scroll relative overflow-x-hidden min-h-screen">
        {/* Loading count-up overlay */}
        <Loader onComplete={() => setIsLoaded(true)} />

        {/* Dynamic Interactive Cursor overlay */}
        {isLoaded && <CustomCursor />}

        {/* Sticky Header Navbar */}
        {isLoaded && <Navbar />}

        {/* Editorial Scroll Section Layouts */}
        <main className="relative z-10">
          <HeroSection isLoaded={isLoaded} />
          <HeritageSection isLoaded={isLoaded} />
          <MasterpiecesSection isLoaded={isLoaded} />
          <CraftSection isLoaded={isLoaded} />
          <ContactSection isLoaded={isLoaded} />
        </main>

        {/* Editorial Footer with scroll text */}
        {isLoaded && <Footer />}

        {/* Dynamic D2C Crate Cart Drawer overlay */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
