import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight,
  FaUser, FaCode, FaServer, FaCloud, FaDatabase, FaMapMarker, FaBriefcase
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* SEO-friendly H1 tag for search engines */}
      <h1 className="sr-only">Venkata Sai Charan - Software Engineer Portfolio</h1>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#6d217f] via-[#e13a7a] to-[#00FFEE] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <h2 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-white drop-shadow-lg">Venkata Sai Charan</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-6"
              >
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-pink-200 min-h-[3rem]">
                  <Typewriter
                    words={[
                      'Cloud & Backend Developer',
                      'Software Engineer',
                      'Network Operations Analyst',
                      'Data Enthusiast',
                      'Problem Solver'
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. 
                Let's build what matters and create solutions that make a difference.
              </motion.p>

              {/* SEO-friendly location and availability info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-4 mb-6 text-sm text-white/80"
              >
                <div className="flex items-center gap-2">
                  <FaMapMarker className="text-[#e13a7a]" />
                  <span>Merrimack, NH, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-[#e13a7a]" />
                  <span>Available for opportunities</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <a 
                  href="/cv.pdf" 
                  className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300 group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaDownload className="text-lg" />
                  Download CV
                  <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#e13a7a] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-400 hover:text-white transition-all duration-300 group"
                >
                  Contact Me
                  <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex justify-center lg:justify-start gap-4"
              >
                <a 
                  href="https://www.linkedin.com/in/sai-charan-k-v/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:saicharankarasala@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                >
                  <FaEnvelope />
                </a>
                <a 
                  href="https://github.com/KVSC1511" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                >
                  <FaGithub />
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e13a7a] to-[#6d217f] rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/profile.JPG" 
                  alt="Venkata Sai Charan - Software Engineer Portfolio" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-2xl object-cover object-top z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-[#e13a7a]">Me</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I combine technical expertise with creative problem-solving to deliver innovative solutions 
              that drive business value and user satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaUser,
                title: "4+ Years Experience",
                description: "Proven track record in software development and system architecture"
              },
              {
                icon: FaCode,
                title: "Full-Stack Expertise",
                description: "From frontend to backend, I build complete solutions"
              },
              {
                icon: FaServer,
                title: "Cloud & DevOps",
                description: "AWS, Azure, and infrastructure automation expertise"
              },
              {
                icon: FaDatabase,
                title: "Data-Driven",
                description: "Analytics, visualization, and data pipeline development"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e13a7a] to-[#6d217f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-friendly About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-[#e13a7a]">Venkata Sai Charan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Software Engineer with expertise in React, Node.js, and modern web technologies. 
              Based in Merrimack, NH, specializing in full-stack development and cloud solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Technical Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specializing in React, Node.js, JavaScript, and modern web development technologies. 
                  Experienced in cloud platforms like AWS and Azure, with a strong foundation in 
                  database design and API development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently working as a Software Engineer at Source Consulting LLC, with previous 
                  experience at Trbhi INC, Wipro Technologies, and Merizon Technologies. 
                  Passionate about creating innovative solutions and driving business value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Skills</h3>
              <div className="space-y-4">
                {[
                  "React & JavaScript Development",
                  "Node.js & Backend Development", 
                  "AWS & Cloud Infrastructure",
                  "Database Design & Management",
                  "API Development & Integration",
                  "DevOps & CI/CD Pipelines"
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#e13a7a] rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 