import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCogs, FaCode, FaServer, FaDatabase, FaCloud, FaTools,
  FaLaptopCode, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt,
  FaReact, FaGitAlt, FaLinux, FaWindows, FaAws, FaMicrosoft,
  FaLeaf, FaGlobe, FaTerminal, FaShieldAlt, FaEye, FaPalette,
  FaChartLine, FaChartPie, FaBolt, FaRocket, FaCog, FaWrench,
  FaStream, FaSitemap, FaCodeBranch, FaRobot, FaBroadcastTower,
  FaNetworkWired, FaMicrochip,
} from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';
import { fadeUp } from '../utils/animations';

// ─── Scramble heading word ────────────────────────────────────────────────────
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
        style={{
          fontSize: 'clamp(4rem, 13vw, 11rem)',
          color: color || 'var(--text)',
          WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none',
          letterSpacing: '-0.04em',
          lineHeight: 0.88,
        }}
      >
        {display}
      </motion.div>
    </div>
  );
};

// ─── Alias messy re-exports ────────────────────────────────────────────────────
const FaSpring = FaCogs;
const FaSql = FaDatabase;
const FaHadoop = FaServer;
const FaSnowflake = FaCloud;
const FaVlc = FaNetworkWired;
const FaIot = FaMicrochip;
const FaDotnet = FaCode;

const CATEGORIES = [
  {
    id: 'Programming',
    label: 'Programming Languages',
    accent: 'var(--accent)',
    skills: [
      { name: 'Python', icon: FaPython, level: 'Advanced' },
      { name: 'Java', icon: FaJava, level: 'Advanced' },
      { name: 'JavaScript', icon: FaJs, level: 'Advanced' },
      { name: 'Pandas', icon: FaLeaf, level: 'Advanced' },
      { name: 'PySpark', icon: FaRocket, level: 'Intermediate' },
      { name: 'IoT', icon: FaIot, level: 'Intermediate' },
      { name: 'VLC', icon: FaVlc, level: 'Intermediate' },
      { name: '.NET', icon: FaDotnet, level: 'Intermediate' },
    ],
  },
  {
    id: 'Frontend',
    label: 'Frontend',
    accent: 'var(--accent2)',
    skills: [
      { name: 'React', icon: FaReact, level: 'Advanced' },
      { name: 'HTML5', icon: FaHtml5, level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
      { name: 'UI/UX', icon: FaPalette, level: 'Intermediate' },
    ],
  },
  {
    id: 'Backend',
    label: 'Backend',
    accent: 'var(--accent)',
    skills: [
      { name: 'Spring Boot', icon: FaSpring, level: 'Advanced' },
      { name: 'REST API', icon: FaGlobe, level: 'Advanced' },
      { name: 'Server', icon: FaServer, level: 'Advanced' },
    ],
  },
  {
    id: 'Database',
    label: 'Databases',
    accent: 'var(--accent3)',
    skills: [
      { name: 'SQL', icon: FaSql, level: 'Advanced' },
      { name: 'MySQL', icon: FaDatabase, level: 'Advanced' },
      { name: 'PL/SQL', icon: FaDatabase, level: 'Advanced' },
      { name: 'Snowflake', icon: FaSnowflake, level: 'Intermediate' },
      { name: 'Hadoop', icon: FaHadoop, level: 'Intermediate' },
    ],
  },
  {
    id: 'Cloud',
    label: 'Cloud & DevOps',
    accent: 'var(--accent2)',
    skills: [
      { name: 'AWS', icon: FaAws, level: 'Intermediate' },
      { name: 'AWS Lambda', icon: FaBolt, level: 'Intermediate' },
      { name: 'Azure', icon: FaMicrosoft, level: 'Intermediate' },
      { name: 'Linux', icon: FaLinux, level: 'Advanced' },
      { name: 'Windows', icon: FaWindows, level: 'Advanced' },
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'GitLab CI', icon: FaCodeBranch, level: 'Intermediate' },
      { name: 'Bash', icon: FaTerminal, level: 'Advanced' },
      { name: 'PowerShell', icon: FaTerminal, level: 'Intermediate' },
      { name: 'Unix Shell', icon: FaTerminal, level: 'Advanced' },
    ],
  },
  {
    id: 'Tools',
    label: 'Tools & Analytics',
    accent: 'var(--accent3)',
    skills: [
      { name: 'Tableau', icon: FaChartLine, level: 'Advanced' },
      { name: 'Power BI', icon: FaChartPie, level: 'Advanced' },
      { name: 'Informatica', icon: FaStream, level: 'Intermediate' },
      { name: 'Pentaho', icon: FaWrench, level: 'Intermediate' },
      { name: 'Dynatrace', icon: FaEye, level: 'Intermediate' },
      { name: 'ServiceNow', icon: FaCog, level: 'Intermediate' },
      { name: 'D365', icon: FaMicrosoft, level: 'Intermediate' },
      { name: 'JUnit', icon: FaShieldAlt, level: 'Intermediate' },
      { name: 'Selenium', icon: FaRobot, level: 'Intermediate' },
      { name: 'PXE', icon: FaNetworkWired, level: 'Intermediate' },
      { name: 'GPO', icon: FaSitemap, level: 'Intermediate' },
      { name: 'Matplotlib', icon: FaChartLine, level: 'Advanced' },
      { name: 'Plotly', icon: FaChartPie, level: 'Intermediate' },
      { name: 'OptiSystem', icon: FaBroadcastTower, level: 'Intermediate' },
    ],
  },
];

