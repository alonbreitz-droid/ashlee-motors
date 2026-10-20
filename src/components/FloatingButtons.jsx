import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { primary } from '../data/business';

// Desktop: WhatsApp pill + scroll-to-top. Phone: a fixed Call / WhatsApp bar.
export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <aside aria-label="Quick contact">
      <a
        href={primary.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fab-whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <Icon name="whatsapp" size={24} />
        <span>WhatsApp</span>
      </a>

      {showScrollTop && (
        <button className="icon-btn scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <Icon name="up" size={20} />
        </button>
      )}

      <div className="action-bar">
        <a className="btn btn-ghost" href={primary.tel}>
          <Icon name="phone" size={18} />Call
        </a>
        <a className="btn btn-whatsapp" href={primary.whatsapp} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={18} />WhatsApp
        </a>
      </div>
    </aside>
  );
}
