/**
 * animations.js — Shared animation utilities
 * Single source of truth for GSAP + Framer Motion configs
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// ─── Framer Motion Variants ───────────────────────────────────────────────

/** Fade up with spring easing */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/** Container that staggers its children */
export const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

/** Clip-path word/letter reveal from left */
export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: (delay = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.77, 0, 0.18, 1], delay },
  }),
};

/** Slide from left */
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Slide from right */
export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Scale in with spring overshoot */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/** Page transition (fade + slight y) */
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// ─── GSAP Helpers ─────────────────────────────────────────────────────────

/**
 * Batch-reveal elements with ScrollTrigger stagger.
 * Rule: GSAP only on plain DOM elements, not React-controlled elements.
 *
 * @param {string} selector   CSS selector
 * @param {object} fromVars   gsap.from() overrides
 * @param {object} stConfig   ScrollTrigger config overrides
 * @returns {ScrollTrigger[]} triggers (call .kill() in useEffect cleanup)
 */
export function gsapReveal(selector, fromVars = {}, stConfig = {}) {
  const elements = gsap.utils.toArray(selector);
  if (!elements.length) return [];

  const triggers = [];

  elements.forEach((el, i) => {
    const st = gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.75,
      ease: 'power3.out',
      delay: i * 0.08,
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
        ...stConfig,
      },
    });
    triggers.push(st);
  });

  return triggers;
}

/**
 * Animate a DOM element's text content as a number counter.
 * @param {HTMLElement} element
 * @param {number}      target
 * @param {string}      suffix  e.g. '+', '%'
 */
export function gsapCounter(element, target, suffix = '') {
  if (!element) return;
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
    onUpdate() {
      element.textContent = Math.round(obj.val) + suffix;
    },
  });
}

/**
 * Add magnetic attraction to an element on mousemove.
 * Safe no-op on touch/coarse devices.
 *
 * @param {HTMLElement} el
 * @param {number}      strength  0–1 (default 0.4)
 * @returns {function}  cleanup function
 */
export function addMagnetic(el, strength = 0.4) {
  if (!el || window.matchMedia('(pointer: coarse)').matches) return () => {};

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
  };

  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);

  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
    gsap.killTweensOf(el);
  };
}

/**
 * 3D tilt effect on mousemove using CSS perspective + GSAP.
 * @param {HTMLElement} el
 * @param {number}      maxTilt  degrees (default 10)
 * @returns {function}  cleanup function
 */
export function addTilt(el, maxTilt = 10) {
  if (!el || window.matchMedia('(pointer: coarse)').matches) return () => {};

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * maxTilt * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * maxTilt * -2;
    gsap.to(el, {
      rotateX: y,
      rotateY: x,
      scale: 1.03,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center center',
    });
  };

  const onLeave = () => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);

  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
    gsap.killTweensOf(el);
  };
}

/**
 * Simple viewport-aware counter hook helper.
 * Use with useInView from framer-motion.
 * @param {boolean} inView
 * @param {number}  target
 * @param {function} setter  useState setter
 * @param {string}  suffix
 */
export function startCounter(inView, target, setter, suffix = '') {
  if (!inView) return;
  let current = 0;
  const increment = Math.ceil(target / 60);
  const id = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(id);
    }
    setter(current + suffix);
  }, 25);
  return () => clearInterval(id);
}
