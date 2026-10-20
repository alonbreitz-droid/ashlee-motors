import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img, { srcFor, srcSetFor } from "../components/Img";
import Icon from "../components/Icon";
import ContactButtons from "../components/ContactButtons";
import ServiceTabs, { serviceTabs } from "../components/ServiceTabs";
import CtaBand from "../components/CtaBand";
import { videoUrls } from "../config/videoUrls";
import { primary, address, hours } from "../data/business";

export default function Home() {
  const [activeTab, setActiveTab] = useState('specialized');
  const [playVideo, setPlayVideo] = useState(false);
  const services = serviceTabs.find(t => t.id === activeTab).items;

  // The hero video is decoration: skip it for reduced motion and data saver
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    setPlayVideo(!reduce && !saveData && !!videoUrls.heroVideo);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            src={srcFor('JFS_2360', 960)}
            srcSet={srcSetFor('JFS_2360')}
            sizes="100vw"
            alt=""
            fetchpriority="high"
            decoding="sync"
          />
          {playVideo && (
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={srcFor('JFS_2360', 960)}
            >
              <source src={videoUrls.heroVideo} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="container hero-content">
          <img
            src="/assets/img/logo-192.webp"
            srcSet="/assets/img/logo-192.webp 1x, /assets/img/logo-384.webp 2x"
            width="132"
            height="118"
            alt="Ash-Lee Motors"
            className="hero-logo"
          />
          <h1 id="hero-title">Our Perfection is Your Protection</h1>
          <p className="lead">
            From fault-finding to full repairs—engines, gearboxes, clutches, auto-electrical &amp; more.
          </p>
          <ContactButtons size="btn-lg" whatsappLabel="WhatsApp us" callLabel={`Call ${primary.display}`} />
          <dl className="hero-facts">
            <div><dt>Experience</dt><dd>70+ years combined</dd></div>
            <div><dt>Open</dt><dd>Mon–Fri {hours[0].time}</dd></div>
            <div><dt>Find us</dt><dd>{address.street}, Wynberg</dd></div>
          </dl>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <h2 id="services-title">Our Services</h2>
            <Link to="/services" className="text-link">All service details <Icon name="arrow" size={18} /></Link>
          </div>

          <ServiceTabs active={activeTab} onChange={setActiveTab} />

          <div className="service-list" id="services-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {services.map(service => (
              <article className="service-item" key={service.title}>
                <div className={`service-media ${service.contain ? 'contain' : ''}`}>
                  <Img name={service.image} alt="" sizes="(min-width: 1024px) 400px, (min-width: 720px) 50vw, 100vw" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="section section-alt" aria-labelledby="why-title">
        <div className="container why">
          <div className="why-media">
            <Img name="JFS_2473" alt="An Ash-lee Motors mechanic in the workshop" sizes="(min-width: 960px) 45vw, 100vw" />
          </div>
          <div>
            <h2 id="why-title">Why Ash-lee Motors</h2>
            <ul className="why-list">
              <li><Icon name="check" size={20} /><p><strong>70+ years' combined experience</strong> across diagnostics, mechanical and auto-electrical.</p></li>
              <li><Icon name="check" size={20} /><p><strong>Honest quotes &amp; clear explanations</strong> before any work begins.</p></li>
              <li><Icon name="check" size={20} /><p><strong>Quality parts &amp; workmanship</strong> backed by warranty.</p></li>
              <li><Icon name="check" size={20} /><p><strong>Quick turnarounds</strong> with same-day diagnostics available.</p></li>
            </ul>
            <p className="mt-6"><strong>Trusted locally.</strong> We service all major brands and accept Card &amp; EFT.</p>
            <ul className="why-tags">
              <li>All Major Brands</li>
              <li>Card &amp; EFT</li>
              <li>Quality Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" aria-labelledby="reviews-title">
        <div className="container">
          <div className="section-head">
            <h2 id="reviews-title">What Local Drivers Say</h2>
          </div>
          <div className="grid grid-3">
            {[
              ['Found the fault in one visit and had me back on the road the same day.', 'Thabo M.'],
              ['Straightforward pricing and great communication.', 'Sarah P.'],
              ['They fixed a persistent electrical drain no one else could.', 'Gareth D.'],
            ].map(([quote, name]) => (
              <figure className="review" key={name}>
                <blockquote><p>{quote}</p></blockquote>
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need a same-day diagnostic?" text={`WhatsApp us now or call ${primary.display}.`}>
        <ContactButtons size="btn-lg" />
      </CtaBand>
    </>
  );
}
