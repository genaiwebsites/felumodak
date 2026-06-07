'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const SWEETS_DATA = [
  {
    id: 1,
    slug: "pc1",
    num: "01",
    tag: "Signature · Rishra Special",
    name: "Mishti Doi &\nChomchom",
    nameJsx: <>Mishti Doi &<br />Chomchom</>,
    desc: "Set in terracotta, fermented to perfection over generations of practice.",
    price: 500,
    unit: "1kg Clay Pot",
    ingredients: ["Pure Milk", "Caramelized Sugar", "Chomchom", "Pistachios"],
    sensoryNotes: { texture: "Thick, creamy set yogurt with soft chomchom spheres", sweetness: "Rich, caramelized, authentic" },
    deco: (
      <svg viewBox="0 0 200 200" width="240" fill="none">
        <circle cx="100" cy="100" r="88" stroke="#C4922A" strokeWidth=".7" />
        <circle cx="100" cy="100" r="66" stroke="#C4922A" strokeWidth=".5" />
        <circle cx="100" cy="100" r="44" stroke="#C4922A" strokeWidth=".4" />
        <circle cx="100" cy="100" r="22" fill="rgba(196,146,42,.18)" />
        <line x1="12" y1="100" x2="188" y2="100" stroke="#C4922A" strokeWidth=".4" />
        <line x1="100" y1="12" x2="100" y2="188" stroke="#C4922A" strokeWidth=".4" />
        <line x1="38" y1="38" x2="162" y2="162" stroke="#C4922A" strokeWidth=".3" />
        <line x1="162" y1="38" x2="38" y2="162" stroke="#C4922A" strokeWidth=".3" />
      </svg>
    )
  },
  {
    id: 2,
    slug: "pc2",
    num: "02",
    tag: "Classic · Heritage",
    name: "Rasgulla",
    nameJsx: "Rasgulla",
    desc: "Pillowy chhana spheres, soaked in light rose-touched syrup.",
    price: 360,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Cardamom Sugar Syrup", "Rose Water"],
    sensoryNotes: { texture: "Pillowy soft and spongy", sweetness: "Light, rose-touched sweetness" },
    deco: (
      <svg viewBox="0 0 120 120" width="160" fill="none">
        <rect x="10" y="10" width="100" height="100" stroke="#C4922A" strokeWidth=".7" />
        <rect x="24" y="24" width="72" height="72" stroke="#C4922A" strokeWidth=".5" />
        <rect x="38" y="38" width="44" height="44" fill="rgba(196,146,42,.25)" />
      </svg>
    )
  },
  {
    id: 3,
    slug: "pc3",
    num: "03",
    tag: "Seasonal · Festival",
    name: "Sandesh",
    nameJsx: "Sandesh",
    desc: "Sculpted from fresh chhana, flavoured with cardamom and saffron.",
    price: 450,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Kesar (Saffron)", "Cardamom", "Pistachios"],
    sensoryNotes: { texture: "Melts in the mouth, granular", sweetness: "Delicate, saffron-forward" },
    deco: null
  },
  {
    id: 4,
    slug: "pc4",
    num: "04",
    tag: "Traditional · Everyday",
    name: "Pantua &\nLedikeni",
    nameJsx: <>Pantua &<br />Ledikeni</>,
    desc: "Deep-fried golden orbs, steeped in warm spiced syrup.",
    price: 380,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Khoya", "Desi Ghee", "Cardamom Syrup"],
    sensoryNotes: { texture: "Glistening caramelized crust, soft syrup-soaked interior", sweetness: "Deep, warm syrup sweetness" },
    deco: null
  },
  {
    id: 5,
    slug: "pc5",
    num: "05",
    tag: "Gift · Premium",
    name: "Assorted Gift\nSelection",
    nameJsx: <>Assorted Gift<br />Selection</>,
    desc: "Curated premium mishti gift boxes, shipped Pan-India.",
    price: 1200,
    unit: "Premium Box",
    ingredients: ["Assorted Kaju Sweets", "Premium Sandesh", "Dry Fruits", "Desi Ghee Delicacies"],
    sensoryNotes: { texture: "Varied textures from granular sandesh to smooth kaju katli", sweetness: "Balanced, festive assortment" },
    deco: null
  },
];

