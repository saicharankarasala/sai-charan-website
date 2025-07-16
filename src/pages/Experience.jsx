import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, FaCalendarAlt, FaMapMarker, FaCode, 
  FaFilter, FaSort, FaTimes, FaExternalLinkAlt, FaBuilding,
  FaUserTie, FaGraduationCap, FaRocket, FaChartLine
} from 'react-icons/fa';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [experienceSort, setExperienceSort] = useState('Newest');

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Source Consulting LLC',
      companyUrl: 'https://touchwindow.com',
      client: 'Touch Screens Inc',
      date: 'January 2025 – Present',
      year: 2025,
      type: 'Full-time',
      domain: 'Backend',
      location: 'Remote',
      tech: ['Python', 'Pandas', 'AWS Lambda', 'Google Sheets API', 'Hadoop', 'Snowflake', 'Pentaho', 'Tableau', 'Power BI', 'REST', 'Bash'],
      bullets: [
        'Automated pricing for 100K+ SKUs using Python, Pandas, AWS Lambda, Google Sheets API',
        'Built ETL pipelines with Hadoop, Snowflake, Pentaho, improving vendor data sync',
        'Visualized KPIs with Tableau, Power BI; implemented REST & Bash scripts for backups'
      ],
      achievements: [
        'Reduced manual pricing time by 80% through automation',
        'Improved data processing efficiency by 60%',
        'Enhanced reporting accuracy by 95%'
      ]
    },
    {
      title: 'Network Operation Analyst',
      company: 'Trbhi INC',
      companyUrl: 'https://ziplyfiber.com',
      client: 'Ziply Fiber Technology',
      date: 'April 2024 – December 2024',
      year: 2024,
      type: 'Full-time',
      domain: 'DevOps',
      location: 'Remote',
      tech: ['Python', 'Bash', 'Dynatrace', 'PowerShell', 'SQL Server', 'ServiceNow', 'D365'],
      bullets: [
        'Reduced MTTR by 40% with Python/Bash automation & Dynatrace-based monitoring',
        'Debugged D365 and APIs using PowerShell, SQL Server, and ServiceNow RCA flows'
      ],
      achievements: [
        'Improved system uptime by 25%',
        'Reduced incident response time by 40%',
        'Streamlined troubleshooting processes'
      ]
    },
    {
      title: 'Graduate Student Technical Assistant',
      company: 'University of Missouri - Kansas City',
      companyUrl: '',
      client: '',
      date: 'May 2023 – December 2023',
      year: 2023,
      type: 'Assistant',
      domain: 'IT Support',
      location: 'Kansas City, MO, USA',
      tech: ['PXE', 'GPO', 'Linux', 'Windows', 'Python', 'Bash', 'Support Automation'],
      bullets: [
        'Managed 150+ lab systems with PXE, GPO, Linux/Windows Dual Boot',
        'Automated diagnostics using Python & Bash, cutting support tickets by 35%',
        'Raised student support satisfaction by 40% via one-on-one support and feedback tracking.'
      ],
      achievements: [
        'Reduced support tickets by 35% through automation',
        'Improved student satisfaction by 40%',
        'Managed 150+ systems efficiently'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Wipro Technologies',
      companyUrl: '',
      client: '',
      date: 'September 2021 – July 2022',
      year: 2021,
      type: 'Full-time',
      domain: 'Data Engineering',
      location: 'Bengaluru, KA, India',
      tech: ['Informatica', 'PL/SQL', 'Unix Shell', 'GitLab CI', 'Python', 'Excel Macros', 'SQL'],
      bullets: [
        'Built ETL pipelines using Informatica, PL/SQL, Unix Shell, and CI via GitLab',
        'Automated reporting flows with Python, Excel Macros, improving ETL transparency',
        'Managed metadata and repositories to streamline project execution.',
        'Supported cross-functional teams with technical insights using SQL and Python.'
      ],
      achievements: [
        'Improved ETL efficiency by 30%',
        'Reduced manual reporting time by 50%',
        'Enhanced data quality by 25%'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Merizon Technologies LLC',
      companyUrl: '',
      client: '',
      date: 'May 2019 – August 2021',
      year: 2021,
      type: 'Full-time',
      domain: 'Full Stack',
      location: 'Remote',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'GitHub Actions', 'JUnit', 'Selenium', 'SQL'],
      bullets: [
        'Developed full-stack apps with Java, Spring Boot, MySQL, JS',
        'Implemented CI using GitHub Actions, improved test coverage via JUnit & Selenium',
        'Improved API performance by 25% through SQL query optimization.'
      ],
      achievements: [
        'Improved API performance by 25%',
        'Increased test coverage by 40%',
        'Reduced deployment time by 60%'
      ]
    }
  ];

  const allTechs = Array.from(new Set(experiences.flatMap(e => e.tech))).sort();
  const allTypes = Array.from(new Set(experiences.map(e => e.type)));
  const allYears = Array.from(new Set(experiences.map(e => e.year))).sort((a, b) => b - a);
  const allDomains = Array.from(new Set(experiences.map(e => e.domain)));

  let filteredExperiences = experiences.filter(e =>
    (experienceFilter === 'All' || e.tech.includes(experienceFilter) || e.type === experienceFilter || e.year === experienceFilter || e.domain === experienceFilter)
  );
  
  if (experienceSort === 'Newest') filteredExperiences.sort((a, b) => b.year - a.year);
  if (experienceSort === 'Oldest') filteredExperiences.sort((a, b) => a.year - b.year);
  if (experienceSort === 'A-Z') filteredExperiences.sort((a, b) => a.title.localeCompare(b.title));
  if (experienceSort === 'Z-A') filteredExperiences.sort((a, b) => b.title.localeCompare(a.title));

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
              My <span className="text-white">Experience</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A journey through diverse roles and industries, showcasing my growth as a 
              software engineer and technology professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Overview */}
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
              Professional <span className="text-[#e13a7a]">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From entry-level positions to senior roles, each experience has shaped my 
              technical expertise and professional growth.
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
                value={experienceFilter} 
                onChange={e => setExperienceFilter(e.target.value)}
              >
                <option value="All">All Experience</option>
                <optgroup label="Technology">
                  {allTechs.map(tech => <option key={tech} value={tech}>{tech}</option>)}
                </optgroup>
                <optgroup label="Type">
                  {allTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </optgroup>
                <optgroup label="Domain">
                  {allDomains.map(domain => <option key={domain} value={domain}>{domain}</option>)}
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
                value={experienceSort} 
                onChange={e => setExperienceSort(e.target.value)}
              >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.date}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full cursor-pointer border border-gray-200"
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Domain badge */}
                <div className="absolute top-4 left-4 text-[#e13a7a] text-sm font-medium">
                  {exp.domain}
                </div>
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-[#e13a7a] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {exp.year}
                </div>
                
                {/* Company logo placeholder */}
                <div className="w-16 h-16 bg-[#e13a7a] rounded-xl flex items-center justify-center text-white text-2xl mb-4 mt-8">
                  <FaBuilding />
                </div>
                
                {/* Title and company */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-[#e13a7a] mb-2 font-semibold">{exp.company}</p>
                
                {/* Location and date */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <FaMapMarker className="text-[#e13a7a]" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <FaCalendarAlt className="text-[#e13a7a]" />
                  <span>{exp.date}</span>
                </div>
                
                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.tech.slice(0, 3).map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      +{exp.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* View Details button */}
                <div className="mt-auto pt-4">
                  <button
                    className="w-full bg-[#e13a7a] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#6d217f] transition-colors duration-300 flex items-center justify-center gap-2 text-base"
                    onClick={(e) => { e.stopPropagation(); setSelectedExperience(exp); }}
                  >
                    <FaUserTie />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Statistics */}
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
              Experience <span className="text-[#e13a7a]">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '4+', label: 'Years Experience', icon: FaBriefcase },
              { number: experiences.length, label: 'Companies Worked', icon: FaBuilding },
              { number: allTechs.length, label: 'Technologies Used', icon: FaCode },
              { number: allDomains.length, label: 'Domains Covered', icon: FaRocket }
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

      {/* Experience Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4" onClick={() => setSelectedExperience(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 bg-gray-100 hover:bg-[#e13a7a] hover:text-white rounded-full p-2 text-xl z-20 transition-colors duration-300"
              onClick={() => setSelectedExperience(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-[#e13a7a] rounded-xl flex items-center justify-center text-white text-3xl">
                  <FaBuilding />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedExperience.title}</h3>
                  <div className="flex items-center gap-4 text-[#e13a7a] mb-2">
                    <span className="font-semibold">{selectedExperience.company}</span>
                    {selectedExperience.companyUrl && (
                      <a 
                        href={selectedExperience.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#e13a7a] hover:text-[#6d217f] transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  {selectedExperience.client && (
                    <p className="text-gray-600 mb-2">Client: {selectedExperience.client}</p>
                  )}
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                      <FaMapMarker className="text-[#e13a7a]" />
                      {selectedExperience.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#e13a7a]" />
                      {selectedExperience.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUserTie className="text-[#e13a7a]" />
                      {selectedExperience.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaCode className="text-[#e13a7a]" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  {selectedExperience.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e13a7a] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaChartLine className="text-[#e13a7a]" />
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e13a7a] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-[#e13a7a] text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
              Ready to <span className="text-white">Collaborate</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              With diverse experience across multiple domains and technologies, 
              I'm ready to bring my expertise to your next project.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 