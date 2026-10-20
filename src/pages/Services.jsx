import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon from '../components/Icon';
import ContactButtons from '../components/ContactButtons';
import ServiceTabs, { serviceTabs } from '../components/ServiceTabs';
import CtaBand from '../components/CtaBand';
import { primary } from '../data/business';

export default function Services() {
  const [activeTab, setActiveTab] = useState('specialized');
  const services = serviceTabs.find(t => t.id === activeTab).items;

  return (
    <>
      <PageHeader title="Services" image="JFS_2087">
        <p className="page-header-sub">Diagnostics &amp; Repairs in Wynberg, Sandton</p>
        <p className="lead">
          We offer a complete range of services covering every aspect of your vehicle's diagnostics, maintenance, and repair.
        </p>
      </PageHeader>

      <section className="section">
        <div className="container">
          <ServiceTabs active={activeTab} onChange={setActiveTab} />

          <div className="service-rows" id="services-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {services.map(service => (
              <Reveal as="article" key={service.title} className="service-row">
                <div className={`service-card-media ${service.contain ? 'contain' : ''}`}>
                  <Img name={service.image} alt="" sizes="(min-width: 900px) 45vw, 100vw" />
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

      <CtaBand title="Need a diagnosis or repair?" text="Get in touch today to book your vehicle or request a quote.">
        <ContactButtons size="btn-lg" whatsappLabel="WhatsApp us" callLabel={`Call ${primary.display}`} />
      </CtaBand>
    </>
  );
}
