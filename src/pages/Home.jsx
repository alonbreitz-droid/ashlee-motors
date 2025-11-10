import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('specialized');

  // Unique images for Home page service cards - different from Services page
  const homeServiceImages = {
    'Computer Diagnostics': 'JFS_2548.jpeg',
    'Engine & Gearbox': 'JFS_2302.jpeg',
    'Clutch & Brakes': 'JFS_2375.jpeg',
    'Auto-Electrical': 'JFS_2246.jpeg',
    'Air-Con & Cooling': 'JFS_2315.jpeg',
    'Fleet Care': 'JFS_2510.jpeg'
  };

  const specializedServices = [
    {
      title: 'Computer Diagnostics',
      description: 'Dealer-level tools for all major brands. Fault code reading, live-data analysis, coding & resets.',
      image: '/assets/GT-LTDM2-1_600x.jpg.webp',
      buttonText: 'Call for diagnostic'
    },
    {
      title: 'Engine & Gearbox',
      description: 'Repairs, replacements and services for engines and manual/auto gearboxes. Timing sets and seals.',
      image: `/assets/gallery/${homeServiceImages['Engine & Gearbox']}`,
      buttonText: 'Get a quote'
    },
    {
      title: 'Clutch & Brakes',
      description: 'Clutch kits, hydraulics, discs & pads, ABS fault-finding and brake fluid flushes.',
      image: `/assets/gallery/${homeServiceImages['Clutch & Brakes']}`,
      buttonText: 'Book inspection'
    },
    {
      title: 'Auto-Electrical',
      description: 'Starters, alternators, wiring repairs, parasitic drain tests, ECU/BCM coding and resets.',
      image: `/assets/gallery/${homeServiceImages['Auto-Electrical']}`,
      buttonText: 'Fix electrical issue'
    },
    {
      title: 'Air-Con & Cooling',
      description: 'Regas, pressure tests, compressors, condensers, radiators, thermostats & cooling diagnostics.',
      image: `/assets/gallery/${homeServiceImages['Air-Con & Cooling']}`,
      buttonText: 'Regas or repair'
    },
    {
      title: 'Fleet Care',
      description: 'Priority booking, preventative schedules, consolidated invoicing and digital service records.',
      image: '/assets/gallery/JFS_2340.jpeg',
      buttonText: 'Enquire about fleet'
    }
  ];

  const generalServices = [
    {
      title: 'Oil Changes & Service',
      description: 'Regular oil changes, filter replacements, and scheduled maintenance to keep your vehicle running smoothly.',
      image: '/assets/gallery/JFS_2201.jpeg',
      buttonText: 'Book service'
    },
    {
      title: 'Emergency Light & Spotlight Fitment',
      description: 'Professional installation of emergency lights, spotlights, and auxiliary lighting systems for vehicles.',
      image: '/assets/elfit.jpg',
      buttonText: 'Get a quote'
    },
    {
      title: 'Battery Services',
      description: 'Battery testing, replacement, and charging system diagnostics to keep you on the road.',
      image: '/assets/gallery/JFS_2127.jpeg',
      buttonText: 'Test battery'
    },
    {
      title: 'Vehicle Inspections',
      description: 'Comprehensive vehicle inspections, pre-purchase checks, and roadworthy certifications.',
      image: '/assets/gallery/JFS_2268.jpeg',
      buttonText: 'Book inspection'
    },
    {
      title: 'General Repairs',
      description: 'All general automotive repairs and maintenance work performed by experienced technicians.',
      image: '/assets/gallery/JFS_2187.jpeg',
      buttonText: 'Get a quote'
    },
    {
      title: 'Recovery Services',
      description: 'Vehicle recovery and roadside assistance to get you back on the road quickly and safely.',
      image: '/assets/gallery/JFS_2343.jpeg',
      buttonText: 'Call recovery'
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/Ash-Lee Reel 1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <img src="/assets/logo.PNG" alt="Ash-Lee Motors" className="hero-logo" />
          <h1>Our Perfection is Your Protection</h1>
          <p className="lead">
            From fault-finding to full repairs—engines, gearboxes, clutches, auto-electrical &amp; more.
          </p>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <a className="btn btn-secondary btn-lg" href="tel:0787764024">Call 078 776 4024</a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          
          <div className="gallery-filters" style={{marginBottom: 'var(--space-6)'}}>
            <button
              className={`filter-btn ${activeTab === 'specialized' ? 'active' : ''}`}
              onClick={() => setActiveTab('specialized')}
            >
              Specialized Services
            </button>
            <button
              className={`filter-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General Services
            </button>
          </div>

          <div className="grid grid-3 mt-4">
            {(activeTab === 'specialized' ? specializedServices : generalServices).map((service, index) => (
              <article key={index} className="card service-card">
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-8)',
                    marginBottom: 'var(--space-4)'
                  }}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div style={{display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap'}}>
                  <a className="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn btn-secondary btn-sm" href="tel:0787764024">Call</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="section">
        <div className="container">
          <h2>Why Ash-lee Motors</h2>
          <div className="grid grid-2 mt-4">
            <ul className="card" style={{listStyle: 'none', padding: 'var(--space-6)'}}>
              <li><strong>70+ years' combined experience</strong> across diagnostics, mechanical and auto-electrical.</li>
              <li className="mt-3"><strong>Honest quotes &amp; clear explanations</strong> before any work begins.</li>
              <li className="mt-3"><strong>Quality parts &amp; workmanship</strong> backed by warranty.</li>
              <li className="mt-3"><strong>Quick turnarounds</strong> with same-day diagnostics available.</li>
            </ul>
            <div className="card">
              <p className="mt-0"><strong>Trusted locally.</strong> We service all major brands and accept Card &amp; EFT.</p>
              <div className="trust-strip mt-3">
                <span>All Major Brands</span>
                <span>Card &amp; EFT</span>
                <span>Quality Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <h2>What Local Drivers Say</h2>
          <div className="grid grid-3 mt-4">
            <blockquote className="review">
              "Found the fault in one visit and had me back on the road the same day."<br/>— <em>Thabo M.</em>
            </blockquote>
            <blockquote className="review">
              "Straightforward pricing and great communication."<br/>— <em>Sarah P.</em>
            </blockquote>
            <blockquote className="review">
              "They fixed a persistent electrical drain no one else could."<br/>— <em>Gareth D.</em>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container card">
          <div className="grid grid-2">
            <div>
              <h3 className="mt-0">Need a same-day diagnostic?</h3>
              <p className="mt-2">WhatsApp us now or call 078 776 4024.</p>
            </div>
            <div style={{display:"flex", gap:"12px", alignItems:"center", justifyContent:"flex-end", flexWrap: "wrap"}}>
              <a className="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="btn btn-secondary" href="tel:0787764024">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
