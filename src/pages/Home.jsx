import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaChevronDown,
} from 'react-icons/fa';

/* ─── Ticker items ───────────────────────────────────────────────────────── */
const TICKER = [
  'Python', 'Jenkins', 'AWS', 'Terraform', 'Kubernetes', 'Docker',
  'Ansible', 'GitLab CI/CD', 'Java', 'CloudWatch', 'Dynatrace', 'Bash',
  'JFrog Artifactory', 'Maven', 'Packer', 'GitHub Actions', 'Splunk', 'Prometheus',
];

/* ─── Featured projects (for homepage list) ─────────────────────────────── */
const FEATURED = [
  {
    num: '01',
    title: 'Automated Pricing System',
    desc: 'Python · AWS Lambda · Google Sheets API — Streamlined updates for 100K+ products, boosting pricing accuracy at scale',
    tag: 'Backend / Cloud',
    year: '2025',
    image: '/images/Portfolio.jpg',
    link: '/projects',
  },
  {
    num: '02',
    title: 'YouTube Data Analysis Pipeline',
    desc: 'Apache Kafka · Spark · Python · Tableau — Real-time streaming data pipeline with live dashboards',
    tag: 'Data Engineering',
    year: '2022',
    image: '/images/YTAnalysis.png',
    link: '/projects',
  },
  {
    num: '03',
    title: 'IoT Soil Moisture Analysis',
    desc: 'Azure · Python · PySpark · Power BI — End-to-end cloud IoT pipeline processing sensor data',
    tag: 'IoT / Cloud',
    year: '2022',
    image: '/images/IOT.png',
    link: '/projects',
  },
  {
    num: '04',
    title: 'Cryptocurrency Security Enhancement',
    desc: 'Java · Python · SQL · Snowflake — Cryptographic security layer for transaction privacy',
    tag: 'Security / Backend',
    year: '2023',
    image: '/images/Encrypt.png',
    link: '/projects',
  },
];

/* ─── Animated counter ───────────────────────────────────────────────────── */
const Counter = ({ target, suffix = '' }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + Math.ceil(target / 40), target);
      setVal(cur);
      if (cur >= target) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
};

