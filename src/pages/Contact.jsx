import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaMapMarker, FaLinkedin, FaGithub,
  FaTwitter, FaInstagram, FaPaperPlane, FaUser, FaBuilding,
  FaComment, FaCheckCircle, FaTimes
} from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'saicharankarasala@gmail.com',
      link: 'mailto:saicharankarasala@gmail.com',
      color: 'bg-red-500'
    },
    {
      icon: FaMapMarker,
      title: 'Location',
      value: 'Merrimack, NH, USA',
      link: null,
      color: 'bg-blue-500'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/sai-charan-k-v/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/KVSC1511',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/saicharankv',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/saicharankv',
      color: 'bg-pink-500 hover:bg-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get In <span className="text-white">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to start a project or just want to say hello? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Get In <span className="text-[#e13a7a]">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Ready to start a project or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-4"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e13a7a] focus:border-transparent transition-all duration-300 text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e13a7a] focus:border-transparent transition-all duration-300 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e13a7a] focus:border-transparent transition-all duration-300 text-base"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e13a7a] focus:border-transparent transition-all duration-300 resize-none text-base"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#e13a7a] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold hover:bg-[#6d217f] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Submit Status */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 sm:p-4 rounded-lg flex items-center gap-2 text-sm sm:text-base ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <FaTimes className="text-red-600 flex-shrink-0" />
                    <span>Something went wrong. Please try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${info.color} text-white rounded-lg flex items-center justify-center text-lg sm:text-xl mx-auto mb-3 sm:mb-4`}>
                    <info.icon />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-[#e13a7a] hover:text-[#6d217f] transition-colors duration-300 text-sm sm:text-base break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${social.color} text-white rounded-lg flex items-center justify-center text-lg sm:text-xl transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#6d217f] to-[#e13a7a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to <span className="text-white">Start</span>?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed px-4">
              Don't wait to bring your ideas to life. Let's discuss your project 
              and see how we can work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="mailto:saicharankarasala@gmail.com" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#e13a7a] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-[#6d217f] transition-all duration-300 text-sm sm:text-base"
              >
                <FaEnvelope />
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-charan-k-v/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-[#e13a7a] transition-all duration-300 text-sm sm:text-base"
              >
                <FaLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 