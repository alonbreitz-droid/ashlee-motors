import React from 'react';
import { Link } from 'react-router-dom';
import { phones, email, address, hours } from '../data/business';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/img/logo-192.webp" width="72" height="65" alt="Ash-Lee Motors" loading="lazy" />
            <p className="tagline">Our Perfection is Your Protection</p>
          </div>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-list">
              <li>{address.street}, {address.area}</li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
              {phones.map(p => (
                <li key={p.tel} className="footer-phone">
                  <span className="num">{p.display}</span>
                  <a href={p.whatsapp} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${p.display}`}>WhatsApp</a>
                  <a href={p.tel} aria-label={`Call ${p.display}`}>Call</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Hours</h2>
            <ul className="footer-list">
              <li>{hours[0].day}</li>
              <li>{hours[0].time}</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Trust</h2>
            <ul className="footer-list">
              <li>We service all major brands</li>
              <li>Card &amp; EFT payments accepted</li>
              <li>Quality service guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ash-lee Motors · <Link to="/contact">Find us</Link></p>
          <p>
            Proudly built and designed by{' '}
            <a href="https://pritchard-solutions.com" target="_blank" rel="noreferrer">
              Pritchard Specialized Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
