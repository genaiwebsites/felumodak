'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Plane } from 'lucide-react';

const LOGISTICS_STEPS = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-crimson" />,
    title: "MAP Preservative Technology",
    desc: "Modified Atmosphere Packaging preserves fresh cottage cheese moisture levels by adjusting oxygen in the box, providing a 10-day shelf life without synthetic chemical preservatives."
  },
  {
    icon: <Snowflake className="w-6 h-6 text-brand-gold" />,
    title: "Insulated Cold Chambers",
    desc: "Sweets are packed in double-walled insulated chambers lined with food-grade gel ice packs, maintaining a steady 4°C temperature envelope during transport."
  },
  {
    icon: <Plane className="w-6 h-6 text-brand-saffron" />,
    title: "48hr Express Air Transit",
    desc: "Dispatched via cargo air freight directly to major hubs (Delhi, Mumbai, Bangalore, Pune) ensuring sweets are delivered in fresh, moist condition."
  }
];

const LogisticsSection = () => {
  return (
    <section id="shipping" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#1A1A1A]/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">
              NATIONWIDE COLD-CHAIN D2C
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
              Delivering Freshness, Nationwide
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6 border-l border-brand-gold/25">
            <p className="text-xs text-text-muted font-light leading-relaxed">
              We have re-engineered our dispatch system so that the Saffron Rabri and jaggery-filled Sandesh you receive in Delhi or Mumbai taste exactly like they do at our Rishra counter.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOGISTICS_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-bg-primary p-8 border border-brand-gold/15 flex flex-col space-y-6 hover:border-brand-gold/40 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-bg-secondary flex items-center justify-center border border-brand-gold/10 rounded-xs">
                {step.icon}
              </div>
              <div className="space-y-2.5">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogisticsSection;
