import React from 'react';
import Img from './Img';

// Top band for inner pages: a client photo under a solid dark overlay, title on top.
export default function PageHeader({ eyebrow, title, children, image, position = 'center' }) {
  return (
    <header className="page-header">
      <div className="page-header-media" aria-hidden="true">
        <Img name={image} alt="" sizes="100vw" priority style={{ objectPosition: position }} />
      </div>
      <div className="container page-header-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
