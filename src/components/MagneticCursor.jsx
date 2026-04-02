import { useRef, useEffect } from 'react';

/**
 * MagneticCursor — Two-layer premium custom cursor
 *
 * Layer 1 (dot):    Small solid blue circle, follows mouse exactly via rAF
 * Layer 2 (ring):   Large border ring, lerped for smooth follow effect
 *
 * Expands on hover over: a, button, [data-magnetic]
 * Automatically hidden on coarse-pointer devices (via CSS in index.css)
 *
 * Renders nothing on touch devices (matchMedia pointer: coarse guard)
 */
const MagneticCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Guard: touch/coarse devices handled by CSS but also guard in JS
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouse = { x: -200, y: -200 };
    let pos   = { x: -200, y: -200 };
    let rafId;

    // Exact dot follow
    const updateDot = () => {
      dot.style.transform = `translate(${mouse.x - 6}px, ${mouse.y - 6}px)`;
    };

    // Lerped ring follow
    const updateRing = () => {
      pos.x += (mouse.x - pos.x) * 0.11;
      pos.y += (mouse.y - pos.y) * 0.11;
      ring.style.transform = `translate(${pos.x - 18}px, ${pos.y - 18}px)`;
    };

    const tick = () => {
      updateDot();
      updateRing();
      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Expand cursor on interactive elements
    const onHoverIn = () => {
      dot.classList.add('expanded');
      ring.classList.add('expanded');
    };
    const onHoverOut = () => {
      dot.classList.remove('expanded');
      ring.classList.remove('expanded');
    };

    document.addEventListener('mousemove', onMouseMove);

    // Attach to all interactive elements (MutationObserver for dynamic elements)
    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [data-magnetic]').forEach((el) => {
        el.removeEventListener('mouseenter', onHoverIn);
        el.removeEventListener('mouseleave', onHoverOut);
        el.addEventListener('mouseenter', onHoverIn);
        el.addEventListener('mouseleave', onHoverOut);
      });
    };

    attachHoverListeners();

    // Re-attach when DOM changes (React re-renders)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot — exact position */}
      <div ref={dotRef} className="magnetic-cursor" aria-hidden="true" />
      {/* Ring — lerped follow */}
      <div ref={ringRef} className="magnetic-cursor-follower" aria-hidden="true" />
    </>
  );
};

export default MagneticCursor;
