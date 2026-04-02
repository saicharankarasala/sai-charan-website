import { useRef, useEffect } from 'react';
import { addTilt } from '../utils/animations';

/**
 * TiltCard — Glassmorphism card with 3D tilt on hover (desktop only)
 *
 * Props:
 *   children    — card content
 *   className   — extra Tailwind classes
 *   maxTilt     — max tilt degrees (default 10)
 *   noBorder    — skip gradient border hover effect
 *   padding     — inner padding class (default 'p-6')
 */
const TiltCard = ({
  children,
  className = '',
  maxTilt = 10,
  noBorder = false,
  padding = 'p-6',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const cleanup = addTilt(ref.current, maxTilt);
    return cleanup;
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={`glass-card ${noBorder ? '' : 'gradient-border'} ${padding} ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
