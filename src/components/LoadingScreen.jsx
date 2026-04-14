import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientOrb from './GradientOrb';

/**
 * LoadingScreen — Cinematic curtain-reveal loading screen
 *
 * Features:
 * - Animated gradient orbs behind content
 * - VSC logo with floating animation
 * - Name reveals letter-by-letter with clip-path
 * - Gradient progress bar (blue → purple)
 * - Curtain-split exit: left panel flies left, right flies right
 *
 * Gates to sessionStorage so it only shows on first visit.
 */
const LETTERS = 'Venkata Sai Charan'.split('');

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress]   = useState(0);
  const [exiting, setExiting]     = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 1.8;
        if (next >= 100) {
          clearInterval(id);
          // Brief pause then trigger curtain exit
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 900);
          }, 300);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        /* ── Loading state ── */
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--bg)' }}
        >
          {/* Background orbs */}
          <GradientOrb
            color="rgba(59,130,246,0.18)"
            size="500px"
            className="top-[-100px] left-[-150px] animate-float-orb"
          />
          <GradientOrb
            color="rgba(139,92,246,0.14)"
            size="400px"
            className="bottom-[-80px] right-[-120px] animate-float-orb-reverse"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            {/* Logo */}
            <motion.img
              src="/images/kvslogo.png"
              alt="KVSC Logo"
              className="w-20 h-20 object-contain mb-8 animate-float"
              style={{ mixBlendMode: 'screen' }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />

            {/* Name — letter-by-letter clip reveal */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 flex flex-wrap justify-center gap-0">
              {LETTERS.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block overflow-hidden"
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.04,
                    duration: 0.5,
                    ease: [0.77, 0, 0.18, 1],
                  }}
                >
                  <span
                    className={
                      char === ' '
                        ? 'w-2 inline-block'
                        : i < 7
                        ? 'text-[var(--text)]'
                        : i < 11
                        ? 'text-[var(--blue)]'
                        : 'gradient-text-blue-purple'
                    }
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </motion.span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              className="text-sm text-[var(--text-muted)] mb-10 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              DevOps Engineer · CI/CD · Cloud Infrastructure
            </motion.p>

            {/* Progress bar */}
            <div className="w-64 h-[3px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, var(--blue), var(--purple))',
                  boxShadow: '0 0 10px var(--glow-blue)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Percentage */}
            <motion.span
              className="text-xs text-[var(--text-muted)] mt-3 tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      ) : (
        /* ── Curtain exit — two panels split apart ── */
        <motion.div key="curtain" className="fixed inset-0 z-[9999] flex">
          <motion.div
            className="w-1/2 h-full"
            style={{ background: 'var(--bg)' }}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
          />
          <motion.div
            className="w-1/2 h-full"
            style={{ background: 'var(--bg)' }}
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
