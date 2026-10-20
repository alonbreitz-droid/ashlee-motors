import React, { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon from '../components/Icon';
import ContactButtons from '../components/ContactButtons';
import { specializedServices, generalServices, primary } from '../data/business';

const tabs = [
  { id: 'specialized', label: 'Specialized Services', items: specializedServices },
  { id: 'general', label: 'General Services', items: generalServices },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('specialized');
  const tabRefs = useRef([]);
  const services = tabs.find(t => t.id === activeTab).items;

  const onTabKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActiveTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <PageHeader eyebrow="What we do" title="Services" image="JFS_2087">
        <p className="page-header-sub">Diagnostics &amp; Repairs in Wynberg, Sandton</p>
        <p className="lead">
          We offer a complete range of services covering every aspect of your vehicle's diagnostics, maintenance, and repair.
        </p>
      </PageHeader>

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Service type">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                ref={el => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={activeTab === t.id}
                aria-controls="services-panel"
                tabIndex={activeTab === t.id ? 0 : -1}
                className="tab"
                onClick={() => setActiveTab(t.id)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="service-rows" id="services-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {services.map((service, index) => (
              <Reveal as="article" key={service.title} className="service-row">
                <div className={`service-card-media ${service.contain ? 'contain' : ''}`}>
                  <Img name={service.image} alt="" sizes="(min-width: 900px) 45vw, 100vw" />
                  <span className="service-card-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="service-row-body">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="checklist two">
                    {service.details.map(detail => (
                      <li key={detail}><Icon name="check" size={18} />{detail}</li>
                    ))}
                  </ul>
                  <ContactButtons />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-band-inner">
          <div>
            <h2 id="cta-title">Need a diagnosis or repair?</h2>
            <p>Get in touch today to book your vehicle or request a quote.</p>
          </div>
          <ContactButtons size="btn-lg" whatsappLabel="WhatsApp us" callLabel={`Call ${primary.display}`} />
        </div>
      </section>
    </>
  );
}
