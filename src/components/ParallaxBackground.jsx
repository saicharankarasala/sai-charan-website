import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Example: Floating SVG circle and gradient */}
      <svg
        width="100vw"
        height="100vh"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `translateY(${offset * 0.15}px)`,
          transition: 'transform 0.2s',
        }}
      >
        <defs>
          <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#00ffee33" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80%" cy="20%" r="180" fill="url(#bg-grad)" />
        <circle cx="20%" cy="80%" r="120" fill="#00ffee11" />
      </svg>
    </div>
  );
};

export default ParallaxBackground; 