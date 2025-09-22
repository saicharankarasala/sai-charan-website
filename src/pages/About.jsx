import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaGraduationCap, FaBriefcase, FaCode, FaHeart,
  FaLightbulb, FaRocket, FaUsers, FaAward, FaGlobe
} from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Technical Expertise",
      description: "Full-stack development with modern technologies and cloud platforms"
    },
    {
      icon: FaRocket,
      title: "Problem Solver",
      description: "Analytical mindset with proven track record of innovative solutions"
    },
    {
      icon: FaUsers,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: FaAward,
      title: "Quality Focus",
      description: "Commitment to clean code, testing, and best practices"
    }
  ];

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "50+", label: "Skills & Technologies" },
    { number: "6", label: "Projects Completed" },
    { number: "4", label: "Professional Certifications" }
  ];

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
              About <span className="text-white">Me</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. 
              Let's build what matters and create solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <FaUser className="text-[#e13a7a] text-2xl" />
                My Story
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I'm Venkata Sai Charan, a passionate Software Engineer with over 4 years of experience 
                  in developing innovative solutions that drive business value. My journey began with a 
                  curiosity for technology and a desire to solve real-world problems.
                </p>
                
                <p>
                  With a Master's degree in Computer Science from the University of Missouri - Kansas City 
                  and a Bachelor's in Electronics and Communication Engineering, I've developed a unique 
                  perspective that combines theoretical knowledge with practical application.
                </p>
                
                <p>
                  Throughout my career, I've worked on diverse projects ranging from cryptocurrency security 
                  systems to IoT-based data analysis platforms. Each project has taught me the importance 
                  of clean code, scalable architecture, and user-centered design.
                </p>
                
                <p>
                  I believe in continuous learning and staying current with emerging technologies. 
                  Whether it's cloud computing, data engineering, or full-stack development, 
                  I'm always excited to tackle new challenges and expand my skill set.
                </p>
              </div>

              {/* Philosophy */}
              <div className="mt-12 p-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-2xl" />
                  <h3 className="text-xl font-bold">My Philosophy</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  "I believe great technology is built at the intersection of curiosity, creativity, and code. 
                  Every line of code should serve a purpose, every solution should be elegant, and every 
                  system should be built with the user in mind."
                </p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-[#e13a7a] mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
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
              What Makes Me <span className="text-[#e13a7a]">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I combine technical expertise with creative problem-solving to deliver innovative solutions 
              that drive business value and user satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e13a7a] text-white rounded-full mb-6 text-2xl">
                  <highlight.icon />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              My <span className="text-[#e13a7a]">Journey</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#e13a7a] rounded-full flex items-center justify-center text-white">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Master of Science in Computer Science</h4>
                    <p className="text-[#e13a7a] font-semibold">University of Missouri - Kansas City</p>
                    <p className="text-gray-600">August 2022 – December 2023 • GPA: 3.75</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Bachelor of Engineering in Electronics and Communication</h4>
                    <p className="text-[#e13a7a] font-semibold">St. Joseph's College of Engineering</p>
                    <p className="text-gray-600">August 2017 – August 2021 • GPA: 3.7</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#e13a7a] rounded-full flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Experience</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Software Engineer</h4>
                    <p className="text-[#e13a7a] font-semibold">Source Consulting LLC</p>
                    <p className="text-gray-600">January 2025 – Present</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Network Operation Analyst</h4>
                    <p className="text-[#e13a7a] font-semibold">Trbhi INC</p>
                    <p className="text-gray-600">April 2024 – December 2024</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Graduate Student Technical Assistant</h4>
                    <p className="text-[#e13a7a] font-semibold">University of Missouri - Kansas City</p>
                    <p className="text-gray-600">May 2023 – December 2023</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Software Engineer</h4>
                    <p className="text-[#e13a7a] font-semibold">Wipro Technologies</p>
                    <p className="text-gray-600">September 2021 – July 2022</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900">Software Engineer</h4>
                    <p className="text-[#e13a7a] font-semibold">Merizon Technologies</p>
                    <p className="text-gray-600">May 2019 – August 2021</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work <span className="text-white">Together</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 