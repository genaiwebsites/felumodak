'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import AiImage from '../ui/AiImage';

const SWEETS_DATA = [
  {
    id: 1,
    name: "Mishti Doi & Chomchom",
    tag: "Signature · Rishra Special",
    desc: "Set in terracotta, fermented to perfection over generations of practice.",
    price: 500,
    unit: "1kg Clay Pot",
    ingredients: ["Pure Milk", "Caramelized Sugar", "Chomchom", "Pistachios"],
    sensoryNotes: { texture: "Thick, creamy set yogurt with soft chomchom spheres", sweetness: "Rich, caramelized, authentic" },
    prompt: "A luxurious macro food photography shot of traditional Bengali sweet Mishti Doi served in a rustic clay pot and chomchom mishti beside it. Garnished with pistachios, dramatic warm lighting, 8k."
  },
  {
    id: 2,
    name: "Rasgulla",
    tag: "Classic · Heritage",
    desc: "Pillowy chhana spheres, soaked in light rose-touched syrup.",
    price: 360,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Cardamom Sugar Syrup", "Rose Water"],
    sensoryNotes: { texture: "Pillowy soft and spongy", sweetness: "Light, rose-touched sweetness" },
    prompt: "A cinematic macro food photography shot of soft, white, spongy Bengali Rasgulla sweets in light rose-water sugar syrup. Served in a traditional bowl, 8k."
  },
  {
    id: 3,
    name: "Sandesh",
    tag: "Seasonal · Festival",
    desc: "Sculpted from fresh chhana, flavoured with cardamom and saffron.",
    price: 450,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Kesar (Saffron)", "Cardamom", "Pistachios"],
    sensoryNotes: { texture: "Melts in the mouth, granular", sweetness: "Delicate, saffron-forward" },
    prompt: "An elegant editorial macro food photography shot of traditional Bengali Sandesh sweets made of fresh chhana, decorated with saffron strands and cardamom seeds, clean rustic backdrop, 8k."
  },
  {
    id: 4,
    name: "Pantua & Ledikeni",
    tag: "Traditional · Everyday",
    desc: "Deep-fried golden orbs, steeped in warm spiced syrup.",
    price: 380,
    unit: "Box of 12",
    ingredients: ["Fresh Chhana", "Khoya", "Desi Ghee", "Cardamom Syrup"],
    sensoryNotes: { texture: "Glistening caramelized crust, soft syrup-soaked interior", sweetness: "Deep, warm syrup sweetness" },
    prompt: "A mouth-watering macro food photography shot of golden brown deep-fried Bengali Pantua and Ledikeni sweets, glistening with warm sugar syrup. Styled on a brass tray, 8k."
  },
  {
    id: 5,
    name: "Assorted Gift Selection",
    tag: "Gift · Premium",
    desc: "Curated premium mishti gift boxes, shipped Pan-India.",
    price: 1200,
    unit: "Premium Box",
    ingredients: ["Assorted Kaju Sweets", "Premium Sandesh", "Dry Fruits", "Desi Ghee Delicacies"],
    sensoryNotes: { texture: "Varied textures from granular sandesh to smooth kaju katli", sweetness: "Balanced, festive assortment" },
    prompt: "A high-end editorial shot of a premium handcrafted wooden gift box containing assorted colorful Bengali sweets, elegant ribbon, celebratory ambient lighting, 8k."
  }
];

