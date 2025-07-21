import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Link as ScrollLink } from 'react-scroll';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes,
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt,
  FaLinux, FaWindows, FaDatabase, FaCloud, FaServer, FaCode,
  FaChartBar, FaChartLine, FaChartPie, FaMicrochip, FaAws, FaMicrosoft,
  FaCodeBranch, FaProjectDiagram, FaNetworkWired, FaCertificate,
  FaCogs, FaTools, FaLaptopCode, FaTerminal, FaCode as FaCodeAlt,
  FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaChevronDown,
  FaUser, FaHome, FaInfoCircle, FaCogs as FaSkills,
  FaProjectDiagram as FaProjects, FaBriefcase as FaExperience, 
  FaCertificate as FaCertifications, FaEnvelope as FaContact, FaBlog, FaMapMarker, FaRocket
} from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import HamburgerMenu from './components/HamburgerMenu';
import Contact from './components/Contact';
import VscLogo from './components/VscLogo';
import BackgroundLogo from './components/BackgroundLogo';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Blog from './components/Blog';
import BlogLanding from "./pages/BlogLanding";
import BlogPost from "./pages/BlogPost";
import { Analytics } from '@vercel/analytics/react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

// Enhanced Components
// import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
// import LoadingScreen from './components/LoadingScreen';
import EnhancedContact from './components/EnhancedContact';
import ProjectShowcase from './components/ProjectShowcase';
import AnimatedSkillCard from './components/AnimatedSkillCard';
import AnimatedCertificationCard from './components/AnimatedCertificationCard';
import SkillsCarousel from './components/SkillsCarousel';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import ContactPage from './pages/Contact';
import Journey from './pages/Journey';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/journey', label: 'Journey', icon: FaRocket },
    { path: '/skills', label: 'Skills', icon: FaSkills },
    { path: '/projects', label: 'Projects', icon: FaProjects },
    { path: '/experience', label: 'Experience', icon: FaExperience },
    { path: '/certifications', label: 'Certifications', icon: FaCertifications },
    { path: '/contact', label: 'Contact', icon: FaContact },
    { path: '/blog', label: 'Blog', icon: FaBlog }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-2 py-1.5">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center gap-4 min-w-[320px]">
            {/* Logo */}
            <Link 
              to="/" 
              className="group"
              aria-label="Go to homepage"
            >
              <img 
                src="/images/vsclogo.png" 
                alt="Venkata Sai Charan - Software Engineer Logo" 
                className="w-16 sm:w-20 h-auto object-contain group-hover:scale-110 transition-all duration-300"
                style={{ minWidth: '56px' }}
              />
            </Link>
            {/* Name Block */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Venkata</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Sai Charan</span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">Software Engineer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                  isActive(item.path)
                    ? 'text-[#e13a7a] bg-[#e13a7a]/5 border-b-2 border-[#e13a7a]'
                    : 'text-gray-600 hover:text-[#e13a7a] hover:bg-gray-50'
                }`}
              >
                <item.icon className="text-base" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 pb-3 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 gap-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-xs ${
                    isActive(item.path)
                      ? 'text-[#e13a7a] bg-[#e13a7a]/10 border-l-4 border-[#e13a7a]'
                      : 'text-gray-600 hover:text-[#e13a7a] hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="text-sm" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white pt-20">
          {/* Enhanced Components */}
          <ScrollProgress />
          <CustomCursor />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Routes */}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogLanding />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/images/vsclogo.jpeg" 
                      alt="Venkata Sai Charan - Software Engineer Logo" 
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Venkata Sai Charan</h3>
                      <p className="text-gray-400">Software Engineer</p>
                      </div>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Passionate software engineer with expertise in full-stack development, 
                    cloud technologies, and data engineering. Let's build something amazing together.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/sai-charan-k-v/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#e13a7a] text-white rounded-lg flex items-center justify-center hover:bg-[#6d217f] transition-colors duration-300"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://github.com/KVSC1511" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#e13a7a] text-white rounded-lg flex items-center justify-center hover:bg-[#6d217f] transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="mailto:saicharankarasala@gmail.com" 
                      className="w-10 h-10 bg-[#e13a7a] text-white rounded-lg flex items-center justify-center hover:bg-[#6d217f] transition-colors duration-300"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">About</Link></li>
                    <li><Link to="/skills" className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">Skills</Link></li>
                    <li><Link to="/projects" className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">Projects</Link></li>
                    <li><Link to="/experience" className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">Experience</Link></li>
                    <li><Link to="/certifications" className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">Certifications</Link></li>
                        </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <FaEnvelope className="text-[#e13a7a]" />
                      <a href="mailto:saicharankarasala@gmail.com" className="hover:text-[#e13a7a] transition-colors duration-300">
                        saicharankarasala@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaMapMarker className="text-[#e13a7a]" />
                      Merrimack, NH, USA
                    </li>
                    <li className="flex items-center gap-2">
                      <FaBriefcase className="text-[#e13a7a]" />
                      Available for opportunities
                    </li>
                        </ul>
                </div>
                </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400">
                  © 2025 Venkata Sai Charan. All rights reserved. 
                  <span className="ml-2" role="img" aria-label="USA flag">🇺🇸</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  );
};

export default App;