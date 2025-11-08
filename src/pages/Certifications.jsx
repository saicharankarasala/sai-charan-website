import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { 
  FaCertificate, FaDownload, FaExternalLinkAlt, FaCheckCircle,
  FaCalendarAlt, FaBuilding, FaIdCard, FaEye, FaTimes
} from 'react-icons/fa';
import AnimatedCertificationCard from '../components/AnimatedCertificationCard';

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useOutsideClick(modalRef, () => {
    if (selectedCertification) {
      setSelectedCertification(null);
    }
  });

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'March 2024',
      credentialId: '2a4a927b8cf14781975cd89adc323106',
      verifyUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106',
      downloadUrl: null,
      description: 'Comprehensive understanding of AWS services and architectural best practices for designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
      skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Networking', 'Storage', 'Compute'],
      category: 'Cloud & DevOps',
      image: '/images/AWS-SA-logo.png',
      featured: true
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      issueDate: 'January 2025',
      credentialId: 'HCT-2025-001234',
      verifyUrl: 'https://www.credly.com/badges/aef53d94-4b9f-491e-a02c-6bf11609a2d6/public_url',
      downloadUrl: null,
      description: 'Demonstrates proficiency in using Terraform for infrastructure as code, including provisioning, managing, and updating infrastructure across multiple cloud providers.',
      skills: ['Terraform', 'Infrastructure as Code', 'Cloud Provisioning', 'State Management', 'Modules', 'AWS', 'Azure', 'GCP'],
      category: 'Cloud & DevOps',
      image: '/images/Terraform-Badge.png',
      featured: true
    },
    {
      title: 'Programming with Python – Professional Certificate',
      issuer: 'OpenEDG Python Institute',
      issueDate: 'March 2024',
      credentialId: 'f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04',
      verifyUrl: 'https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04',
      downloadUrl: null,
      description: 'Advanced Python programming skills including data structures, algorithms, object-oriented programming, and best practices for software development.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'OOP', 'Software Development', 'Best Practices'],
      category: 'Programming',
      image: '/images/Linkdin-Python-icon.jpg',
      featured: true
    },
    {
      title: 'Python Professional',
      issuer: 'Edureka',
      issueDate: 'March 2024',
      credentialId: 'CKR8M9MX',
      verifyUrl: null,
      downloadUrl: '/certifications/edureka-python.pdf',
      description: 'Comprehensive Python training covering core concepts, advanced features, and practical applications in data science and web development.',
      skills: ['Python', 'Data Science', 'Web Development', 'Machine Learning', 'Automation', 'Testing'],
      category: 'Programming',
      image: '/images/edureka-python.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'All', name: 'All Certifications', count: certifications.length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: certifications.filter(c => c.category === 'Cloud & DevOps').length },
    { id: 'Programming', name: 'Programming', count: certifications.filter(c => c.category === 'Programming').length }
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-white">Certifications</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional certifications that validate my expertise and commitment to 
              continuous learning in technology and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Overview */}
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
              Professional <span className="text-gray-900">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized credentials that demonstrate my technical expertise 
              and commitment to professional development.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaCertificate className="text-lg" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCertifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer h-full"
                onClick={() => setSelectedCertification(certification)}
              >
                <AnimatedCertificationCard certification={certification} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Statistics */}
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
              Certification <span className="text-gray-900">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: certifications.length, label: 'Total Certifications', icon: FaCertificate },
              { number: categories.length - 1, label: 'Categories Covered', icon: FaBuilding },
              { number: '3+', label: 'Years of Learning', icon: FaCalendarAlt },
              { number: '100%', label: 'Verification Rate', icon: FaCheckCircle }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-6 text-2xl">
                  <stat.icon />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-2 sm:p-4" onClick={() => setSelectedCertification(null)}>
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 text-xl z-20 shadow-lg"
              onClick={() => setSelectedCertification(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl flex items-center justify-center text-white text-2xl sm:text-3xl flex-shrink-0">
                  <FaCertificate />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">{selectedCertification.title}</h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-gray-900 mb-2">
                    <span className="font-semibold text-sm sm:text-base">{selectedCertification.issuer}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-600 text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-900" />
                      {selectedCertification.issueDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaIdCard className="text-gray-900" />
                      ID: {selectedCertification.credentialId}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBuilding className="text-gray-900" />
                      {selectedCertification.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Description</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">{selectedCertification.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertification.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-full text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {selectedCertification.verifyUrl && (
                  <a
                    href={selectedCertification.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaEye />
                    Verify Certificate
                  </a>
                )}
                {selectedCertification.downloadUrl && (
                  <a
                    href={selectedCertification.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaDownload />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
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
              With verified expertise across multiple domains, I'm ready to bring 
              my certified skills to your next project.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications; 