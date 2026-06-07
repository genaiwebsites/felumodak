'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TopographicBackground = () => {
  const { scrollY } = useScroll();
  const yShift = useTransform(scrollY, [0, 3000], [0, -200]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[0] opacity-[0.045] text-[#C4922A]" 
      style={{ y: yShift }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'url(#noiseFilter)' }}>
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(3)">
            <path d="M 0 100 Q 50 50 100 100 T 200 100" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 0 130 Q 50 80 100 130 T 200 130" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 0 160 Q 50 110 100 160 T 200 160" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 0 70 Q 50 20 100 70 T 200 70" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
    </motion.div>
  );
};

export default TopographicBackground;

