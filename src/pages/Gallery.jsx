import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bodywork', label: 'Bodywork' },
    { id: 'mechanical', label: 'Mechanical' }
  ];

  // All gallery images - EXCLUDING images used on other pages
  // Removed: JFS_2246 (Auto-Electrical), JFS_2302 (Engine & Gearbox), JFS_2315 (Air-Con), 
  // JFS_2340 (Fleet Care), JFS_2354 (About hero), JFS_2375 (Clutch & Brakes), JFS_2510-2592 (Home & Services)
  const allImages = [
    'JFS_2082.jpeg', 'JFS_2087.jpeg', 'JFS_2089.jpeg', 'JFS_2092.jpeg', 'JFS_2097.jpeg',
    'JFS_2098.jpeg', 'JFS_2100.jpeg', 'JFS_2102.jpeg', 'JFS_2107.jpeg', 'JFS_2109-2.jpeg',
    'JFS_2117.jpeg', 'JFS_2119.jpeg', 'JFS_2121.jpeg', 'JFS_2122.jpeg',
    'JFS_2134.jpeg', 'JFS_2138.jpeg', 'JFS_2148.jpeg', 'JFS_2154.jpeg', 'JFS_2159.jpeg',
    'JFS_2167.jpeg', 'JFS_2170.jpeg', 'JFS_2172.jpeg', 'JFS_2187.jpeg', 'JFS_2189.jpeg',
    'JFS_2191.jpeg', 'JFS_2195.jpeg', 'JFS_2199.jpeg', 'JFS_2201.jpeg', 'JFS_2202.jpeg',
    'JFS_2210.jpeg', 'JFS_2222.jpeg', 'JFS_2234.jpeg', 'JFS_2237.jpeg', 'JFS_2241.jpeg',
    'JFS_2248-2.jpeg', 'JFS_2253.jpeg', 'JFS_2265.jpeg',
    'JFS_2291.jpeg', 'JFS_2296.jpeg', 'JFS_2312.jpeg',
    'JFS_2336.jpeg', 'JFS_2351.jpeg', 'JFS_2352.jpeg',
    'JFS_2368.jpeg', 'JFS_2392.jpeg',
    'JFS_2409.jpeg', 'JFS_2415.jpeg', 'JFS_2416.jpeg', 'JFS_2418.jpeg', 'JFS_2426.jpeg',
    'JFS_2427.jpeg', 'JFS_2432.jpeg', 'JFS_2434.jpeg', 'JFS_2437.jpeg', 'JFS_2441-2.jpeg',
    'JFS_2441.jpeg', 'JFS_2449-2.jpeg', 'JFS_2449.jpeg', 'JFS_2451-2.jpeg', 'JFS_2451.jpeg',
    'JFS_2452.jpeg', 'JFS_2456.jpeg', 'JFS_2458.jpeg', 'JFS_2462.jpeg', 'JFS_2473.jpeg',
    'JFS_2475.jpeg', 'JFS_2481.jpeg', 'JFS_2486.jpeg', 'JFS_2499.jpeg', 'JFS_2503.jpeg',
    'JFS_2506.jpeg', 'JFS_2579-2.jpeg', 'JFS_2582-2.jpeg', 'JFS_2590.jpeg'
  ];

  // Categorize images (alternating for variety)
  const categorizedImages = allImages.map((image, index) => ({
    id: index,
    filename: image,
    category: index % 3 === 0 ? 'bodywork' : 'mechanical'
  }));

  const filteredImages = activeFilter === 'all' 
    ? categorizedImages 
    : categorizedImages.filter(item => item.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.filename === selectedImage.filename);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredImages.findIndex(img => img.filename === selectedImage.filename);
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex(img => img.filename === selectedImage.filename);
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Gallery</h1>
          
          <div className="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => openModal(item)}
              >
                <img 
                  src={`/assets/gallery/${item.filename}`} 
                  alt={`Ash-lee Motors ${item.category}`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={item.id < 6 ? "high" : "low"}
                />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{textAlign: 'center', padding: 'var(--space-8)'}}>
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="gallery-modal" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button 
            className="gallery-modal-close" 
            onClick={closeModal}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button 
            className="gallery-modal-nav gallery-modal-prev" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img 
            src={`/assets/gallery/${selectedImage.filename}`} 
            alt={`Ash-lee Motors ${selectedImage.category} - Image ${filteredImages.findIndex(img => img.filename === selectedImage.filename) + 1} of ${filteredImages.length}`}
            onClick={(e) => e.stopPropagation()}
            loading="eager"
          />
          <div className="gallery-modal-info">
            <span>{filteredImages.findIndex(img => img.filename === selectedImage.filename) + 1} / {filteredImages.length}</span>
          </div>
          <button 
            className="gallery-modal-nav gallery-modal-next" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
