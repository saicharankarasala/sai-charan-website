import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(225, 58, 122, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: level === 'advanced' ? '85%' : level === 'intermediate' ? '65%' : '50%',
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  const filterButtonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#e13a7a",
      color: "white",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
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
              A comprehensive showcase of my technical expertise across programming languages, 
              frameworks, tools, and platforms that I've mastered through years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Technical <span className="text-[#e13a7a]">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Filter by category to explore my skills in specific domains
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#e13a7a] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  variants={filterButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <category.icon className="text-sm" />
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  layout
                >
                  {/* Skill Icon */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#e13a7a] to-[#6d217f] text-white rounded-xl flex items-center justify-center text-xl mb-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <skill.icon />
                  </motion.div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e13a7a] transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {skill.category} • {getLevelText(skill.level)} Level
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.filter(cat => cat.id !== 'All').map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              const advancedCount = categorySkills.filter(s => s.level === 'advanced').length;
              const intermediateCount = categorySkills.filter(s => s.level === 'intermediate').length;

              return (
                <motion.div
                  key={category.id}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#e13a7a] text-white rounded-xl flex items-center justify-center text-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{categorySkills.length} skills</p>
                    </div>
                  </motion.div>

                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm text-gray-600">Advanced</span>
                      <span className="text-sm font-semibold text-blue-600">{advancedCount}</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm text-gray-600">Intermediate</span>
                      <span className="text-sm font-semibold text-yellow-600">{intermediateCount}</span>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categorySkills.slice(0, 6).map((skill, skillIndex) => (
                      <motion.span 
                        key={skill.name}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#e13a7a",
                          color: "white"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                    {categorySkills.length > 6 && (
                      <motion.span 
                        className="px-3 py-1 bg-[#e13a7a] text-white rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        +{categorySkills.length - 6} more
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to <span className="text-white">Start</span> a Project?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's discuss how my skills and experience can help bring your ideas to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
              >
                Start a Project
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 