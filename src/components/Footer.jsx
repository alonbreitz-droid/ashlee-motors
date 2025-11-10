import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>16 4th Street, Wynberg, Sandton</p>
            <a href="mailto:info@ash-leemotors.co.za">info@ash-leemotors.co.za</a>
            <p>
              <a href="https://wa.me/27787764024" target="_blank" rel="noreferrer">078 776 4024 (WhatsApp)</a>
              {' '}or{' '}
              <a href="tel:0787764024">Call</a>
            </p>
            <p>
              <a href="https://wa.me/27789996243" target="_blank" rel="noreferrer">078 999 6243 (WhatsApp)</a>
              {' '}or{' '}
              <a href="tel:0789996243">Call</a>
            </p>
            <p>
              <a href="https://wa.me/27788034782" target="_blank" rel="noreferrer">078 803 4782 (WhatsApp)</a>
              {' '}or{' '}
              <a href="tel:0788034782">Call</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="footer-section">
            <h4>Trust</h4>
            <p>We service all major brands</p>
            <p>Card & EFT payments accepted</p>
            <p>Quality service guaranteed</p>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: 'var(--space-6)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 'var(--font-size-sm)'}}>
            Proudly built and designed by{' '}
            <a href="https://pritchard-solutions.com" target="_blank" rel="noreferrer" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'underline'}}>
              Pritchard Specialized Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

