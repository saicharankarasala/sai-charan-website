import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_your_service_id',
        'template_your_template_id',
        formRef.current,
        'your_public_key'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: 'name', label: 'Your Name', icon: FaUser, type: 'text' },
    { name: 'email', label: 'Your Email', icon: FaEnvelope, type: 'email' },
    { name: 'message', label: 'Your Message', icon: FaComment, type: 'textarea' }
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00ffee] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#00ffee] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#00ffee] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="text-[#e13a7a]">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Drop me a message and let's bring your ideas to life!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative">
                  <field.icon 
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-lg transition-colors duration-300 ${
                      focusedField === field.name ? 'text-[#00ffee]' : 'text-gray-500'
                    }`}
                  />
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.label}
                      rows="5"
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#e13a7a] focus:outline-none transition-all duration-300 resize-none"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.label}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#e13a7a] focus:outline-none transition-all duration-300"
                      required
                    />
                  )}
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: focusedField === field.name ? 1 : 0,
                      scale: focusedField === field.name ? 1.02 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-lg border-2 border-[#e13a7a] opacity-50" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#e13a7a] to-[#6d217f] text-white py-4 px-8 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:from-[#6d217f] hover:to-[#e13a7a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                  />
                ) : (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                )}
              </AnimatePresence>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-900 border border-green-500 text-green-300'
                    : 'bg-red-900 border border-red-500 text-red-300'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <FaCheck className="text-green-400" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <FaTimes className="text-red-400" />
                    <span>Failed to send message. Please try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: FaEnvelope, label: 'Email', value: 'venkatasaicharan1511@gmail.com', href: 'mailto:venkatasaicharan1511@gmail.com' },
            { icon: FaUser, label: 'Location', value: 'Hyderabad, India' },
            { icon: FaComment, label: 'Response Time', value: 'Within 24 hours' }
          ].map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-[#e13a7a] transition-colors duration-300"
            >
                             <info.icon className="text-3xl text-[#e13a7a] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">{info.label}</h3>
              {info.href ? (
                                 <a href={info.href} className="text-gray-400 hover:text-[#e13a7a] transition-colors duration-300">
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-400">{info.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContact; 