const MasterpiecesSection = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    addToCart(item, 1);
  };

  return (
    <div>
      {/* PRODUCTS */}
      <section className="products-section" id="sweets">
        <div className="products-header">
          <div>
            <div className="section-tag dark">Our Sweets</div>
            <h2 className="section-title dark">Mishti, Crafted with<br /><em>Memory &amp; Mastery</em></h2>
          </div>
          <div className="mag">
            <a href="https://felumodak.com/online/" target="_blank" rel="noopener noreferrer" className="btn-p">
              <span className="btn-text">Order Online ↗</span>
            </a>
          </div>
        </div>

        <div className="pg">
          {SWEETS_DATA.map((item) => (
            <div
              key={item.id}
              className={`pc ${item.slug}`}
              onClick={() => setSelectedProduct(item)}
            >
              <div className="pc-aspect" />
              <div className="pc-inner">
                <div className="pc-bg" />
                {item.deco && <div className="pc-deco">{item.deco}</div>}
              </div>
              <div className="pc-num">{item.num}</div>
              <div className="pc-info">
                <div className="pc-tag">{item.tag}</div>
                <div className="pc-name">{item.nameJsx}</div>
                <div className="pc-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="philosophy-line" aria-hidden="true">Mishti</div>
        <div className="philosophy-inner">
          <span className="philosophy-mark" aria-hidden="true">"</span>
          <blockquote>
            Like Swiss cakes, Bengal's contribution to the manufacturing of sweetmeat has assumed legendary dimensions — not in one day, but through many days and nights of perspiration.
          </blockquote>
          <p className="philosophy-attr">The Spirit of <span>Felumodak</span> &nbsp;·&nbsp; Since 1860</p>
        </div>
      </section>

      {/* PRODUCT TASTING MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6" style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <motion.div
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(4px)' }}
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              style={{
                position: 'relative',
                background: 'var(--ink)',
                border: '1px solid rgba(196,146,42,.45)',
                width: '100%',
                maxWidth: '520px',
                padding: '2.5rem',
                zIndex: 10,
                color: 'var(--cream)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div style={{ position: 'absolute', inset: '0.5rem', border: '1px solid rgba(196,146,42,.05)', pointerEvents: 'none' }} />

              <button
                onClick={() => setSelectedProduct(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'rgba(247,240,228,.4)', cursor: 'none', fontFamily: 'var(--font-condensed)', fontSize: '.58rem', letterSpacing: '.18em', textTransform: 'uppercase' }}
              >
                CLOSE ✕
              </button>

              <div>
                <span style={{ fontSize: '.58rem', textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--gold)', fontFamily: 'var(--font-condensed)' }}>Tasting Profile</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--cream)', marginTop: '.3rem' }}>{selectedProduct.name.replace('\n', ' ')}</h3>
                <p style={{ fontSize: '.58rem', color: 'var(--gl)', fontFamily: 'var(--font-condensed)', letterSpacing: '.2em', textTransform: 'uppercase', marginTop: '.3rem' }}>{selectedProduct.tag}</p>
              </div>

              <div style={{ fontSize: '.85rem', fontWeight: 300, color: 'rgba(247,240,228,.7)', lineHeight: 1.85 }}>
                <p>{selectedProduct.desc}</p>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(196,146,42,.15)', marginTop: '1rem' }}>
                  <span style={{ fontSize: '.63rem', textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--cream)', fontFamily: 'var(--font-condensed)', display: 'block', marginBottom: '.5rem' }}>Ingredients</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                    {selectedProduct.ingredients.map((ing) => (
                      <span key={ing} style={{ fontSize: '.72rem', background: 'rgba(247,240,228,.06)', padding: '.35rem .9rem', border: '1px solid rgba(139,58,26,.2)', color: 'var(--cream)' }}>{ing}</span>
                    ))}
                  </div>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(196,146,42,.15)', marginTop: '1rem' }}>
                  <span style={{ fontSize: '.63rem', textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--cream)', fontFamily: 'var(--font-condensed)', display: 'block', marginBottom: '.5rem' }}>Sensory Profile</span>
                  <p style={{ fontSize: '.8rem', color: 'rgba(247,240,228,.6)' }}><strong style={{ color: 'rgba(247,240,228,.85)' }}>Texture:</strong> {selectedProduct.sensoryNotes.texture}</p>
                  <p style={{ fontSize: '.8rem', color: 'rgba(247,240,228,.6)', marginTop: '.3rem' }}><strong style={{ color: 'rgba(247,240,228,.85)' }}>Sweetness:</strong> {selectedProduct.sensoryNotes.sweetness}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(196,146,42,.1)', paddingTop: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--gl)' }}>₹{selectedProduct.price}</span>
                <button
                  onClick={(e) => { handleAddToCart(e, selectedProduct); setSelectedProduct(null); }}
                  className="btn-p"
                  style={{ cursor: 'none' }}
                >
                  <span className="btn-text">Add to Crate</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasterpiecesSection;
