import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter, Routes, Route, Link, useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from './hooks/useOutsideClick';
import { HelmetProvider } from 'react-helmet-async';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes,
  FaHome, FaInfoCircle, FaCogs, FaProjectDiagram,
  FaBriefcase, FaCertificate, FaBlog, FaMapMarkerAlt, FaRocket,
} from 'react-icons/fa';
import 'boxicons/css/boxicons.min.css';
import './index.css';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics }     from '@vercel/analytics/react';

// ── Enhanced Components ──────────────────────────────────────────────────
import ScrollProgress    from './components/ScrollProgress';
import MagneticCursor    from './components/MagneticCursor';
import LoadingScreen     from './components/LoadingScreen';
import CursorSpotlight   from './components/CursorSpotlight';

// ── Pages ─────────────────────────────────────────────────────────────────
import Home              from './pages/Home';
import About             from './pages/About';
import Skills            from './pages/Skills';
import Projects          from './pages/Projects';
import Experience        from './pages/Experience';
import Certifications    from './pages/Certifications';
import ContactPage       from './pages/Contact';
import Journey           from './pages/Journey';
import Logo              from './pages/Logo';
import BlogLanding       from './pages/BlogLanding';
import BlogPost          from './pages/BlogPost';

// ── Page transition wrapper ───────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

const PageWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

// ── Navigation ────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { path: '/home',           label: 'Home',           icon: FaHome },
  { path: '/about',          label: 'About',          icon: FaInfoCircle },
  { path: '/journey',        label: 'Journey',        icon: FaRocket },
  { path: '/skills',         label: 'Skills',         icon: FaCogs },
  { path: '/projects',       label: 'Projects',       icon: FaProjectDiagram },
  { path: '/experience',     label: 'Experience',     icon: FaBriefcase },
  { path: '/certifications', label: 'Certifications', icon: FaCertificate },
  { path: '/contact',        label: 'Contact',        icon: FaEnvelope },
  { path: '/blog',           label: 'Blog',           icon: FaBlog },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef  = useRef(null);

  useOutsideClick(menuRef, () => menuOpen && setMenuOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path || (path === '/home' && location.pathname === '/');

  return (
    <>
      <nav
        ref={menuRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(3,7,18,0.85)'
            : 'rgba(3,7,18,0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
              <img
                src="/images/vsclogo.png"
                alt="VSC Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="leading-tight">
                <span className="block text-base font-bold text-[var(--text)] leading-none">
                  Venkata Sai Charan
                </span>
                <span className="block text-xs font-medium" style={{ color: 'var(--blue)' }}>
                  DevOps Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                    transition-all duration-300 hover:tracking-wide ${
                    isActive(item.path)
                      ? 'text-[var(--text)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  <item.icon className="text-xs flex-shrink-0" />
                  {item.label}
                  {/* Animated active underline */}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, var(--blue), var(--purple))' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 glass-card rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.div animate={menuOpen ? 'open' : 'closed'}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-8 py-4 text-2xl font-bold transition-all duration-300 ${
                    isActive(item.path)
                      ? 'gradient-text-blue-purple'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  <item.icon className="text-lg" />
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Socials in mobile menu */}
            <motion.div
              className="flex gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              {[
                { href: 'https://www.linkedin.com/in/sai-charan-k-v/', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://github.com/KVSC1511', icon: FaGithub, label: 'GitHub' },
                { href: 'mailto:saicharankarasala@gmail.com', icon: FaEnvelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ── Route Renderer with transitions ──────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/home"          element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about"         element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/journey"       element={<PageWrapper><Journey /></PageWrapper>} />
        <Route path="/skills"        element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects"      element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/experience"    element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/certifications"element={<PageWrapper><Certifications /></PageWrapper>} />
        <Route path="/contact"       element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/logo"          element={<PageWrapper><Logo /></PageWrapper>} />
        <Route path="/blog"          element={<PageWrapper><BlogLanding /></PageWrapper>} />
        <Route path="/blog/:slug"    element={<PageWrapper><BlogPost /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// ── Footer ────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="py-16 mt-0" style={{ background: '#060d1f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/vsclogo.png"
              alt="VSC"
              className="w-10 h-10 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <h3 className="text-lg font-bold text-[var(--text)]">Venkata Sai Charan</h3>
              <p className="text-xs" style={{ color: 'var(--blue)' }}>DevOps Engineer</p>
            </div>
          </div>
          <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
            DevOps engineer specializing in CI/CD, cloud infrastructure, and automation. Let's build something together.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://www.linkedin.com/in/sai-charan-k-v/', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://github.com/KVSC1511',                  icon: FaGithub,   label: 'GitHub' },
              { href: 'mailto:saicharankarasala@gmail.com',           icon: FaEnvelope, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors duration-300"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold text-[var(--text)] uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {['/about', '/skills', '/projects', '/experience', '/certifications', '/contact'].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors duration-300 capitalize"
                >
                  {path.replace('/', '')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-sm font-bold text-[var(--text)] uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:saicharankarasala@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors duration-300"
              >
                <FaEnvelope style={{ color: 'var(--blue)', flexShrink: 0 }} />
                saicharankarasala@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
              <FaMapMarkerAlt style={{ color: 'var(--blue)', flexShrink: 0 }} />
              Merrimack, NH, USA
            </li>
            <li className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
              <FaBriefcase style={{ color: 'var(--blue)', flexShrink: 0 }} />
              Open to opportunities
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p className="text-center text-xs text-[var(--text-muted)]">
          © 2026 Venkata Sai Charan. All rights reserved.{' '}
          <span role="img" aria-label="USA">🇺🇸</span>
        </p>
      </div>
    </div>
  </footer>
);

// ── Root App ──────────────────────────────────────────────────────────────
const App = () => {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem('vsc-loaded')
  );

  const handleLoadComplete = () => {
    sessionStorage.setItem('vsc-loaded', '1');
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Global premium cursor (desktop only — hidden via CSS on mobile) */}
        <MagneticCursor />

        {/* Cursor spotlight glow — teal radial gradient that follows mouse */}
        <CursorSpotlight />

        {/* Cinematic loading screen (first visit only) */}
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={handleLoadComplete} />
          )}
        </AnimatePresence>

        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Main layout */}
        <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
          <Navigation />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>

        {/* Vercel integrations */}
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
