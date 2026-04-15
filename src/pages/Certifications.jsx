import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaCertificate, FaExternalLinkAlt, FaCheckCircle,
  FaCalendarAlt, FaIdCard, FaTimes, FaArrowRight, FaEye, FaDownload
} from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations';

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
        style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};

const certifications = [
  {
    num: '01',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: 'March 2024',
    credentialId: '2a4a927b8cf14781975cd89adc323106',
    verifyUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106',
    downloadUrl: null,
    description: 'Comprehensive understanding of AWS services and architectural best practices for designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Networking', 'Storage', 'Compute'],
    category: 'Cloud & DevOps',
    image: '/images/AWS-SA-logo.png',
    color: 'var(--accent3)',
    featured: true,
  },
  {
    num: '02',
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    issueDate: 'January 2025',
    credentialId: 'HCT-2025-001234',
    verifyUrl: 'https://www.credly.com/badges/aef53d94-4b9f-491e-a02c-6bf11609a2d6/public_url',
    downloadUrl: null,
    description: 'Demonstrates proficiency in using Terraform for infrastructure as code, including provisioning, managing, and updating infrastructure across multiple cloud providers.',
    skills: ['Terraform', 'Infrastructure as Code', 'Cloud Provisioning', 'State Management', 'Modules', 'AWS', 'Azure'],
    category: 'Cloud & DevOps',
    image: '/images/Terraform-Badge.png',
    color: 'var(--accent2)',
    featured: true,
  },
  {
    num: '03',
    title: 'Programming with Python – Professional Certificate',
    issuer: 'OpenEDG Python Institute',
    issueDate: 'March 2024',
    credentialId: 'f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04',
    downloadUrl: null,
    description: 'Advanced Python programming skills including data structures, algorithms, object-oriented programming, and best practices for software development.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'OOP', 'Software Development'],
    category: 'Programming',
    image: '/images/Linkdin-Python-icon.jpg',
    color: 'var(--accent)',
    featured: true,
  },
  {
    num: '04',
    title: 'Python Professional',
    issuer: 'Edureka',
    issueDate: 'March 2024',
    credentialId: 'CKR8M9MX',
    verifyUrl: null,
    downloadUrl: '/certifications/edureka-python.pdf',
    description: 'Comprehensive Python training covering core concepts, advanced features, and practical applications in data science and web development.',
    skills: ['Python', 'Data Science', 'Web Development', 'Machine Learning', 'Automation'],
    category: 'Programming',
    image: '/images/edureka-python.jpg',
    color: 'var(--accent)',
    featured: false,
  },
];

// ─── Cert Row ─────────────────────────────────────────────────────────────────
const CertRow = ({ cert, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={() => onClick(cert)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_80px_1fr_180px_60px] gap-4 lg:gap-8 items-center py-8 lg:py-10 cursor-pointer"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Number */}
      <span
        className="font-extrabold select-none"
        style={{ fontSize: '1rem', color: cert.color, opacity: 0.4 }}
      >
        {cert.num}
      </span>

      {/* Badge image — desktop only */}
      <div className="hidden lg:flex w-14 h-14 flex-shrink-0 items-center justify-center overflow-hidden"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
        <img src={cert.image} alt={cert.title} className="w-12 h-12 object-contain" />
      </div>

      {/* Title block */}
      <div>
        <div className="flex items-center gap-3 mb-1.5">
          <h3
            className="text-base lg:text-lg font-bold leading-tight transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--text)' }}
          >
            {cert.title}
          </h3>
          {cert.verifyUrl && (
            <FaCheckCircle className="flex-shrink-0 text-sm" style={{ color: 'var(--accent)', opacity: 0.7 }} />
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span style={{ color: cert.color, fontWeight: 600 }}>{cert.issuer}</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt />
            {cert.issueDate}
          </span>
        </div>
      </div>

      {/* Category — desktop */}
      <div className="hidden lg:block">
        <span
          className="px-3 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            background: 'rgba(45,212,191,0.06)',
            border: '1px solid rgba(45,212,191,0.15)',
            color: 'var(--accent)',
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Arrow */}
      <motion.div
        animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.2 }}
        style={{ color: cert.color }}
        className="flex items-center justify-end"
      >
        <FaArrowRight className="text-sm" />
      </motion.div>
    </motion.div>
  );
};

