'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Animate logo words in
    gsap.to(['#lw1', '#lw2'], {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.1,
    });

    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
      }
      setPercent(Math.floor(p));

      const bar = document.getElementById('lbar');
      if (bar) {
        bar.style.transform = `scaleX(${p / 100})`;
      }

      if (p === 100) {
        setTimeout(() => {
          const loader = document.getElementById('loader');
          if (loader) {
            gsap.to(loader, {
              opacity: 0,
              duration: 0.7,
              ease: 'power2.inOut',
              onComplete: () => {
                loader.style.display = 'none';
                onComplete();
              },
            });
          } else {
            onComplete();
          }
        }, 180);
      }
    }, 60);

    return () => clearInterval(iv);
  }, [onComplete]);

  return (
    <div id="loader">
      <div className="loader-logo">
        <span className="loader-word" id="lw1" style={{ display: 'inline-block', transform: 'translateY(100%)', opacity: 0 }}>
          Felu
        </span>
        <span className="loader-word" id="lw2" style={{ display: 'inline-block', transform: 'translateY(100%)', opacity: 0, color: 'var(--gold)' }}>
          Modak
        </span>
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" id="lbar" style={{ transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.04s linear' }}></div>
      </div>
      <div className="loader-num" id="lnum">
        {percent}
      </div>
    </div>
  );
}
