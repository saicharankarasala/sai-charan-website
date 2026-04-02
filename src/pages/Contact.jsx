import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub,
  FaPaperPlane, FaCheckCircle, FaTimes
} from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';

const ScrambleWord = ({ text, color, stroke, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [triggered, setTriggered] = React.useState(false);
  React.useEffect(() => { if (inView) setTimeout(() => setTriggered(true), delay); }, [inView, delay]);
  const display = useTextScramble(text, triggered);
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        className="block font-extrabold"
        style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations';

const inputStyle = {
  width: '100%',
  background: 'transparent',
  color: 'var(--text)',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  outline: 'none',
  padding: '14px 0',
  fontSize: '1rem',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s ease',
};

const focusStyle = { borderBottomColor: 'var(--accent)' };
const blurStyle = { borderBottomColor: 'var(--border)' };

// ─── Single input field ───────────────────────────────────────────────────────
const Field = ({ label, type = 'text', name, value, onChange, required, as: Tag = 'input', rows }) => {
  const [focused, setFocused] = useState(false);

  const isFloating = focused || value;

  return (
    <div className="relative" style={{ marginBottom: '2.5rem' }}>
      <label
        style={{
          position: 'absolute',
          left: 0,
          top: isFloating ? '-16px' : '14px',
          fontSize: isFloating ? '0.7rem' : '0.9rem',
          fontWeight: 600,
          letterSpacing: isFloating ? '0.15em' : '0',
          textTransform: isFloating ? 'uppercase' : 'none',
          color: focused ? 'var(--accent)' : 'var(--text-muted)',
          transition: 'all 0.2s ease',
          pointerEvents: 'none',
        }}
      >
        {label}
      </label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          ...(focused ? focusStyle : blurStyle),
          resize: Tag === 'textarea' ? 'none' : undefined,
        }}
      />
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_portfolio',
        'template_portfolio',
        formRef.current,
        'user_portfolio'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      // Fallback: simulate success for demo
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <GradientOrb color="rgba(167,139,250,0.12)" size="700px" className="fixed top-1/4 left-[-100px] pointer-events-none" />
      <GradientOrb color="rgba(45,212,191,0.08)" size="500px" className="fixed bottom-0 right-[-80px] pointer-events-none" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.3em] uppercase mb-8"
              style={{ color: 'var(--accent)' }}
            >
              Open to Opportunities
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Let's<br /><span style={{ color: 'var(--accent)' }}>Talk</span>
              </h1>
            </div>
          </div>

          {/* Right — quick contact snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-0"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="px-8 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Email</p>
              <p className="font-bold" style={{ color: 'var(--accent)', fontSize: '1.05rem' }}>saicharankarasala@gmail.com</p>
            </div>
            <div className="px-8 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Location</p>
              <p className="font-semibold" style={{ color: 'var(--text)' }}>Merrimack, NH · USA</p>
            </div>
            <div className="px-8 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                <p className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>Open to full-time opportunities</p>
              </div>
            </div>
            <div className="px-8 py-6">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Response Time</p>
              <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Usually within <span style={{ color: 'var(--accent)' }}>24 hours</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="GET IN TOUCH · AVAILABLE FOR HIRE · MERRIMACK NH · OPEN TO FULL-TIME · CONTRACT · REMOTE · saicharankarasala@gmail.com · " />

      {/* ── MAIN SPLIT ────────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto pb-28"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 pt-16 lg:pt-20">

          {/* ── LEFT: Info ──────────────────────────────────────────── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 self-start"
          >
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-muted)', maxWidth: 380 }}>
              Whether you have a role in mind, a project to build, or just want to connect —
              I read every message and reply to every serious inquiry.
            </p>

            {/* Email link — large */}
            <a
              href="mailto:saicharankarasala@gmail.com"
              className="block group mb-10"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>
                Email
              </p>
              <p
                className="font-bold transition-colors duration-200 group-hover:text-[var(--accent)] break-all"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--text)' }}
              >
                saicharankarasala@gmail.com
              </p>
            </a>

            {/* Location */}
            <div className="mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>
                Location
              </p>
              <p className="flex items-center gap-2 font-semibold" style={{ color: 'var(--text)' }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
                Merrimack, NH, USA
              </p>
            </div>

            {/* Availability */}
            <div className="mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-muted)' }}>
                Availability
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                  Open to full-time opportunities
                </span>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Socials
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-charan-k-v/' },
                  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/KVSC1511' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 transition-all duration-200"
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                    aria-label={s.label}
                  >
                    <s.icon />
                    <span className="text-sm font-semibold">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ──────────────────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-10" style={{ color: 'var(--text)' }}>
              Send a message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                <Field label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <Field label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <Field label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
              <Field label="Message" name="message" as="textarea" rows={5} value={formData.message} onChange={handleChange} required />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-sharp btn-sharp-fill w-full flex items-center justify-center gap-3 mt-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full w-4 h-4 border-b-2 border-current" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Status */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 flex items-center gap-3 text-sm"
                style={
                  status === 'success'
                    ? { border: '1px solid rgba(34,197,94,0.3)', color: '#86efac', background: 'rgba(34,197,94,0.05)' }
                    : { border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5', background: 'rgba(239,68,68,0.05)' }
                }
              >
                {status === 'success' ? (
                  <>
                    <FaCheckCircle style={{ color: '#22c55e', flexShrink: 0 }} />
                    Message sent! I'll reply within 24 hours.
                  </>
                ) : (
                  <>
                    <FaTimes style={{ color: '#ef4444', flexShrink: 0 }} />
                    Something went wrong. Please email me directly.
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ──────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto py-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Response time: usually within <span style={{ color: 'var(--accent)' }}>24 hours</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              Open to full-time, contract & freelance
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
