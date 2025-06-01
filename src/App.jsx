import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  FaTwitter, FaInstagram
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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState({
    skills: null,
    experience: null,
    education: null,
    certifications: null,
    projects: null
  });
  const [activeSection, setActiveSection] = useState('');

  const handleCardClick = (section, index) => {
    setExpandedCards(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            const navLink = document.querySelector('header nav a[href*=' + id + ']');
            if (navLink) {
              navLink.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/blog" element={<BlogLanding />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/" element={
            <div className="bg-white min-h-screen text-gray-900 font-sans relative">
              <header className="fixed w-full top-0 z-50 bg-white/90 shadow-md border-b-2 border-[#e13a7a]">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                  <a href="#home" className="flex items-center gap-2" aria-label="Home">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-tr from-[#6d217f] via-[#e13a7a] to-[#00FFEE]">
                      <span className="text-white text-2xl font-extrabold tracking-tight">VSC</span>
                    </span>
                  </a>
                  <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">About</a>
                    <a href="#skills" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">Skills</a>
                    <a href="#education" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">Education</a>
                    <a href="#certifications" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">Certifications</a>
                    <a href="#experience" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">Experience</a>
                    <a href="#projects" className="text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors">Projects</a>
                    <a href="#contact" className="text-white bg-[#e13a7a] px-4 py-2 rounded-full font-bold shadow hover:bg-[#6d217f] transition">Contact</a>
                    <a href="/blog" className="text-[#6d217f] hover:text-[#e13a7a] font-semibold transition-colors" target="_blank" rel="noopener noreferrer">Blog</a>
                  </div>
                  {/* Hamburger for mobile */}
                  <div className="md:hidden flex items-center">
                    <button
                      className="hamburger-menu flex flex-col justify-center items-center w-10 h-10 rounded-lg border-2 border-[#e13a7a] bg-white text-[#e13a7a] hover:bg-[#e13a7a] hover:text-white transition-all duration-300"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="Toggle menu"
                    >
                      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''} w-6 h-6 relative flex flex-col justify-between`}>
                        <span className="block h-1 w-full bg-current rounded transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(45deg) translateY(10px)' : 'none' }}></span>
                        <span className={`block h-1 w-full bg-current rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className="block h-1 w-full bg-current rounded transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'none' }}></span>
                      </div>
                    </button>
                    {isMenuOpen && (
                      <div className="dropdown-menu open absolute right-4 top-16 bg-white rounded-xl shadow-lg flex flex-col gap-2 p-6 z-50 border border-[#e13a7a] animate-fade-in">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Home</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">About</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Skills</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Education</a>
                        <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Certifications</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Experience</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#e13a7a] font-semibold">Projects</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white bg-[#e13a7a] px-4 py-2 rounded-full font-bold shadow hover:bg-[#6d217f] transition">Contact</a>
                        <a href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[#6d217f] hover:text-[#e13a7a] font-semibold" target="_blank" rel="noopener noreferrer">Blog</a>
                      </div>
                    )}
                  </div>
                </nav>
              </header>

              {/* HERO SECTION - Clean, modern, balanced */}
              <section className="w-full min-h-[480px] flex flex-col md:flex-row items-center justify-center bg-gradient-to-tr from-[#6d217f] to-[#e13a7a] text-white px-4 pt-32 pb-12" id="home">
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-20 xl:px-32">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Hi, I'm <span className="text-white">Venkata Sai Charan</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-pink-200">
                    Cloud & Backend Developer
                  </h2>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl mx-auto">
                    Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. Let's build what matters.
                  </p>
                  <div className="flex flex-row items-center gap-4 mb-8 justify-center">
                    <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300">
                      <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300">
                      <i className='bx bx-envelope'></i>
                    </a>
                    <a href="https://github.com/KVSC1511" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex justify-center items-center w-10 h-10 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center md:justify-center">
                    <a href="/cv.pdf" className="btn bg-white text-[#e13a7a] font-bold px-8 py-3 rounded-full shadow hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300" target="_blank" rel="noopener noreferrer">Download CV</a>
                    <a href="#contact" className="btn bg-[#e13a7a] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-pink-400 hover:text-white transition-all duration-300">Contact Me</a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                  <img 
                    src="/images/profile.JPG" 
                    alt="Venkata Sai Charan - UI/UX Designer & Software Engineer" 
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow object-cover"
                  />
                </div>
              </section>

              {/* ABOUT SECTION - Clean white card */}
              <section className="about py-12 px-4 bg-gray-50" id="about">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                    <h2 className="text-3xl font-bold mb-6 text-center">About <span className="text-[#e13a7a]">Me</span></h2>
                    <span className="block text-lg text-[#e13a7a] font-semibold mb-4 text-center">
                      "I believe great technology is built at the intersection of curiosity, creativity, and code."
                    </span>
                    <p className="mb-2">
                      Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS.
                    </p>
                    <p className="mb-2">
                      Demonstrated impact through projects involving cryptocurrency security, AI-driven analytics, and IoT-based systems—each built with a focus on performance, optimization, and real-world utility. Skilled in tools like Snowflake, Informatica, Tableau, Power BI, and Git, and highly adaptable to evolving technologies.
                    </p>
                    <p>
                      Driven by innovation, problem-solving, and clean system design. Known for turning complexity into clarity and collaborating across teams to bring high-impact ideas to life.
                    </p>
                  </div>
                  <div className="flex justify-center mt-8 gap-8">
                    <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-900">
                      <h3 className="text-3xl font-bold mb-2 text-[#e13a7a]">4+</h3>
                      <p className="text-base">Years Experience</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="skills py-12 px-4 bg-gray-50" id="skills">
                <div className="max-w-7xl mx-auto">
                  <div className="bg-white rounded-2xl shadow p-8 text-gray-900 flex flex-col items-center">
                    <FaTools className="text-3xl text-[#e13a7a] mb-2" />
                    <h2 className="text-3xl font-bold mb-2 text-center">My <span className="text-[#e13a7a]">Skills</span></h2>
                    <div className="w-16 h-1 bg-[#e13a7a] rounded-full mb-6"></div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Python</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Java</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">C#/.NET</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">JavaScript (Node.js)</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">SQL</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">HTML</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">CSS</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">MySQL</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">SQL Server</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Hadoop</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Apache Spark</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Apache Hive</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Apache Pig</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">AWS</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Microsoft Azure</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Docker</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Kubernetes</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Git</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Azure Data Factory</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">UiPath RPA</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Tableau</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Power BI</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Microsoft Power Platform</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Informatica PowerCenter</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">RESTful APIs</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Microservices</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Kafka</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Penetration Testing</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Cryptographic Algorithms</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Linux Shell Scripting</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Visual Studio</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Visual Studio Code</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Postman</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">JIRA</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Microsoft Office Suite</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Windows</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Linux</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Ubuntu</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">macOS</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Network Troubleshooting</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">IP Addressing</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Wireless Networking</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Network Configuration</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">IoT</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Ultrasonic Sensors</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Raspberry Pi</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Agile</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Data Visualization</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">ETL Pipelines</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">System Integration</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Big Data Technologies</span>
                      <span className="bg-[#e13a7a]/10 text-[#e13a7a] font-semibold px-4 py-2 rounded-full shadow-sm">Data Analytics</span>
                      <span className="bg-[#6d217f]/10 text-[#6d217f] font-semibold px-4 py-2 rounded-full shadow-sm">Cloud-Based Solutions</span>
                      <span className="bg-[#00FFEE]/10 text-[#00b3a6] font-semibold px-4 py-2 rounded-full shadow-sm">Secure Backend Architectures</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* EDUCATION SECTION - Already styled */}
              <section className="education pb-12 px-4 bg-gray-50" id="education">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">My <span className="text-[#e13a7a]">Education</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* UMKC Education */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">University of Missouri - Kansas City</h3>
                      <p className="text-[#e13a7a] mb-4">August 2022 – December 2023</p>
                      <h4 className="text-lg text-gray-700 mb-2">Master of Science in Computer Science</h4>
                      <p className="text-gray-500">GPA: 3.75</p>
                    </div>
                    {/* St. Joseph's Education */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">St. Joseph's College of Engineering</h3>
                      <p className="text-[#e13a7a] mb-4">August 2017 – August 2021</p>
                      <h4 className="text-lg text-gray-700 mb-2">Bachelor of Engineering in Electronics and Communication Engineering</h4>
                      <p className="text-gray-500">Chennai, India</p>
                      <p className="text-gray-500">GPA: 3.7</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CERTIFICATIONS SECTION */}
              <section className="certifications py-12 px-4 bg-gray-50" id="certifications">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">My <span className="text-[#e13a7a]">Certifications</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AWS Certification */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h3>
                      <p className="text-[#e13a7a] mb-4">Amazon Web Services (AWS)</p>
                      <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">Verify Credential</a>
                    </div>
                    {/* Python Professional Certificate */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Programming with Python – Professional Certificate</h3>
                      <p className="text-[#e13a7a] mb-2">OpenEDG Python Institute</p>
                      <p className="text-gray-500 mb-4">Issued: March 2024</p>
                      <a href="https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">View Certificate</a>
                    </div>
                    {/* Edureka Python Professional */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Python Professional</h3>
                      <p className="text-[#e13a7a] mb-2">Edureka</p>
                      <p className="text-gray-500 mb-2">Issued: March 2024</p>
                      <p className="text-gray-400 mb-4">Credential ID: CKR8M9MX</p>
                      <a href="/certifications/edureka-python.pdf" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">View Certificate</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* EXPERIENCE SECTION */}
              <section className="experience py-12 px-4 bg-gray-50" id="experience">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">My <span className="text-[#e13a7a]">Experience</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Source Consulting Experience */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[#e13a7a] mb-2">January 2025 – Present</p>
                      <h4 className="text-lg text-[#e13a7a]">Source Consulting LLC – Remote (<a href="https://touchwindow.com" target="_blank" rel="noopener noreferrer" className="underline">Client: Touch Screens Inc</a>)</h4>
                      <ul className="list-disc pl-5 mt-4 text-gray-700">
                        <li>Automated pricing for 100K+ SKUs using Python, Pandas, AWS Lambda, Google Sheets API</li>
                        <li>Built ETL pipelines with Hadoop, Snowflake, Pentaho, improving vendor data sync</li>
                        <li>Visualized KPIs with Tableau, Power BI; implemented REST & Bash scripts for backups</li>
                      </ul>
                    </div>
                    {/* Trbhi INC Experience */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Network Operation Analyst</h3>
                      <p className="text-[#e13a7a] mb-2">April 2024 – December 2024</p>
                      <h4 className="text-lg text-[#e13a7a]">Trbhi INC – Remote (<a href="https://ziplyfiber.com" target="_blank" rel="noopener noreferrer" className="underline">Client: Ziply Fiber Technology</a>)</h4>
                      <ul className="list-disc pl-5 mt-4 text-gray-700">
                        <li>Reduced MTTR by 40% with Python/Bash automation & Dynatrace-based monitoring</li>
                        <li>Debugged D365 and APIs using PowerShell, SQL Server, and ServiceNow RCA flows</li>
                      </ul>
                    </div>
                    {/* UMKC TA Experience */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Graduate Student Technical Assistant</h3>
                      <p className="text-[#e13a7a] mb-2">May 2023 – December 2023</p>
                      <h4 className="text-lg text-[#e13a7a]">University of Missouri - Kansas City – Kansas City, MO, USA</h4>
                      <ul className="list-disc pl-5 mt-4 text-gray-700">
                        <li>Managed 150+ lab systems with PXE, GPO, Linux/Windows Dual Boot</li>
                        <li>Automated diagnostics using Python & Bash, cutting support tickets by 35%</li>
                        <li>Raised student support satisfaction by 40% via one-on-one support and feedback tracking.</li>
                      </ul>
                    </div>
                    {/* Wipro Experience */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[#e13a7a] mb-2">September 2021 – July 2022</p>
                      <h4 className="text-lg text-[#e13a7a]">Wipro Technologies – Bengaluru, KA, India</h4>
                      <ul className="list-disc pl-5 mt-4 text-gray-700">
                        <li>Built ETL pipelines using Informatica, PL/SQL, Unix Shell, and CI via GitLab</li>
                        <li>Automated reporting flows with Python, Excel Macros, improving ETL transparency</li>
                        <li>Managed metadata and repositories to streamline project execution.</li>
                        <li>Supported cross-functional teams with technical insights using SQL and Python.</li>
                      </ul>
                    </div>
                    {/* Merizon Technologies Experience */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[#e13a7a] mb-2">May 2019 – August 2021</p>
                      <h4 className="text-lg text-[#e13a7a]">Merizon Technologies LLC – Remote</h4>
                      <ul className="list-disc pl-5 mt-4 text-gray-700">
                        <li>Developed full-stack apps with Java, Spring Boot, MySQL, JS</li>
                        <li>Implemented CI using GitHub Actions, improved test coverage via JUnit & Selenium</li>
                        <li>Improved API performance by 25% through SQL query optimization.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROJECTS SECTION */}
              <section className="projects py-12 px-4 bg-gray-50" id="projects">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">My <span className="text-[#e13a7a]">Projects</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Portfolio Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                      <p className="text-[#e13a7a] mb-4">2024</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Developed and deployed a fully responsive personal portfolio using React, Vite, and Tailwind CSS, hosted on Vercel.</li>
                        <li>Showcases professional experience, academic projects, and certifications with smooth animated transitions, dark mode, and EmailJS-powered contact form.</li>
                        <li>Integrated Framer Motion for UI animations and implemented modern design principles for an optimized user experience.</li>
                      </ul>
                      <div className="flex gap-4 mt-4">
                        <a href="https://github.com/KVSC1511/Portfolio" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">GitHub</a>
                        <a href="https://www.venkatasaicharan.com" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">Live Site</a>
                      </div>
                    </div>
                    {/* 2023 Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Enhancing Security & Privacy of Cryptocurrency Transactions</h3>
                      <p className="text-[#e13a7a] mb-4">January 2023 – May 2023</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Developed secure backend systems using Java and cryptographic algorithms to safeguard blockchain transactions.</li>
                        <li>Conducted risk assessments and implemented security protocols using Python and SQL.</li>
                        <li>Used Snowflake for data analysis and performance optimization.</li>
                        <li>Strengthened transaction integrity and reduced vulnerabilities.</li>
                      </ul>
                    </div>
                    {/* 2022 Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">YouTube Data Analysis</h3>
                      <p className="text-[#e13a7a] mb-4">August 2022 – December 2022</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Designed a real-time data pipeline using Apache Kafka and Apache Spark to analyze YouTube viewer behavior.</li>
                        <li>Enabled sentiment analysis and trend forecasting; automated data cleaning and analysis with Python and SQL.</li>
                        <li>Built interactive dashboards in Tableau to visualize key metrics.</li>
                        <li>Provided strategic recommendations for content optimization and audience growth.</li>
                      </ul>
                    </div>
                    {/* 2022 Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">IoT Sensor Data Analysis for Soil Moisture</h3>
                      <p className="text-[#e13a7a] mb-4">August 2022 – December 2022</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Built an IoT system using ultrasonic sensors and Azure cloud for soil moisture monitoring and decision-making.</li>
                        <li>Used Python and Arduino IDE for processing; visualized data with Matplotlib, Plotly, and Tableau.</li>
                        <li>Processed large-scale IoT data with PySpark and Hadoop.</li>
                        <li>Created dashboards in Tableau and Power BI; automated ETL with Azure Data Factory and Synapse Analytics.</li>
                      </ul>
                    </div>
                    {/* 2021 Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">A 120 Mbps WDM-Based VLC System for IoT Implementation</h3>
                      <p className="text-[#e13a7a] mb-4">August 2020 – January 2021</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Designed and simulated a high-speed Visible Light Communication (VLC) system using OptiSystem and mathematical models.</li>
                        <li>Improved efficiency by 25% and predictive accuracy by 20%.</li>
                        <li>Analyzed system performance with SQL and Python; presented results using Tableau.</li>
                        <li>Enhanced collaboration and system design for mobile and front-end applications.</li>
                      </ul>
                    </div>
                    {/* 2019-2021 Project */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900">
                      <h3 className="text-xl font-bold mb-2">Therapy for Autistic Children Using Robot</h3>
                      <p className="text-[#e13a7a] mb-4">December 2019 – January 2021</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Developed an interactive robot using .NET and Python to improve social skills in autistic children, enhancing engagement by 30%.</li>
                        <li>Designed a user-friendly interface and conducted needs analysis with therapists to align robot functionality with user needs.</li>
                        <li>Conducted usability testing and implemented iterative improvements.</li>
                        <li>Used data visualization to present insights and drive design decisions.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* CONTACT SECTION - Beautiful, modern, centered */}
              <section className="contact py-16 px-4 bg-gray-50" id="contact">
                <div className="max-w-3xl mx-auto">
                  <Contact />
                </div>
              </section>

              {/* FOOTER - Clean, minimal, accent icons */}
              <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
                <div className="container mx-auto flex flex-col items-center justify-center">
                  <div className="flex gap-6 mb-3">
                    <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bxl-linkedin'></i></a>
                    <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bx-envelope'></i></a>
                    <a href="https://github.com/KVSC1511" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bxl-github'></i></a>
                  </div>
                  <span className="text-xs text-gray-500">© Venkata Sai Charan | All Rights Reserved</span>
                </div>
              </footer>
              <SpeedInsights />
            </div>
          } />
      </Routes>
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  );
};

export default App;