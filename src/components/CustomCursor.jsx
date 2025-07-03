import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-[#e13a7a] rounded-full pointer-events-none z-[9999]"
      style={{ transform: 'translate3d(-100px, -100px, 0)', willChange: 'transform' }}
    />
  );
};

export default CustomCursor; 