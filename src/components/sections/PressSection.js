'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PRESS_DATA = [
  {
    source: "The Statesman",
    headline: "175 Years of Confectionery Legacy Powered by Next-Gen Hygienic Automation.",
    date: "November 2024",
    quote: "Felu Modak has successfully achieved what few heritage brands manage: marrying centuries-old hand-molded sweet recipes with zero-touch automation."
  },
  {
    source: "Anandabazar Patrika",
    headline: "The Custodians of Hooghly's Sweet Renaissance.",
    date: "October 2024",
    quote: "From zamindars to modern D2C customers, Felu Modak remains Rishra's landmark sweetmaker, retaining their iconic jaggery cores."
  },
  {
    source: "Zee Bangla News",
    headline: "From Rishra to London: How Felu Modak Redefined Sweet Delivery.",
    date: "January 2025",
    quote: "Through state-of-the-art cold-chain logistics, Bengalis living in the UK and USA are now savoring fresh Saffron Rabri and Kancha Golla."
  }
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#1A1A1A]/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold">
            HERITAGE & RECOGNITION
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
            In The Press
          </h2>
          <div className="w-12 h-[1px] bg-brand-crimson mx-auto mt-4" />
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_DATA.map((item, idx) => (
            <motion.div
              key={item.source}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-bg-primary p-8 border border-brand-gold/15 flex flex-col justify-between space-y-6 hover:border-[#800020]/40 transition-colors duration-300 shadow-sm relative"
            >
              <div className="absolute inset-1.5 border border-brand-gold/5 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">
                    {item.source}
                  </span>
                  <span className="text-[9px] text-[#1A1A1A]/40 font-sans tracking-wider">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] leading-snug">
                  "{item.headline}"
                </h3>
                <p className="text-xs text-text-muted font-light leading-relaxed italic pt-2">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold/10 text-[8.5px] font-bold tracking-widest text-brand-gold uppercase">
                Newspaper Feature
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PressSection;
