'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        {/* Left column */}
        <div>
          <div className="section-tag dark">Find Us</div>
          <h2 className="section-title dark">Visit the<br /><em>Source</em> Itself</h2>
          <p className="section-body dark">
            Our shop in Rishra has stood for over 160 years. Come for the mishti, stay for the story.
          </p>
          <div className="cd">
            <div className="cd-label">Address</div>
            <div className="cd-value">78 G. T. Road, P.O.: Rishra<br />Dist.: Hooghly, West Bengal</div>
          </div>
          <div className="cd">
            <div className="cd-label">Telephone</div>
            <div className="cd-value">033-2672 2094</div>
          </div>
          <div className="cd">
            <div className="cd-label">Email</div>
            <div className="cd-value">sweets@felumodak.com</div>
          </div>
          <div className="cd">
            <div className="cd-label">Fax</div>
            <div className="cd-value">033-2848 1479</div>
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <div className="mag">
              <a href="https://felumodak.com/enquiry.php" target="_blank" rel="noopener noreferrer" className="btn-p">
                <span className="btn-text">Send an Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column — Map box */}
        <div className="map-box">
          <svg className="map-grid-svg" viewBox="0 0 400 400" fill="none">
            <line x1="0" y1="50" x2="400" y2="50" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="250" x2="400" y2="250" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="0" y1="350" x2="400" y2="350" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="50" y1="0" x2="50" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="100" y1="0" x2="100" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="150" y1="0" x2="150" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="250" y1="0" x2="250" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="300" y1="0" x2="300" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
            <line x1="350" y1="0" x2="350" y2="400" stroke="#8B3A1A" strokeWidth=".8" />
          </svg>
          <div className="map-pin">
            <div className="map-pin-dot" />
          </div>
          <div className="map-lbl">Rishra, Hooghly</div>
          <p className="map-sub">78 G.T. Road, at the junction of Srimani Lane and N.C. Pakrashi Lane</p>
          <div className="mag" style={{ marginTop: '.8rem' }}>
            <a
              href="https://maps.google.com/?q=Felumodak+Rishra+Hooghly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-g"
              style={{ borderColor: 'rgba(18,13,6,.18)', color: 'var(--ink)' }}
            >
              <span className="btn-text">Get Directions ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
