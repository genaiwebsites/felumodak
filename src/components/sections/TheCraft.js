import React from 'react';
import { Eye, Shield, Award } from 'lucide-react';

const TheCraft = () => {
  const crafts = [
    {
      icon: <Award className="w-5 h-5 text-brand-crimson" />,
      title: "Hand-kneaded Chhana",
      subtitle: "THE TEXTURE OF SILK",
      description: "Unlike mechanized processors, our artisans knead the fresh chhana (cottage cheese curds) by hand on heavy wood tables. This preserves milk moisture and aligns proteins to yield an ultra-soft, granular texture that melts instantly on the tongue."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-gold" />,
      title: "Jackfruit-Wood Molds",
      subtitle: "HEIRLOOM CARVINGS",
      description: "Our signature sweets derive their detailed motifs from heirloom moulds carved out of seasonal jackfruit or teakwood. Carved by third-generation artisans, these moulds impress floral designs and deep ridges that hold syrup drops."
    },
    {
      icon: <Eye className="w-5 h-5 text-brand-saffron" />,
      title: "The Alchemy of Nolen Gur",
      subtitle: "WINTER DATE-PALM NECTAR",
      description: "Collected at dawn during the cold winter months, date palm sap is slowly boiled in wide iron vats over wood firewood. Our masters gauge the viscosity by eye, cooking it until it achieves the perfect amber shade."
    }
  ];

  return (
    <section id="craft" className="py-32 px-8 md:px-16 bg-bg-secondary border-t border-brand-gold/15 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">
              ARTISANAL ARCHAEOLOGY
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-text-primary leading-[1.1]">
              The Craft Behind the Confectionery
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-8 border-l border-brand-gold/25">
            <p className="text-xs md:text-sm text-text-muted font-light leading-relaxed">
              We reject modern shortcuts. Our shop is a living museum where confections are built using identical processes from the 1850s, using wood fire heat and hand carving.
            </p>
          </div>
        </div>

        {/* Story Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {crafts.map((craft, idx) => (
            <div 
              key={craft.title}
              className="bg-bg-primary p-10 border border-brand-gold/20 flex flex-col justify-between space-y-8 relative hover:border-brand-crimson/50 transition-colors duration-300 shadow-md"
            >
              {/* Gold corners */}
              <div className="absolute inset-1.5 border border-brand-gold/5 pointer-events-none" />

              <div className="space-y-6">
                <div className="w-11 h-11 bg-bg-secondary flex items-center justify-center border border-brand-gold/15">
                  {craft.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {craft.title}
                  </h3>
                  <p className="text-[8.5px] uppercase font-bold tracking-[0.25em] text-brand-saffron">
                    {craft.subtitle}
                  </p>
                </div>

                {/* Drop-cap utility applied to first paragraph of first craft box for editorial style */}
                <p className={`text-xs md:text-sm text-text-muted font-light leading-relaxed ${idx === 0 ? 'drop-cap' : ''}`}>
                  {craft.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between text-[9px] font-bold tracking-widest text-brand-gold">
                <span>AUTHENTIC METHOD</span>
                <span>0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheCraft;
