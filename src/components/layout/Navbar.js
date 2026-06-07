'use client';

import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav id="nav" className={`main-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="nav-logo">
          Felu<span>Modak</span>
        </a>
        <ul className="nav-links">
          <li><a href="#legacy" onClick={(e) => handleNavClick(e, 'legacy')}>Our Story</a></li>
          <li><a href="#sweets" onClick={(e) => handleNavClick(e, 'sweets')}>Sweets</a></li>
          <li><a href="#heritage" onClick={(e) => handleNavClick(e, 'heritage')}>Heritage</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Visit Us</a></li>
          <li><a href="https://felumodak.com/online/" target="_blank" rel="noopener noreferrer">Order Online</a></li>
        </ul>
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          id="ham"
          aria-label="Menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
        <a href="#legacy" onClick={(e) => handleNavClick(e, 'legacy')}>Our Story</a>
        <a href="#sweets" onClick={(e) => handleNavClick(e, 'sweets')}>Sweets</a>
        <a href="#heritage" onClick={(e) => handleNavClick(e, 'heritage')}>Heritage</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Visit Us</a>
        <a href="https://felumodak.com/online/" target="_blank" rel="noopener noreferrer">Order Online</a>
      </nav>
    </>
  );
};

export default Navbar;
