'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '../../context/CartContext';

export default function CraftSection({ isLoaded }) {
  const { setIsCartOpen } = useCart();

  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    // Feature items stagger
    gsap.fromTo('.gs-fi',
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: {
          each: 0.1,
          from: 'start',
          grid: 'auto'
        },
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Spotlight mouse tracking
    const isMobile = window.innerWidth < 768;
    const items = document.querySelectorAll('.fi');

    if (!isMobile) {
      items.forEach(fi => {
        const handleMouseMove = (e) => {
          const r = fi.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          fi.style.setProperty('--sx', x + 'px');
          fi.style.setProperty('--sy', y + 'px');
        };
        fi.addEventListener('mousemove', handleMouseMove);
        fi._cleanupSpotlight = () => {
          fi.removeEventListener('mousemove', handleMouseMove);
        };
      });
    }

    // Scroll reveals
    const fades = document.querySelectorAll('.features-section .gs-fade, .order-cta .gs-fade');
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

    const titles = document.querySelectorAll('.features-section .gs-title, .order-cta .gs-title');
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
      items.forEach(fi => {
        if (fi._cleanupSpotlight) fi._cleanupSpotlight();
      });
    };
  }, [isLoaded]);

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
      {/* PILLARS */}
      <section className="features-section" id="heritage">
        <div className="features-wrap">
          <div className="features-header">
            <div className="section-tag gs-fade">Why Felumodak</div>
            <h2 className="section-title gs-title">
              The <em>Pillars</em> of<br />Our Craft
            </h2>
          </div>
          <div className="features-grid">
            <div className="fi gs-fi">
              <div className="fi-num">I</div>
              <div className="fi-title">Unyielding Purity</div>
              <p className="fi-body">
                Felu Charan's cardinal rule: never sacrifice quality. Every batch uses the finest chhana, pure khoya, and natural ingredients — the same standard held across five generations.
              </p>
            </div>
            <div className="fi gs-fi">
              <div className="fi-num">II</div>
              <div className="fi-title">Living Recipes</div>
              <p className="fi-body">
                Recipes are not frozen in time — each generation has refined and innovated, responding to the palate of the age while preserving the soul of each preparation.
              </p>
            </div>
            <div className="fi gs-fi">
              <div className="fi-num">III</div>
              <div className="fi-title">The Bengal Renaissance</div>
              <p className="fi-body">
                These sweets emerged in the same cultural crucible as the Indian Renaissance — patronised by stalwarts, cherished at celebrations, embedded in the memory of riverine Bengal.
              </p>
            </div>
            <div className="fi gs-fi">
              <div className="fi-num">IV</div>
              <div className="fi-title">Generational Mastery</div>
              <p className="fi-body">
                Five generations — Felu Charan, Nandalal, Madhusudan, and now Baidyanath, Shankar, Amarnath and Amitava — each carrying forward a craft refined over 160 years.
              </p>
            </div>
            <div className="fi gs-fi">
              <div className="fi-num">V</div>
              <div className="fi-title">A Place of Pilgrimage</div>
              <p className="fi-body">
                The junction of Srimani Lane, G.T. Road and N.C. Pakrashi Lane in Rishra is not merely a shop — it is a destination for those who understand what authentic mishti truly tastes like.
              </p>
            </div>
            <div className="fi gs-fi">
              <div className="fi-num">VI</div>
              <div className="fi-title">Shipped Across India</div>
              <p className="fi-body">
                Felumodak's flavours now reach every corner of India. Order online and receive the taste of Rishra — freshly packed, carefully shipped, joyfully received.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="order-cta">
        <div className="section-tag gs-fade" style={{ justifyContent: 'center' }}>Order Now</div>
        <h2 className="section-title gs-title">
          Taste the <em>Heritage</em><br />From Wherever You Are
        </h2>
        <p className="gs-fade">
          Felumodak delivers across India. Send a box of traditional Bengal mishti to someone you love — or simply to yourself.
        </p>
        <div className="hero-ctas gs-fade" style={{ marginTop: 0 }}>
          <div className="mag">
            <a
              href="#sweets"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
              className="btn-p"
            >
              <span className="btn-text">Shop Online ↗</span>
            </a>
          </div>
          <div className="mag">
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="btn-g">
              <span className="btn-text">Visit Our Store</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
