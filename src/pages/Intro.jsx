import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaMouse, FaCode, FaRocket, FaUser, FaBriefcase,
  FaGithub, FaLinkedin, FaEnvelope, FaDownload
} from 'react-icons/fa';

const Intro = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Software Engineer",
    "Cloud & Backend Developer", 
    "Problem Solver",
    "Data Enthusiast",
    "Innovation Driver"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2d014d] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#e13a7a] to-[#6d217f] rounded-full opacity-10 blur-3xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-[#00FFEE] to-[#e13a7a] rounded-full opacity-10 blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-to-r from-[#6d217f] to-[#00FFEE] rounded-full opacity-10 blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Profile Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#e13a7a] to-[#6d217f] rounded-full blur-2xl opacity-30"
                  variants={pulseVariants}
                  animate="animate"
                />
                <img
                  src="/images/profile.JPG"
                  alt="Venkata Sai Charan"
                  className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover object-top z-10"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(225, 58, 122, 0)",
                  "0 0 20px rgba(225, 58, 122, 0.5)",
                  "0 0 0px rgba(225, 58, 122, 0)"
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
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-[#e13a7a] min-h-[3rem] flex items-center justify-center"
              >
                {texts[currentText]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. 
            Let's build what matters and create solutions that make a difference.
          </motion.p>

          {/* Location & Status */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#e13a7a" }}
              transition={{ duration: 0.2 }}
            >
              <FaUser className="text-[#e13a7a]" />
              <span>Merrimack, NH, USA</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#e13a7a" }}
              transition={{ duration: 0.2 }}
            >
              <FaBriefcase className="text-[#e13a7a]" />
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/home"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e13a7a] to-[#6d217f] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaRocket className="text-lg" />
                Explore Portfolio
                <motion.div
                  className="text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <FaDownload className="text-lg" />
                Download CV
                <motion.div
                  className="text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                >
                  <FaArrowRight />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/sai-charan-k-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xl hover:bg-white/20 transition-all duration-300"
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
              className="inline-flex justify-center items-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xl hover:bg-white/20 transition-all duration-300"
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
              className="inline-flex justify-center items-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xl hover:bg-white/20 transition-all duration-300"
              variants={socialButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="flex flex-col items-center text-gray-400"
              variants={floatingVariants}
              animate="animate"
            >
              <FaMouse className="text-2xl mb-2" />
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Navigation */}
      <motion.div
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col gap-2">
          {[
            { path: '/home', label: 'Home', icon: FaUser },
            { path: '/skills', label: 'Skills', icon: FaCode },
            { path: '/projects', label: 'Projects', icon: FaRocket },
            { path: '/contact', label: 'Contact', icon: FaEnvelope }
          ].map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <item.icon className="text-[#e13a7a]" />
                <span className="text-sm font-medium">{item.label}</span>
                <motion.div
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Intro; 