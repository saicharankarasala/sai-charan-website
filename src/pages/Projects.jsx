import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight
} from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';
import { fadeUp } from '../utils/animations';

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
        style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)', color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};

const projects = [
  {
    num: '01',
    title: 'Personal Portfolio Website',
    year: 2025,
    category: 'Full Stack',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    color: 'var(--accent)',
    image: '/images/Portfolio.jpg',
    description: [
      'Developed and deployed a fully responsive personal portfolio using React, Vite, and Tailwind CSS, hosted on Vercel.',
      'Showcases professional experience, academic projects, and certifications with smooth animated transitions, dark mode, and EmailJS-powered contact form.',
      'Integrated Framer Motion for UI animations and implemented modern design principles for an optimized user experience.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/KVSC1511/Portfolio', icon: FaGithub },
      { label: 'Live Site', url: 'https://www.venkatasaicharan.com', icon: FaExternalLinkAlt },
    ],
  },
  {
    num: '02',
    title: 'Enhancing Security & Privacy of Cryptocurrency Transactions',
    year: 2023,
    category: 'Security',
    tags: ['Java', 'Python', 'SQL', 'Snowflake', 'Cryptography'],
    color: 'var(--accent2)',
    image: '/images/Encrypt.png',
    description: [
      'Developed secure backend systems using Java and cryptographic algorithms to safeguard blockchain transactions.',
      'Conducted risk assessments and implemented security protocols using Python and SQL.',
      'Used Snowflake for data analysis and performance optimization.',
      'Strengthened transaction integrity and reduced vulnerabilities.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saicharankarasala/Enhancing-Security-Privacy-of-Cryptocurrency-Transactions.git', icon: FaGithub },
    ],
  },
  {
    num: '03',
    title: 'YouTube Data Analysis',
    year: 2022,
    category: 'Data Engineering',
    tags: ['Apache Kafka', 'Spark', 'Python', 'SQL', 'Tableau'],
    color: 'var(--accent3)',
    image: '/images/YTAnalysis.png',
    description: [
      'Designed a real-time data pipeline using Apache Kafka and Apache Spark to analyze YouTube viewer behavior.',
      'Enabled sentiment analysis and trend forecasting; automated data cleaning and analysis with Python and SQL.',
      'Built interactive dashboards in Tableau to visualize key metrics.',
      'Provided strategic recommendations for content optimization and audience growth.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saicharankarasala/YouTube-Data-Analysis-using-Hadoop-Ecosystem.git', icon: FaGithub },
    ],
  },
  {
    num: '04',
    title: 'IoT Sensor Data Analysis for Soil Moisture',
    year: 2022,
    category: 'IoT',
    tags: ['IoT', 'Azure', 'Python', 'PySpark', 'Tableau', 'Power BI'],
    color: 'var(--accent)',
    image: '/images/IOT.png',
    description: [
      'Built an IoT system using ultrasonic sensors and Azure cloud for soil moisture monitoring and decision-making.',
      'Used Python and Arduino IDE for processing; visualized data with Matplotlib, Plotly, and Tableau.',
      'Processed large-scale IoT data with PySpark and Hadoop.',
      'Created dashboards in Tableau and Power BI; automated ETL with Azure Data Factory and Synapse Analytics.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saicharankarasala/iot-soil-moisture-analysis.git', icon: FaGithub },
    ],
  },
  {
    num: '05',
    title: 'A 120 Mbps WDM-Based VLC System for IoT Implementation',
    year: 2021,
    category: 'Research',
    tags: ['VLC', 'OptiSystem', 'Python', 'SQL', 'Tableau'],
    color: 'var(--accent2)',
    image: '/images/120Mbps.png',
    description: [
      'Designed and simulated a high-speed Visible Light Communication (VLC) system using OptiSystem and mathematical models.',
      'Improved efficiency by 25% and predictive accuracy by 20%.',
      'Analyzed system performance with SQL and Python; presented results using Tableau.',
      'Enhanced collaboration and system design for mobile and front-end applications.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saicharankarasala/WDM-VLC-IoT-120Mbps.git', icon: FaGithub },
    ],
  },
  {
    num: '06',
    title: 'Therapy for Autistic Children Using Robot',
    year: 2021,
    category: 'AI / Robotics',
    tags: ['.NET', 'Python', 'UI/UX', 'Data Visualization'],
    color: 'var(--accent3)',
    image: '/images/Autistic.png',
    description: [
      'Developed an interactive robot using .NET and Python to improve social skills in autistic children, enhancing engagement by 30%.',
      'Designed a user-friendly interface and conducted needs analysis with therapists to align robot functionality with user needs.',
      'Conducted usability testing and implemented iterative improvements.',
      'Used data visualization to present insights and drive design decisions.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saicharankarasala/autism-therapy-robot-spark.git', icon: FaGithub },
    ],
  },
];

