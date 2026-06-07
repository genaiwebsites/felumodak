'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-40 pb-20 px-8 md:px-16 bg-bg-primary overflow-hidden"
    >
      {/* Background visual grain or seal */}
      <div className="absolute top-24 right-[-100px] w-[500px] h-[500px] rounded-full border border-brand-gold/5 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[450px] h-[450px] rounded-full border border-dashed border-brand-gold/5 flex items-center justify-center">
          <div className="text-[9px] font-bold uppercase tracking-[0.6em] text-brand-gold/15 rotate-12">
            FELU Charan De • Rishra Heritage Confectionery • Est. 1851
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-1 my-auto relative z-10">
        
        {/* Left Column: Premium Editorial Brand Statement */}
        <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-10">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-[1px] bg-brand-gold/60" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-gold">
              A 175-YEAR OLD CULINARY TRADITION
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-text-primary leading-[0.95]">
            Carving the <br />
            <span className="text-brand-crimson font-light italic pr-2">Liquid Gold</span>
          </h1>

          <p className="text-sm md:text-base text-text-muted font-light leading-relaxed max-w-xl">
            Savor the culinary artifacts of <strong>Felu Modak</strong>. Experience the soft, granular touch of hand-kneaded chhana (cottage cheese) housing a molten reservoir of aromatic winter date-palm jaggery. Designed in 1851 for royalties, now delivered fresh nationally.
          </p>

          {/* Historical Endorsement Box */}
          <div className="border-l border-brand-gold/30 pl-6 space-y-2 max-w-md">
            <p className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-brand-gold">
              HISTORICAL PATRONAGE
            </p>
            <p className="text-xs text-text-muted font-light italic leading-relaxed">
              "Praising the authentic flavor of Bengal's confectionery craft..." 
              <span className="block mt-1 not-italic font-semibold text-text-primary text-[10px] tracking-wider uppercase">— Endorsed by Mahatma Gandhi, Tagore, & Netaji Bose</span>
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-6">
            <button
              onClick={() => handleScrollToSection('masterpieces')}
              className="px-10 py-4 bg-brand-crimson hover:bg-brand-crimson/95 text-bg-primary text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer active:scale-95"
            >
              ORDER MASTERPIECES
            </button>
            <button
              onClick={() => handleScrollToSection('timeline')}
              className="px-8 py-4 border border-brand-gold/30 hover:border-brand-crimson text-text-primary hover:text-brand-crimson text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer flex items-center space-x-2 active:scale-95"
            >
              <span>EXPLORE LINEAGE</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-brand-crimson" />
            </button>
          </div>
        </div>

        {/* Right Column: Layered Fine-Art Product Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] md:h-[550px] lg:pl-6">
          {/* Saffron accent backdrop square */}
          <div className="absolute top-8 left-8 right-8 bottom-8 border border-brand-gold/15 rotate-3 pointer-events-none" />

          {/* Main frame */}
          <div className="relative w-full max-w-[420px] h-[320px] md:h-[430px] bg-bg-secondary p-5 border border-brand-gold/35 shadow-2xl z-10 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
            
            {/* Double inner border */}
            <div className="absolute inset-2 border border-brand-gold/10 pointer-events-none" />
            
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src="/assets/images/jolbhora.png" 
                alt="Jolbhora Mohini Sandesh Close-up" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Custom premium badge overlay */}
            <div className="absolute bottom-8 right-8 bg-brand-crimson text-bg-primary text-[8.5px] font-bold tracking-[0.3em] uppercase px-4 py-2 shadow-xl border border-brand-gold/25">
              THE JOLBHORA
            </div>
          </div>

          {/* Staggered overlapping background card */}
          <div className="absolute -bottom-8 -left-2 w-[180px] md:w-[240px] h-[130px] md:h-[185px] bg-bg-primary p-3 border border-brand-gold/25 shadow-2xl z-20 hidden md:block rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src="/assets/images/giftbox.png" 
                alt="Heritage Teakwood Packaging Box" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Footer scroll hint */}
      <div className="flex justify-center w-full mt-16 lg:mt-0 relative z-10">
        <button
          onClick={() => handleScrollToSection('timeline')}
          className="flex flex-col items-center space-y-3 text-[9px] font-bold tracking-[0.3em] uppercase text-text-muted hover:text-brand-crimson transition-colors duration-300 cursor-pointer group"
        >
          <span>SCROLL TO UNVEIL HISTORY</span>
          <div className="w-[1px] h-14 bg-brand-gold/40 group-hover:bg-brand-crimson transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
