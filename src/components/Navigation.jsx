import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <div className="container nav-container">
      <Link to="/" className="nav-brand" style={{display: 'flex', alignItems: 'center', gap: 'var(--space-3)'}}>
        <img src="/assets/logo.PNG" alt="Ash-Lee Motors" className="nav-logo" />
        <span style={{fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--white)'}}>ASH-LEE MOTORS</span>
      </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive('/services')}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={isActive('/gallery')}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

