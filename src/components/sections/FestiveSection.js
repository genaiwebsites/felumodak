'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const FESTIVE_BOXES = [
  {
    id: 101,
    name: "Poila Baisakh Crate",
    tagline: "BENGALI NEW YEAR EXCLUSIVE",
    desc: "A handpicked assortment containing Mango Mohini Sandesh, Ghee-Fried Gaja, and Kancha Golla. Beautifully packaged in an engraved box with rose petals.",
    price: 850,
    unit: "Assorted Crate of 20",
    ingredients: ["Sandesh", "Gaja", "Kacha Golla"],
    sensoryNotes: { texture: "Crispy and soft mixture", sweetness: "Mild and rich variety" }
  },
  {
    id: 102,
    name: "Durga Utsav Gift Crate",
    tagline: "FESTIVAL CELEBRATION BOX",
    desc: "A luxury celebration pack containing our famous automated Saffron Rabri jar coupled with sweet Labangalatika pastry boxes.",
    price: 950,
    unit: "Large Platter Box",
    ingredients: ["Saffron Rabri", "Labangalatika"],
    sensoryNotes: { texture: "Velvety cream and ghee-fried folds", sweetness: "Saffron and clove sweet" }
  },
  {
    id: 103,
    name: "Winter Nolen Gur Tray",
    tagline: "WINTER DISPATCH EXCLUSIVE",
    desc: "Felu Modak's seasonal masterpiece. Packed with pure winter date-palm jaggery Jolbhora Sandesh and Nolen Gur Kancha Golla.",
    price: 980,
    unit: "Box of 24 pieces",
    ingredients: ["Chhana", "Nolen Gur Syrup", "Pistachios"],
    sensoryNotes: { texture: "Viscous jaggery syrup cores", sweetness: "Caramelized winter sap" }
  }
];

const FestiveSection = () => {
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState(null);

  const handleAddBox = (item) => {
    addToCart(item, 1);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="festive" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-t border-[#1A1A1A]/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-crimson">
            SEASONAL FESTIVE PLATTERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
            Heritage Gifting Boxes
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Festive Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FESTIVE_BOXES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-bg-primary p-8 border border-brand-gold/15 flex flex-col justify-between space-y-6 hover:border-brand-crimson/50 transition-colors duration-300 shadow-sm relative group"
            >
              <div className="absolute inset-1.5 border border-brand-gold/5 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[8.5px] font-extrabold tracking-widest text-[#D97706] uppercase bg-bg-secondary px-3 py-1 rounded-full border border-brand-gold/10">
                    {item.tagline}
                  </span>
                  <Gift className="w-4 h-4 text-brand-gold group-hover:animate-bounce" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] pt-2">
                  {item.name}
                </h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-[10.5px] text-[#1A1A1A]/50 font-sans tracking-wide">
                  Tray details: {item.unit}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between">
                <span className="font-sans font-bold text-sm text-[#1A1A1A]">
                  ₹{item.price}
                </span>

                <button
                  onClick={() => handleAddBox(item)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-300 shadow-xs border ${
                    addedItem === item.id 
                      ? 'bg-brand-saffron border-brand-saffron text-bg-primary' 
                      : 'bg-[#1A1A1A] border-[#1A1A1A] text-bg-primary hover:bg-[#800020] hover:border-[#800020] cursor-pointer'
                  }`}
                >
                  {addedItem === item.id ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3 h-3" />
                      <span>Order Tray</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FestiveSection;
