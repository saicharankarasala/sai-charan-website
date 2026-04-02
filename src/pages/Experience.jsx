import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';
import {
  FaTimes, FaExternalLinkAlt, FaMapMarkerAlt,
  FaCalendarAlt, FaChevronRight
} from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';
import { fadeUp, slideInLeft } from '../utils/animations';

const ScrambleWord = ({ text, color, stroke, delay = 0, size = 'clamp(4rem, 12vw, 10rem)' }) => {
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
        style={{ fontSize: size, color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};

const experiences = [
  {
    year: '2025',
    period: 'Jan 2025 – Present',
    role: 'Software Engineer',
    company: 'Source Consulting LLC',
    client: 'Touch Screens Inc',
    location: 'Remote',
    domain: 'Backend / Cloud',
    logo: '/images/sc_logo.png',
    color: 'var(--accent)',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'AWS CloudFormation', 'Ansible', 'Packer', 'Amazon EKS', 'CloudWatch', 'New Relic', 'Datadog', 'Dynatrace', 'Snowflake', 'Power BI', 'CI/CD', 'EC2', 'S3', 'RDS'],
    highlights: ['100K+ product pricing automated', '70% less manual infra work', '50% faster incident response'],
    bullets: [
      'Engineered and deployed a fully automated pricing system using Python, AWS Lambda, and Google Sheets API, streamlining updates for 100K+ products and enhancing pricing accuracy and operational efficiency.',
      'Converted legacy Terraform modules with version conflicts to AWS CloudFormation, while also developing and maintaining Terraform scripts to provision AWS resources such as EC2, S3, Lambda, and RDS—ensuring reusable, consistent, and version-controlled infrastructure across environments.',
      'Integrated Terraform with Ansible and Packer to automate the creation and versioning of Amazon Machine Images (AMIs), supporting scalable and repeatable infrastructure deployments across the AWS cloud.',
      'Automated Amazon EKS cluster provisioning and scaling using Terraform, reducing manual effort, optimizing resource usage, and improving cloud cost management.',
      'Implemented full-stack observability by integrating CloudWatch, New Relic, Datadog, and Dynatrace, enabling real-time performance monitoring, rapid incident detection, and improved SLA adherence.',
      'Developed ETL pipelines and operational dashboards using Snowflake, Power BI, and CloudWatch, enabling data-driven diagnostics and supporting incident triage through well-documented runbooks and CI/CD-integrated monitoring alerts.',
    ],
    companyUrl: 'https://touchwindow.com',
  },
  {
    year: '2024',
    period: 'Apr 2024 – Dec 2024',
    role: 'Network Operation Analyst',
    company: 'Trbhi INC',
    client: 'Ziply Fiber Technology',
    location: 'Remote',
    domain: 'DevOps / NOC',
    logo: '/images/trbhilogo.png',
    color: 'var(--accent2)',
    tech: ['Python', 'Bash', 'Dynatrace', 'PowerShell', 'SQL Server', 'ServiceNow', 'D365'],
    highlights: ['40% MTTR reduction', '25% system uptime improvement', 'RCA flows streamlined'],
    bullets: [
      'Reduced MTTR by 40% with Python/Bash automation & Dynatrace-based monitoring.',
      'Debugged D365 and APIs using PowerShell, SQL Server, and ServiceNow RCA flows.',
    ],
    companyUrl: 'https://ziplyfiber.com',
  },
  {
    year: '2023',
    period: 'May 2023 – Dec 2023',
    role: 'Graduate Technical Assistant',
    company: 'University of Missouri – Kansas City',
    client: '',
    location: 'Kansas City, MO',
    domain: 'IT Support',
    logo: '/images/umkclogo.png',
    color: 'var(--accent3)',
    tech: ['PXE', 'GPO', 'Linux', 'Windows', 'Python', 'Bash'],
    highlights: ['150+ lab systems managed', '35% fewer support tickets', '40% satisfaction increase'],
    bullets: [
      'Managed 150+ lab systems with PXE, GPO, Linux/Windows Dual Boot.',
      'Automated diagnostics using Python & Bash, cutting support tickets by 35%.',
      'Raised student support satisfaction by 40% via one-on-one support and feedback tracking.',
    ],
    companyUrl: '',
  },
  {
    year: '2021',
    period: 'Sep 2021 – Jul 2022',
    role: 'Software Engineer',
    company: 'Wipro Technologies',
    client: '',
    location: 'Bengaluru, India',
    domain: 'Data Engineering',
    logo: '/images/wiprologo.svg',
    color: 'var(--accent)',
    tech: ['Informatica', 'PL/SQL', 'Unix Shell', 'GitLab CI', 'Python', 'Excel Macros', 'SQL'],
    highlights: ['30% ETL efficiency gain', '50% less manual reporting', '25% better data quality'],
    bullets: [
      'Built ETL pipelines using Informatica, PL/SQL, Unix Shell, and CI via GitLab.',
      'Automated reporting flows with Python, Excel Macros, improving ETL transparency.',
      'Managed metadata and repositories to streamline project execution.',
      'Supported cross-functional teams with technical insights using SQL and Python.',
    ],
    companyUrl: '',
  },
  {
    year: '2019',
    period: 'May 2019 – Aug 2021',
    role: 'Software Engineer',
    company: 'Merizon Technologies',
    client: '',
    location: 'Remote',
    domain: 'Full Stack',
    logo: '/images/MTlogo.png',
    color: 'var(--accent2)',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'GitHub Actions', 'JUnit', 'Selenium', 'SQL'],
    highlights: ['25% API performance boost', '40% more test coverage', '60% faster deployments'],
    bullets: [
      'Developed full-stack apps with Java, Spring Boot, MySQL, JS.',
      'Implemented CI using GitHub Actions, improved test coverage via JUnit & Selenium.',
      'Improved API performance by 25% through SQL query optimization.',
    ],
    companyUrl: '',
  },
];

