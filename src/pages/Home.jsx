import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight,
  FaUser, FaCode, FaServer, FaCloud, FaDatabase, FaMapMarker, FaBriefcase
} from 'react-icons/fa';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(225, 58, 122, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* SEO-friendly H1 tag for search engines */}
      <h1 className="sr-only">Venkata Sai Charan - Software Engineer Portfolio</h1>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#6d217f] via-[#e13a7a] to-[#00FFEE] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-20 h-20 bg-white rounded-full"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.7, 0.4, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <h2 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Hi, I'm{' '}
                  <motion.span 
                    className="text-white drop-shadow-lg"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Venkata Sai Charan
                  </motion.span>
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
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
                variants={itemVariants}
                className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. 
                Let's build what matters and create solutions that make a difference.
              </motion.p>

              {/* SEO-friendly location and availability info */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-6 text-sm text-white/80"
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarker className="text-[#e13a7a]" />
                  <span>Merrimack, NH, USA</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBriefcase className="text-[#e13a7a]" />
                  <span>Available for opportunities</span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.a 
                  href="/cv.pdf" 
                  className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300 group"
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaDownload className="text-lg" />
                  Download CV
                  <motion.div
                    className="text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#e13a7a] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-400 hover:text-white transition-all duration-300 group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Me
                  <motion.div
                    className="text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4"
              >
                <motion.a 
                  href="https://www.linkedin.com/in/sai-charan-k-v/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="mailto:saicharankarasala@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a 
                  href="https://github.com/KVSC1511" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-12 h-12 bg-white/20 border-2 border-white text-white rounded-full text-xl hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#e13a7a] to-[#6d217f] rounded-full blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img 
                  src="/images/profile.JPG" 
                  alt="Venkata Sai Charan - Software Engineer Portfolio" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-2xl object-cover object-top z-10"
                  variants={profileImageVariants}
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

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: FaUser,
                title: "4+ Years Experience",
                description: "Proven track record in software development and system architecture"
              },
              {
                icon: FaCode,
                title: "50+ Skills",
                description: "Comprehensive technical expertise across multiple domains"
              },
              {
                icon: FaServer,
                title: "10+ Projects",
                description: "Successfully delivered projects from concept to deployment"
              },
              {
                icon: FaDatabase,
                title: "3 Certifications",
                description: "Industry-recognized credentials in cloud and programming"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="w-16 h-16 bg-[#e13a7a] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <item.icon />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
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