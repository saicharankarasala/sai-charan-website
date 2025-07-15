import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaBriefcase, FaCode, FaAward, FaRocket,
  FaCalendarAlt, FaMapMarker, FaExternalLinkAlt, FaStar,
  FaLightbulb, FaUsers, FaChartLine, FaCertificate, FaTimes
} from 'react-icons/fa';

const Journey = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const journeyMilestones = [
    {
      year: 2020,
      title: "Academic Foundation",
      subtitle: "Computer Science Education",
      icon: FaGraduationCap,
      type: "education",
      description: "Started my journey in computer science, building a strong foundation in programming fundamentals, algorithms, and software engineering principles.",
      achievements: [
        "Completed core computer science courses",
        "Developed first programming projects",
        "Joined coding communities and hackathons"
      ],
      skills: ["Java", "Python", "Data Structures", "Algorithms"],
      color: "bg-blue-500"
    },
    {
      year: 2021,
      title: "First Professional Experience",
      subtitle: "Software Development Intern",
      icon: FaBriefcase,
      type: "work",
      description: "Landed my first professional role, working on real-world projects and learning industry best practices.",
      achievements: [
        "Contributed to production applications",
        "Learned version control and collaboration",
        "Gained experience with modern development tools"
      ],
      skills: ["JavaScript", "React", "Git", "Agile"],
      color: "bg-green-500"
    },
    {
      year: 2022,
      title: "Full-Stack Development",
      subtitle: "Expanding Technical Skills",
      icon: FaCode,
      type: "skill",
      description: "Dived deep into full-stack development, mastering both frontend and backend technologies.",
      achievements: [
        "Built complete web applications",
        "Learned database design and management",
        "Implemented RESTful APIs"
      ],
      skills: ["Node.js", "MongoDB", "Express", "React"],
      color: "bg-purple-500"
    },
    {
      year: 2023,
      title: "Cloud & DevOps",
      subtitle: "Modern Infrastructure",
      icon: FaRocket,
      type: "skill",
      description: "Explored cloud computing and DevOps practices, understanding scalable architecture and deployment.",
      achievements: [
        "Deployed applications to cloud platforms",
        "Learned containerization with Docker",
        "Implemented CI/CD pipelines"
      ],
      skills: ["AWS", "Docker", "CI/CD", "Linux"],
      color: "bg-orange-500"
    },
    {
      year: 2024,
      title: "Data Engineering",
      subtitle: "Big Data & Analytics",
      icon: FaChartLine,
      type: "skill",
      description: "Ventured into data engineering, working with large datasets and building data pipelines.",
      achievements: [
        "Processed large datasets efficiently",
        "Built ETL pipelines",
        "Created data visualizations"
      ],
      skills: ["Python", "Pandas", "Hadoop", "Tableau"],
      color: "bg-red-500"
    },
    {
      year: 2025,
      title: "Senior Software Engineer",
      subtitle: "Source Consulting LLC",
      icon: FaAward,
      type: "work",
      description: "Current role as a senior software engineer, leading projects and mentoring junior developers.",
      achievements: [
        "Leading development teams",
        "Architecting scalable solutions",
        "Mentoring junior developers"
      ],
      skills: ["Leadership", "System Design", "Mentoring", "Project Management"],
      color: "bg-pink-500"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: FaBriefcase },
    { number: "50+", label: "Skills Mastered", icon: FaCode },
    { number: "10+", label: "Projects Completed", icon: FaRocket },
    { number: "3", label: "Certifications", icon: FaCertificate }
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
              My <span className="text-white">Journey</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From academic foundations to senior software engineering, explore the milestones 
              that shaped my professional growth and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Professional <span className="text-[#e13a7a]">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A chronological journey through my career milestones, achievements, and growth.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#6d217f] to-[#e13a7a]"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedMilestone(milestone)}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 ${milestone.color} text-white rounded-xl flex items-center justify-center text-xl`}>
                          <milestone.icon />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                          <p className="text-[#e13a7a] font-semibold">{milestone.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-[#e13a7a] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {milestone.skills.slice(0, 3).map(skill => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {milestone.skills.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{milestone.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#e13a7a] rounded-full shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Journey <span className="text-[#e13a7a]">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <stat.icon />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-white">Connect</span>?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's discuss how my journey and experience can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[#e13a7a] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300"
              >
                <FaUsers />
                Let's Work Together
              </a>
              <a 
                href="/experience" 
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#e13a7a] transition-all duration-300"
              >
                <FaBriefcase />
                View Experience
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestone Modal */}
      {selectedMilestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedMilestone(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${selectedMilestone.color} text-white rounded-xl flex items-center justify-center text-2xl`}>
                  <selectedMilestone.icon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMilestone.title}</h3>
                  <p className="text-[#e13a7a] font-semibold">{selectedMilestone.subtitle}</p>
                  <span className="inline-block bg-[#e13a7a] text-white px-3 py-1 rounded-full text-sm font-bold mt-2">
                    {selectedMilestone.year}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Description</h4>
                <p className="text-gray-600 leading-relaxed">{selectedMilestone.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedMilestone.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaStar className="text-[#e13a7a] mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-[#e13a7a] text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Journey; 