// ─── Project Row ──────────────────────────────────────────────────────────────
const ProjectRow = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      className="relative overflow-hidden group cursor-pointer"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Floating image on hover — desktop only */}
      {hovered && (
        <motion.div
          className="absolute z-20 pointer-events-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 80,
            width: 240,
            height: 150,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ border: `2px solid ${project.color}` }}
          />
        </motion.div>
      )}

      <div className="grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_96px_1fr_180px_60px] gap-4 lg:gap-6 items-center py-6 lg:py-7 px-0">
        {/* Number */}
        <span
          className="font-extrabold select-none"
          style={{ fontSize: '1rem', color: project.color, opacity: 0.4 }}
        >
          {project.num}
        </span>

        {/* Thumbnail — always visible on desktop */}
        <div className="hidden lg:block w-24 h-14 overflow-hidden flex-shrink-0" style={{ border: `1px solid var(--border)` }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Title + tags */}
        <div>
          <h3
            className="text-lg lg:text-xl font-bold leading-tight mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span
                className="px-2 py-0.5 text-xs font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Category — desktop only */}
        <div className="hidden lg:block">
          <span
            className="px-3 py-1 text-xs font-bold tracking-wider uppercase"
            style={{
              background: 'rgba(45,212,191,0.06)',
              border: '1px solid rgba(45,212,191,0.15)',
              color: 'var(--accent)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.2 }}
          style={{ color: project.color }}
          className="flex items-center justify-end"
        >
          <FaArrowRight className="text-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Modal ─────────────────────────────────────────────────────────────────────
const Modal = ({ project, onClose }) => {
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
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{ border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${project.color}, var(--accent2))` }} />

        <div className="p-6 lg:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 transition-colors duration-200"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Image */}
          {project.image && (
            <div className="w-full aspect-video mb-8 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{project.title}</h3>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <span
              className="px-3 py-1 text-xs font-bold tracking-wider uppercase"
              style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)', color: 'var(--accent)' }}
            >
              {project.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{project.year}</span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Overview
            </h4>
            <ul className="space-y-3">
              {project.description.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: project.color }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sharp btn-sharp-fill inline-flex items-center gap-2 text-sm"
                >
                  <link.icon className="text-xs" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <GradientOrb color="rgba(45,212,191,0.1)" size="600px" className="fixed top-0 right-[-80px] opacity-50 pointer-events-none" />
      <GradientOrb color="rgba(167,139,250,0.08)" size="500px" className="fixed bottom-0 left-[-80px] pointer-events-none" />

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
              Selected Work
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Selected<br /><span style={{ color: 'var(--accent)' }}>Projects</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Six projects spanning full-stack web, data engineering, IoT, security,
              and research. Click any row to explore.
            </motion.p>
          </div>

          {/* Right — project thumbnail grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-3 gap-px"
            style={{ background: 'var(--border)' }}
          >
            {projects.map((p, i) => (
              <div key={p.num} className="relative overflow-hidden aspect-video" style={{ background: 'var(--bg)' }}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)' }} />
                <span className="absolute bottom-2 left-2 text-xs font-bold" style={{ color: p.color }}>{p.num}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="PORTFOLIO · CRYPTOCURRENCY · YOUTUBE ANALYSIS · IOT · VLC SYSTEM · AUTISM THERAPY ROBOT · REACT · PYTHON · JAVA · " reverse />

      {/* ── PROJECT LIST ──────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto pb-20"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {/* Column headers — desktop */}
        <div
          className="hidden lg:grid lg:grid-cols-[80px_1fr_200px_80px] gap-8 py-5 mb-0"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {['#', 'Project', 'Category', ''].map((h) => (
            <span key={h} className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              {h}
            </span>
          ))}
        </div>

        {projects.map((p, i) => (
          <ProjectRow key={p.num} project={p} onClick={setSelected} />
        ))}
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 lg:px-16 overflow-hidden"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <GradientOrb color="rgba(251,191,36,0.12)" size="500px" className="top-[-60px] left-[-60px]" />
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
            Have a project in mind?<br />
            <span style={{ color: 'var(--accent)' }}>Let's build it.</span>
          </h2>
          <a href="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
            Start a Conversation →
          </a>
        </motion.div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
