import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import GradientOrb from '../components/GradientOrb';
import ScrollBand from '../components/ScrollBand';
import useTextScramble from '../hooks/useTextScramble';
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations';

// ─── Animated counter ─────────────────────────────────────────────────────────
const Counter = ({ value, suffix = '', label, delay = 0 }) => {
  const [display, setDisplay] = React.useState('0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!inView) return;
    const num = parseInt(value, 10);
    if (isNaN(num)) { setDisplay(value); return; }
    let cur = 0;
    const step = Math.ceil(num / 60);
    const id = setInterval(() => {
      cur = Math.min(cur + step, num);
      setDisplay(String(cur));
      if (cur >= num) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <div ref={ref} className="py-10 px-6 lg:px-10 border-r border-[var(--border)] last:border-r-0 text-center">
      <div
        className="font-extrabold leading-none mb-2"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--accent)' }}
      >
        {display}{suffix}
      </div>
      <div className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
};

// ─── Scramble heading words ───────────────────────────────────────────────────
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
        transition={{ duration: 0.85, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        className="block font-extrabold"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          color: color || 'var(--text)',
          WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none',
          letterSpacing: '-0.03em',
          lineHeight: 0.92,
        }}
      >
        {display}
      </motion.div>
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const About = () => {
  const journey = [
    {
      year: '2025',
      role: 'Software Engineer',
      org: 'Source Consulting LLC',
      tag: 'Current',
      side: 'right',
    },
    {
      year: '2024',
      role: 'Network Operation Analyst',
      org: 'Trbhi INC → Ziply Fiber',
      tag: 'DevOps',
      side: 'left',
    },
    {
      year: '2023',
      role: 'MS Computer Science',
      org: 'University of Missouri – Kansas City',
      tag: 'GPA 3.75',
      side: 'right',
    },
    {
      year: '2021',
      role: 'Software Engineer',
      org: 'Wipro Technologies',
      tag: 'Data Eng',
      side: 'left',
    },
    {
      year: '2019',
      role: 'Software Engineer',
      org: 'Merizon Technologies',
      tag: 'Full Stack',
      side: 'right',
    },
    {
      year: '2017',
      role: 'BE Electronics & Communication',
      org: "St. Joseph's College of Engineering",
      tag: 'GPA 3.7',
      side: 'left',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <GradientOrb color="rgba(45,212,191,0.18)" size="600px" className="top-0 left-[-100px] opacity-60" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.3em] uppercase mb-8"
              style={{ color: 'var(--accent)' }}
            >
              DevOps Engineer & Problem Solver
            </motion.p>

            <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              The Story<br /><span style={{ color: 'var(--accent)' }}>of Me</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              6+ years building resilient CI/CD pipelines, cloud infrastructure,
              and containerized platforms. From Bengaluru to Kansas City to New Hampshire —
              the journey shapes the engineer.
            </motion.p>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="btn-sharp btn-sharp-fill mt-10 inline-flex items-center gap-3"
            >
              Work with me <FaArrowRight />
            </motion.a>
          </div>

          {/* Right — quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-0"
            style={{ border: '1px solid var(--border)' }}
          >
            {[
              { label: 'Based in', value: 'Merrimack, NH · USA', color: 'var(--accent)' },
              { label: 'Experience', value: '6+ Years in DevOps & Cloud Engineering', color: 'var(--accent2)' },
              { label: 'Education', value: 'MS Computer Science — UMKC', color: 'var(--accent3)' },
              { label: 'Specialization', value: 'DevOps · CI/CD · Cloud Infrastructure', color: 'var(--accent)' },
              { label: 'Certifications', value: 'AWS · Terraform · Python', color: 'var(--accent2)' },
              { label: 'Status', value: 'Open to full-time opportunities', color: 'var(--accent)', pulse: true },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="px-8 py-5"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <div className="flex items-center gap-2">
                  {item.pulse && <div className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: item.color }} />}
                  <p className="font-semibold text-sm" style={{ color: item.color }}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SCROLL BAND ───────────────────────────────────────────────────── */}
      <ScrollBand text="ABOUT ME · STORY · ENGINEER · PROBLEM SOLVER · CLOUD · FULL STACK · DATA · BUILDER · " />

      {/* ── STATS ROW ─────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <Counter value="6" suffix="+" label="Years Experience" />
          <Counter value="5" suffix="" label="Companies" />
          <Counter value="50" suffix="+" label="Technologies" />
          <Counter value="4" suffix="" label="Certifications" />
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
          {/* Left — section label */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Background
            </p>
            <h2 className="font-extrabold leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--text)' }}>
              My<br /><span style={{ color: 'var(--accent)' }}>Story</span>
            </h2>

            {/* Philosophy blockquote */}
            <div className="mt-12 pl-6" style={{ borderLeft: '3px solid var(--accent)' }}>
              <p className="text-base italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                "Great technology is built at the intersection of curiosity,
                creativity, and code. Every line should serve a purpose."
              </p>
            </div>
          </motion.div>

          {/* Right — story paragraphs */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                head: "Engineer by mindset.",
                body: "I'm Venkata Sai Charan — a DevOps Engineer with 6+ years of experience building automated CI/CD pipelines, managing hybrid cloud infrastructure, and securing containerized platforms. My journey started with a fascination for how systems work and a drive to automate everything."
              },
              {
                head: "DevOps at the core.",
                body: "With an MS in Computer Science from University of Missouri – Kansas City and a BE in Electronics and Communication Engineering, I bridge theoretical depth with hands-on delivery. I specialize in Kubernetes, Docker, Jenkins, Terraform, and AWS — bringing infrastructure to life through code."
              },
              {
                head: "Impact over activity.",
                body: "From cutting deployment time by 40% at Touch Screens Inc with CI/CD automation to improving infrastructure reliability by 25% at Ziply Fiber, I measure success by outcomes — not lines of code. Clean pipelines, secure systems, and zero-downtime deployments are non-negotiable."
              },
              {
                head: "Always learning.",
                body: "Whether it's K3s edge deployments, Ansible playbooks, or Grafana dashboards — I stay current because infrastructure never stops evolving. AWS Solutions Architect and Terraform certified, I'm always pushing the boundary of what I know."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.08}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>{item.head}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────────────────────────── */}
      <section
        className="py-28 px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {/* Section label */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Timeline
            </p>
            <h2 className="font-extrabold leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--text)' }}>
              The<br /><span style={{ color: 'var(--accent)' }}>Journey</span>
            </h2>
          </div>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Central axis line — desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, var(--accent), var(--accent2), transparent)' }}
          />

          <div className="space-y-0">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                variants={item.side === 'right' ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 py-8 ${
                  i < journey.length - 1 ? 'border-b' : ''
                }`}
                style={{ borderColor: 'var(--border)' }}
              >
                {/* Year — always visible large */}
                <div className={`lg:w-1/2 ${item.side === 'left' ? 'lg:text-right lg:pr-16' : 'lg:order-last lg:pl-16'}`}>
                  <span
                    className="font-extrabold"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text)', opacity: 0.18 }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Dot — desktop only */}
                <div
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 items-center justify-center"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 16px var(--glow)' }}
                />

                {/* Content */}
                <div className={`lg:w-1/2 ${item.side === 'right' ? 'lg:pr-16' : 'lg:order-first lg:pl-16'}`}>
                  <span
                    className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 mb-3"
                    style={{
                      background: 'rgba(45,212,191,0.08)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(45,212,191,0.2)',
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{item.role}</h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{item.org}</p>
                  {/* Mobile year */}
                  <p className="text-xs mt-2 font-bold" style={{ color: 'var(--accent)', opacity: 0.7 }}>{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES ME DIFFERENT ───────────────────────────────────────── */}
      <section
        className="py-28 px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            Strengths
          </p>
          <h2 className="font-extrabold leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--text)' }}>
            What Makes<br /><span style={{ color: 'var(--accent)' }}>Me Different</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            {
              num: '01',
              title: 'Full-Stack to Cloud',
              desc: 'Comfortable across the entire stack — from React UI to AWS Lambda to Snowflake pipelines. I don\'t silo.',
            },
            {
              num: '02',
              title: 'Automation First',
              desc: 'If something can be automated, I automate it. Python, Bash, Terraform — my first reflex is to script the toil away.',
            },
            {
              num: '03',
              title: 'Data-Driven Decisions',
              desc: 'ETL pipelines, BI dashboards, and observability stacks — I build systems that give teams clarity over noise.',
            },
            {
              num: '04',
              title: 'Ownership Mindset',
              desc: 'I treat every system as if it\'s my name on the deployment. Quality, documentation, and reliability are non-negotiable.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.1}
              viewport={{ once: true }}
              className="p-8 lg:p-12"
              style={{
                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="block font-extrabold mb-6"
                style={{ fontSize: '3.5rem', color: 'var(--accent)', opacity: 0.15, lineHeight: 1 }}
              >
                {item.num}
              </span>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>{item.title}</h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative py-32 px-6 lg:px-16 overflow-hidden"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <GradientOrb color="rgba(167,139,250,0.2)" size="500px" className="top-[-80px] right-[-80px]" />
        <GradientOrb color="rgba(45,212,191,0.15)" size="400px" className="bottom-[-80px] left-[-60px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
            Let's Connect
          </p>
          <h2
            className="font-extrabold leading-none mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', color: 'var(--text)' }}
          >
            Ready to<br /><span style={{ color: 'var(--accent)' }}>Build</span>{' '}
            <span style={{ WebkitTextStroke: '1.5px var(--text)', color: 'transparent' }}>Together?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Whether you have a project in mind or just want to say hello — my inbox is always open.
          </p>
          <a href="/contact" className="btn-sharp btn-sharp-fill inline-flex items-center gap-3">
            Get In Touch <FaArrowRight />
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
