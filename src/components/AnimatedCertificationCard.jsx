import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaEye, FaCalendarAlt } from 'react-icons/fa';

const AnimatedCertificationCard = ({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.025 }}
      className="relative group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Featured Badge */}
      {certification.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#e13a7a] text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      )}

      {/* Certification Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-contain bg-gray-50 p-4"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {certification.verifyUrl && (
              <motion.a
                href={certification.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
            {certification.downloadUrl && (
              <motion.a
                href={certification.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaCertificate />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Certification Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e13a7a] transition-colors duration-300">
          {certification.title}
        </h3>
        <p className="text-[#e13a7a] font-semibold mb-3">{certification.issuer}</p>
        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
          {certification.description}
        </p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.slice(0, 6).map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#e13a7a",
                color: "white"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
          {certification.skills.length > 6 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              +{certification.skills.length - 6} more
            </span>
          )}
        </div>

        {/* Date and Actions */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-2 text-gray-500">
            <FaCalendarAlt className="text-sm" />
            <span className="text-sm">{certification.issueDate}</span>
          </div>
          <motion.button
            className="text-[#e13a7a] hover:text-[#6d217f] transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaEye />
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCertificationCard; 