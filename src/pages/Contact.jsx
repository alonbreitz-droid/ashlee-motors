import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { phones, email, address, hours, mapEmbed } from '../data/business';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in Touch" image="JFS_2360">
        <p className="lead">Visit us or reach out - we're here to help with all your automotive needs</p>
      </PageHeader>

      <section className="section">
        <div className="container contact-layout">
          <Reveal className="panel">
            <h2 className="panel-title"><Icon name="phone" size={26} />Contact Us</h2>
            <div className="number-list">
              {phones.map(p => (
                <div className="number" key={p.tel}>
                  <div>
                    <div className="number-label">{p.label}</div>
                    <a className="number-value" href={p.whatsapp} target="_blank" rel="noreferrer">{p.display}</a>
                  </div>
                  <div className="btn-row">
                    <a className="btn btn-primary btn-sm" href={p.whatsapp} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${p.display}`}>
                      <Icon name="whatsapp" size={16} />WhatsApp
                    </a>
                    <a className="btn btn-ghost btn-sm" href={p.tel} aria-label={`Call ${p.display}`}>
                      <Icon name="phone" size={16} />Call
                    </a>
                  </div>
                </div>
              ))}
              <div className="number">
                <div>
                  <div className="number-label">Email</div>
                  <a className="number-value email-value" href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="btn-row">
                  <a className="btn btn-ghost btn-sm" href={`mailto:${email}`} aria-label={`Email ${email}`}>
                    <Icon name="mail" size={16} />Email
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="contact-side">
            <Reveal className="panel" delay={80}>
              <h2 className="panel-title"><Icon name="pin" size={26} />Find Us</h2>
              <div className="map-frame">
                <iframe
                  src={mapEmbed}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ash-lee Motors Location - 16 4th Street, Wynberg, Sandton"
                ></iframe>
              </div>
              <p className="address-line">{address.street}</p>
              <p>{address.area}</p>
            </Reveal>

            <Reveal className="panel" delay={120}>
              <h2 className="panel-title"><Icon name="clock" size={26} />Opening Hours</h2>
              <table className="hours-table">
                <tbody>
                  {hours.map(h => (
                    <tr key={h.day}>
                      <th scope="row">{h.day}</th>
                      <td className={h.closed ? 'closed' : ''}>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal className="panel" delay={160}>
              <h2 className="panel-title"><Icon name="car" size={26} />Parking</h2>
              <p>
                Ample parking available on-site. Please use the designated customer parking area when visiting our workshop.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
