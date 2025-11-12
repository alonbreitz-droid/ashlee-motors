import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-background-overlay"></div>
      
      <section className="section contact-section-wrapper">
        <div className="container">
          <ScrollAnimation>
            <div className="contact-header">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-subtitle">Visit us or reach out - we're here to help with all your automotive needs</p>
            </div>
          </ScrollAnimation>

          <div className="contact-grid">
            {/* Map Section */}
            <ScrollAnimation delay={100}>
              <div className="contact-card contact-map-card">
                <div className="contact-card-header">
                  <span className="contact-icon">📍</span>
                  <h2>Find Us</h2>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps?q=16+4th+Street+Wynberg+Sandton&output=embed"
                    width="100%"
                    height="100%"
                    className="contact-map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ash-lee Motors Location - 16 4th Street, Wynberg, Sandton"
                  ></iframe>
                </div>
                <div className="map-address">
                  <p><strong>16 4th Street</strong></p>
                  <p>Wynberg, Sandton</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Methods */}
            <ScrollAnimation delay={200}>
              <div className="contact-card contact-methods-card">
                <div className="contact-card-header">
                  <span className="contact-icon">📞</span>
                  <h2>Contact Us</h2>
                </div>
                <div className="contact-methods">
                  <div className="contact-method-item">
                    <div className="contact-method-label">Primary Number</div>
                    <div className="contact-method-value">
                      <a href="https://wa.me/27787764024" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">
                        078 776 4024
                      </a>
                    </div>
                    <div className="contact-method-actions">
                      <a className="btn btn-primary btn-small" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                      <a className="btn btn-secondary btn-small" href="tel:0787764024">
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-label">Secondary Number</div>
                    <div className="contact-method-value">
                      <a href="https://wa.me/27789996243" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">
                        078 999 6243
                      </a>
                    </div>
                    <div className="contact-method-actions">
                      <a className="btn btn-primary btn-small" href="https://wa.me/27789996243" target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                      <a className="btn btn-secondary btn-small" href="tel:0789996243">
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-label">Additional Number</div>
                    <div className="contact-method-value">
                      <a href="https://wa.me/27788034782" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">
                        078 803 4782
                      </a>
                    </div>
                    <div className="contact-method-actions">
                      <a className="btn btn-primary btn-small" href="https://wa.me/27788034782" target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                      <a className="btn btn-secondary btn-small" href="tel:0788034782">
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-label">Email</div>
                    <div className="contact-method-value">
                      <a href="mailto:info@ash-leemotors.co.za" className="contact-link email-link">
                        info@ash-leemotors.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Hours & Info */}
            <ScrollAnimation delay={300}>
              <div className="contact-card contact-hours-card">
                <div className="contact-card-header">
                  <span className="contact-icon">🕐</span>
                  <h2>Opening Hours</h2>
                </div>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="hours-day">Monday - Friday</span>
                    <span className="hours-time">08:00 - 17:00</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Saturday</span>
                    <span className="hours-time closed">Closed</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Sunday</span>
                    <span className="hours-time closed">Closed</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Parking Info */}
            <ScrollAnimation delay={400}>
              <div className="contact-card contact-parking-card">
                <div className="contact-card-header">
                  <span className="contact-icon">🚗</span>
                  <h2>Parking</h2>
                </div>
                <p className="parking-info">
                  Ample parking available on-site. Please use the designated customer parking area when visiting our workshop.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
