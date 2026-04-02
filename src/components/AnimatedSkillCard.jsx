import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedSkillCard — Glassmorphism skill card with 3D hover and animated bar
 *
 * Props:
 *   skill   — skill name string
 *   icon    — React icon component
 *   level   — 'beginner' | 'intermediate' | 'advanced' | 'expert'
 *   color   — unused (kept for API compat), brand colors used instead
 */
const LEVELS = {
  beginner:     { width: 30,  label: 'Beginner' },
  intermediate: { width: 62,  label: 'Intermediate' },
  advanced:     { width: 85,  label: 'Advanced' },
  expert:       { width: 96,  label: 'Expert' },
};

const AnimatedSkillCard = ({ skill, icon: Icon, level }) => {
  const [hovered, setHovered] = useState(false);
  const levelInfo = LEVELS[level] || LEVELS.intermediate;

  return (
    <motion.div
      className="skill-card relative glass-card gradient-border p-5 rounded-2xl cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        boxShadow: '0 0 30px rgba(59,130,246,0.25)',
        transition: { duration: 0.25 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Blue glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      {/* Icon */}
      <motion.div
        className="flex justify-center mb-4"
        animate={{ scale: hovered ? 1.18 : 1 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {Icon && (
          <Icon
            className="text-4xl"
            style={{ color: hovered ? 'var(--blue)' : 'var(--text-muted)' }}
          />
        )}
      </motion.div>

      {/* Skill name */}
      <h3
        className="text-base font-bold text-center mb-4 transition-colors duration-300"
        style={{ color: hovered ? 'var(--text)' : 'var(--text)' }}
      >
        {skill}
      </h3>

      {/* Proficiency bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1.5"
          style={{ color: 'var(--text-muted)' }}>
          <span>Proficiency</span>
          <span style={{ color: hovered ? 'var(--blue)' : 'var(--text-muted)' }}>
            {levelInfo.label}
          </span>
        </div>
        <div className="w-full rounded-full h-1.5"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-1.5 rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--blue), var(--purple))',
              boxShadow: hovered ? '0 0 8px var(--glow-blue)' : 'none',
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${levelInfo.width}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Floating particles on hover */}
      {hovered && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: 'var(--blue)' }}
              initial={{ x: '50%', y: '50%', opacity: 0 }}
              animate={{
                x: `${20 + Math.random() * 60}%`,
                y: `${10 + Math.random() * 80}%`,
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AnimatedSkillCard;
