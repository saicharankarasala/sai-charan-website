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
  FaTwitter, FaInstagram, FaUser
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
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMascot, setShowMascot] = useState(false);
  const [certificationAnimated, setCertificationAnimated] = useState(false);
  const konamiCode = useRef([]);
  const [projectFilter, setProjectFilter] = useState('All');
  const [projectSort, setProjectSort] = useState('Newest');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [experienceSort, setExperienceSort] = useState('Newest');

  const handleCardClick = (section, index) => {
    setExpandedCards(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      // Show/hide back to top button
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Handle certification card animations
      const certificationSection = document.getElementById('certifications');
      if (certificationSection) {
        const rect = certificationSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
        
        if (isInView && !certificationAnimated) {
          const cards = certificationSection.querySelectorAll('.certification-card-slide-left, .certification-card-center, .certification-card-slide-right');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-slide-in');
            }, index * 200); // Stagger the animations
          });
          setCertificationAnimated(true);
        } else if (isOutOfView && certificationAnimated) {
          // Reset animation when section goes out of view
          const cards = certificationSection.querySelectorAll('.certification-card-slide-left, .certification-card-center, .certification-card-slide-right');
          cards.forEach(card => {
            card.classList.remove('animate-slide-in');
          });
          setCertificationAnimated(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [certificationAnimated]);

  useEffect(() => {
    const code = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];
    const handleKeyDown = (e) => {
      konamiCode.current.push(e.key);
      if (konamiCode.current.length > code.length) {
        konamiCode.current.shift();
      }
      if (konamiCode.current.join(',') === code.join(',')) {
        setShowMascot(true);
        setTimeout(() => setShowMascot(false), 7000);
        konamiCode.current = [];
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Show mascot on first visit
  useEffect(() => {
    setShowMascot(true);
    const timer = setTimeout(() => setShowMascot(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Check if certification section is in view on mount
  useEffect(() => {
    const certificationSection = document.getElementById('certifications');
    if (certificationSection) {
      const rect = certificationSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      
      if (isInView && !certificationAnimated) {
        const cards = certificationSection.querySelectorAll('.certification-card-slide-left, .certification-card-center, .certification-card-slide-right');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-slide-in');
          }, index * 200);
        });
        setCertificationAnimated(true);
      }
    }
  }, [certificationAnimated]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Project data (move to a separate file if needed)
  const projects = [
    {
      title: 'Personal Portfolio Website',
      year: 2025,
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      type: 'Web',
      description: [
        'Developed and deployed a fully responsive personal portfolio using React, Vite, and Tailwind CSS, hosted on Vercel.',
        'Showcases professional experience, academic projects, and certifications with smooth animated transitions, dark mode, and EmailJS-powered contact form.',
        'Integrated Framer Motion for UI animations and implemented modern design principles for an optimized user experience.'
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/KVSC1511/Portfolio' },
        { label: 'Live Site', url: 'https://www.venkatasaicharan.com' }
      ]
    },
    {
      title: 'Enhancing Security & Privacy of Cryptocurrency Transactions',
      year: 2023,
      tech: ['Java', 'Python', 'SQL', 'Snowflake', 'Cryptography'],
      type: 'Backend',
      description: [
        'Developed secure backend systems using Java and cryptographic algorithms to safeguard blockchain transactions.',
        'Conducted risk assessments and implemented security protocols using Python and SQL.',
        'Used Snowflake for data analysis and performance optimization.',
        'Strengthened transaction integrity and reduced vulnerabilities.'
      ]
    },
    {
      title: 'YouTube Data Analysis',
      year: 2022,
      tech: ['Apache Kafka', 'Spark', 'Python', 'SQL', 'Tableau'],
      type: 'Data',
      description: [
        'Designed a real-time data pipeline using Apache Kafka and Apache Spark to analyze YouTube viewer behavior.',
        'Enabled sentiment analysis and trend forecasting; automated data cleaning and analysis with Python and SQL.',
        'Built interactive dashboards in Tableau to visualize key metrics.',
        'Provided strategic recommendations for content optimization and audience growth.'
      ]
    },
    {
      title: 'IoT Sensor Data Analysis for Soil Moisture',
      year: 2022,
      tech: ['IoT', 'Azure', 'Python', 'PySpark', 'Tableau', 'Power BI', 'Matplotlib', 'Plotly'],
      type: 'IoT',
      description: [
        'Built an IoT system using ultrasonic sensors and Azure cloud for soil moisture monitoring and decision-making.',
        'Used Python and Arduino IDE for processing; visualized data with Matplotlib, Plotly, and Tableau.',
        'Processed large-scale IoT data with PySpark and Hadoop.',
        'Created dashboards in Tableau and Power BI; automated ETL with Azure Data Factory and Synapse Analytics.'
      ]
    },
    {
      title: 'A 120 Mbps WDM-Based VLC System for IoT Implementation',
      year: 2021,
      tech: ['VLC', 'OptiSystem', 'Python', 'SQL', 'Tableau'],
      type: 'Research',
      description: [
        'Designed and simulated a high-speed Visible Light Communication (VLC) system using OptiSystem and mathematical models.',
        'Improved efficiency by 25% and predictive accuracy by 20%.',
        'Analyzed system performance with SQL and Python; presented results using Tableau.',
        'Enhanced collaboration and system design for mobile and front-end applications.'
      ]
    },
    {
      title: 'Therapy for Autistic Children Using Robot',
      year: 2021,
      tech: ['.NET', 'Python', 'UI/UX', 'Data Visualization'],
      type: 'AI/Robotics',
      description: [
        'Developed an interactive robot using .NET and Python to improve social skills in autistic children, enhancing engagement by 30%.',
        'Designed a user-friendly interface and conducted needs analysis with therapists to align robot functionality with user needs.',
        'Conducted usability testing and implemented iterative improvements.',
        'Used data visualization to present insights and drive design decisions.'
      ]
    }
  ];

  // Experience data
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Source Consulting LLC – Remote',
      companyUrl: 'https://touchwindow.com',
      client: 'Touch Screens Inc',
      date: 'January 2025 – Present',
      year: 2025,
      type: 'Full-time',
      tech: ['Python', 'Pandas', 'AWS Lambda', 'Google Sheets API', 'Hadoop', 'Snowflake', 'Pentaho', 'Tableau', 'Power BI', 'REST', 'Bash'],
      bullets: [
        'Automated pricing for 100K+ SKUs using Python, Pandas, AWS Lambda, Google Sheets API',
        'Built ETL pipelines with Hadoop, Snowflake, Pentaho, improving vendor data sync',
        'Visualized KPIs with Tableau, Power BI; implemented REST & Bash scripts for backups'
      ]
    },
    {
      title: 'Network Operation Analyst',
      company: 'Trbhi INC – Remote',
      companyUrl: 'https://ziplyfiber.com',
      client: 'Ziply Fiber Technology',
      date: 'April 2024 – December 2024',
      year: 2024,
      type: 'Full-time',
      tech: ['Python', 'Bash', 'Dynatrace', 'PowerShell', 'SQL Server', 'ServiceNow', 'D365'],
      bullets: [
        'Reduced MTTR by 40% with Python/Bash automation & Dynatrace-based monitoring',
        'Debugged D365 and APIs using PowerShell, SQL Server, and ServiceNow RCA flows'
      ]
    },
    {
      title: 'Graduate Student Technical Assistant',
      company: 'University of Missouri - Kansas City – Kansas City, MO, USA',
      companyUrl: '',
      client: '',
      date: 'May 2023 – December 2023',
      year: 2023,
      type: 'Assistant',
      tech: ['PXE', 'GPO', 'Linux', 'Windows', 'Python', 'Bash', 'Support Automation'],
      bullets: [
        'Managed 150+ lab systems with PXE, GPO, Linux/Windows Dual Boot',
        'Automated diagnostics using Python & Bash, cutting support tickets by 35%',
        'Raised student support satisfaction by 40% via one-on-one support and feedback tracking.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Wipro Technologies – Bengaluru, KA, India',
      companyUrl: '',
      client: '',
      date: 'September 2021 – July 2022',
      year: 2021,
      type: 'Full-time',
      tech: ['Informatica', 'PL/SQL', 'Unix Shell', 'GitLab CI', 'Python', 'Excel Macros', 'SQL'],
      bullets: [
        'Built ETL pipelines using Informatica, PL/SQL, Unix Shell, and CI via GitLab',
        'Automated reporting flows with Python, Excel Macros, improving ETL transparency',
        'Managed metadata and repositories to streamline project execution.',
        'Supported cross-functional teams with technical insights using SQL and Python.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Merizon Technologies LLC – Remote',
      companyUrl: '',
      client: '',
      date: 'May 2019 – August 2021',
      year: 2021,
      type: 'Full-time',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'GitHub Actions', 'JUnit', 'Selenium', 'SQL'],
      bullets: [
        'Developed full-stack apps with Java, Spring Boot, MySQL, JS',
        'Implemented CI using GitHub Actions, improved test coverage via JUnit & Selenium',
        'Improved API performance by 25% through SQL query optimization.'
      ]
    }
  ];

  // Unique techs/types/years for filter dropdowns
  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech))).sort();
  const allTypes = Array.from(new Set(projects.map(p => p.type)));
  const allYears = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
  const allExpTechs = Array.from(new Set(experiences.flatMap(e => e.tech))).sort();
  const allExpTypes = Array.from(new Set(experiences.map(e => e.type)));
  const allExpYears = Array.from(new Set(experiences.map(e => e.year))).sort((a, b) => b - a);

  // Filter and sort logic
  let filteredProjects = projects.filter(p =>
    (projectFilter === 'All' || p.tech.includes(projectFilter) || p.type === projectFilter || p.year === projectFilter)
  );
  if (projectSort === 'Newest') filteredProjects.sort((a, b) => b.year - a.year);
  if (projectSort === 'Oldest') filteredProjects.sort((a, b) => a.year - b.year);
  if (projectSort === 'A-Z') filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  if (projectSort === 'Z-A') filteredProjects.sort((a, b) => b.title.localeCompare(a.title));

  let filteredExperiences = experiences.filter(e =>
    (experienceFilter === 'All' || e.tech.includes(experienceFilter) || e.type === experienceFilter || e.year === experienceFilter)
  );
  if (experienceSort === 'Newest') filteredExperiences.sort((a, b) => b.year - a.year);
  if (experienceSort === 'Oldest') filteredExperiences.sort((a, b) => a.year - b.year);
  if (experienceSort === 'A-Z') filteredExperiences.sort((a, b) => a.title.localeCompare(b.title));
  if (experienceSort === 'Z-A') filteredExperiences.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/blog" element={<BlogLanding />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/" element={
            <div className="bg-white min-h-screen text-gray-900 font-sans relative">
              <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-2 border-[#e13a7a] transition-all duration-300">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                  <a href="#home" className="flex items-center gap-2" aria-label="Home">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-tr from-[#6d217f] via-[#e13a7a] to-[#00FFEE] gap-2">
                      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                        <rect x="12" y="12" width="24" height="24" rx="4" fill="white" />
                        <rect x="18" y="18" width="12" height="12" rx="2" fill="#e13a7a" />
                        <rect x="22" y="4" width="4" height="6" rx="2" fill="#6d217f" />
                        <rect x="22" y="38" width="4" height="6" rx="2" fill="#6d217f" />
                        <rect x="4" y="22" width="6" height="4" rx="2" fill="#6d217f" />
                        <rect x="38" y="22" width="6" height="4" rx="2" fill="#6d217f" />
                      </svg>
                      <span className="text-white text-xl font-extrabold tracking-tight drop-shadow-lg" style={{letterSpacing: '0.08em'}}>VSC</span>
                    </span>
                  </a>
                  <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'about' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>About</a>
                    <a href="#skills" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'skills' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>Skills</a>
                    <a href="#education" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'education' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>Education</a>
                    <a href="#certifications" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'certifications' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>Certifications</a>
                    <a href="#experience" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'experience' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>Experience</a>
                    <a href="#projects" className={`relative text-gray-700 hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3 ${activeSection === 'projects' ? 'text-[#e13a7a] after:w-2/3' : ''}`}>Projects</a>
                    <a href="#contact" className="text-white bg-[#e13a7a] px-4 py-2 rounded-full font-bold shadow hover:bg-[#6d217f] transition">Contact</a>
                    <a href="/blog" className="relative text-[#6d217f] hover:text-[#e13a7a] font-semibold transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-[#e13a7a] after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 focus:after:w-2/3" target="_blank" rel="noopener noreferrer">Blog</a>
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
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'home' ? 'text-[#e13a7a]' : ''}`}>Home</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'about' ? 'text-[#e13a7a]' : ''}`}>About</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'skills' ? 'text-[#e13a7a]' : ''}`}>Skills</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'education' ? 'text-[#e13a7a]' : ''}`}>Education</a>
                        <a href="#certifications" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'certifications' ? 'text-[#e13a7a]' : ''}`}>Certifications</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'experience' ? 'text-[#e13a7a]' : ''}`}>Experience</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className={`text-gray-900 hover:text-[#e13a7a] font-semibold ${activeSection === 'projects' ? 'text-[#e13a7a]' : ''}`}>Projects</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white bg-[#e13a7a] px-4 py-2 rounded-full font-bold shadow hover:bg-[#6d217f] transition">Contact</a>
                        <a href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[#6d217f] hover:text-[#e13a7a] font-semibold" target="_blank" rel="noopener noreferrer">Blog</a>
                      </div>
                    )}
                  </div>
                </nav>
              </header>

              {/* HERO SECTION - Clean, modern, balanced */}
              <section className="w-full min-h-[480px] flex flex-col md:flex-row items-center justify-center bg-gradient-to-tr from-[#6d217f] to-[#e13a7a] text-white px-4 pt-32 pb-12" id="home">
                <div className="flex-1 flex flex-col justify-center md:items-start items-center text-left md:text-left gap-4 max-w-2xl w-full pl-8 md:pl-16 lg:pl-24 xl:pl-32">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">Hi, I'm <span className="text-white">Venkata Sai Charan</span></h1>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-pink-200 min-h-[2.5rem]">
                    <Typewriter
                      words={['Cloud & Backend Developer', 'Web Developer', 'Software Engineer', 'Network Analyst', 'Data Enthusiast']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={1500}
                    />
                  </h2>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4 max-w-xl">
                    Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. Let's build what matters.
                  </p>
                  <div className="flex flex-row items-center gap-4 mb-4 justify-start">
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
                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-start">
                    <a href="/cv.pdf" className="btn bg-white text-[#e13a7a] font-bold px-8 py-3 rounded-full shadow hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300" target="_blank" rel="noopener noreferrer">Download CV</a>
                    <a href="#contact" className="btn bg-[#e13a7a] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-pink-400 hover:text-white transition-all duration-300">Contact Me</a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                  <div className="profile-glow-border relative flex items-center justify-center">
                    <img 
                      src="/images/profile.JPG" 
                      alt="Venkata Sai Charan - UI/UX Designer & Software Engineer" 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow object-cover object-top relative z-10 profile-img"
                    />
                  </div>
                </div>
              </section>

              {/* ABOUT SECTION - Clean white card */}
              <section className="about py-12 px-4 bg-gray-50" id="about">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                      <FaUser className="text-[#e13a7a] text-2xl section-icon" />
                      About <span className="text-[#e13a7a]">Me</span>
                    </h2>
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
                    <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-3xl font-bold mb-2 text-[#e13a7a]">4+</h3>
                      <p className="text-base">Years Experience</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="skills py-12 px-4 bg-gray-50" id="skills">
                <div className="max-w-7xl mx-auto">
                  <div className="bg-white rounded-2xl shadow p-8 text-gray-900 flex flex-col items-center">
                    <FaTools className="text-3xl text-[#e13a7a] mb-2 section-icon" />
                    <h2 className="text-3xl font-bold mb-2 text-center">My <span className="text-[#e13a7a]">Skills</span></h2>
                    <div className="w-16 h-1 bg-[#e13a7a] rounded-full mb-6"></div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Python</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Java</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">C#/.NET</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">JavaScript (Node.js)</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">SQL</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">HTML</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">CSS</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">MySQL</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">SQL Server</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Hadoop</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Apache Spark</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Apache Hive</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Apache Pig</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">AWS</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Microsoft Azure</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Docker</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Kubernetes</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Git</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Azure Data Factory</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">UiPath RPA</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Tableau</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Power BI</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Microsoft Power Platform</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Informatica PowerCenter</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">RESTful APIs</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Microservices</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Kafka</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Penetration Testing</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Cryptographic Algorithms</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Linux Shell Scripting</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Visual Studio</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Visual Studio Code</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Postman</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">JIRA</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Microsoft Office Suite</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Windows</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Linux</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Ubuntu</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">macOS</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Network Troubleshooting</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">IP Addressing</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Wireless Networking</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Network Configuration</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">IoT</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Ultrasonic Sensors</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Raspberry Pi</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Agile</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Data Visualization</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">ETL Pipelines</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">System Integration</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Big Data Technologies</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Data Analytics</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Cloud-Based Solutions</span>
                      <span className="bg-[#e13a7a] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#e13a7a]">Secure Backend Architectures</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* EDUCATION SECTION - Already styled */}
              <section className="education pb-12 px-4 bg-gray-50" id="education">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaGraduationCap className="text-[#e13a7a] text-2xl section-icon" />
                    My <span className="text-[#e13a7a]">Education</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* UMKC Education */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">University of Missouri - Kansas City</h3>
                      <p className="text-[#e13a7a] mb-4">August 2022 – December 2023</p>
                      <h4 className="text-lg text-gray-700 mb-2">Master of Science in Computer Science</h4>
                      <p className="text-gray-500">GPA: 3.75</p>
                    </div>
                    {/* St. Joseph's Education */}
                    <div className="bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
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
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaCertificate className="text-[#e13a7a] text-2xl section-icon" />
                    My <span className="text-[#e13a7a]">Certifications</span>
                  </h2>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AWS Certification - 1st Card (slides from behind center) */}
                    <div className="certification-card-slide-left bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h3>
                      <p className="text-[#e13a7a] mb-4">Amazon Web Services (AWS)</p>
                      <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">Verify Credential</a>
                    </div>
                    {/* Python Professional Certificate - 2nd Card (center, stays in place) */}
                    <div className="certification-card-center bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-all duration-500 z-10 relative">
                      <h3 className="text-xl font-bold mb-2">Programming with Python – Professional Certificate</h3>
                      <p className="text-[#e13a7a] mb-2">OpenEDG Python Institute</p>
                      <p className="text-gray-500 mb-4">Issued: March 2024</p>
                      <a href="https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">View Certificate</a>
                    </div>
                    {/* Edureka Python Professional - 3rd Card (slides from behind center) */}
                    <div className="certification-card-slide-right bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-all duration-500">
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
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaBriefcase className="text-[#e13a7a] text-2xl section-icon" />
                    My <span className="text-[#e13a7a]">Experience</span>
                  </h2>
                  {/* Filter & Sort Controls */}
                  <div className="flex flex-wrap gap-4 mb-8 justify-center items-center">
                    <select className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" value={experienceFilter} onChange={e => setExperienceFilter(e.target.value)}>
                      <option value="All">All</option>
                      <optgroup label="Tech Stack">
                        {allExpTechs.map(tech => <option key={tech} value={tech}>{tech}</option>)}
                      </optgroup>
                      <optgroup label="Type">
                        {allExpTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </optgroup>
                      <optgroup label="Year">
                        {allExpYears.map(year => <option key={year} value={year}>{year}</option>)}
                      </optgroup>
                    </select>
                    <select className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" value={experienceSort} onChange={e => setExperienceSort(e.target.value)}>
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="A-Z">A-Z</option>
                      <option value="Z-A">Z-A</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredExperiences.map((exp, idx) => (
                      <div key={exp.title + exp.date} className="bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-[#e13a7a] mb-2">{exp.date}</p>
                        <h4 className="text-lg text-[#e13a7a]">
                          {exp.company}
                          {exp.companyUrl && (
                            <> (<a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="underline">Client: {exp.client}</a>)</>
                          )}
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                          {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tech.map(tech => (
                            <span key={tech} className="tech-tag bg-[#e13a7a] text-white">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* PROJECTS SECTION */}
              <section className="projects py-12 px-4 bg-gray-50" id="projects">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaProjectDiagram className="text-[#e13a7a] text-2xl section-icon" />
                    My <span className="text-[#e13a7a]">Projects</span>
                  </h2>
                  {/* Filter & Sort Controls */}
                  <div className="flex flex-wrap gap-4 mb-8 justify-center items-center">
                    <select className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" value={projectFilter} onChange={e => setProjectFilter(e.target.value)}>
                      <option value="All">All</option>
                      <optgroup label="Tech Stack">
                        {allTechs.map(tech => <option key={tech} value={tech}>{tech}</option>)}
                      </optgroup>
                      <optgroup label="Type">
                        {allTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </optgroup>
                      <optgroup label="Year">
                        {allYears.map(year => <option key={year} value={year}>{year}</option>)}
                      </optgroup>
                    </select>
                    <select className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" value={projectSort} onChange={e => setProjectSort(e.target.value)}>
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="A-Z">A-Z</option>
                      <option value="Z-A">Z-A</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                      <div key={project.title} className="bg-white rounded-2xl shadow p-8 text-gray-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-[#e13a7a] mb-4">{project.year}</p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.map(tech => (
                            <span key={tech} className="tech-tag bg-[#e13a7a] text-white">{tech}</span>
                          ))}
                        </div>
                        {project.links && (
                          <div className="flex gap-4 mt-4">
                            {project.links.map(link => (
                              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:underline">{link.label}</a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
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
              <footer className="bg-gray-100 border-t border-gray-200 py-8">
                <div className="container mx-auto flex flex-col items-center justify-center">
                  <div className="flex gap-6 mb-3">
                    <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bxl-linkedin'></i></a>
                    <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bx-envelope'></i></a>
                    <a href="https://github.com/KVSC1511" target="_blank" rel="noopener noreferrer" className="text-[#e13a7a] hover:text-[#6d217f] text-xl"><i className='bx bxl-github'></i></a>
                  </div>
                  <span className="text-xs text-gray-500">© Venkata Sai Charan <span className="animated-flag" role="img" aria-label="USA flag">🇺🇸</span> | All Rights Reserved</span>
                </div>
              </footer>
              <SpeedInsights />
              {/* Floating Button Stack (Back to Top & Easter Egg) */}
              <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-4">
                {showBackToTop && (
                  <button
                    className="bg-[#e13a7a] text-white rounded-full shadow-lg p-4 hover:bg-[#6d217f] transition-all duration-300 flex items-center justify-center text-2xl animate-fade-in"
                    onClick={handleBackToTop}
                    aria-label="Back to Top"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </button>
                )}
                <button
                  className="easter-egg-btn bg-white/90 hover:bg-white text-[#e13a7a] border-2 border-[#e13a7a] rounded-full shadow-lg p-4 flex items-center justify-center text-3xl transition-all duration-300 group"
                  aria-label="Just for fun!"
                  tabIndex="0"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                >
                  <span className="inline-block animate-sparkle">✨</span>
                  <span className="easter-egg-tooltip group-hover:opacity-100">Just for fun!</span>
                </button>
              </div>
              {showMascot && (
                <div className="fixed bottom-8 left-8 z-[100] animate-mascot-fade-in-out flex items-end gap-3">
                  <span className="inline-block text-5xl animate-wave select-none" role="img" aria-label="Waving Hand">👋</span>
                  <span className="speech-bubble">Hi! Thanks for visiting my portfolio!</span>
                </div>
              )}
            </div>
          } />
      </Routes>
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  );
};

export default App;