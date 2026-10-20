import React, { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage component with:
 * - Responsive images (srcset)
 * - WebP with JPEG fallback
 * - Lazy loading with intersection observer
 * - Blur-up placeholder
 * - Progressive loading
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Get base filename without extension
  const getBasePath = (path) => {
    const match = path.match(/^(.+)\/([^\/]+)\.(jpeg|jpg|png|webp)$/i);
    if (!match) return { dir: '', filename: path };
    return {
      dir: match[1],
      filename: match[2],
      ext: match[3]
    };
  };

  // Generate responsive srcset
  const generateSrcSet = (basePath, format = 'jpeg') => {
    const { dir, filename } = getBasePath(basePath);
    const widths = [400, 800, 1200, 1920];
    
    // Check if optimized versions exist, otherwise use original
    const baseUrl = dir.includes('optimized') 
      ? `${dir}/${filename}.${format}`
      : `${dir}/optimized/${filename}.${format}`;
    
    return widths
      .map(w => {
        // For Cloudflare Pages, we can use their image resizing
        // Or use optimized versions if they exist
        return `${baseUrl}?width=${w} ${w}w`;
      })
      .join(', ');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);

  const { dir, filename } = getBasePath(src);
  const optimizedPath = dir.includes('optimized') 
    ? src 
    : `${dir}/optimized/${filename}.jpeg`;
  
  // Fallback to original if optimized doesn't exist
  const imageSrc = optimizedPath;
  const webpSrc = optimizedPath.replace(/\.(jpeg|jpg)$/i, '.webp');

  if (error) {
    // Fallback to original image on error
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        {...props}
      />
    );
  }

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden'
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {/* WebP with JPEG fallback */}
      {isInView && (
        <picture>
          <source
            srcSet={generateSrcSet(webpSrc, 'webp')}
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={imageSrc}
            srcSet={generateSrcSet(imageSrc, 'jpeg')}
            sizes={sizes}
            alt={alt}
            className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setError(true);
              setIsLoaded(true);
            }}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
            {...props}
          />
        </picture>
      )}
    </div>
  );
}

