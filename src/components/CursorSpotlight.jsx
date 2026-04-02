import { useEffect, useRef } from 'react';

/**
 * CursorSpotlight — a large radial glow that follows the mouse.
 * Gives every dark page that "premium" feel (Linear, Vercel, Luma style).
 * Hidden automatically on coarse-pointer (touch) devices via media query.
 */
const CursorSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Only run on fine-pointer (desktop) devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let raf;
    let tx = -9999, ty = -9999;
    let cx = -9999, cy = -9999;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cx = lerp(cx, tx, 0.08);
      cy = lerp(cy, ty, 0.08);
      if (ref.current) {
        ref.current.style.left = cx + 'px';
        ref.current.style.top  = cy + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,212,191,0.07) 0%, rgba(167,139,250,0.025) 45%, transparent 72%)',
        pointerEvents: 'none',
        zIndex: 1,
        transform: 'translate(-50%, -50%)',
        left: '-9999px',
        top: '-9999px',
        willChange: 'left, top',
      }}
    />
  );
};

export default CursorSpotlight;
