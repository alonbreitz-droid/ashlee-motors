import React, { useState, useEffect, useRef, useCallback } from 'react';
import PageHeader from '../components/PageHeader';
import Img, { srcFor } from '../components/Img';
import Icon from '../components/Icon';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const touchX = useRef(null);

  // Photos grouped by what they show, one frame per burst. Order within a group is the display order.
  const groups = [
    {
      id: 'repairs',
      label: 'Repairs & Service',
      images: ['JFS_2087', 'JFS_2199', 'JFS_2265', 'JFS_2237', 'JFS_2201', 'JFS_2291', 'JFS_2098', 'JFS_2392',
        'JFS_2296', 'JFS_2191', 'JFS_2195', 'JFS_2336', 'JFS_2312', 'JFS_2368', 'JFS_2082', 'JFS_2187',
        'JFS_2253', 'JFS_2100', 'JFS_2248-2']
    },
    {
      id: 'engines',
      label: 'Engine Builds',
      images: ['JFS_2107', 'JFS_2148', 'JFS_2121', 'JFS_2117', 'JFS_2159', 'JFS_2154', 'JFS_2138']
    },
    {
      id: 'workshop',
      label: 'The Workshop',
      images: ['JFS_2352', 'JFS_2102', 'JFS_2172', 'JFS_2134', 'JFS_2210', 'JFS_2351', 'JFS_2222', 'JFS_2167']
    },
    {
      id: 'team',
      label: 'The Team',
      images: ['JFS_2582-2', 'JFS_2473', 'JFS_2416', 'JFS_2503', 'JFS_2434', 'JFS_2486', 'JFS_2590', 'JFS_2451',
        'JFS_2506', 'JFS_2481', 'JFS_2441', 'JFS_2499', 'JFS_2458', 'JFS_2452', 'JFS_2579-2',
        'JFS_2475', 'JFS_2409', 'JFS_2170']
    }
  ];
  // Near-duplicate frames from the same bursts, held back to keep the grid varied.
  // Move any of these into a group above to show it again.
  // 'JFS_2089', 'JFS_2092', 'JFS_2097', 'JFS_2109-2', 'JFS_2119', 'JFS_2122', 'JFS_2189', 'JFS_2202',
  // 'JFS_2234', 'JFS_2241', 'JFS_2415', 'JFS_2418', 'JFS_2426', 'JFS_2427', 'JFS_2432', 'JFS_2437',
  // 'JFS_2441-2', 'JFS_2449', 'JFS_2449-2', 'JFS_2451-2', 'JFS_2456', 'JFS_2462'

  const filters = [{ id: 'all', label: 'All' }, ...groups.map(g => ({ id: g.id, label: g.label }))];

  const visibleGroups = activeFilter === 'all' ? groups : groups.filter(g => g.id === activeFilter);

  // Flat list across the visible groups, so the lightbox can step through everything on screen
  const filteredImages = visibleGroups.flatMap(g => g.images.map(name => ({ name, category: g.id })));
  const indexOf = (name) => filteredImages.findIndex(img => img.name === name);

  const labelFor = (id) => groups.find(g => g.id === id).label;

  const selectedImage = selectedIndex === null ? null : filteredImages[selectedIndex];
  const isOpen = selectedImage !== null;

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback((dir) => {
    setSelectedIndex(i => (i + dir + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useEffect(() => {
    if (!isOpen) return undefined;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        // keep focus inside the lightbox
        const els = [...dialogRef.current.querySelectorAll('button')];
        const i = els.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); els[els.length - 1].focus(); }
        else if (!e.shiftKey && i === els.length - 1) { e.preventDefault(); els[0].focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal, step]);

  // Preload the neighbours so next/prev feel instant
  useEffect(() => {
    if (selectedIndex === null) return;
    [1, -1].forEach(d => {
      const n = filteredImages[(selectedIndex + d + filteredImages.length) % filteredImages.length];
      new Image().src = srcFor(n.name, 1600);
    });
  }, [selectedIndex, filteredImages]);

  return (
    <>
      <PageHeader title="Gallery" image="JFS_2172" />

      <section className="section">
        <div className="container">
          <div className="tabs" role="group" aria-label="Filter photos">
            {filters.map(filter => (
              <button
                key={filter.id}
                className="tab"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="gallery-count" aria-live="polite">{filteredImages.length} photos</p>

          {visibleGroups.map(group => (
            <section key={group.id} className="gallery-group" aria-labelledby={`group-${group.id}`}>
              <div className="gallery-group-head">
                <h2 id={`group-${group.id}`}>{group.label}</h2>
                <span>{group.images.length}</span>
              </div>
              <ul className="gallery-grid">
                {group.images.map(name => {
                  const i = indexOf(name);
                  return (
                    <li key={name}>
                      <button
                        className="gallery-item"
                        onClick={(e) => { openerRef.current = e.currentTarget; setSelectedIndex(i); }}
                        aria-label={`Open photo ${i + 1}: ${group.label}`}
                      >
                        <Img name={name} alt="" sizes="(min-width: 1100px) 300px, (min-width: 720px) 33vw, 50vw" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          {filteredImages.length === 0 && (
            <p>No images found in this category.</p>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          ref={dialogRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={(e) => { if (e.target === e.currentTarget || e.target.classList.contains('lightbox-stage')) closeModal(); }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="lightbox-bar">
            <span aria-live="polite">{labelFor(selectedImage.category)} · {selectedIndex + 1} / {filteredImages.length}</span>
            <button ref={closeRef} className="icon-btn" onClick={closeModal} aria-label="Close gallery">
              <Icon name="close" size={22} />
            </button>
          </div>
          <div className="lightbox-stage">
            <img
              key={selectedImage.name}
              src={srcFor(selectedImage.name, 1600)}
              alt={`Ash-lee Motors ${labelFor(selectedImage.category)} - Image ${selectedIndex + 1} of ${filteredImages.length}`}
            />
          </div>
          <div className="lightbox-nav">
            <button className="icon-btn" onClick={() => step(-1)} aria-label="Previous image">
              <Icon name="left" size={24} />
            </button>
            <button className="icon-btn" onClick={() => step(1)} aria-label="Next image">
              <Icon name="right" size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
