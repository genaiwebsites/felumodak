import React from 'react';
import menuData from '../../data/menuData.json';

const Timeline = () => {
  const { timeline } = menuData;

  return (
    <section 
      id="timeline" 
      className="relative min-h-screen py-32 px-8 md:px-16 bg-bg-secondary border-t border-b border-brand-gold/15 overflow-hidden"
    >
      {/* Background visual watermarks */}
      <div className="absolute inset-0 select-none opacity-[0.04] pointer-events-none">
        <svg 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full object-cover text-brand-gold"
        >
          <path d="M-100 100 C 300 250, 450 50, 800 300 C 1150 550, 1200 400, 1600 500" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
          <path d="M-50 180 C 350 330, 400 130, 850 380 C 1300 630, 1250 480, 1650 580" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-150 320 C 250 470, 300 270, 750 520 C 1200 770, 1150 620, 1550 720" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">
            THE CHRONICLES OF CHHANA
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
            A Lineage of Pure Sugars
          </h2>
          <div className="w-16 h-[1px] bg-brand-crimson mx-auto mt-6" />
        </div>

        {/* Timeline Path Grid */}
        <div className="relative border-l border-brand-gold/25 ml-6 md:ml-1/2 space-y-24 py-4">
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.year} 
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Diamond Node */}
                <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 top-2.5 w-2.5 h-2.5 bg-bg-secondary border border-brand-crimson rotate-45 flex items-center justify-center shadow-lg">
                  <div className="w-1 h-1 bg-brand-saffron" />
                </div>

                {/* Content Block */}
                <div 
                  className={`w-full md:w-1/2 px-10 ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  } space-y-3`}
                >
                  {/* Floating Year typography */}
                  <span className="font-serif text-3xl md:text-5xl font-extrabold text-brand-crimson block tracking-tight">
                    {item.year}
                  </span>
                  
                  {/* Inner Box with delicate border */}
                  <div className="bg-bg-primary p-6 md:p-8 border border-brand-gold/15 shadow-sm inline-block w-full max-w-md relative hover:border-brand-crimson/50 transition-colors duration-300">
                    <div className="absolute inset-1.5 border border-brand-gold/5 pointer-events-none" />
                    <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty balancing spacer */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Timeline;
