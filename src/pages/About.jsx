import React from 'react';

export default function About() {
  // Unique images for About page - not used elsewhere
  const aboutImages = [
    'JFS_2354.jpeg', // Main hero image - vintage signs/workshop atmosphere
    'grandpa.png', // History section - team photo
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>About Us</h1>
          
          <div style={{
            width: '100%',
            height: '60vh',
            minHeight: '400px',
            overflow: 'hidden',
            borderRadius: 'var(--radius-16)',
            marginBottom: 'var(--space-6)',
            position: 'relative'
          }}>
            <img 
              src={`/assets/gallery/${aboutImages[0]}`} 
              alt="Ash-lee Motors workshop"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>

          <div className="grid grid-2 mt-4">
            <div>
              <h2>Mission &amp; Values</h2>
              <p>
                At Ash-lee Motors, we believe in doing the job right the first time. With over 70 years of combined experience 
                in automotive diagnostics, mechanical repairs, and auto-electrical work, we've built our reputation on honesty, 
                quality, and reliability.
              </p>
              <p>
                Our mission is to provide all clientele with honest, transparent Services backed by dealer-level 
                diagnostic tools and quality parts. We take the time to explain what's wrong with your vehicle and provide clear, 
                upfront quotes before any work begins.
              </p>
              <p>
                We're committed to quick turnarounds without compromising on quality. Whether you need a same-day diagnostic 
                or a full engine rebuild, we treat every vehicle with the care and attention it deserves.
              </p>
              <video
                controls
                autoPlay
                loop
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-16)',
                  marginTop: 'var(--space-6)'
                }}
              >
                <source src="/assets/Ash-Lee reel 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h2>History</h2>
              <img
                src={`/assets/${aboutImages[1]}`}
                alt="Ash-lee Motors team"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-8)',
                  marginBottom: 'var(--space-4)',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)'
                }}
              />
              <p>
                Ash-lee Motors has been serving the community for years, building trust through consistent, 
                quality workmanship and honest customer service. Over 3 generations of a grassroots family run business.
              </p>
              <p>
                Our team brings together decades of experience across all aspects of vehicle diagnostics and repair. From 
                computer diagnostics using the latest dealer-level tools, to complex mechanical and auto-electrical work, 
                we've seen it all.
              </p>
              <p>
                We're authorized to work on a wide range of vehicle brands and models. We've 
                helped thousands of local drivers get back on the road safely and quickly.
              </p>
              <p>
                Today, we continue to invest in the latest diagnostic equipment and training, ensuring we can handle everything 
                from routine maintenance to the most complex fault-finding challenges.
              </p>
            </div>
          </div>

          <div className="card mt-4">
            <h2>Why Choose Us</h2>
            <div className="grid grid-2">
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>70+ years' combined experience</strong> across diagnostics, mechanical and auto-electrical
                </li>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>Dealer-level diagnostic tools</strong> for all major vehicle brands
                </li>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>Honest quotes</strong> with clear explanations before work begins
                </li>
              </ul>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>Quality parts &amp; workmanship</strong> backed by warranty
                </li>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>Quick turnarounds</strong> with same-day diagnostics available
                </li>
                <li style={{marginBottom: 'var(--space-3)'}}>
                  <strong>Trusted locally</strong> - Serving the community for generations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
