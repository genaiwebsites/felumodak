'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function HeroSection({ isLoaded }) {
  useEffect(() => {
    if (!isLoaded) return;

    // ─── HERO ENTRANCE ───
    const tl = gsap.timeline({ delay: 0.05 });
    
    // Reset starting values to prevent flash/flicker
    gsap.set('#eyebrow', { opacity: 0, y: 20 });
    gsap.set('.line-inner', { translateY: '110%' });
    gsap.set('#heroSub', { opacity: 0, y: 20 });
    gsap.set('#heroCtas', { opacity: 0, y: 20 });
    gsap.set('#heroScroll', { opacity: 0 });

    tl.to('#eyebrow', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to('.line-inner', { y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.1 }, '-=0.7')
      .to('#heroSub', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      .to('#heroCtas', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to('#heroScroll', { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.2');

    // ─── HERO MOUSE AURA ───
    const aura = document.getElementById('heroAura');
    const heroEl = document.getElementById('hero');
    if (aura && heroEl) {
      const handleMouseMove = (e) => {
        aura.style.left = e.clientX + 'px';
        aura.style.top = e.clientY + 'px';
      };
      heroEl.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isLoaded]);

  // Handle smooth scroll clicks
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="hero-aura" id="heroAura"></div>

        {/* Botanical SVGs — parallax targets */}
        <div className="hero-bot" aria-hidden="true">
          <svg
            className="bot-l"
            style={{ top: '-8%', left: '-4%', width: 'clamp(200px,28vw,400px)', opacity: 0.07 }}
            viewBox="0 0 320 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160 510 Q148 340 92 210 Q58 135 18 28" stroke="#C4922A" strokeWidth=".9" />
            <path d="M92 210 Q132 190 164 158 Q192 128 198 82" stroke="#C4922A" strokeWidth=".65" />
            <path d="M92 210 Q64 242 44 290 Q28 332 10 392" stroke="#C4922A" strokeWidth=".65" />
            <ellipse
              cx="164"
              cy="158"
              rx="16"
              ry="26"
              transform="rotate(-18 164 158)"
              fill="rgba(196,146,42,.28)"
            />
            <ellipse cx="198" cy="82" rx="12" ry="20" transform="rotate(14 198 82)" fill="rgba(196,146,42,.22)" />
            <ellipse cx="44" cy="290" rx="11" ry="18" transform="rotate(-32 44 290)" fill="rgba(196,146,42,.18)" />
            <circle cx="92" cy="210" r="4" fill="rgba(196,146,42,.4)" />
          </svg>
          
          <svg
            className="bot-r"
            style={{
              bottom: '-6%',
              right: '-4%',
              width: 'clamp(200px,28vw,400px)',
              opacity: 0.07,
              transform: 'scaleX(-1) rotate(22deg)',
            }}
            viewBox="0 0 320 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160 510 Q148 340 92 210 Q58 135 18 28" stroke="#C4922A" strokeWidth=".9" />
            <path d="M92 210 Q132 190 164 158 Q192 128 198 82" stroke="#C4922A" strokeWidth=".65" />
            <path d="M92 210 Q64 242 44 290 Q28 332 10 392" stroke="#C4922A" strokeWidth=".65" />
            <ellipse
              cx="164"
              cy="158"
              rx="16"
              ry="26"
              transform="rotate(-18 164 158)"
              fill="rgba(196,146,42,.24)"
            />
          </svg>

          {/* faint grid lines */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.022 }}
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="300" x2="1440" y2="300" stroke="#C4922A" strokeWidth=".8" />
            <line x1="0" y1="600" x2="1440" y2="600" stroke="#C4922A" strokeWidth=".8" />
            <line x1="480" y1="0" x2="480" y2="900" stroke="#C4922A" strokeWidth=".8" />
            <line x1="960" y1="0" x2="960" y2="900" stroke="#C4922A" strokeWidth=".8" />
          </svg>
        </div>

        <div className="hero-content" id="heroContent">
          <p className="hero-eyebrow" id="eyebrow">
            Rishra, Hooghly &nbsp;·&nbsp; Est. 1860 &nbsp;·&nbsp; West Bengal
          </p>
          <h1 className="hero-title" id="heroTitle">
            <span className="line">
              <span className="line-inner">Five Generations</span>
            </span>
            <span className="line">
              <span className="line-inner">
                of <em>Sacred</em>
              </span>
            </span>
            <span className="line">
              <span className="line-inner">Sweetcraft</span>
            </span>
          </h1>
          <p className="hero-sub" id="heroSub">
            From the kitchens of Rishra to the hearts of Bengal — traditional mishti, crafted with the same devotion since Felu Charan De first lit his hearth.
          </p>
          <div className="hero-ctas" id="heroCtas">
            <div className="mag">
              <a href="#sweets" onClick={(e) => handleScrollTo(e, 'sweets')} className="btn-p">
                <span className="btn-text">Explore Our Sweets</span>
              </a>
            </div>
            <div className="mag">
              <a href="#legacy" onClick={(e) => handleScrollTo(e, 'legacy')} className="btn-g">
                <span className="btn-text">Our 160-Year Story</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll" id="heroScroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          <span className="t-item">Heritage Bengali Sweets</span>
          <span className="t-dot"></span>
          <span className="t-item">Established 1860</span>
          <span className="t-dot"></span>
          <span className="t-item">Five Generations of Craft</span>
          <span className="t-dot"></span>
          <span className="t-item">Rishra, Hooghly</span>
          <span className="t-dot"></span>
          <span className="t-item">Pan India Shipping</span>
          <span className="t-dot"></span>
          <span className="t-item">Traditional Recipes</span>
          <span className="t-dot"></span>
          <span className="t-item">Felu Charan De's Legacy</span>
          <span className="t-dot"></span>
          <span className="t-item">Heritage Bengali Sweets</span>
          <span className="t-dot"></span>
          <span className="t-item">Established 1860</span>
          <span className="t-dot"></span>
          <span className="t-item">Five Generations of Craft</span>
          <span className="t-dot"></span>
          <span className="t-item">Rishra, Hooghly</span>
          <span className="t-dot"></span>
          <span className="t-item">Pan India Shipping</span>
          <span className="t-dot"></span>
          <span className="t-item">Traditional Recipes</span>
          <span className="t-dot"></span>
          <span className="t-item">Felu Charan De's Legacy</span>
        </div>
      </div>
    </>
  );
}
