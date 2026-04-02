import React, { useState, useEffect } from 'react';

const VscLogo = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="vsc-logo-container">
      <div 
        className="vsc-logo-wrapper"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        <div className="logo-glow-outer"></div>
        <div className="logo-glow-inner"></div>
        <div className="logo-rays"></div>
        <img 
          src="/images/vsc-logo.png" 
          alt="VSC Logo" 
          className={`vsc-logo ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
};

export default VscLogo; 