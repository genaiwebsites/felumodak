'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';

      // cursor label from data-cursor attribute
      const el = e.target.closest('[data-cursor]');
      if (el) {
        label.textContent = el.dataset.cursor;
        label.classList.add('show');
        label.style.left = e.clientX + 'px';
        label.style.top = e.clientY + 'px';
      } else {
        label.classList.remove('show');
      }

      // ring expand on hoverable
      const hoverable = e.target.closest('a, button, [data-cursor]');
      if (hoverable) {
        ring.classList.add('expanded');
      } else {
        ring.classList.remove('expanded');
      }
    };

    const onMouseLeave = () => {
      ring.classList.add('hidden');
      dot.style.opacity = '0';
    };

    const onMouseEnter = () => {
      ring.classList.remove('hidden');
      dot.style.opacity = '1';
    };

    // Smooth ring follow
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top = ringPos.current.y + 'px';
      raf.current = requestAnimationFrame(animateRing);
    };
    raf.current = requestAnimationFrame(animateRing);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="c-dot" ref={dotRef} id="cdot" />
      <div className="c-ring" ref={ringRef} id="cring" />
      <div className="c-label" ref={labelRef} id="clabel" />
    </>
  );
};

export default CustomCursor;