// ─── Experience Row ────────────────────────────────────────────────────────────
const ExpRow = ({ exp, index, onClick }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    custom={index * 0.05}
    viewport={{ once: true }}
    onClick={() => onClick(exp)}
    className="group grid lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 items-start py-10 lg:py-12 cursor-pointer transition-colors duration-200"
    style={{ borderBottom: '1px solid var(--border)' }}
    whileHover={{ x: 4 }}
  >
    {/* Year */}
    <div>
      <span
        className="font-extrabold"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: exp.color, opacity: 0.4, lineHeight: 1 }}
      >
        {exp.year}
      </span>
    </div>

    {/* Main info */}
    <div>
      <div className="flex items-start gap-4 mb-3">
        <div
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
        >
          <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h3
            className="text-xl font-bold leading-tight transition-colors duration-200"
            style={{ color: 'var(--text)' }}
          >
            {exp.role}
          </h3>
          <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>
            {exp.company}{exp.client ? ` → ${exp.client}` : ''}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs" style={{ color: 'var(--text-muted)' }}>
        <span className="flex items-center gap-1.5">
          <FaCalendarAlt style={{ color: exp.color, opacity: 0.7 }} />
          {exp.period}
        </span>
        <span className="flex items-center gap-1.5">
          <FaMapMarkerAlt style={{ color: exp.color, opacity: 0.7 }} />
          {exp.location}
        </span>
        <span
          className="px-2 py-0.5 text-xs font-bold tracking-wider uppercase"
          style={{
            background: 'rgba(45,212,191,0.06)',
            border: '1px solid rgba(45,212,191,0.15)',
            color: 'var(--accent)',
          }}
        >
          {exp.domain}
        </span>
      </div>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {exp.highlights.map(h => (
          <span
            key={h}
            className="px-3 py-1 text-xs font-semibold"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {h}
          </span>
        ))}
      </div>
    </div>

    {/* Arrow */}
    <div className="hidden lg:flex items-center pt-2">
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: exp.color }}
      >
        <FaChevronRight className="text-lg" />
      </motion.div>
    </div>
  </motion.div>
);

