import React from 'react';
import Img from './Img';

// Top band for inner pages: a client photo under a solid dark overlay, title on top.
// Under the 72% overlay a smaller file looks the same on phones, hence the 60vw sizes.
export default function PageHeader({ eyebrow, title, children, image, position = 'center' }) {
  return (
    <header className="page-header">
      <div className="page-header-media" aria-hidden="true">
        <Img name={image} alt="" sizes="(max-width: 767px) 60vw, 100vw" priority style={{ objectPosition: position }} />
      </div>
      <div className="container page-header-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
