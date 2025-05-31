import React from 'react';

const BackgroundLogo = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Upper Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateY(10vh)' }}>
        <div className="relative w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
          <img 
            src="/images/vsc-logo.png" 
            alt="VSC Logo" 
            className="absolute inset-0 w-full h-full object-contain opacity-[0.15] grayscale brightness-125 contrast-[1.3]"
          />
        </div>
      </div>

      {/* Lower Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateY(80vh)' }}>
        <div className="relative w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
          <img 
            src="/images/vsc-logo.png" 
            alt="VSC Logo" 
            className="absolute inset-0 w-full h-full object-contain opacity-[0.15] grayscale brightness-125 contrast-[1.3]"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundLogo; 