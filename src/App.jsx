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
            <div className="bg-black min-h-screen text-white relative">
              <BackgroundLogo />
              
              <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-[rgb(0,255,238,0.2)]">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                  <a href="#home" className="text-2xl font-bold">
                    <span className="text-white">V </span>
                    <span className="text-[--main-color]">S C</span>
                  </a>
                  <div className="flex items-center gap-4 relative">
                    <a href="#contact" className="text-white hover:text-[--main-color] font-medium transition-colors">Contact</a>
                    <a href="/blog" className="text-white hover:text-[--main-color] font-medium transition-colors" target="_blank" rel="noopener noreferrer">Blog</a>
                    <button
                      className="hamburger-menu"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="Toggle menu"
                    >
                      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                    {isMenuOpen && (
                      <div className="dropdown-menu open">
                        <a href="#home" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-home-alt'></i> Home
                        </a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-user'></i> About
                        </a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-book'></i> Skills
                        </a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-book'></i> Education
                        </a>
                        <a href="#certifications" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-certification'></i> Certifications
                        </a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-briefcase'></i> Experience
                        </a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-code-alt'></i> Projects
                        </a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-envelope'></i> Contact
                        </a>
                        <a href="/blog" onClick={() => setIsMenuOpen(false)}>
                          <i className='bx bx-book-content'></i> Blog
                        </a>
                      </div>
                    )}
                  </div>
                </nav>
              </header>

              <section className="home" id="home">
                <div className="home-content">
                  <h1>Hi, It's <span>Venkata Sai Charan</span></h1>
                  <h3 className="text-animation">I'm a <span></span></h3>
                  <p>Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. Let's build what matters.</p>

                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer">
                      <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className='bx bx-envelope'></i>
                    </a>
                    <a href="https://github.com/KVSC1511" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub className="text-3xl" />
                    </a>
                  </div>

                  <div className="btn-group">
                    <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
                    <a href="#contact" className="btn">Contact Me</a>
                  </div>
                </div>

                <div className="home-img">
                  <img 
                    src="/images/profile.JPG" 
                    alt="Venkata Sai Charan - UI/UX Designer & Software Engineer" 
                    className="profile-image"
                  />
                </div>
              </section>

              <section className="about" id="about">
                <div className="about-content">
                  <h2 className="heading">About <span>Me</span></h2>
                  <div className="about-container">
                    <div className="about-text">
                      <span className="highlight">
                        "I believe great technology is built at the intersection of curiosity, creativity, and code."
                      </span>
                      <p>
                        Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS.
                      </p>
                      <p>
                        Demonstrated impact through projects involving cryptocurrency security, AI-driven analytics, and IoT-based systems—each built with a focus on performance, optimization, and real-world utility. Skilled in tools like Snowflake, Informatica, Tableau, Power BI, and Git, and highly adaptable to evolving technologies.
                      </p>
                      <p>
                        Driven by innovation, problem-solving, and clean system design. Known for turning complexity into clarity and collaborating across teams to bring high-impact ideas to life.
                      </p>
                    </div>
                    <VscLogo />
                  </div>
                </div>
                <div className="about-stats">
                  <div className="stat-box">
                    <h3>4+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>
              </section>

              <section className="skills pt-12 pb-12 px-[12%]" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {/* Updated Skills */}
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">C#/.NET</span>
                  <span className="tech-tag">JavaScript (Node.js)</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">SQL Server</span>
                  <span className="tech-tag">Hadoop</span>
                  <span className="tech-tag">Apache Spark</span>
                  <span className="tech-tag">Apache Hive</span>
                  <span className="tech-tag">Apache Pig</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Microsoft Azure</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Azure Data Factory</span>
                  <span className="tech-tag">UiPath RPA</span>
                  <span className="tech-tag">Tableau</span>
                  <span className="tech-tag">Power BI</span>
                  <span className="tech-tag">Microsoft Power Platform</span>
                  <span className="tech-tag">Informatica PowerCenter</span>
                  <span className="tech-tag">RESTful APIs</span>
                  <span className="tech-tag">Microservices</span>
                  <span className="tech-tag">Kafka</span>
                  <span className="tech-tag">Penetration Testing</span>
                  <span className="tech-tag">Cryptographic Algorithms</span>
                  <span className="tech-tag">Linux Shell Scripting</span>
                  <span className="tech-tag">Visual Studio</span>
                  <span className="tech-tag">Visual Studio Code</span>
                  <span className="tech-tag">Postman</span>
                  <span className="tech-tag">JIRA</span>
                  <span className="tech-tag">Microsoft Office Suite</span>
                  <span className="tech-tag">Windows</span>
                  <span className="tech-tag">Linux</span>
                  <span className="tech-tag">Ubuntu</span>
                  <span className="tech-tag">macOS</span>
                  <span className="tech-tag">Network Troubleshooting</span>
                  <span className="tech-tag">IP Addressing</span>
                  <span className="tech-tag">Wireless Networking</span>
                  <span className="tech-tag">Network Configuration</span>
                  <span className="tech-tag">IoT</span>
                  <span className="tech-tag">Ultrasonic Sensors</span>
                  <span className="tech-tag">Raspberry Pi</span>
                  <span className="tech-tag">Agile</span>
                  <span className="tech-tag">Data Visualization</span>
                  <span className="tech-tag">ETL Pipelines</span>
                  <span className="tech-tag">System Integration</span>
                  <span className="tech-tag">Big Data Technologies</span>
                  <span className="tech-tag">Data Analytics</span>
                  <span className="tech-tag">Cloud-Based Solutions</span>
                  <span className="tech-tag">Secure Backend Architectures</span>
                </div>
              </section>

              <section className="education pb-6 px-[12%]" id="education">
                <h2 className="heading mb-6">My <span>Education</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* UMKC Education */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">University of Missouri - Kansas City</h3>
                      <p className="text-[--main-color] mb-4">August 2022 – December 2023</p>
                      <h4 className="text-lg text-white/90 mb-2">Master of Science in Computer Science</h4>
                      <p className="text-white/80">GPA: 3.75</p>
                    </div>
                  </div>

                  {/* St. Joseph's Education */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">St. Joseph's College of Engineering</h3>
                      <p className="text-[--main-color] mb-4">August 2017 – August 2021</p>
                      <h4 className="text-lg text-white/90 mb-2">Bachelor of Engineering in Electronics and Communication Engineering</h4>
                      <p className="text-white/80">Chennai, India</p>
                      <p className="text-white/80">GPA: 3.7</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="certifications pt-6 pb-12 px-[12%]" id="certifications">
                <h2 className="heading">My <span>Certifications</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AWS Certification */}
                  <div className="certification-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h3>
                      <p className="text-[--main-color] mb-4">Amazon Web Services (AWS)</p>
                      <div className="flex items-center gap-2 mb-4">
                        <FaAws className="text-2xl text-[--main-color]" />
                        <a 
                          href="https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[--main-color] hover:underline flex items-center gap-1"
                        >
                          Verify Credential <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Python Professional Certificate */}
                  <div className="certification-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Programming with Python – Professional Certificate</h3>
                      <p className="text-[--main-color] mb-2">OpenEDG Python Institute</p>
                      <p className="text-white/80 mb-4">Issued: March 2024</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">OOP</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPython className="text-2xl text-[--main-color]" />
                        <a 
                          href="https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[--main-color] hover:underline flex items-center gap-1"
                        >
                          View Certificate <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Edureka Python Professional */}
                  <div className="certification-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Python Professional</h3>
                      <p className="text-[--main-color] mb-2">Edureka</p>
                      <p className="text-white/80 mb-2">Issued: March 2024</p>
                      <p className="text-white/60 mb-4">Credential ID: CKR8M9MX</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">OOP</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPython className="text-2xl text-[--main-color]" />
                        <a 
                          href="/certifications/edureka-python.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[--main-color] hover:underline flex items-center gap-1"
                        >
                          View Certificate <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="experience pt-0 pb-8 px-[12%]" id="experience">
                <h2 className="heading">My <span>Experience</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Source Consulting Experience */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[--main-color] mb-2">January 2025 – Present</p>
                      <h4 className="text-lg text-[--main-color]">Source Consulting LLC – Remote (<a href="https://touchwindow.com" target="_blank" rel="noopener noreferrer">Client: Touch Screens Inc - touchwindow.com</a>)</h4>
                      <ul className="list-disc pl-5 mt-4 text-white/80">
                        <li>Automated pricing for 100K+ SKUs using Python, Pandas, AWS Lambda, Google Sheets API</li>
                        <li>Built ETL pipelines with Hadoop, Snowflake, Pentaho, improving vendor data sync</li>
                        <li>Visualized KPIs with Tableau, Power BI; implemented REST & Bash scripts for backups</li>
                      </ul>
                    </div>
                  </div>

                  {/* Trbhi INC Experience */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Network Operation Analyst</h3>
                      <p className="text-[--main-color] mb-2">April 2024 – December 2024</p>
                      <h4 className="text-lg text-[--main-color]">Trbhi INC – Remote (<a href="https://ziplyfiber.com" target="_blank" rel="noopener noreferrer">Client: Ziply Fiber Technology - ziplyfiber.com</a>)</h4>
                      <ul className="list-disc pl-5 mt-4 text-white/80">
                        <li>Reduced MTTR by 40% with Python/Bash automation & Dynatrace-based monitoring</li>
                        <li>Debugged D365 and APIs using PowerShell, SQL Server, and ServiceNow RCA flows</li>
                      </ul>
                    </div>
                  </div>

                  {/* UMKC TA Experience */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Graduate Student Technical Assistant</h3>
                      <p className="text-[--main-color] mb-2">May 2023 – December 2023</p>
                      <h4 className="text-lg text-[--main-color]">University of Missouri - Kansas City – Kansas City, MO, USA</h4>
                      <ul className="list-disc pl-5 mt-4 text-white/80">
                        <li>Managed 150+ lab systems with PXE, GPO, Linux/Windows Dual Boot</li>
                        <li>Automated diagnostics using Python & Bash, cutting support tickets by 35%</li>
                        <li>Raised student support satisfaction by 40% via one-on-one support and feedback tracking.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Wipro Experience */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[--main-color] mb-2">September 2021 – July 2022</p>
                      <h4 className="text-lg text-[--main-color]">Wipro Technologies – Bengaluru, KA, India</h4>
                      <ul className="list-disc pl-5 mt-4 text-white/80">
                        <li>Built ETL pipelines using Informatica, PL/SQL, Unix Shell, and CI via GitLab</li>
                        <li>Automated reporting flows with Python, Excel Macros, improving ETL transparency</li>
                        <li>Managed metadata and repositories to streamline project execution.</li>
                        <li>Supported cross-functional teams with technical insights using SQL and Python.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Merizon Technologies Experience */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <p className="text-[--main-color] mb-2">May 2019 – August 2021</p>
                      <h4 className="text-lg text-[--main-color]">Merizon Technologies LLC – Remote</h4>
                      <ul className="list-disc pl-5 mt-4 text-white/80">
                        <li>Developed full-stack apps with Java, Spring Boot, MySQL, JS</li>
                        <li>Implemented CI using GitHub Actions, improved test coverage via JUnit & Selenium</li>
                        <li>Improved API performance by 25% through SQL query optimization.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="projects pt-0 pb-8 px-[12%]" id="projects">
                <h2 className="heading">My <span>Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Portfolio Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                      <p className="text-[--main-color] mb-4">2024</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Developed and deployed a fully responsive personal portfolio using React, Vite, and Tailwind CSS, hosted on Vercel.</li>
                        <li>Showcases professional experience, academic projects, and certifications with smooth animated transitions, dark mode, and EmailJS-powered contact form.</li>
                        <li>Integrated Framer Motion for UI animations and implemented modern design principles for an optimized user experience.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Vite</span>
                        <span className="tech-tag">Tailwind CSS</span>
                        <span className="tech-tag">Framer Motion</span>
                        <span className="tech-tag">EmailJS</span>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <a href="https://github.com/KVSC1511/Portfolio" target="_blank" rel="noopener noreferrer" className="text-[--main-color] hover:text-white transition-colors">
                          <i className='bx bxl-github'></i> GitHub
                        </a>
                        <a href="https://www.venkatasaicharan.com" target="_blank" rel="noopener noreferrer" className="text-[--main-color] hover:text-white transition-colors">
                          <i className='bx bx-link-external'></i> Live Site
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 2023 Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Enhancing Security & Privacy of Cryptocurrency Transactions</h3>
                      <p className="text-[--main-color] mb-4">January 2023 – May 2023</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Developed secure backend systems using Java and cryptographic algorithms to safeguard blockchain transactions.</li>
                        <li>Conducted risk assessments and implemented security protocols using Python and SQL.</li>
                        <li>Used Snowflake for data analysis and performance optimization.</li>
                        <li>Strengthened transaction integrity and reduced vulnerabilities.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">Java</span>
                        <span className="tech-tag">Blockchain</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">SQL</span>
                        <span className="tech-tag">Snowflake</span>
                      </div>
                    </div>
                  </div>

                  {/* 2022 Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">YouTube Data Analysis</h3>
                      <p className="text-[--main-color] mb-4">August 2022 – December 2022</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Designed a real-time data pipeline using Apache Kafka and Apache Spark to analyze YouTube viewer behavior.</li>
                        <li>Enabled sentiment analysis and trend forecasting; automated data cleaning and analysis with Python and SQL.</li>
                        <li>Built interactive dashboards in Tableau to visualize key metrics.</li>
                        <li>Provided strategic recommendations for content optimization and audience growth.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">Apache Kafka</span>
                        <span className="tech-tag">Spark</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">SQL</span>
                        <span className="tech-tag">Tableau</span>
                      </div>
                    </div>
                  </div>

                  {/* 2022 Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">IoT Sensor Data Analysis for Soil Moisture</h3>
                      <p className="text-[--main-color] mb-4">August 2022 – December 2022</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Built an IoT system using ultrasonic sensors and Azure cloud for soil moisture monitoring and decision-making.</li>
                        <li>Used Python and Arduino IDE for processing; visualized data with Matplotlib, Plotly, and Tableau.</li>
                        <li>Processed large-scale IoT data with PySpark and Hadoop.</li>
                        <li>Created dashboards in Tableau and Power BI; automated ETL with Azure Data Factory and Synapse Analytics.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">IoT</span>
                        <span className="tech-tag">Azure</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">PySpark</span>
                        <span className="tech-tag">Tableau</span>
                      </div>
                    </div>
                  </div>

                  {/* 2021 Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">A 120 Mbps WDM-Based VLC System for IoT Implementation</h3>
                      <p className="text-[--main-color] mb-4">August 2020 – January 2021</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Designed and simulated a high-speed Visible Light Communication (VLC) system using OptiSystem and mathematical models.</li>
                        <li>Improved efficiency by 25% and predictive accuracy by 20%.</li>
                        <li>Analyzed system performance with SQL and Python; presented results using Tableau.</li>
                        <li>Enhanced collaboration and system design for mobile and front-end applications.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">VLC</span>
                        <span className="tech-tag">OptiSystem</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">SQL</span>
                        <span className="tech-tag">Tableau</span>
                      </div>
                    </div>
                  </div>

                  {/* 2019-2021 Project */}
                  <div className="project-card group">
                    <div className="card-content">
                      <h3 className="text-xl font-bold mb-2">Therapy for Autistic Children Using Robot</h3>
                      <p className="text-[--main-color] mb-4">December 2019 – January 2021</p>
                      <ul className="list-disc pl-5 text-white/80 space-y-2">
                        <li>Developed an interactive robot using .NET and Python to improve social skills in autistic children, enhancing engagement by 30%.</li>
                        <li>Designed a user-friendly interface and conducted needs analysis with therapists to align robot functionality with user needs.</li>
                        <li>Conducted usability testing and implemented iterative improvements.</li>
                        <li>Used data visualization to present insights and drive design decisions.</li>
                      </ul>
                      <div className="tech-stack mt-4 flex flex-wrap gap-2">
                        <span className="tech-tag">.NET</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">UI/UX</span>
                        <span className="tech-tag">Data Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <Contact />

              <footer className="footer">
                <div className="footer-content">
                  <div className="footer-social">
                    <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className='bx bx-envelope'></i>
                    </a>
                    <a href="https://github.com/KVSC1511" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  
                  <div className="footer-links">
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
                
                <div className="footer-copyright">
                  © Venkata Sai Charan 🇺🇸 | All Rights Reserved
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