// ─── Modal ─────────────────────────────────────────────────────────────────────
const Modal = ({ exp, onClose }) => {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{ border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(to right, ${exp.color}, var(--accent2))` }}
        />

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

          {/* Title block */}
          <div className="flex items-start gap-4 mb-8">
            <div
              className="w-14 h-14 flex-shrink-0 flex items-center justify-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            >
              <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</span>
                {exp.companyUrl && (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)' }} className="hover:opacity-70 transition-opacity">
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
              {exp.client && (
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Client: {exp.client}</p>
              )}
              <div className="flex flex-wrap gap-3 mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Responsibilities
            </h4>
            <ul className="space-y-3">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: exp.color }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-semibold"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <GradientOrb color="rgba(45,212,191,0.1)" size="700px" className="fixed top-0 left-[-100px] opacity-60 pointer-events-none" />
      <GradientOrb color="rgba(167,139,250,0.08)" size="500px" className="fixed bottom-0 right-[-80px] pointer-events-none" />

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
              Professional Journey
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Work<br /><span style={{ color: 'var(--accent)' }}>History</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              5 companies across cloud engineering, data engineering, full-stack
              development, and network operations. Click any role to see the full picture.
            </motion.p>
          </div>

          {/* Right — company logo grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-0"
            style={{ border: '1px solid var(--border)' }}
          >
            {[
              { logo: '/images/sc_logo.png', company: 'Source Consulting LLC', role: 'Software Engineer', year: '2025', color: 'var(--accent)' },
              { logo: '/images/trbhilogo.png', company: 'Trbhi INC', role: 'Network Operation Analyst', year: '2024', color: 'var(--accent2)' },
              { logo: '/images/umkclogo.png', company: 'UMKC', role: 'Graduate Technical Assistant', year: '2023', color: 'var(--accent3)' },
              { logo: '/images/wiprologo.svg', company: 'Wipro Technologies', role: 'Software Engineer', year: '2021', color: 'var(--accent)' },
              { logo: '/images/MTlogo.png', company: 'Merizon Technologies', role: 'Software Engineer', year: '2019', color: 'var(--accent2)' },
            ].map((item, i) => (
              <div
                key={item.company}
                className="flex items-center gap-4 px-6 py-4"
                style={{ borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
                  <img src={item.logo} alt={item.company} className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate" style={{ color: 'var(--text)' }}>{item.company}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{item.role}</p>
                </div>
                <span className="text-xs font-bold flex-shrink-0" style={{ color: item.color }}>{item.year}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="SOURCE CONSULTING · TRBHI INC · UMKC · WIPRO TECHNOLOGIES · MERIZON TECHNOLOGIES · CLOUD ENGINEER · DATA ENGINEER · FULL STACK · " />

      {/* ── STATS ROW ─────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { num: '4+', label: 'Years Experience' },
            { num: '5', label: 'Companies' },
            { num: '4', label: 'Domains' },
            { num: '50+', label: 'Technologies' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-6 text-center"
              style={{ borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}
            >
              <div
                className="font-extrabold leading-none mb-1.5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--accent)' }}
              >
                {s.num}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE LIST ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-20">
        {/* Column headers — desktop */}
        <div
          className="hidden lg:grid lg:grid-cols-[120px_1fr_auto] gap-12 py-5 mb-2"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {['Year', 'Role & Company', ''].map((h) => (
            <span key={h} className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              {h}
            </span>
          ))}
        </div>

        {experiences.map((exp, i) => (
          <ExpRow key={exp.company + exp.year} exp={exp} index={i} onClick={setSelected} />
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
            Ready to add your company<br />
            <span style={{ color: 'var(--accent)' }}>to this list?</span>
          </h2>
          <a href="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
            Let's Work Together →
          </a>
        </motion.div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <Modal exp={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
