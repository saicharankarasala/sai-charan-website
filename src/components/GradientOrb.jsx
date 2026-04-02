/**
 * GradientOrb — Animated background blob (depth-0 layer)
 * Pure CSS, no JS. Parent must be position: relative or absolute.
 *
 * Props:
 *   color     — CSS color string (rgba recommended)
 *   size      — CSS size string, e.g. "600px" or "40vw"
 *   className — Tailwind classes for positioning + animation override
 */
const GradientOrb = ({ color = 'rgba(59,130,246,0.18)', size = '500px', className = '' }) => (
  <div
    className={`gradient-orb ${className}`}
    style={{ width: size, height: size, background: color }}
    aria-hidden="true"
  />
);

export default GradientOrb;
