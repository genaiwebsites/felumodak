'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeritageSection({ isLoaded }) {
  useEffect(() => {
    if (!isLoaded) return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Timeline items entrance
    const tlItems = document.querySelectorAll('.gs-tl');
    tlItems.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.08
        }
      );
    });

    // Legacy frame parallax
    const frame = document.getElementById('legacyFrame');
    if (frame) {
      gsap.to(frame, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: '.legacy-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    }

    // Float stat scale-in
    const floatStat = document.getElementById('floatStat');
    if (floatStat) {
      gsap.fromTo(floatStat,
        { opacity: 0, scale: 0.85, x: 20 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '#floatStat',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Counter
    const counterEl = document.getElementById('counterN');
    if (counterEl) {
      ScrollTrigger.create({
        trigger: '#counterN',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo({ n: 0 }, { n: 160 }, {
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: function () {
              counterEl.textContent = Math.round(this.targets()[0].n) + '+';
            }
          });
        }
      });
    }

    // Stalwart names
    const sNames = document.querySelectorAll('.s-name');
    if (sNames.length > 0) {
      gsap.fromTo(sNames,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.stalwarts',
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Emblem rotation (subtle, continuous)
    const emblemRing = document.querySelector('.emblem-ring');
    let rotationAnimation;
    if (emblemRing) {
      rotationAnimation = gsap.to(emblemRing, {
        rotation: 360,
        duration: 40,
        ease: 'none',
        repeat: -1
      });
    }

    // Ghost year parallax
    const yearGhost = document.querySelector('.year-ghost');
    if (yearGhost) {
      gsap.to(yearGhost, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.legacy-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    }

    // Section reveals
    const fades = document.querySelectorAll('.legacy-section .gs-fade');
    fades.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const titles = document.querySelectorAll('.legacy-section .gs-title');
    titles.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      if (rotationAnimation) rotationAnimation.kill();
    };
  }, [isLoaded]);

  return (
    <>
      {/* LEGACY */}
      <section className="legacy-section" id="legacy">
        <div className="legacy-grid">
          <div className="legacy-visual">
            <div className="legacy-frame" id="legacyFrame">
              <div className="frame-emblem">
                <div className="emblem-ring">
                  <div className="emblem-inner">
                    ফেলু মোদক<br />
                    <span style={{ fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(196,146,42,.65)' }}>
                      FELUMODAK
                    </span>
                  </div>
                </div>
              </div>
              
              <svg
                style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', opacity: 0.1, width: '90px' }}
                viewBox="0 0 90 150"
                fill="none"
              >
                <path d="M45 145 Q42 90 26 56 Q16 34 6 8" stroke="#C4922A" strokeWidth=".9" />
                <path d="M26 56 Q46 46 54 30" stroke="#C4922A" strokeWidth=".7" />
                <path d="M26 56 Q14 68 6 90" stroke="#C4922A" strokeWidth=".7" />
                <ellipse cx="54" cy="30" rx="8" ry="13" transform="rotate(10 54 30)" fill="rgba(196,146,42,.4)" />
              </svg>
              <div className="year-ghost">1860</div>
            </div>
            
            <div className="float-stat" id="floatStat">
              <div className="n" id="counterN">0</div>
              <div className="l">Years of Sweetcraft</div>
            </div>
          </div>

          <div className="legacy-text">
            <div className="section-tag gs-fade">Our Legacy</div>
            <h2 className="section-title gs-title">
              A <em>Sweet Story</em><br />Across Five Generations
            </h2>
            <p className="section-body gs-fade">
              About 160 years ago, Felu Charan De — scion of the Modak family, a lineage steeped in the art of sweetmaking — founded his enterprise in Rishra, on the banks of the Hooghly. With an innovative spirit and deep understanding of the Bengali palate, he invented scores of sweetmeats, constantly refining until each recipe achieved perfection — never sacrificing quality for expediency.
            </p>
            <p className="section-body gs-fade">
              Bengal's contribution to sweetcraft has assumed legendary dimensions — patronised by stalwarts like Rabindranath Tagore, Gandhi, and Subhas Chandra Bose. This devotion was Felu's true inheritance to future generations.
            </p>

            <div className="tl" id="timeline">
              <div className="tl-item gs-tl">
                <div className="tl-yr">c. 1860</div>
                <div>
                  <div className="tl-name">Felu Charan De</div>
                  <div className="tl-desc">
                    Founded the enterprise in southern Rishra. Invented original recipes through "sheer honesty and dexterity."
                  </div>
                </div>
              </div>
              <div className="tl-item gs-tl">
                <div className="tl-yr">Gen. II</div>
                <div>
                  <div className="tl-name">Nandalal Moira</div>
                  <div className="tl-desc">
                    Took the operation to new heights — enriching taste and purity until the fame of Felumodak spread far beyond Rishra.
                  </div>
                </div>
              </div>
              <div className="tl-item gs-tl">
                <div className="tl-yr">Gen. III</div>
                <div>
                  <div className="tl-name">Madhusudan De</div>
                  <div className="tl-desc">
                    Carried tradition forward, establishing the family's presence at the junction of Srimani Lane and G.T. Road.
                  </div>
                </div>
              </div>
              <div className="tl-item gs-tl">
                <div className="tl-yr">Present</div>
                <div>
                  <div className="tl-name">Baidyanath, Shankar, Amarnath & Amitava De</div>
                  <div className="tl-desc">
                    Consolidating the brand with modern technology — reaching every nook of southern Bengal and beyond.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STALWARTS */}
      <div className="stalwarts">
        <div className="stalwarts-inner">
          <div className="s-label">Cherished by the great minds of India</div>
          <div className="s-divider"></div>
          <div className="s-names">
            <span className="s-name">Rabindranath Tagore</span>
            <span className="s-name">Mahatma Gandhi</span>
            <span className="s-name">Subhas Chandra Bose</span>
            <span className="s-name">& many more luminaries</span>
          </div>
        </div>
      </div>
    </>
  );
}
