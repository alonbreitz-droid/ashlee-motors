import React from 'react';
import Icon from './Icon';
import { primary } from '../data/business';

// The WhatsApp + Call pair used across the site. `callLabel` lets a CTA show the number.
export default function ContactButtons({ phone = primary, size = '', whatsappLabel = 'WhatsApp', callLabel = 'Call', className = '' }) {
  return (
    <div className={`btn-row ${className}`}>
      <a className={`btn btn-primary ${size}`} href={phone.whatsapp} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" size={18} />{whatsappLabel}
      </a>
      <a className={`btn btn-ghost ${size}`} href={phone.tel}>
        <Icon name="phone" size={18} />{callLabel}
      </a>
    </div>
  );
}
