import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaRocket, FaAward,
  FaTimes, FaArrowRight
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
        style={{ fontSize: 'clamp(4.5rem, 14vw, 12rem)', color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};

const LOGOS = {
  'University of Missouri - Kansas City': '/images/umkclogo.png',
  'Trbhi INC (Ziply Fiber Technology)': '/images/trbhilogo.png',
  'Source Consulting LLC (Touch Screens Inc)': '/images/sc_logo.png',
  'Wipro Technologies': '/images/wiprologo.svg',
  "St. Joseph's College of Engineering": '/images/SJCElogo.png',
  'Merizon Technologies LLC': '/images/MTlogo.png',
};

const milestones = [
  {
    year: '2017–2021',
    type: 'edu',
    color: 'var(--accent3)',
    title: 'BE Electronics & Communication',
    org: "St. Joseph's College of Engineering",
    tag: 'GPA 3.7',
    description: "Built a strong foundation in engineering principles, electronics, and communication systems.",
    achievements: ['GPA: 3.7', 'Strong foundation in electronics and communication'],
    skills: ['Electronics', 'Communication', 'Engineering', 'Problem Solving'],
  },
  {
    year: '2019–2021',
    type: 'work',
    color: 'var(--accent)',
    title: 'Software Engineer – Java & Build Automation',
    org: 'Merizon Technologies LLC',
    tag: 'Backend / CI-CD',
    description: "Built backend microservices using Java/Spring Boot deployed via Jenkins CI/CD. Integrated SonarQube and JFrog Artifactory into build workflows, and managed Apache Tomcat deployments on AWS.",
    achievements: ['Improved API performance by 25%', 'Jenkins CI/CD with automated versioning', 'SonarQube code quality gates integrated'],
    skills: ['Java', 'Spring Boot', 'Jenkins', 'SonarQube', 'JFrog Artifactory', 'Apache Tomcat', 'Python', 'Bash', 'AWS', 'SQL'],
  },
  {
    year: '2021–2022',
    type: 'work',
    color: 'var(--accent2)',
    title: 'DevOps & Middleware Automation Engineer',
    org: 'Wipro Technologies',
    tag: 'DevOps',
    description: "Built CI/CD workflows using GitLab CI/CD and Jenkins with Maven for Java microservices. Deployed Docker containers and Kubernetes (EKS) on AWS EC2, managing JBOSS and WebSphere application servers.",
    achievements: ['Containerized microservices on Amazon EKS', 'Automated rollback strategies across Agile trains', 'High availability deployments on AWS EC2'],
    skills: ['GitLab CI/CD', 'Jenkins', 'Maven', 'Ansible', 'Docker', 'Kubernetes', 'Amazon EKS', 'JBOSS', 'WebSphere', 'Python', 'Bash'],
  },
  {
    year: '2022–2023',
    type: 'edu',
    color: 'var(--accent)',
    title: 'MS Computer Science',
    org: 'University of Missouri - Kansas City',
    tag: 'GPA 3.75',
    description: "Completed Master of Science in Computer Science, focusing on software engineering, data engineering, and cloud technologies.",
    achievements: ['GPA: 3.75', 'Specialized in software engineering and data engineering'],
    skills: ['Software Engineering', 'Data Engineering', 'Cloud Technologies'],
  },
  {
    year: '2023',
    type: 'edu',
    color: 'var(--accent3)',
    title: 'Graduate Technical Assistant',
    org: 'University of Missouri - Kansas City',
    tag: 'IT Support',
    description: "Managed 150+ lab systems, automated diagnostics, and improved student support using PXE, GPO, Linux/Windows, Python, and Bash.",
    achievements: ['Reduced support tickets by 35%', 'Improved student satisfaction by 40%', 'Managed 150+ systems'],
    skills: ['PXE', 'GPO', 'Linux', 'Windows', 'Python', 'Bash'],
  },
  {
    year: '2024',
    type: 'work',
    color: 'var(--accent2)',
    title: 'Network Operation Analyst',
    org: 'Trbhi INC (Ziply Fiber Technology)',
    tag: 'DevOps',
    description: "Reduced MTTR by 40% with Python/Bash automation and Dynatrace monitoring. Debugged D365 and APIs, improved system uptime, and streamlined troubleshooting.",
    achievements: ['Improved system uptime by 25%', 'Reduced incident response time by 40%', 'Streamlined troubleshooting processes'],
    skills: ['Python', 'Bash', 'Dynatrace', 'PowerShell', 'SQL Server', 'ServiceNow', 'D365'],
  },
  {
    year: '2025–Now',
    type: 'work',
    color: 'var(--accent)',
    title: 'DevOps / CI-CD Engineer',
    org: 'Source Consulting LLC (Touch Screens Inc)',
    tag: 'Current',
    description: "Built automated CI/CD pipelines for Java/.NET applications using Jenkins, GitLab CI/CD, and Ansible. Configured middleware platforms on AWS EC2, deployed Terraform IaC, and implemented CloudWatch + Dynatrace observability.",
    achievements: ['40% faster deployments via CI/CD automation', '40% less manual intervention', '30% MTTR reduction'],
    skills: ['Jenkins', 'GitLab CI/CD', 'Ansible', 'Maven', 'JFrog Artifactory', 'Terraform', 'AWS EC2', 'CloudWatch', 'Dynatrace', 'IIS', 'JBOSS', 'Apache Tomcat'],
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────
const Modal = ({ m, onClose }) => {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);
  const logo = LOGOS[m.org];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${m.color}, var(--accent2))` }} />
        <div className="p-6 lg:p-10">
          <button onClick={onClose} className="absolute top-6 right-6 p-2"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <FaTimes />
          </button>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              {logo
                ? <img src={logo} alt={m.org} className="w-10 h-10 object-contain" />
                : (m.type === 'edu' ? <FaGraduationCap style={{ color: m.color, fontSize: '1.5rem' }} /> : <FaBriefcase style={{ color: m.color, fontSize: '1.5rem' }} />)}
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: m.color }}>{m.year}</span>
              <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text)' }}>{m.title}</h3>
              <p className="text-sm font-semibold" style={{ color: m.color }}>{m.org}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{m.description}</p>

          <div className="mb-8">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>Achievements</h4>
            <ul className="space-y-2">
              {m.achievements.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: m.color }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>Skills</h4>
            <div className="flex flex-wrap gap-2">
              {m.skills.map(s => (
                <span key={s} className="px-3 py-1 text-xs font-semibold"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  {s}
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
const Journey = () => {
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
              Education & Career
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                My<br /><span style={{ color: 'var(--accent)' }}>Journey</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              From a BE in Electronics to Cloud Engineer in the US — 7 milestones,
              4 companies, 2 degrees, and a relentless drive to keep building.
            </motion.p>
          </div>

          {/* Right — mini timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-0"
            style={{ border: '1px solid var(--border)' }}
          >
            {[
              { year: '2025', label: 'DevOps / CI-CD Engineer @ Source Consulting', color: 'var(--accent)' },
              { year: '2024', label: 'Network Op Analyst @ Trbhi INC', color: 'var(--accent2)' },
              { year: '2023', label: 'MS Computer Science — UMKC', color: 'var(--accent3)' },
              { year: '2021', label: 'Software Engineer @ Wipro', color: 'var(--accent)' },
              { year: '2019', label: 'Software Engineer @ Merizon Tech', color: 'var(--accent2)' },
              { year: '2017', label: 'BE Electronics — SJCE', color: 'var(--accent3)' },
            ].map((item, i) => (
              <div
                key={item.year}
                className="flex items-center gap-4 px-6 py-4"
                style={{ borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}
              >
                <span className="text-sm font-extrabold flex-shrink-0 w-12" style={{ color: item.color }}>{item.year}</span>
                <div className="w-px h-5 flex-shrink-0" style={{ background: 'var(--border)' }} />
                <p className="text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="2017 · SJCE · 2019 · MERIZON · 2021 · WIPRO · 2022 · UMKC · 2023 · TRBHI · 2024 · SOURCE CONSULTING · 2025 · " />

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { num: '7', label: 'Milestones' },
            { num: '5+', label: 'Years' },
            { num: '2', label: 'Degrees' },
            { num: '4', label: 'Certifications' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-6 text-center"
              style={{ borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="font-extrabold leading-none mb-1.5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--accent)' }}>
                {s.num}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pt-16 pb-20">

        {/* Column headers */}
        <div
          className="hidden lg:grid lg:grid-cols-[100px_60px_1fr_auto] gap-8 py-5"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {['Year', 'Type', 'Milestone', ''].map(h => (
            <span key={h} className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{h}</span>
          ))}
        </div>

        {milestones.map((m, i) => {
          const logo = LOGOS[m.org];
          return (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setSelected(m)}
              className="group cursor-pointer"
              style={{ borderBottom: '1px solid var(--border)' }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
            >
              <div className="grid grid-cols-[60px_1fr_auto] lg:grid-cols-[100px_60px_1fr_auto] gap-4 lg:gap-8 items-start py-8 lg:py-10">
                {/* Year */}
                <div>
                  <span className="font-extrabold" style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: m.color, opacity: 0.45, lineHeight: 1
                  }}>
                    {m.year.split('–')[0]}
                  </span>
                </div>

                {/* Type icon — desktop */}
                <div className="hidden lg:flex items-start pt-1">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--bg-surface)', border: `1px solid ${m.color}30` }}>
                    {logo
                      ? <img src={logo} alt={m.org} className="w-7 h-7 object-contain" />
                      : (m.type === 'edu'
                        ? <FaGraduationCap style={{ color: m.color, fontSize: '1rem' }} />
                        : <FaBriefcase style={{ color: m.color, fontSize: '1rem' }} />)}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-lg font-bold transition-colors duration-200 group-hover:text-[var(--accent)]"
                      style={{ color: 'var(--text)' }}>
                      {m.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-bold tracking-wider uppercase"
                      style={{ background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.15)', color: 'var(--accent)' }}>
                      {m.tag}
                    </span>
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: m.color }}>{m.org}</p>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>{m.description}</p>

                  {/* Skills preview */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {m.skills.slice(0, 4).map(s => (
                      <span key={s} className="px-2 py-0.5 text-xs"
                        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                        {s}
                      </span>
                    ))}
                    {m.skills.length > 4 && (
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>+{m.skills.length - 4} more</span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: 0, opacity: 0.3 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  className="group-hover:opacity-100 transition-opacity"
                  style={{ color: m.color }}
                >
                  <FaArrowRight className="text-sm mt-2" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
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
          <h2 className="font-extrabold leading-none mb-8"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', color: 'var(--text)' }}>
            The journey continues.<br />
            <span style={{ color: 'var(--accent)' }}>Want to be part of it?</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
              Let's Connect →
            </a>
            <a href="/experience" className="btn-sharp btn-sharp-outline inline-flex items-center gap-3">
              View Experience
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <Modal m={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Journey;
