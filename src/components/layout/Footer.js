'use client';

import React from 'react';

export default function Footer() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="footer-brand-logo">
            Felu<span>Modak</span>
          </a>
          <p>
            Heritage Bengali sweets from Rishra, Hooghly. Crafted with devotion across five generations since 1860. A living testament to Bengal's sweetcraft tradition.
          </p>
        </div>
        <div>
          <div className="fh">Navigate</div>
          <ul className="fl">
            <li>
              <a href="#legacy" onClick={(e) => handleNavClick(e, 'legacy')}>
                Our Story
              </a>
            </li>
            <li>
              <a href="#sweets" onClick={(e) => handleNavClick(e, 'sweets')}>
                Sweets
              </a>
            </li>
            <li>
              <a href="#heritage" onClick={(e) => handleNavClick(e, 'heritage')}>
                Heritage
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/photo_gallery.php" target="_blank" rel="noopener noreferrer">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/press_clippings.php" target="_blank" rel="noopener noreferrer">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="fh">Order</div>
          <ul className="fl">
            <li>
              <a href="https://felumodak.com/online/" target="_blank" rel="noopener noreferrer">
                Online Store
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/enquiry.php" target="_blank" rel="noopener noreferrer">
                Bulk Enquiry
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/online/sp.php" target="_blank" rel="noopener noreferrer">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/online/rp.php" target="_blank" rel="noopener noreferrer">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="https://felumodak.com/online/cr.php" target="_blank" rel="noopener noreferrer">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="fh">Contact</div>
          <ul className="fl">
            <li>
              <a href="https://felumodak.com/contact_us.php" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
            <li>
              <a href="mailto:sweets@felumodak.com">
                sweets@felumodak.com
              </a>
            </li>
            <li>
              <a href="tel:03326722094">
                033-2672 2094
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com/felumodak" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Felumodak &nbsp;·&nbsp; 78 G.T. Road, Rishra, Hooghly, West Bengal</p>
        <div className="footer-social">
          <a href="http://www.facebook.com/felumodak" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://felumodak.com/online/pp.php" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
          <a href="https://felumodak.com/online/ts.php" target="_blank" rel="noopener noreferrer">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
