import React, { useRef } from 'react';
import { specializedServices, generalServices } from '../data/business';

export const serviceTabs = [
  { id: 'specialized', label: 'Specialized Services', items: specializedServices },
  { id: 'general', label: 'General Services', items: generalServices },
];

// ARIA tablist for the two service groups; arrow keys move between tabs.
export default function ServiceTabs({ active, onChange }) {
  const refs = useRef([]);

  const onKeyDown = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + serviceTabs.length) % serviceTabs.length;
    onChange(serviceTabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="tabs" role="tablist" aria-label="Service type">
      {serviceTabs.map((t, i) => (
        <button
          key={t.id}
          ref={el => (refs.current[i] = el)}
          role="tab"
          id={`tab-${t.id}`}
          aria-selected={active === t.id}
          aria-controls="services-panel"
          tabIndex={active === t.id ? 0 : -1}
          className="tab"
          onClick={() => onChange(t.id)}
          onKeyDown={(e) => onKeyDown(e, i)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