const allSkills = CATEGORIES.flatMap(c => c.skills.map(s => ({ ...s, category: c.id })));

// ─── Skill pill ───────────────────────────────────────────────────────────────
const SkillPill = ({ name, icon: Icon, level, accent }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.85 }}
    whileHover={{ scale: 1.06, y: -2 }}
    transition={{ duration: 0.25 }}
    className="group flex items-center gap-2.5 px-4 py-2.5"
    style={{
      background: 'var(--bg-surface)',
      border: `1px solid ${level === 'Advanced' ? 'rgba(45,212,191,0.25)' : 'var(--border)'}`,
    }}
  >
    <Icon
      className="text-sm flex-shrink-0"
      style={{ color: level === 'Advanced' ? 'var(--accent)' : 'var(--text-muted)' }}
    />
    <span
      className="text-sm font-medium"
      style={{ color: level === 'Advanced' ? 'var(--text)' : 'var(--text-muted)' }}
    >
      {name}
    </span>
  </motion.div>
);

// ─── Component ────────────────────────────────────────────────────────────────
const Skills = () => {
  const [active, setActive] = useState('All');

  const displayCategories = active === 'All'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === active);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <GradientOrb color="rgba(45,212,191,0.15)" size="600px" className="top-[-80px] right-[-80px]" />
        <GradientOrb color="rgba(167,139,250,0.12)" size="400px" className="bottom-[-60px] left-[-60px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--accent)' }}
          >
            Technical Expertise
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div>
                <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                  Technical<br /><span style={{ color: 'var(--accent)' }}>Skills</span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 text-lg leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                50+ technologies across programming languages, frameworks, cloud platforms,
                and data tools — built through years of real-world delivery.
              </motion.p>
            </div>

            {/* Right — domain numbers */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-px"
              style={{ background: 'var(--border)' }}
            >
              {[
                { num: '50+', label: 'Technologies', color: 'var(--accent)' },
                { num: '6', label: 'Domains', color: 'var(--accent2)' },
                { num: '4+', label: 'Years Practice', color: 'var(--accent3)' },
                { num: '20+', label: 'Advanced Skills', color: 'var(--accent)' },
                { num: '3', label: 'Cloud Platforms', color: 'var(--accent2)' },
                { num: '4', label: 'Certifications', color: 'var(--accent3)' },
              ].map((item) => (
                <div key={item.label} className="px-6 py-7 text-center" style={{ background: 'var(--bg)' }}>
                  <div className="font-extrabold leading-none mb-1" style={{ fontSize: '2.2rem', color: item.color }}>{item.num}</div>
                  <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="PYTHON · REACT · AWS · TERRAFORM · JAVA · SPRING BOOT · SQL · SNOWFLAKE · TABLEAU · POWER BI · PANDAS · PYSPARK · " reverse />

      {/* ── FILTER NAV ──────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-0 flex items-center overflow-x-auto scrollbar-none gap-0">
          {['All', ...CATEGORIES.map(c => c.id)].map((id, i) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="relative flex-shrink-0 px-6 py-5 text-sm font-bold tracking-wider uppercase transition-colors duration-200"
              style={{
                color: active === id ? 'var(--accent)' : 'var(--text-muted)',
                borderRight: '1px solid var(--border)',
              }}
            >
              {id === 'All' ? 'All Skills' : id}
              {active === id && (
                <motion.div
                  layoutId="skill-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── SKILLS CONTENT ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {displayCategories.map((cat, ci) => (
              <div
                key={cat.id}
                className="py-12 lg:py-16"
                style={{ borderBottom: ci < displayCategories.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
                  {/* Category label */}
                  <div className="lg:sticky lg:top-32">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="font-extrabold"
                        style={{ fontSize: '3rem', color: cat.accent, opacity: 0.2, lineHeight: 1 }}
                      >
                        {String(ci + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: 'var(--text)' }}
                    >
                      {cat.label}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {cat.skills.length} skills
                      {' · '}
                      {cat.skills.filter(s => s.level === 'Advanced').length} advanced
                    </p>

                    {/* Level legend */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Advanced</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)', border: '1px solid var(--text-muted)' }} />
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Intermediate</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills pill cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map(skill => (
                      <SkillPill
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        level={skill.level}
                        accent={cat.accent}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── NUMBERS STRIP ───────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-3">
          {[
            { num: `${allSkills.length}+`, label: 'Total Skills' },
            { num: `${allSkills.filter(s => s.level === 'Advanced').length}`, label: 'Advanced' },
            { num: `${CATEGORIES.length}`, label: 'Domains' },
          ].map((item, i) => (
            <div
              key={item.label}
              className="py-10 px-8 text-center"
              style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}
            >
              <div
                className="font-extrabold leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--accent)' }}
              >
                {item.num}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-16 overflow-hidden">
        <GradientOrb color="rgba(251,191,36,0.12)" size="500px" className="top-[-60px] right-[-60px]" />
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
            Ready to put these<br />
            <span style={{ color: 'var(--accent)' }}>skills to work?</span>
          </h2>
          <Link to="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
            Start a Project →
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Skills;
