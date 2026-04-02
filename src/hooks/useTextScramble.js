import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!&%';

/**
 * useTextScramble — cycles through random chars before settling on the real text.
 * @param {string}  text     — target string
 * @param {boolean} trigger  — start scramble when this becomes true
 * @param {number}  tickMs   — ms per frame (lower = faster)
 */
const useTextScramble = (text, trigger = true, tickMs = 35) => {
  const [display, setDisplay] = useState(
    text.split('').map(c => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])).join('')
  );
  const frameRef = useRef(0);
  const settledRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    frameRef.current = 0;
    settledRef.current = 0;

    const step = () => {
      const result = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (i < settledRef.current) return char; // locked in
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(result.join(''));

      frameRef.current++;
      // Lock in one more real character every 3 frames
      if (frameRef.current % 3 === 0) {
        settledRef.current = Math.min(settledRef.current + 1, text.length);
      }

      if (settledRef.current < text.length) {
        rafRef.current = setTimeout(step, tickMs);
      } else {
        setDisplay(text); // ensure final state is perfect
      }
    };

    rafRef.current = setTimeout(step, tickMs);
    return () => clearTimeout(rafRef.current);
  }, [text, trigger, tickMs]);

  return display;
};

export default useTextScramble;
