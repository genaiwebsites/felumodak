'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setIsCartOpen, getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.classList.remove('nav-open');
    
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" onClick={(e) => handleLinkClick(e, 'hero')} className="nav-logo">
          Felu<span>Modak</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#legacy" onClick={(e) => handleLinkClick(e, 'legacy')}>
              Our Story
            </a>
          </li>
          <li>
            <a href="#sweets" onClick={(e) => handleLinkClick(e, 'sweets')}>
              Sweets
            </a>
          </li>
          <li>
            <a href="#heritage" onClick={(e) => handleLinkClick(e, 'heritage')}>
              Heritage
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              Visit Us
            </a>
          </li>
          <li>
            <a
              href="#sweets"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
              data-cursor="Shop"
            >
              Order Online {cartCount > 0 ? `(${cartCount})` : ''}
            </a>
          </li>
        </ul>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          id="ham"
          aria-label="Menu"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobileNav">
        <a href="#legacy" onClick={(e) => handleLinkClick(e, 'legacy')} className="mob-link">
          Our Story
        </a>
        <a href="#sweets" onClick={(e) => handleLinkClick(e, 'sweets')} className="mob-link">
          Sweets
        </a>
        <a href="#heritage" onClick={(e) => handleLinkClick(e, 'heritage')} className="mob-link">
          Heritage
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="mob-link">
          Visit Us
        </a>
        <a
          href="#sweets"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.body.classList.remove('nav-open');
            setIsCartOpen(true);
          }}
          className="mob-link"
        >
          Order Online {cartCount > 0 ? `(${cartCount})` : ''}
        </a>
      </nav>
    </>
  );
}
