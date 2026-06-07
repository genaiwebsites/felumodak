'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection({ isLoaded }) {
  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    // Fade-in timelines
    const fades = document.querySelectorAll('.contact-section .gs-fade');
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

    const titles = document.querySelectorAll('.contact-section .gs-title');
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

    // Contact details stagger
    gsap.fromTo('.cd',
      { opacity: 0, x: -16 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-inner',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Map box zoom entrance
    const mapBox = document.querySelector('.map-box');
    if (mapBox) {
      gsap.fromTo(mapBox,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.map-box',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, [isLoaded]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div>
          <div className="section-tag dark gs-fade">Find Us</div>
          <h2 className="section-title dark gs-title">
            Visit the<br /><em>Source</em> Itself
          </h2>
          <p className="section-body dark gs-fade">
            Our shop in Rishra has stood for over 160 years. Come for the mishti, stay for the story.
          </p>
          <div className="cd gs-fade">
            <div className="cd-label">Address</div>
            <div className="cd-value">
              78 G. T. Road, P.O.: Rishra<br />Dist.: Hooghly, West Bengal
            </div>
          </div>
          <div className="cd gs-fade">
            <div className="cd-label">Telephone</div>
            <div className="cd-value">
              <a href="tel:03326722094" className="hover:text-[#8B3A1A] transition-colors">
                033-2672 2094
              </a>
            </div>
          </div>
          <div className="cd gs-fade">
            <div className="cd-label">Email</div>
            <div className="cd-value">
              <a href="mailto:sweets@felumodak.com" className="hover:text-[#8B3A1A] transition-colors">
                sweets@felumodak.com
              </a>
            </div>
          </div>
          <div className="cd gs-fade">
            <div className="cd-label">Fax</div>
            <div className="cd-value">033-2848 1479</div>
          </div>
          <div style={{ marginTop: '2.5rem' }} className="gs-fade">
            <div className="mag">
              <a href="https://felumodak.com/enquiry.php" target="_blank" rel="noopener noreferrer" className="btn-p">
                <span className="btn-text">Send an Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        <div className="map-box gs-fade">
          <svg className="map-grid-svg" viewBox="0 0 400 400" fill="none">
            <line x1="0" y1="50" x2="400" y2="50" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="250" x2="400" y2="250" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="350" x2="400" y2="350" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="50" y1="0" x2="50" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="100" y1="0" x2="100" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="150" y1="0" x2="150" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="250" y1="0" x2="250" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="300" y1="0" x2="300" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="350" y1="0" x2="350" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
          </svg>
          <div className="map-pin">
            <div className="map-pin-dot"></div>
          </div>
          <div className="map-lbl">Rishra, Hooghly</div>
          <p className="map-sub">78 G.T. Road, at the junction of Srimani Lane and N.C. Pakrashi Lane</p>
          <div className="mag" style={{ marginTop: '.8rem' }}>
            <a
              href="https://maps.google.com/?q=Felumodak+Rishra+Hooghly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-g"
              style={{ borderColor: 'rgba(18, 13, 6, .18)', color: 'var(--ink)' }}
            >
              <span className="btn-text">Get Directions ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
