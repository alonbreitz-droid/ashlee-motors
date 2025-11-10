import React from 'react';

export default function Contact() {
  return (
    <main style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundImage: 'url(/assets/gallery/JFS_2360.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'rgba(28, 28, 28, 0.6)',
        backdropFilter: 'blur(2px)',
        zIndex: 1
      }}></div>
      
      <section className="section" style={{position: 'relative', zIndex: 2, minHeight: '100vh', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)'}}>
        <div className="container">
          <h1 style={{color: 'var(--white)'}}>Contact Us</h1>

          <div className="map-placeholder" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(var(--blur-sm))',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: 0,
            overflow: 'hidden'
          }}>
            <iframe
              src="https://www.google.com/maps?q=16+4th+Street+Wynberg+Sandton&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '400px',
                borderRadius: 'var(--radius-16)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ash-lee Motors Location - 16 4th Street, Wynberg, Sandton"
            ></iframe>
          </div>

          <div className="contact-info">
            <div>
              <div className="contact-section">
                <h2 style={{color: 'var(--white)'}}>Address</h2>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>16 4th Street</p>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>Wynberg, Sandton</p>
              </div>

              <div className="contact-section">
                <h2 style={{color: 'var(--white)'}}>Opening Hours</h2>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}><strong>Monday - Friday:</strong> 08:00 - 17:00</p>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}><strong>Saturday:</strong> Closed</p>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div>
              <div className="contact-section">
                <h2 style={{color: 'var(--white)'}}>Get in Touch</h2>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  <a href="https://wa.me/27787764024" target="_blank" rel="noreferrer" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'underline'}}>078 776 4024 (WhatsApp)</a>
                  {' '}or{' '}
                  <a href="tel:0787764024" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'underline'}}>Call</a>
                </p>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  <a href="https://wa.me/27789996243" target="_blank" rel="noreferrer" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'underline'}}>078 999 6243 (WhatsApp)</a>
                  {' '}or{' '}
                  <a href="tel:0789996243" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'underline'}}>Call</a>
                </p>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  <a href="mailto:info@ash-leemotors.co.za" style={{color: 'rgba(255, 255, 255, 0.9)'}}>info@ash-leemotors.co.za</a>
                </p>
                <div className="contact-buttons">
                  <a className="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                    WhatsApp us
                  </a>
                  <a className="btn btn-secondary" href="tel:0787764024">Call</a>
                </div>
              </div>

              <div className="contact-section">
                <h2 style={{color: 'var(--white)'}}>Parking</h2>
                <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Directions or notes about parking. Ample parking available on-site. 
                  Please use the designated customer parking area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
