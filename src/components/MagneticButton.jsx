import { useRef, useEffect } from 'react';
import { addMagnetic } from '../utils/animations';

/**
 * MagneticButton — Gradient shimmer button with magnetic hover pull
 *
 * Props:
 *   children    — button content
 *   className   — extra Tailwind classes (appended after base styles)
 *   variant     — 'primary' (gradient fill) | 'ghost' (outline)
 *   onClick     — click handler
 *   type        — button type attribute
 *   disabled    — disabled state
 *   href        — if provided, renders as <a> tag
 */
const MagneticButton = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  href,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const cleanup = addMagnetic(ref.current, 0.35);
    return cleanup;
  }, []);

  const baseClass = variant === 'ghost' ? 'btn-ghost' : 'btn-shimmer';
  const combined = `${baseClass} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={combined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
