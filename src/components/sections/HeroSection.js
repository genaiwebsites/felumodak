'use client';

import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);
  const scrollRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    // Staggered reveal on mount
    const delay = (el, ms) => {
      if (!el) return;
      setTimeout(() => el.classList.add('anim'), ms);
    };
    delay(eyebrowRef.current, 200);
    delay(line1Ref.current, 500);
    delay(line2Ref.current, 650);
    delay(line3Ref.current, 800);
    delay(subRef.current, 900);
    delay(ctasRef.current, 1050);
    delay(scrollRef.current, 1400);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero || !auraRef.current) return;
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      auraRef.current.style.left = (e.clientX - rect.left) + 'px';
      auraRef.current.style.top = (e.clientY - rect.top) + 'px';
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative">
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-aura" ref={auraRef} id="heroAura" />

        {/* Botanical SVGs */}
        <div className="hero-bot" aria-hidden="true">
          <svg
            style={{ top: '-8%', left: '-4%', width: 'clamp(200px,28vw,400px)', opacity: '.07' }}
            viewBox="0 0 320 520" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160 510 Q148 340 92 210 Q58 135 18 28" stroke="#C4922A" strokeWidth=".9" />
            <path d="M92 210 Q132 190 164 158 Q192 128 198 82" stroke="#C4922A" strokeWidth=".65" />
            <path d="M92 210 Q64 242 44 290 Q28 332 10 392" stroke="#C4922A" strokeWidth=".65" />
            <ellipse cx="164" cy="158" rx="16" ry="26" transform="rotate(-18 164 158)" fill="rgba(196,146,42,.28)" />
            <ellipse cx="198" cy="82" rx="12" ry="20" transform="rotate(14 198 82)" fill="rgba(196,146,42,.22)" />
            <ellipse cx="44" cy="290" rx="11" ry="18" transform="rotate(-32 44 290)" fill="rgba(196,146,42,.18)" />
            <circle cx="92" cy="210" r="4" fill="rgba(196,146,42,.4)" />
          </svg>
          <svg
            style={{ bottom: '-6%', right: '-4%', width: 'clamp(200px,28vw,400px)', opacity: '.07', transform: 'scaleX(-1) rotate(22deg)' }}
            viewBox="0 0 320 520" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160 510 Q148 340 92 210 Q58 135 18 28" stroke="#C4922A" strokeWidth=".9" />
            <path d="M92 210 Q132 190 164 158 Q192 128 198 82" stroke="#C4922A" strokeWidth=".65" />
            <path d="M92 210 Q64 242 44 290 Q28 332 10 392" stroke="#C4922A" strokeWidth=".65" />
            <ellipse cx="164" cy="158" rx="16" ry="26" transform="rotate(-18 164 158)" fill="rgba(196,146,42,.24)" />
          </svg>
          {/* faint grid lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: '.022' }} viewBox="0 0 1440 900" preserveAspectRatio="none">
            <line x1="0" y1="300" x2="1440" y2="300" stroke="#C4922A" strokeWidth=".8" />
            <line x1="0" y1="600" x2="1440" y2="600" stroke="#C4922A" strokeWidth=".8" />
            <line x1="480" y1="0" x2="480" y2="900" stroke="#C4922A" strokeWidth=".8" />
            <line x1="960" y1="0" x2="960" y2="900" stroke="#C4922A" strokeWidth=".8" />
          </svg>
        </div>

        <div className="hero-content" id="heroContent">
          <p className="hero-eyebrow" ref={eyebrowRef} id="eyebrow">
            Rishra, Hooghly &nbsp;·&nbsp; Est. 1860 &nbsp;·&nbsp; West Bengal
          </p>
          <h1 className="hero-title" id="heroTitle">
            <span className="line"><span className="line-inner" ref={line1Ref}>Five Generations</span></span>
            <span className="line"><span className="line-inner" ref={line2Ref}>of <em>Sacred</em></span></span>
            <span className="line"><span className="line-inner" ref={line3Ref}>Sweetcraft</span></span>
          </h1>
          <p className="hero-sub" ref={subRef} id="heroSub">
            From the kitchens of Rishra to the hearts of Bengal — traditional mishti,
            crafted with the same devotion since Felu Charan De first lit his hearth.
          </p>
          <div className="hero-ctas" ref={ctasRef} id="heroCtas">
            <div className="mag">
              <a href="#sweets" onClick={(e) => handleScrollToSection(e, 'sweets')} className="btn-p">
                <span className="btn-text">Explore Our Sweets</span>
              </a>
            </div>
            <div className="mag">
              <a href="#legacy" onClick={(e) => handleScrollToSection(e, 'legacy')} className="btn-g">
                <span className="btn-text">Our 160-Year Story</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll" ref={scrollRef} id="heroScroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          <span className="t-item">Heritage Bengali Sweets</span><span className="t-dot" />
          <span className="t-item">Established 1860</span><span className="t-dot" />
          <span className="t-item">Five Generations of Craft</span><span className="t-dot" />
          <span className="t-item">Rishra, Hooghly</span><span className="t-dot" />
          <span className="t-item">Pan India Shipping</span><span className="t-dot" />
          <span className="t-item">Traditional Recipes</span><span className="t-dot" />
          <span className="t-item">Felu Charan De's Legacy</span><span className="t-dot" />
          <span className="t-item">Heritage Bengali Sweets</span><span className="t-dot" />
          <span className="t-item">Established 1860</span><span className="t-dot" />
          <span className="t-item">Five Generations of Craft</span><span className="t-dot" />
          <span className="t-item">Rishra, Hooghly</span><span className="t-dot" />
          <span className="t-item">Pan India Shipping</span><span className="t-dot" />
          <span className="t-item">Traditional Recipes</span><span className="t-dot" />
          <span className="t-item">Felu Charan De's Legacy</span><span className="t-dot" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
