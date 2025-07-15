import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight,
  FaUser, FaCode, FaServer, FaCloud, FaDatabase
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
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
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-white drop-shadow-lg">Venkata Sai Charan</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-6"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-pink-200 min-h-[3rem]">
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
                </h2>
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
                  alt="Venkata Sai Charan - Software Engineer" 
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
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e13a7a] text-white rounded-full mb-4 text-2xl">
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Something <span className="text-white">Amazing</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's collaborate on your next project. Whether it's a web application, 
              data pipeline, or cloud infrastructure, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/projects" 
                className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300 group"
              >
                View My Work
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#e13a7a] transition-all duration-300 group"
              >
                Get In Touch
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 