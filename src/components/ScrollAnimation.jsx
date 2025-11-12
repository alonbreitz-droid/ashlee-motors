import { useEffect, useRef, useState, useMemo } from 'react';

export default function ScrollAnimation({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Memoize observer options
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '50px',
  }), []);

  useEffect(() => {
    // Use requestIdleCallback for better performance if available
    const scheduleCallback = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scheduleCallback(() => {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          });
        }
      },
      observerOptions
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, observerOptions]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

