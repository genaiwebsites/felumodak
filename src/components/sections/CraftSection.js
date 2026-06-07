'use client';

import React from 'react';

const PILLARS_DATA = [
  {
    num: "I",
    title: "Unyielding Purity",
    body: "Felu Charan's cardinal rule: never sacrifice quality. Every batch uses the finest chhana, pure khoya, and natural ingredients — the same standard held across five generations."
  },
  {
    num: "II",
    title: "Living Recipes",
    body: "Recipes are not frozen in time — each generation has refined and innovated, responding to the palate of the age while preserving the soul of each preparation."
  },
  {
    num: "III",
    title: "The Bengal Renaissance",
    body: "These sweets emerged in the same cultural crucible as the Indian Renaissance — patronised by stalwarts, cherished at celebrations, embedded in the memory of riverine Bengal."
  },
  {
    num: "IV",
    title: "Generational Mastery",
    body: "Five generations — Felu Charan, Nandalal, Madhusudan, and now Baidyanath, Shankar, Amarnath and Amitava — each carrying forward a craft refined over 160 years."
  },
  {
    num: "V",
    title: "A Place of Pilgrimage",
    body: "The junction of Srimani Lane, G.T. Road and N.C. Pakrashi Lane in Rishra is not merely a shop — it is a destination for those who understand what authentic mishti truly tastes like."
  },
  {
    num: "VI",
    title: "Shipped Across India",
    body: "Felumodak's flavours now reach every corner of India. Order online and receive the taste of Rishra — freshly packed, carefully shipped, joyfully received."
  }
];

const CraftSection = () => {
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ background: 'var(--ink)' }}>
      {/* PILLARS */}
      <section className="features-section" id="heritage">
        <div className="features-wrap">
          <div className="features-header">
            <div className="section-tag">Why Felumodak</div>
            <h2 className="section-title">The <em>Pillars</em> of<br />Our Craft</h2>
          </div>
          <div className="features-grid">
            {PILLARS_DATA.map((item, idx) => (
              <div key={idx} className="fi">
                <div className="fi-num">{item.num}</div>
                <div className="fi-title">{item.title}</div>
                <p className="fi-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="order-cta">
        <div className="section-tag">Order Now</div>
        <h2 className="section-title">Taste the <em>Heritage</em><br />From Wherever You Are</h2>
        <p>
          Felumodak delivers across India. Send a box of traditional Bengal mishti to someone you love — or simply to yourself.
        </p>
        <div className="hero-ctas">
          <div className="mag">
            <a href="https://felumodak.com/online/" target="_blank" rel="noopener noreferrer" className="btn-p">
              <span className="btn-text">Shop Online ↗</span>
            </a>
          </div>
          <div className="mag">
            <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="btn-g">
              <span className="btn-text">Visit Our Store</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CraftSection;
