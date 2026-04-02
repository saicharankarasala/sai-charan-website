import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

/**
 * AnimatedCertificationCard — 3D flip card
 *
 * Front: badge image + title + issuer + date
 * Back:  description + skills + verify button
 *
 * Hover triggers the 3D flip (desktop only).
 * On mobile (pointer: coarse) shows both sides in a flat card.
 */
const AnimatedCertificationCard = ({ certification }) => {
  const [flipped, setFlipped] = useState(false);
  const isCoarse = typeof window !== 'undefined'
    ? window.matchMedia('(pointer: coarse)').matches
    : false;

  return (
    <motion.div
      className="relative h-80 cursor-pointer"
      style={{ perspective: '1200px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => !isCoarse && setFlipped(true)}
      onMouseLeave={() => !isCoarse && setFlipped(false)}
      onTouchStart={() => isCoarse && setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* ── Front Face ── */}
        <div
          className="backface-hidden absolute inset-0 glass-card rounded-2xl p-6 flex flex-col items-center justify-between overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Featured badge */}
          {certification.featured && (
            <div className="absolute top-3 left-3">
              <span className="gradient-text-blue-purple text-xs font-bold tracking-widest uppercase">
                ★ Featured
              </span>
            </div>
          )}

          {/* Cert image */}
          <div className="flex-1 flex items-center justify-center w-full py-2">
            <img
              src={certification.image}
              alt={certification.title}
              className="max-h-28 max-w-full object-contain"
            />
          </div>

          {/* Title + issuer */}
          <div className="text-center mt-2 w-full">
            <h3 className="text-sm font-bold text-[var(--text)] leading-snug mb-1 line-clamp-2">
              {certification.title}
            </h3>
            <p className="text-xs font-semibold text-[var(--blue)] mb-2">{certification.issuer}</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
              <FaCalendarAlt className="text-[10px]" />
              <span>{certification.issueDate}</span>
            </div>
          </div>

          {/* Hover hint */}
          <p className="text-[10px] text-[var(--text-muted)] mt-2 opacity-60">
            {isCoarse ? 'Tap to flip' : 'Hover to see details'}
          </p>
        </div>

        {/* ── Back Face ── */}
        <div
          className="backface-hidden absolute inset-0 glass-card rounded-2xl p-6 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          {/* Verified badge */}
          <div className="flex items-center gap-2 mb-3">
            <FaCheckCircle className="text-yellow-400 text-sm" />
            <span className="relative inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #f59e0b, #f97316)',
                color: '#000',
              }}>
              Verified
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3 flex-1 overflow-hidden">
            {certification.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {certification.skills.slice(0, 5).map((skill) => (
              <span key={skill} className="tech-badge text-[10px]">{skill}</span>
            ))}
            {certification.skills.length > 5 && (
              <span className="tech-badge text-[10px]">
                +{certification.skills.length - 5}
              </span>
            )}
          </div>

          {/* Verify link */}
          {certification.verifyUrl && (
            <motion.a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
              style={{ background: 'linear-gradient(135deg, var(--blue), var(--purple))' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px var(--glow-blue)' }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-[10px]" />
              Verify Credential
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCertificationCard;
