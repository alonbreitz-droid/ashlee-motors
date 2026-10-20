import React from 'react';

export default function CtaBand({ title, text, children }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band-inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
