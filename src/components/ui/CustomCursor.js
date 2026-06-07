'use client';

import React, { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cdot');
    const ring = document.getElementById('cring');
    const lbl = document.getElementById('clabel');
    
    if (!dot || !ring || !lbl) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      lbl.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    document.body.style.cursor = 'none';

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let lx = 0, ly = 0;
    let isMouseActive = false;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!isMouseActive) {
        isMouseActive = true;
        // Instantly snap to first position to avoid jumping from (0,0)
        rx = lx = mx;
        ry = ly = my;
      }
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    window.addEventListener('mousemove', onMouseMove);

    let rafId;
    const rafLoop = () => {
      if (isMouseActive) {
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        lx += (mx - lx) * 0.1;
        ly += (my - ly) * 0.1;
        
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        lbl.style.left = lx + 'px';
        lbl.style.top = ly + 'px';
      }
      rafId = requestAnimationFrame(rafLoop);
    };

    rafId = requestAnimationFrame(rafLoop);

    // Event delegation for mouseover/mouseout
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactive = target.closest('a, button, .mag, .fi, .tl-item, .s-name, [data-cursor]');
      if (interactive) {
        ring.classList.add('expanded');
        if (interactive.dataset && interactive.dataset.cursor) {
          lbl.textContent = interactive.dataset.cursor;
          lbl.classList.add('show');
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactive = target.closest('a, button, .mag, .fi, .tl-item, .s-name, [data-cursor]');
      if (interactive) {
        ring.classList.remove('expanded');
        lbl.classList.remove('show');
      }
    };

    const onMouseLeaveDoc = () => {
      ring.classList.add('hidden');
      dot.style.opacity = '0';
    };

    const onMouseEnterDoc = () => {
      ring.classList.remove('hidden');
      dot.style.opacity = '1';
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    document.addEventListener('mouseenter', onMouseEnterDoc);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div className="c-dot" id="cdot"></div>
      <div className="c-ring" id="cring"></div>
      <div className="c-label" id="clabel"></div>
    </>
  );
}
