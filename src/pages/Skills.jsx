import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCogs, FaCode, FaServer, FaDatabase, FaCloud, FaTools,
  FaChartBar, FaMicrochip, FaNetworkWired, FaLaptopCode,
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, 
  FaGitAlt, FaLinux, FaWindows, FaAws, FaMicrosoft,
  FaLeaf, FaGlobe, FaTerminal, FaShieldAlt, FaEye, FaPalette,
  FaChartLine, FaChartPie, FaCogs as FaSpring, FaBolt,
  FaRocket, FaCog, FaWrench, FaStream, FaSitemap,
  FaDatabase as FaSql, FaServer as FaHadoop, FaCloud as FaSnowflake,
  FaCodeBranch, FaRobot, FaBroadcastTower,
  FaNetworkWired as FaVlc, FaMicrochip as FaIot, FaCode as FaDotnet
} from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    { id: 'All', name: 'All Skills', icon: FaCogs },
    { id: 'Programming', name: 'Programming', icon: FaCode },
    { id: 'Backend', name: 'Backend', icon: FaServer },
    { id: 'Frontend', name: 'Frontend', icon: FaLaptopCode },
    { id: 'Database', name: 'Database', icon: FaDatabase },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: FaCloud },
    { id: 'Tools', name: 'Tools & Platforms', icon: FaTools }
  ];

  const skills = [
    // Programming Languages
    { name: 'Python', icon: FaPython, level: 'advanced', category: 'Programming', color: '#e13a7a' },
    { name: 'Java', icon: FaJava, level: 'advanced', category: 'Programming', color: '#e13a7a' },
    { name: 'JavaScript', icon: FaJs, level: 'advanced', category: 'Programming', color: '#e13a7a' },
    { name: 'HTML5', icon: FaHtml5, level: 'advanced', category: 'Frontend', color: '#e13a7a' },
    { name: 'CSS3', icon: FaCss3Alt, level: 'advanced', category: 'Frontend', color: '#e13a7a' },
    { name: 'React', icon: FaReact, level: 'advanced', category: 'Frontend', color: '#e13a7a' },
    
    // Backend Technologies
    { name: 'Spring Boot', icon: FaSpring, level: 'advanced', category: 'Backend', color: '#e13a7a' },
    { name: 'REST API', icon: FaGlobe, level: 'advanced', category: 'Backend', color: '#e13a7a' },
    { name: 'Server', icon: FaServer, level: 'advanced', category: 'Backend', color: '#e13a7a' },
    
    // Database Technologies
    { name: 'SQL', icon: FaSql, level: 'advanced', category: 'Database', color: '#e13a7a' },
    { name: 'MySQL', icon: FaDatabase, level: 'advanced', category: 'Database', color: '#e13a7a' },
    { name: 'PL/SQL', icon: FaDatabase, level: 'advanced', category: 'Database', color: '#e13a7a' },
    { name: 'Snowflake', icon: FaSnowflake, level: 'intermediate', category: 'Database', color: '#e13a7a' },
    { name: 'Hadoop', icon: FaHadoop, level: 'intermediate', category: 'Database', color: '#e13a7a' },
    
    // Cloud & DevOps
    { name: 'AWS', icon: FaAws, level: 'intermediate', category: 'Cloud', color: '#e13a7a' },
    { name: 'AWS Lambda', icon: FaBolt, level: 'intermediate', category: 'Cloud', color: '#e13a7a' },
    { name: 'Azure', icon: FaMicrosoft, level: 'intermediate', category: 'Cloud', color: '#e13a7a' },
    { name: 'Linux', icon: FaLinux, level: 'advanced', category: 'Cloud', color: '#e13a7a' },
    { name: 'Windows', icon: FaWindows, level: 'advanced', category: 'Cloud', color: '#e13a7a' },
    { name: 'Git', icon: FaGitAlt, level: 'advanced', category: 'Cloud', color: '#e13a7a' },
    { name: 'GitLab CI', icon: FaCodeBranch, level: 'intermediate', category: 'Cloud', color: '#e13a7a' },
    { name: 'Bash', icon: FaTerminal, level: 'advanced', category: 'Cloud', color: '#e13a7a' },
    { name: 'PowerShell', icon: FaTerminal, level: 'intermediate', category: 'Cloud', color: '#e13a7a' },
    { name: 'Unix Shell', icon: FaTerminal, level: 'advanced', category: 'Cloud', color: '#e13a7a' },
    
    // Tools & Platforms
    { name: 'Tableau', icon: FaChartBar, level: 'advanced', category: 'Tools', color: '#e13a7a' },
    { name: 'Power BI', icon: FaChartPie, level: 'advanced', category: 'Tools', color: '#e13a7a' },
    { name: 'Informatica', icon: FaStream, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'Pentaho', icon: FaWrench, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'Dynatrace', icon: FaEye, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'ServiceNow', icon: FaCog, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'D365', icon: FaMicrosoft, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'JUnit', icon: FaShieldAlt, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'Selenium', icon: FaRobot, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'PXE', icon: FaNetworkWired, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'GPO', icon: FaSitemap, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    
    // Data & Analytics
    { name: 'Pandas', icon: FaLeaf, level: 'advanced', category: 'Programming', color: '#e13a7a' },
    { name: 'PySpark', icon: FaRocket, level: 'intermediate', category: 'Programming', color: '#e13a7a' },
    { name: 'Matplotlib', icon: FaChartLine, level: 'advanced', category: 'Tools', color: '#e13a7a' },
    { name: 'Plotly', icon: FaChartBar, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: 'Data Visualization', icon: FaChartPie, level: 'advanced', category: 'Tools', color: '#e13a7a' },
    
    // Specialized Technologies
    { name: 'IoT', icon: FaIot, level: 'intermediate', category: 'Programming', color: '#e13a7a' },
    { name: 'VLC', icon: FaVlc, level: 'intermediate', category: 'Programming', color: '#e13a7a' },
    { name: 'OptiSystem', icon: FaBroadcastTower, level: 'intermediate', category: 'Tools', color: '#e13a7a' },
    { name: '.NET', icon: FaDotnet, level: 'intermediate', category: 'Programming', color: '#e13a7a' },
    { name: 'UI/UX', icon: FaPalette, level: 'intermediate', category: 'Frontend', color: '#e13a7a' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'advanced': return 'from-blue-400 to-blue-600';
      case 'intermediate': return 'from-yellow-400 to-yellow-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      default: return 'Beginner';
    }
  };

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
              My <span className="text-white">Skills</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of technologies, tools, and platforms I've mastered 
              through years of hands-on experience and continuous learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Technical <span className="text-[#e13a7a]">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From programming languages to cloud platforms, I've built expertise across the full 
              technology stack to deliver comprehensive solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#e13a7a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="text-lg" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e13a7a] text-white rounded-xl flex items-center justify-center text-xl">
                    <skill.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}></div>
                      <span className="text-sm text-gray-600 font-medium">
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-500`}
                    style={{ 
                      width: skill.level === 'advanced' ? '85%' : 
                             skill.level === 'intermediate' ? '65%' : '50%' 
                    }}
                  ></div>
                </div>
                
                <div className="text-xs text-gray-500">
                  {skill.category} • {getLevelText(skill.level)} Level
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills by Category */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Skills by <span className="text-[#e13a7a]">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized by domain expertise to showcase my comprehensive technical capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.filter(cat => cat.id !== 'All').map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              const advancedCount = categorySkills.filter(s => s.level === 'advanced').length;
              const intermediateCount = categorySkills.filter(s => s.level === 'intermediate').length;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#e13a7a] text-white rounded-xl flex items-center justify-center text-xl">
                      <category.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{categorySkills.length} skills</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Advanced</span>
                      <span className="text-sm font-semibold text-blue-600">{advancedCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Intermediate</span>
                      <span className="text-sm font-semibold text-yellow-600">{intermediateCount}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categorySkills.slice(0, 6).map(skill => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                    {categorySkills.length > 6 && (
                      <span className="px-3 py-1 bg-[#e13a7a] text-white rounded-full text-sm font-medium">
                        +{categorySkills.length - 6} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-white">Collaborate</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              With expertise across the full technology stack, I'm ready to tackle your next project. 
              Let's discuss how my skills can help bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 