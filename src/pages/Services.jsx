import React, { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('specialized');

  // Unique images for Services page - different from Home page
  const serviceImages = {
    'Computer Diagnostics': '/assets/GT-LTDM2-1_600x.jpg.webp',
    'Engine & Gearbox': 'JFS_2302.jpeg',
    'Clutch & Brakes': 'JFS_2375.jpeg',
    'Auto-Electrical': 'JFS_2246.jpeg',
    'Air-Con & Cooling': 'JFS_2315.jpeg',
    'Fleet Care': 'JFS_2340.jpeg'
  };

  const specializedServices = [
    {
      title: 'Computer Diagnostics',
      description: 'Dealer-level tools for all major brands. Fault code reading, live-data analysis, coding & resets.',
      details: [
        'Fault code reading and clearing',
        'Live-data analysis',
        'ECU/BCM coding and programming',
        'Module resets and adaptations',
        'All major vehicle brands supported'
      ],
      image: serviceImages['Computer Diagnostics']
    },
    {
      title: 'Engine & Gearbox',
      description: 'Repairs, replacements and services for engines and manual/auto gearboxes. Timing sets and seals.',
      details: [
        'Engine repairs and rebuilds',
        'Gearbox repairs (manual and automatic)',
        'Timing belt/chain replacement',
        'Seal and gasket replacement',
        'Oil leaks and diagnostics'
      ],
      image: serviceImages['Engine & Gearbox']
    },
    {
      title: 'Clutch & Brakes',
      description: 'Clutch kits, hydraulics, discs & pads, ABS fault-finding and brake fluid flushes.',
      details: [
        'Clutch kit replacement',
        'Clutch master and slave cylinder repairs',
        'Brake disc and pad replacement',
        'Brake disc skimming',
        'ABS fault diagnosis and repair',
        'Brake fluid flush and replacement'
      ],
      image: serviceImages['Clutch & Brakes']
    },
    {
      title: 'Auto-Electrical',
      description: 'Starters, alternators, wiring repairs, parasitic drain tests, ECU/BCM coding and resets.',
      details: [
        'Starter motor repair and replacement',
        'Alternator repair and replacement',
        'Wiring fault diagnosis and repair',
        'Battery drain testing',
        'ECU/BCM coding and resets',
        'Electrical system diagnostics'
      ],
      image: serviceImages['Auto-Electrical']
    },
    {
      title: 'Air-Con & Cooling',
      description: 'Regas, pressure tests, compressors, condensers, radiators, thermostats & cooling diagnostics.',
      details: [
        'Air-conditioning regas',
        'Pressure and leak testing',
        'Compressor repair and replacement',
        'Condenser replacement',
        'Radiator repair and replacement',
        'Thermostat replacement',
        'Cooling system diagnostics'
      ],
      image: serviceImages['Air-Con & Cooling']
    },
    {
      title: 'Fleet Care',
      description: 'Priority booking, preventative schedules, consolidated invoicing and digital service records.',
      details: [
        'Priority booking for fleet vehicles',
        'Preventative maintenance schedules',
        'Consolidated invoicing',
        'Digital service records',
        'Fleet management reporting',
        'Dedicated account management'
      ],
      image: serviceImages['Fleet Care']
    }
  ];

  const generalServices = [
    {
      title: 'Oil Changes & Service',
      description: 'Regular oil changes, filter replacements, and scheduled maintenance to keep your vehicle running smoothly.',
      details: [
        'Engine oil changes',
        'Oil filter replacement',
        'Air filter replacement',
        'Cabin filter replacement',
        'Fuel filter replacement',
        'Scheduled service intervals'
      ],
      image: 'JFS_2201.jpeg'
    },
    {
      title: 'Emergency Light & Spotlight Fitment',
      description: 'Professional installation of emergency lights, spotlights, and auxiliary lighting systems for vehicles.',
      details: [
        'Emergency light installation',
        'Spotlight fitment',
        'Auxiliary lighting systems',
        'LED light bar installation',
        'Wiring and electrical connections',
        'Switch and control panel installation'
      ],
      image: '/assets/elfit.jpg'
    },
    {
      title: 'Battery Services',
      description: 'Battery testing, replacement, and charging system diagnostics to keep you on the road.',
      details: [
        'Battery testing',
        'Battery replacement',
        'Charging system diagnostics',
        'Alternator testing',
        'Starter motor testing',
        'Battery terminal cleaning'
      ],
      image: 'JFS_2127.jpeg'
    },
    {
      title: 'Vehicle Inspections',
      description: 'Comprehensive vehicle inspections, pre-purchase checks, and roadworthy certifications.',
      details: [
        'Pre-purchase inspections',
        'Roadworthy certifications',
        'Comprehensive vehicle checks',
        'Safety inspections',
        'Emission testing',
        'Service history reviews'
      ],
      image: 'JFS_2268.jpeg'
    },
    {
      title: 'General Repairs',
      description: 'All general automotive repairs and maintenance work performed by experienced technicians.',
      details: [
        'General mechanical repairs',
        'Suspension repairs',
        'Exhaust system repairs',
        'Steering repairs',
        'Drivetrain repairs',
        'General maintenance'
      ],
      image: 'JFS_2187.jpeg'
    },
    {
      title: 'Recovery Services',
      description: 'Vehicle recovery and roadside assistance to get you back on the road quickly and safely.',
      details: [
        'Vehicle recovery',
        'Roadside assistance',
        'Breakdown recovery',
        'Towing services',
        'Emergency repairs',
        '24/7 availability'
      ],
      image: 'JFS_2343.jpeg'
    }
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Services</h1>
          <h2>Diagnostics &amp; Repairs in Wynberg, Sandton</h2>
          <p className="lead">
            We offer a complete range of services covering every aspect of your vehicle's diagnostics, maintenance, and repair.
          </p>

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
                  src={service.image.startsWith('/assets/') ? service.image : `/assets/gallery/${service.image}`} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-8)',
                    marginBottom: 'var(--space-4)'
                  }}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul style={{marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-6)'}}>
                  {service.details.map((detail, i) => (
                    <li key={i} style={{marginBottom: 'var(--space-2)'}}>{detail}</li>
                  ))}
                </ul>
                <div style={{display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap'}}>
                  <a className="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn btn-secondary btn-sm" href="tel:0787764024">
                    Call
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container card">
          <div style={{textAlign: 'center'}}>
            <h3 className="mt-0">Need a diagnosis or repair?</h3>
            <p>Get in touch today to book your vehicle or request a quote.</p>
            <div className="actions" style={{marginTop: 'var(--space-6)'}}>
              <a className="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">WhatsApp us</a>
              <a className="btn btn-secondary" href="tel:0787764024">Call 078 776 4024</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
