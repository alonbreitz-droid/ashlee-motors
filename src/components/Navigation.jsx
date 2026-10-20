import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { primary, hours } from '../data/business';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`} aria-label="Main">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="Ash-Lee Motors home">
          <img
            src="/assets/img/logo-96.webp"
            srcSet="/assets/img/logo-96.webp 1x, /assets/img/logo-192.webp 2x"
            width="44"
            height="40"
            alt=""
            className="nav-logo"
          />
          <span className="nav-wordmark">ASH-LEE MOTORS</span>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={isActive(l.to)} aria-current={isActive(l.to) ? 'page' : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary btn-sm nav-cta" href={primary.whatsapp} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={16} />WhatsApp us
        </a>

        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} inert={isMenuOpen ? undefined : ''}>
        <ol>
          {links.map((l, i) => (
            <li key={l.to}>
              <Link to={l.to} className={isActive(l.to)} aria-current={isActive(l.to) ? 'page' : undefined} onClick={() => setIsMenuOpen(false)}>
                <span>0{i + 1}</span>{l.label}
              </Link>
            </li>
          ))}
        </ol>
        <div className="mobile-menu-foot">
          <a className="btn btn-primary btn-lg" href={primary.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={20} />WhatsApp us
          </a>
          <a className="btn btn-ghost btn-lg" href={primary.tel}>
            <Icon name="phone" size={20} />Call {primary.display}
          </a>
          <p>{hours[0].day} · {hours[0].time}</p>
        </div>
      </div>
    </nav>
  );
}
