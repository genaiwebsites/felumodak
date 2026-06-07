'use client';

import React from 'react';

const HERITAGE_TIMELINE = [
  {
    year: "c. 1860",
    name: "Felu Charan De",
    desc: "Founded the enterprise in southern Rishra. Invented original recipes through \"sheer honesty and dexterity.\""
  },
  {
    year: "Gen. II",
    name: "Nandalal Moira",
    desc: "Took the operation to new heights — enriching taste and purity until the fame of Felumodak spread far beyond Rishra."
  },
  {
    year: "Gen. III",
    name: "Madhusudan De",
    desc: "Carried tradition forward, establishing the family's presence at the junction of Srimani Lane and G.T. Road."
  },
  {
    year: "Present",
    name: "Baidyanath, Shankar, Amarnath & Amitava De",
    desc: "Consolidating the brand with modern technology — reaching every nook of southern Bengal and beyond."
  }
];

const HeritageSection = () => {
  return (
    <div id="legacy" style={{ background: 'var(--ink)' }}>
      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="legacy-grid">
          {/* Left visual column */}
          <div className="legacy-visual">
            <div className="legacy-frame" id="legacyFrame">
              <div className="frame-emblem">
                <div className="emblem-ring">
                  <div className="emblem-inner">
                    ফেলু মোদক<br />
                    <span style={{ fontSize: '.6rem', letterSpacing: '.2em', color: 'rgba(196,146,42,.65)' }}>FELUMODAK</span>
                  </div>
                </div>
              </div>
              <svg style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', opacity: '.1', width: '90px' }} viewBox="0 0 90 150" fill="none">
                <path d="M45 145 Q42 90 26 56 Q16 34 6 8" stroke="#C4922A" strokeWidth=".9" />
                <path d="M26 56 Q46 46 54 30" stroke="#C4922A" strokeWidth=".7" />
                <path d="M26 56 Q14 68 6 90" stroke="#C4922A" strokeWidth=".7" />
                <ellipse cx="54" cy="30" rx="8" ry="13" transform="rotate(10 54 30)" fill="rgba(196,146,42,.4)" />
              </svg>
              <div className="year-ghost">1860</div>
            </div>
            <div className="float-stat" id="floatStat">
              <div className="n">160+</div>
              <div className="l">Years of Sweetcraft</div>
            </div>
          </div>

          {/* Right text column */}
          <div className="legacy-text">
            <div className="section-tag">Our Legacy</div>
            <h2 className="section-title">A <em>Sweet Story</em><br />Across Five Generations</h2>
            <p className="section-body">
              About 160 years ago, Felu Charan De — scion of the Modak family, a lineage steeped in the art of sweetmaking — founded his enterprise in Rishra, on the banks of the Hooghly. With an innovative spirit and deep understanding of the Bengali palate, he invented scores of sweetmeats, constantly refining until each recipe achieved perfection — never sacrificing quality for expediency.
            </p>
            <p className="section-body">
              Bengal's contribution to sweetcraft has assumed legendary dimensions — patronised by stalwarts like Rabindranath Tagore, Gandhi, and Subhas Chandra Bose. This devotion was Felu's true inheritance to future generations.
            </p>

            {/* Timeline */}
            <div className="tl" id="timeline">
              {HERITAGE_TIMELINE.map((item, idx) => (
                <div key={idx} className="tl-item">
                  <div className="tl-yr">{item.year}</div>
                  <div>
                    <div className="tl-name">{item.name}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stalwarts Band */}
      <div className="stalwarts">
        <div className="stalwarts-inner">
          <div className="s-label">Cherished by the great minds of India</div>
          <div className="s-divider" />
          <div className="s-names">
            <span className="s-name">Rabindranath Tagore</span>
            <span className="s-name">Mahatma Gandhi</span>
            <span className="s-name">Subhas Chandra Bose</span>
            <span className="s-name">&amp; many more luminaries</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageSection;
