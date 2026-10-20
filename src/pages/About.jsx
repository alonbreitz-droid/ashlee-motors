import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { videoUrls } from '../config/videoUrls';

const reasons = [
  { title: "70+ years' combined experience", text: 'across diagnostics, mechanical and auto-electrical' },
  { title: 'Dealer-level diagnostic tools', text: 'for all major vehicle brands' },
  { title: 'Honest quotes', text: 'with clear explanations before work begins' },
  { title: 'Quality parts & workmanship', text: 'backed by warranty' },
  { title: 'Quick turnarounds', text: 'with same-day diagnostics available' },
  { title: 'Trusted locally', text: 'Serving the community for generations' },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="Family run · 3 generations" title="About Us" image="JFS_2354" position="center 30%" />

      <section className="section">
        <div className="container about-intro">
          <Reveal>
            <h2>Mission &amp; Values</h2>
            <p className="lead">
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
          </Reveal>
          {videoUrls.aboutVideo && (
            <Reveal delay={100} style={{ display: 'grid' }}>
              <video
                className="about-video"
                controls
                playsInline
                preload="none"
                poster="/assets/img/about-video-poster-720.webp"
                aria-label="Video: inside the Ash-lee Motors workshop"
              >
                <source src={videoUrls.aboutVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container history">
          <Reveal>
            <h2>History</h2>
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
          </Reveal>
          <Reveal delay={100} className="history-photos">
            <figure>
              <div className="team-photo">
                <Img name="JFS_2582" alt="The Ash-lee Motors team in the workshop" sizes="(min-width: 960px) 40vw, 100vw" />
              </div>
            </figure>
            <figure className="heritage">
              <img src="/assets/grandpa.png" width="194" height="113" alt="Ash-lee Motors team" loading="lazy" decoding="async" />
              <p>Over 3 generations of a grassroots family run business.</p>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Why Choose Us</h2>
          </Reveal>
          <Reveal className="feature-grid">
            {reasons.map(r => (
              <div className="feature" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