// ─── Modal ─────────────────────────────────────────────────────────────────────
const Modal = ({ cert, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Color bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${cert.color}, var(--accent2))` }} />

        <div className="p-6 lg:p-10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Badge */}
          <div className="flex items-start gap-5 mb-8">
            <div
              className="w-20 h-20 flex-shrink-0 flex items-center justify-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            >
              <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{cert.title}</h3>
              <p className="font-semibold text-sm mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
              <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="flex items-center gap-1"><FaCalendarAlt /> {cert.issueDate}</span>
                <span className="flex items-center gap-1"><FaIdCard /> ID: {cert.credentialId.substring(0, 16)}…</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              About
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {cert.description}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-semibold"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp btn-sharp-fill inline-flex items-center gap-2 text-sm"
              >
                <FaEye className="text-xs" />
                Verify Certificate
              </a>
            )}
            {cert.downloadUrl && (
              <a
                href={cert.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp btn-sharp-outline inline-flex items-center gap-2 text-sm"
              >
                <FaDownload className="text-xs" />
                View Certificate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <GradientOrb color="rgba(167,139,250,0.12)" size="600px" className="fixed top-0 right-[-80px] pointer-events-none" />
      <GradientOrb color="rgba(45,212,191,0.08)" size="500px" className="fixed bottom-0 left-[-60px] pointer-events-none" />

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
              Verified Credentials
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                My<br /><span style={{ color: 'var(--accent)' }}>Certifications</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Industry-recognized credentials from AWS, HashiCorp, and Python Institute.
              Click any certification to verify and explore details.
            </motion.p>
          </div>

          {/* Right — cert badge showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { image: '/images/AWS-SA-logo.png', title: 'AWS Solutions Architect', issuer: 'Amazon Web Services', color: 'var(--accent3)' },
              { image: '/images/Terraform-Badge.png', title: 'Terraform Associate', issuer: 'HashiCorp', color: 'var(--accent2)' },
              { image: '/images/Linkdin-Python-icon.jpg', title: 'Python Professional', issuer: 'OpenEDG / LinkedIn', color: 'var(--accent)' },
              { image: '/images/edureka-python.jpg', title: 'Python Certificate', issuer: 'Edureka', color: 'var(--accent3)' },
            ].map((cert) => (
              <div
                key={cert.title}
                className="p-5 flex flex-col items-center text-center gap-3"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <div className="w-16 h-16 flex items-center justify-center" style={{ background: 'var(--bg)', border: `1px solid ${cert.color}33` }}>
                  <img src={cert.image} alt={cert.title} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-snug" style={{ color: 'var(--text)' }}>{cert.title}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                </div>
                <div className="w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${cert.color}, transparent)` }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="AWS CERTIFIED · HASHICORP TERRAFORM · PYTHON PROFESSIONAL · EDUREKA · CLOUD · DEVOPS · INFRASTRUCTURE AS CODE · VERIFIED · " reverse />

      {/* ── FEATURED CERTS ────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto pb-4"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="py-8 mb-4">
          <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>
            Featured — Cloud & Infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderTop: '1px solid var(--border)' }}>
          {certifications.filter(c => c.featured).slice(0, 2).map((cert, i) => (
            <motion.div
              key={cert.num}
              variants={i === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setSelected(cert)}
              className="group relative p-8 lg:p-10 cursor-pointer transition-colors duration-200 overflow-hidden"
              style={{
                borderBottom: '1px solid var(--border)',
                borderRight: i === 0 ? '1px solid var(--border)' : 'none',
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              {/* Badge image large */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'var(--bg-surface)', border: `1px solid ${cert.color}30` }}
                >
                  <img src={cert.image} alt={cert.title} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: cert.color }}
                  >
                    {cert.category}
                  </span>
                  {cert.verifyUrl && (
                    <div className="flex items-center gap-1.5 mt-1">
                      <FaCheckCircle className="text-xs" style={{ color: 'var(--accent)' }} />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Verified</span>
                    </div>
                  )}
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
                style={{ color: 'var(--text)' }}
              >
                {cert.title}
              </h3>
              <p className="text-sm font-semibold mb-1" style={{ color: cert.color }}>{cert.issuer}</p>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{cert.issueDate}</p>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 4).map(s => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-xs"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <motion.div
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: cert.color }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ALL CERTS LIST ────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto pb-20"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="py-8 mb-0">
          <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>
            All Certifications
          </p>
        </div>

        {/* Column headers */}
        <div
          className="hidden lg:grid lg:grid-cols-[80px_80px_1fr_180px_60px] gap-8 py-4"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          {['#', 'Badge', 'Certification', 'Category', ''].map(h => (
            <span key={h} className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              {h}
            </span>
          ))}
        </div>

        {certifications.map((cert) => (
          <CertRow key={cert.num} cert={cert} onClick={setSelected} />
        ))}
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 lg:px-16 overflow-hidden"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <GradientOrb color="rgba(45,212,191,0.15)" size="500px" className="top-[-60px] right-[-60px]" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <h2
            className="font-extrabold leading-none mb-8"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', color: 'var(--text)' }}
          >
            Certified & ready to<br />
            <span style={{ color: 'var(--accent)' }}>ship production code.</span>
          </h2>
          <a href="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
            Work with me →
          </a>
        </motion.div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <Modal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