/* ─── Home ───────────────────────────────────────────────────────────────── */
const Home = () => (
  <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
    <h1 className="sr-only">Venkata Sai Charan – Software Engineer Portfolio</h1>

    {/* ════════════════════════════════════════
        HERO — photo bleeds from right,
        giant stacked name overlaps it
    ════════════════════════════════════════ */}
    <section className="relative min-h-screen flex items-end overflow-hidden"
      style={{ paddingBottom: 'clamp(3rem, 6vw, 7rem)' }}>

      {/* ── Photo layer (behind text) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* photo fills from center-right */}
        <div className="absolute right-0 top-0 h-full"
          style={{ width: 'clamp(55%, 60vw, 70%)' }}>
          <img
            src="/images/profile.JPG"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 10%' }}
          />
          {/* Gradient: bg bleeds from left */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, var(--bg) 0%, var(--bg) 15%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.2) 75%, transparent 100%)',
          }} />
          {/* Gradient: bg bleeds from bottom */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, var(--bg) 0%, rgba(10,10,10,0.8) 30%, rgba(10,10,10,0.2) 60%, transparent 100%)',
          }} />
          {/* Gradient: bg bleeds from top */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 18%)',
          }} />
        </div>
      </div>

      {/* ── Content layer (above photo) ── */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">

        {/* Role badge */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent)' }}>
            DevOps Engineer
          </span>
        </motion.div>

        {/* Giant stacked name */}
        <div className="overflow-hidden mb-10">
          {[
            { word: 'VENKATA', style: { color: 'var(--text)' } },
            { word: 'SAI',     style: { color: 'var(--accent)' } },
            { word: 'CHARAN',  style: { WebkitTextStroke: '1.5px var(--text)', color: 'transparent' } },
          ].map(({ word, style }, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block font-extrabold leading-none"
                style={{
                  fontSize: 'clamp(3.8rem, 11vw, 12rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: '0.9',
                  ...style,
                }}
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Meta + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 max-w-4xl">

          {/* Left: desc + CTA */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <p className="text-base leading-relaxed mb-5 max-w-sm"
              style={{ color: 'var(--text-muted)' }}>
              6+ years building CI/CD pipelines, cloud infrastructure,
              and containerized platforms that ship at speed and scale.
            </p>
            <div className="flex flex-wrap gap-5 text-sm mb-8"
              style={{ color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
                Merrimack, NH · USA
              </span>
              <span className="flex items-center gap-2">
                <FaBriefcase style={{ color: 'var(--accent)' }} />
                Open to opportunities
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp btn-sharp-fill inline-flex items-center gap-2"
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px var(--glow)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload className="text-xs" /> Download CV
              </motion.a>
              <Link
                to="/contact"
                className="btn-sharp btn-sharp-outline inline-flex items-center gap-2"
              >
                Let's Talk <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>

          {/* Right: socials + scroll hint */}
          <motion.div
            className="flex items-end justify-between lg:flex-col lg:items-end gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex gap-3">
              {[
                { href: 'https://www.linkedin.com/in/sai-charan-k-v/', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://github.com/KVSC1511',                  icon: FaGithub,   label: 'GitHub'   },
                { href: 'mailto:saicharankarasala@gmail.com',           icon: FaEnvelope, label: 'Email'    },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', scale: 1.1 }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="flex flex-col items-center gap-1.5"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <span className="text-[10px] tracking-widest uppercase"
                style={{ color: 'var(--text-muted)' }}>
                scroll
              </span>
              <FaChevronDown className="text-xs" style={{ color: 'var(--accent)' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════════
        MARQUEE TICKER
    ════════════════════════════════════════ */}
    <div
      className="overflow-hidden py-5 select-none"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="marquee-track">
        {[...TICKER, ...TICKER].map((item, i) => (
          <span key={i} className="flex items-center gap-8 flex-shrink-0 px-4">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--accent)', fontSize: '0.5rem', opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>

    {/* ════════════════════════════════════════
        STATS — large standalone numbers
    ════════════════════════════════════════ */}
    <section className="py-0 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { val: 6,  sfx: '+', label: 'Years',   sub: 'Experience'     },
            { val: 50, sfx: '+', label: 'Technical',sub: 'Skills'        },
            { val: 6,  sfx: '',  label: 'Projects', sub: 'Shipped'       },
            { val: 4,  sfx: '',  label: 'Industry', sub: 'Certifications'},
          ].map((s, i) => (
            <motion.div
              key={s.sub}
              className="py-14 px-6 text-center"
              style={{
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                borderLeft: i === 0 ? '1px solid var(--border)' : 'none',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div
                className="font-extrabold tabular-nums leading-none mb-3"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--accent)' }}
              >
                <Counter target={s.val} suffix={s.sfx} />
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {s.label}{' '}
                <span style={{ color: 'var(--text)' }}>{s.sub}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════════
        SELECTED WORK — editorial list
    ════════════════════════════════════════ */}
    <section className="py-24 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-5">
            <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: 'var(--accent)' }}>
              Selected Work
            </span>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            View All Projects
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: 'var(--accent)' }} />
          </Link>
        </motion.div>

        {/* Project rows — editorial list */}
        <div>
          {FEATURED.map((proj, i) => (
            <motion.div
              key={proj.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
            >
              <Link
                to={proj.link}
                className="group flex items-center gap-6 py-7 transition-all duration-300"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                {/* Number */}
                <span
                  className="text-xs font-mono font-bold w-7 flex-shrink-0"
                  style={{ color: 'var(--accent)' }}
                >
                  {proj.num}
                </span>

                {/* Thumbnail — revealed on hover */}
                <div
                  className="w-16 h-12 overflow-hidden flex-shrink-0 hidden sm:block opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--surface)' }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold mb-0.5 truncate transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      color: 'var(--text)',
                    }}
                  >
                    <span className="group-hover:text-[var(--accent)] transition-colors duration-200">
                      {proj.title}
                    </span>
                  </h3>
                  <p
                    className="text-sm truncate"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {proj.desc}
                  </p>
                </div>

                {/* Meta */}
                <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-xs px-3 py-1 font-medium"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {proj.tag}
                  </span>
                  <span
                    className="text-xs font-mono w-10 text-right"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {proj.year}
                  </span>
                </div>

                {/* Arrow */}
                <FaArrowRight
                  className="flex-shrink-0 text-xs opacity-0 -translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300"
                  style={{ color: 'var(--accent)' }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════════
        BRIEF INTRO STRIP
    ════════════════════════════════════════ */}
    <section
      className="py-24 px-6 lg:px-16 xl:px-24"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

        {/* Large quote */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-bold leading-tight"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              maxWidth: '600px',
            }}
          >
            "Engineer by skill,{' '}
            <span style={{ color: 'var(--accent)' }}>problem-solver</span>{' '}
            by mindset."
          </p>
          <p className="mt-5 text-base max-w-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}>
            Currently at Source Consulting LLC, building cloud infrastructure and
            automation systems. Previously at Wipro Technologies and Merizon Technologies.
          </p>
        </motion.div>

        {/* CTA links column */}
        <motion.div
          className="flex flex-col gap-4 flex-shrink-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {[
            { to: '/about',          label: 'About Me'       },
            { to: '/experience',     label: 'Experience'     },
            { to: '/certifications', label: 'Certifications' },
            { to: '/contact',        label: 'Get In Touch'   },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="group flex items-center gap-3 text-sm font-medium transition-colors duration-200 py-1"
              style={{ color: 'var(--text-muted)' }}
            >
              <div
                className="w-6 h-px transition-all duration-300 group-hover:w-10"
                style={{ background: 'var(--accent)' }}
              />
              <span className="group-hover:text-[var(--accent)] transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
