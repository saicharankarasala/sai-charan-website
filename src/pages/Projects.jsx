import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, FaCode, FaExternalLinkAlt, FaGithub,
  FaFilter, FaSort, FaTimes, FaEye, FaCalendarAlt, FaTag
} from 'react-icons/fa';
import ProjectShowcase from '../components/ProjectShowcase';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('All');
  const [projectSort, setProjectSort] = useState('Newest');

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
      ],
      image: '/images/Portfolio.jpg',
      category: 'Full Stack',
      githubUrl: 'https://github.com/KVSC1511/Portfolio'
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
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/saicharankarasala/Enhancing-Security-Privacy-of-Cryptocurrency-Transactions.git' }
      ],
      image: '/images/Encrypt.png',
      category: 'Security',
      githubUrl: 'https://github.com/saicharankarasala/Enhancing-Security-Privacy-of-Cryptocurrency-Transactions.git'
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
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/saicharankarasala/YouTube-Data-Analysis-using-Hadoop-Ecosystem.git' }
      ],
      image: '/images/YTAnalysis.png',
      category: 'Data Engineering',
      githubUrl: 'https://github.com/saicharankarasala/YouTube-Data-Analysis-using-Hadoop-Ecosystem.git'
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
      ],
      image: '/images/IOT.png',
      category: 'IoT',
      githubUrl: 'https://github.com/saicharankarasala/iot-soil-moisture-analysis.git'
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
      ],
      image: '/images/120Mbps.png',
      category: 'Research',
      githubUrl: 'https://github.com/saicharankarasala/WDM-VLC-IoT-120Mbps.git'
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
      ],
      image: '/images/Autistic.png',
      category: 'AI/Robotics',
      githubUrl: 'https://github.com/saicharankarasala/autism-therapy-robot-spark.git'
    }
  ];

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech))).sort();
  const allTypes = Array.from(new Set(projects.map(p => p.type)));
  const allYears = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
  const allCategories = Array.from(new Set(projects.map(p => p.category)));

  let filteredProjects = projects.filter(p =>
    (projectFilter === 'All' || p.tech.includes(projectFilter) || p.type === projectFilter || p.year === projectFilter || p.category === projectFilter)
  );
  
  if (projectSort === 'Newest') filteredProjects.sort((a, b) => b.year - a.year);
  if (projectSort === 'Oldest') filteredProjects.sort((a, b) => a.year - b.year);
  if (projectSort === 'A-Z') filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  if (projectSort === 'Z-A') filteredProjects.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-white">Projects</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions and technical achievements across web development, 
              data engineering, IoT, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Featured <span className="text-[#e13a7a]">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From full-stack web applications to cutting-edge research projects, 
              each piece represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Filter & Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-12 justify-center items-center"
          >
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <FaFilter className="text-[#e13a7a]" />
              <select 
                className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" 
                value={projectFilter} 
                onChange={e => setProjectFilter(e.target.value)}
              >
                <option value="All">All Projects</option>
                <optgroup label="Technology">
                  {allTechs.map(tech => <option key={tech} value={tech}>{tech}</option>)}
                </optgroup>
                <optgroup label="Type">
                  {allTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </optgroup>
                <optgroup label="Category">
                  {allCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </optgroup>
                <optgroup label="Year">
                  {allYears.map(year => <option key={year} value={year}>{year}</option>)}
                </optgroup>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <FaSort className="text-[#e13a7a]" />
              <select 
                className="px-4 py-2 rounded-full border border-[#e13a7a] text-[#e13a7a] font-semibold bg-white shadow-sm" 
                value={projectSort} 
                onChange={e => setProjectSort(e.target.value)}
              >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
          </motion.div>

          {/* Projects Showcase */}
          <ProjectShowcase projects={filteredProjects} onProjectClick={setSelectedProject} />
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Project <span className="text-[#e13a7a]">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: projects.length, label: 'Total Projects', icon: FaProjectDiagram },
              { number: allTechs.length, label: 'Technologies Used', icon: FaCode },
              { number: allCategories.length, label: 'Project Categories', icon: FaTag },
              { number: '4+', label: 'Years of Development', icon: FaCalendarAlt }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e13a7a] text-white rounded-full mb-6 text-2xl">
                  <stat.icon />
                </div>
                <div className="text-4xl font-bold text-[#e13a7a] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 text-xl z-20 shadow-lg"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                {selectedProject.image && (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-24 h-24 rounded-xl object-cover shadow-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#e13a7a]" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaTag className="text-[#e13a7a]" />
                      {selectedProject.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCode className="text-[#e13a7a]" />
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Description</h4>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  {selectedProject.description.map((desc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e13a7a] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-[#e13a7a] text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.links && selectedProject.links.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Project Links</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e13a7a] text-white rounded-full font-semibold hover:bg-[#6d217f] transition-colors duration-300"
                      >
                        {link.label === 'GitHub' ? <FaGithub /> : <FaExternalLinkAlt />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-white">Project</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Inspired by these projects? Let's collaborate on your next innovative solution. 
              Whether it's web development, data engineering, or emerging technologies, I'm ready to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
            >
              Let's Build Together
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 