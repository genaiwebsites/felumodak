'use client';

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Info, Check } from 'lucide-react';
import menuData from '../../data/menuData.json';

const Masterpieces = () => {
  const { menu } = menuData;
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToTray = (product) => {
    addToCart(product, 1);
    setAddedItem(product.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 1500);
  };

  return (
    <section id="masterpieces" className="py-32 px-8 md:px-16 bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-24 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-crimson">
            CONFECTIONERY CULT OBJECTS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
            The Masterpieces
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Product Grid (Editorial layout with staggered heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {menu.map((product, index) => {
            // Apply slight offset pattern to create a staggered editorial card effect
            const offsetClass = index % 2 === 1 ? 'lg:translate-y-8' : '';

            return (
              <div 
                key={product.id}
                className={`group bg-bg-secondary border border-brand-gold/25 p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-brand-gold/60 ${offsetClass}`}
              >
                <div>
                  {/* Photo Frame with double borders */}
                  <div className="w-full h-56 bg-bg-primary border border-brand-gold/15 p-2 flex items-center justify-center relative overflow-hidden mb-6">
                    <div className="absolute inset-4 border border-brand-gold/5 pointer-events-none z-10" />
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Estd tag decoration */}
                    <span className="absolute top-4 left-4 text-[8.5px] font-bold bg-brand-crimson text-bg-primary px-3 py-1 shadow-md border border-brand-gold/20 z-10 tracking-wider">
                      ESTD. {product.heritageYear}
                    </span>
                  </div>

                  {/* Title and details */}
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-brand-crimson transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-[1px] bg-brand-gold/60" />
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-gold">
                        {product.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed font-light line-clamp-3 pt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom controls */}
                <div className="mt-8 space-y-4">
                  
                  {/* Info details */}
                  <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-brand-gold/10">
                    <span className="font-bold text-text-primary tracking-wide">
                      ₹{product.price} <span className="font-light text-text-muted text-[10px]">/ {product.unit}</span>
                    </span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="hover:text-brand-crimson flex items-center space-x-1.5 cursor-pointer transition-colors duration-200"
                    >
                      <Info className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-[9px] uppercase tracking-widest font-bold">Profile</span>
                    </button>
                  </div>

                  {/* Add to Tray CTA */}
                  <button
                    onClick={() => handleAddToTray(product)}
                    className={`w-full py-3.5 font-bold text-[9px] tracking-[0.3em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer active:scale-95 border ${
                      addedItem === product.id 
                        ? 'bg-brand-saffron border-brand-saffron text-bg-primary' 
                        : 'bg-text-primary border-text-primary text-bg-primary hover:bg-brand-crimson hover:border-brand-crimson'
                    }`}
                  >
                    {addedItem === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>ADDED TO TRAY</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>ADD TO TRAY</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Tasting Profile Modal overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setSelectedProduct(null)} />
          
          <div className="relative bg-bg-primary border border-brand-gold/45 w-full max-w-lg p-8 md:p-10 shadow-2xl rounded-xs flex flex-col space-y-6 animate-in zoom-in-95 duration-200 z-10">
            {/* Inner frame */}
            <div className="absolute inset-2 border border-brand-gold/5 pointer-events-none" />

            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary cursor-pointer text-xs font-bold tracking-widest uppercase"
            >
              CLOSE ✕
            </button>

            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold">Tasting Profile</span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-text-primary mt-1">{selectedProduct.name}</h3>
              <p className="text-[10px] text-brand-crimson font-bold uppercase mt-1 tracking-[0.2em]">{selectedProduct.tagline}</p>
            </div>

            <div className="space-y-5 text-sm font-light text-text-muted leading-relaxed">
              <p>{selectedProduct.description}</p>
              
              <div className="space-y-2.5 pt-4 border-t border-brand-gold/15">
                <span className="text-[10px] uppercase font-bold text-text-primary tracking-wider block">Ingredients</span>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProduct.ingredients.map((ing) => (
                    <span key={ing} className="text-[11px] bg-bg-secondary px-3.5 py-1.5 text-text-primary font-semibold border border-brand-gold/15">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-brand-gold/15">
                <span className="text-[10px] uppercase font-bold text-text-primary tracking-wider block">Sensory Profile</span>
                <div className="space-y-1.5 text-xs">
                  <p><strong>Texture:</strong> {selectedProduct.sensoryNotes.texture}</p>
                  <p><strong>Sweetness:</strong> {selectedProduct.sensoryNotes.sweetness}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                handleAddToTray(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full py-4 bg-brand-crimson hover:bg-brand-crimson/95 text-bg-primary font-bold text-xs tracking-[0.25em] uppercase transition-colors cursor-pointer border border-brand-gold/30 mt-4 active:scale-95"
            >
              ADD BOX TO TRAY
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Masterpieces;
