/**
 * ScrollBand — an infinitely scrolling text strip.
 * Drops between sections to add kinetic energy. Works like the homepage marquee
 * but styled as a full-width divider band.
 */
const DEFAULT_TEXT =
  'SOFTWARE ENGINEER · CLOUD ARCHITECT · AWS CERTIFIED · FULL STACK · DATA ENGINEERING · TERRAFORM · PYTHON · REACT · AVAILABLE FOR HIRE · ';

const ScrollBand = ({
  text = DEFAULT_TEXT,
  reverse = false,
  speed = '40s',
  dim = false,
}) => {
  // Repeat enough times to guarantee seamless loop
  const repeated = Array(6).fill(text);

  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        padding: '11px 0',
        background: dim ? 'rgba(255,255,255,0.01)' : 'transparent',
      }}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{
          animationDuration: speed,
          animationDirection: reverse ? 'reverse' : 'normal',
          gap: 0,
        }}
      >
        {repeated.map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: dim ? 'rgba(255,255,255,0.15)' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
              paddingRight: '2rem',
              opacity: dim ? 0.6 : 1,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollBand;
