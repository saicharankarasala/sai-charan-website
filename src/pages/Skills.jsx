import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCogs, FaCode, FaServer, FaDatabase, FaCloud, FaTools,
  FaJava, FaPython, FaGitAlt, FaLinux, FaWindows, FaAws, FaMicrosoft,
  FaGlobe, FaTerminal, FaShieldAlt, FaEye,
  FaChartLine, FaChartPie, FaCog, FaWrench,
  FaStream, FaSitemap, FaCodeBranch, FaRobot,
  FaNetworkWired,
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

const CATEGORIES = [
  {
    id: 'Scripting',
    label: 'Scripting & Programming',
    accent: 'var(--accent)',
    skills: [
      { name: 'Python', icon: FaPython, level: 'Advanced' },
      { name: 'Bash', icon: FaTerminal, level: 'Advanced' },
      { name: 'Shell Scripting', icon: FaTerminal, level: 'Advanced' },
      { name: 'Java', icon: FaJava, level: 'Advanced' },
      { name: 'PowerShell', icon: FaTerminal, level: 'Intermediate' },
      { name: 'Groovy', icon: FaCode, level: 'Intermediate' },
    ],
  },
  {
    id: 'Cloud',
    label: 'Cloud & Containerization',
    accent: 'var(--accent2)',
    skills: [
      { name: 'AWS', icon: FaAws, level: 'Advanced' },
      { name: 'Kubernetes', icon: FaSitemap, level: 'Advanced' },
      { name: 'Docker', icon: FaStream, level: 'Advanced' },
      { name: 'Amazon EKS', icon: FaCloud, level: 'Advanced' },
      { name: 'Azure', icon: FaMicrosoft, level: 'Intermediate' },
      { name: 'K3s', icon: FaServer, level: 'Intermediate' },
    ],
  },
  {
    id: 'CICD',
    label: 'CI/CD & Automation',
    accent: 'var(--accent)',
    skills: [
      { name: 'Jenkins', icon: FaCog, level: 'Advanced' },
      { name: 'GitLab CI/CD', icon: FaCodeBranch, level: 'Advanced' },
      { name: 'Ansible', icon: FaRobot, level: 'Advanced' },
      { name: 'Terraform', icon: FaTools, level: 'Advanced' },
      { name: 'GitHub Actions', icon: FaGitAlt, level: 'Advanced' },
      { name: 'Maven', icon: FaWrench, level: 'Advanced' },
      { name: 'CloudFormation', icon: FaCloud, level: 'Intermediate' },
      { name: 'JFrog Artifactory', icon: FaServer, level: 'Intermediate' },
      { name: 'Packer', icon: FaCogs, level: 'Intermediate' },
    ],
  },
  {
    id: 'Monitoring',
    label: 'Monitoring & Security',
    accent: 'var(--accent3)',
    skills: [
      { name: 'AWS CloudWatch', icon: FaEye, level: 'Advanced' },
      { name: 'Dynatrace', icon: FaEye, level: 'Advanced' },
      { name: 'Datadog', icon: FaChartLine, level: 'Intermediate' },
      { name: 'Splunk', icon: FaChartPie, level: 'Intermediate' },
      { name: 'Prometheus', icon: FaChartLine, level: 'Intermediate' },
      { name: 'Grafana', icon: FaChartPie, level: 'Intermediate' },
      { name: 'IAM', icon: FaShieldAlt, level: 'Advanced' },
      { name: 'VPN / Firewall', icon: FaNetworkWired, level: 'Intermediate' },
    ],
  },
  {
    id: 'Systems',
    label: 'Systems & Middleware',
    accent: 'var(--accent2)',
    skills: [
      { name: 'Linux', icon: FaLinux, level: 'Advanced' },
      { name: 'Windows Server', icon: FaWindows, level: 'Advanced' },
      { name: 'Apache Tomcat', icon: FaServer, level: 'Advanced' },
      { name: 'JBOSS', icon: FaServer, level: 'Intermediate' },
      { name: 'WebSphere', icon: FaServer, level: 'Intermediate' },
      { name: 'Nginx', icon: FaServer, level: 'Intermediate' },
      { name: 'IIS', icon: FaWindows, level: 'Intermediate' },
    ],
  },
  {
    id: 'Tools',
    label: 'Tools & Databases',
    accent: 'var(--accent3)',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'SQL', icon: FaDatabase, level: 'Advanced' },
      { name: 'Jira', icon: FaCog, level: 'Advanced' },
      { name: 'ServiceNow', icon: FaCog, level: 'Intermediate' },
      { name: 'Confluence', icon: FaGlobe, level: 'Intermediate' },
      { name: 'Snowflake', icon: FaCloud, level: 'Intermediate' },
      { name: 'Power BI', icon: FaChartPie, level: 'Intermediate' },
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
                50+ technologies across DevOps, CI/CD automation, cloud infrastructure,
                monitoring, and systems engineering — built through real-world delivery.
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
                { num: '5+', label: 'Years Practice', color: 'var(--accent3)' },
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
      <ScrollBand text="PYTHON · JENKINS · AWS · TERRAFORM · KUBERNETES · DOCKER · ANSIBLE · GITLAB CI/CD · JAVA · CLOUDWATCH · DYNATRACE · BASH · " reverse />

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