export default function MasterpiecesSection({ isLoaded }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    // Product cards entrance stagger
    gsap.fromTo('.pc',
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.pg',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Philosophy reveals
    gsap.fromTo('.philosophy-line',
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo('.philosophy-mark',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy-mark',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    const quotes = document.querySelectorAll('.gs-quote');
    quotes.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const fades = document.querySelectorAll('.philosophy .gs-fade');
    fades.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Philosophy parallax background lines
    gsap.to('.philosophy-line', {
      xPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.philosophy',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // ─── PRODUCT CARD MOUSE TILT ───
    const isMobile = window.innerWidth < 768;
    const cards = document.querySelectorAll('.pc');
    
    if (!isMobile) {
      cards.forEach(card => {
        const handleMouseMove = (e) => {
          const r = card.getBoundingClientRect();
          const cx = (e.clientX - r.left) / r.width - 0.5;
          const cy = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, {
            rotateY: cx * 6,
            rotateX: -cy * 4,
            duration: 0.4,
            ease: 'power2.out',
            transformPerspective: 900
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        card._cleanup = () => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }

    return () => {
      cards.forEach(card => {
        if (card._cleanup) card._cleanup();
      });
    };
  }, [isLoaded]);

  const handleAddToCrate = (product) => {
    addToCart(product, 1);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
      setSelectedProduct(null);
    }, 1200);
  };

  return (
    <>
      {/* PRODUCTS */}
      <section className="products-section" id="sweets">
        <div className="products-header">
          <div>
            <div className="section-tag dark gs-fade">Our Sweets</div>
            <h2 className="section-title dark gs-title">
              Mishti, Crafted with<br /><em>Memory &amp; Mastery</em>
            </h2>
          </div>
          <div className="mag">
            <a
              href="#sweets"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
              className="btn-p"
              data-cursor="Shop"
            >
              <span className="btn-text">Order Online ↗</span>
            </a>
          </div>
        </div>

        <div className="pg">
          {/* SWEET 01 */}
          <div className="pc pc1" data-cursor="View" onClick={() => setSelectedProduct(SWEETS_DATA[0])}>
            <div className="pc-aspect"></div>
            <div className="pc-inner">
              <div className="pc-bg">
                <AiImage
                  prompt={SWEETS_DATA[0].prompt}
                  alt={SWEETS_DATA[0].name}
                  className="w-full h-full object-cover opacity-75"
                  index={0}
                />
              </div>
              <div className="pc-deco">
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
              </div>
            </div>
            <div className="pc-num">01</div>
            <div className="pc-info">
              <div className="pc-tag">Signature · Rishra Special</div>
              <div className="pc-name">Mishti Doi &amp;<br />Chomchom</div>
              <div className="pc-desc">Set in terracotta, fermented to perfection over generations of practice.</div>
            </div>
          </div>

          {/* SWEET 02 */}
          <div className="pc pc2" data-cursor="View" onClick={() => setSelectedProduct(SWEETS_DATA[1])}>
            <div className="pc-aspect"></div>
            <div className="pc-inner">
              <div className="pc-bg">
                <AiImage
                  prompt={SWEETS_DATA[1].prompt}
                  alt={SWEETS_DATA[1].name}
                  className="w-full h-full object-cover opacity-75"
                  index={1}
                />
              </div>
              <div className="pc-deco">
                <svg viewBox="0 0 120 120" width="160" fill="none">
                  <rect x="10" y="10" width="100" height="100" stroke="#C4922A" strokeWidth=".7" />
                  <rect x="24" y="24" width="72" height="72" stroke="#C4922A" strokeWidth=".5" />
                  <rect x="38" y="38" width="44" height="44" fill="rgba(196,146,42,.25)" />
                </svg>
              </div>
            </div>
            <div className="pc-num">02</div>
            <div className="pc-info">
              <div className="pc-tag">Classic · Heritage</div>
              <div className="pc-name">Rasgulla</div>
              <div className="pc-desc">Pillowy chhana spheres, soaked in light rose-touched syrup.</div>
            </div>
          </div>

          {/* SWEET 03 */}
          <div className="pc pc3" data-cursor="View" onClick={() => setSelectedProduct(SWEETS_DATA[2])}>
            <div className="pc-aspect"></div>
            <div className="pc-inner">
              <div className="pc-bg">
                <AiImage
                  prompt={SWEETS_DATA[2].prompt}
                  alt={SWEETS_DATA[2].name}
                  className="w-full h-full object-cover opacity-75"
                  index={2}
                />
              </div>
            </div>
            <div className="pc-num">03</div>
            <div className="pc-info">
              <div className="pc-tag">Seasonal · Festival</div>
              <div className="pc-name">Sandesh</div>
              <div className="pc-desc">Sculpted from fresh chhana, flavoured with cardamom and saffron.</div>
            </div>
          </div>

          {/* SWEET 04 */}
          <div className="pc pc4" data-cursor="View" onClick={() => setSelectedProduct(SWEETS_DATA[3])}>
            <div className="pc-aspect"></div>
            <div className="pc-inner">
              <div className="pc-bg">
                <AiImage
                  prompt={SWEETS_DATA[3].prompt}
                  alt={SWEETS_DATA[3].name}
                  className="w-full h-full object-cover opacity-75"
                  index={3}
                />
              </div>
            </div>
            <div className="pc-num">04</div>
            <div className="pc-info">
              <div className="pc-tag">Traditional · Everyday</div>
              <div className="pc-name">Pantua &amp;<br />Ledikeni</div>
              <div className="pc-desc">Deep-fried golden orbs, steeped in warm spiced syrup.</div>
            </div>
          </div>

          {/* SWEET 05 */}
          <div className="pc pc5" data-cursor="View" onClick={() => setSelectedProduct(SWEETS_DATA[4])}>
            <div className="pc-aspect"></div>
            <div className="pc-inner">
              <div className="pc-bg">
                <AiImage
                  prompt={SWEETS_DATA[4].prompt}
                  alt={SWEETS_DATA[4].name}
                  className="w-full h-full object-cover opacity-75"
                  index={4}
                />
              </div>
            </div>
            <div className="pc-num">05</div>
            <div className="pc-info">
              <div className="pc-tag">Gift · Premium</div>
              <div className="pc-name">Assorted Gift<br />Selection</div>
              <div className="pc-desc">Curated premium mishti gift boxes, shipped Pan-India.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="philosophy-line" aria-hidden="true">Mishti</div>
        <div className="philosophy-inner">
          <span className="philosophy-mark" aria-hidden="true">"</span>
          <blockquote className="gs-quote">
            Like Swiss cakes, Bengal's contribution to the manufacturing of sweetmeat has assumed legendary dimensions — not in one day, but through many days and nights of perspiration.
          </blockquote>
          <p className="philosophy-attr gs-fade">The Spirit of <span>Felumodak</span> &nbsp;·&nbsp; Since 1860</p>
        </div>
      </section>

      {/* Tasting Profile Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[8000] flex items-center justify-center p-6">
            <motion.div
              className="absolute inset-0 bg-black/75 backdrop-blur-xs"
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative bg-[#120D06] border border-[#C4922A]/45 w-full max-w-lg p-8 md:p-10 shadow-2xl rounded-xs flex flex-col space-y-6 z-10 text-[#F7F0E4]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="absolute inset-2 border border-[#C4922A]/5 pointer-events-none" />

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-[#F7F0E4]/40 hover:text-[#C4922A] cursor-pointer text-[10px] font-condensed tracking-widest uppercase"
              >
                CLOSE ✕
              </button>

              <div>
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#C4922A] font-bold">Tasting Profile</span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F7F0E4] mt-1">{selectedProduct.name}</h3>
                <p className="text-[9px] text-[#E8B84B] font-bold uppercase mt-1 tracking-[0.2em]">{selectedProduct.tag}</p>
              </div>

              <div className="space-y-5 text-sm font-light text-[#F7F0E4]/70 leading-relaxed">
                <p>{selectedProduct.desc}</p>

                <div className="space-y-2.5 pt-4 border-t border-[#C4922A]/15">
                  <span className="text-[10px] uppercase font-bold text-[#F7F0E4] tracking-wider block font-condensed">Ingredients</span>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProduct.ingredients.map((ing) => (
                      <span key={ing} className="text-[11px] bg-[#251B12] px-3.5 py-1.5 text-[#F7F0E4] font-medium border border-[#8B3A1A]/15">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[#C4922A]/15">
                  <span className="text-[10px] uppercase font-bold text-[#F7F0E4] tracking-wider block font-condensed">Sensory Profile</span>
                  <div className="space-y-1.5 text-xs text-[#F7F0E4]/60">
                    <p><strong className="text-[#F7F0E4]/80">Texture:</strong> {selectedProduct.sensoryNotes.texture}</p>
                    <p><strong className="text-[#F7F0E4]/80">Sweetness:</strong> {selectedProduct.sensoryNotes.sweetness}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAddToCrate(selectedProduct)}
                disabled={addedMessage}
                className="w-full py-4 bg-[#8B3A1A] hover:bg-[#8B3A1A]/90 text-[#F7F0E4] font-condensed text-xs tracking-[0.25em] uppercase transition-colors cursor-pointer border border-[#C4922A]/20 mt-4 active:scale-95 shadow-lg"
              >
                {addedMessage ? 'ADDED TO CRATE' : `ADD TO CRATE — ₹${selectedProduct.price}`}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
