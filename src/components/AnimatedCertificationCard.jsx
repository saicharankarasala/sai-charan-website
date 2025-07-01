import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const AnimatedCertificationCard = ({ certification }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIconForCertification = (title) => {
    if (title.toLowerCase().includes('aws')) return FaCertificate;
    if (title.toLowerCase().includes('python')) return FaCertificate;
    return FaCertificate;
  };

  const Icon = getIconForCertification(certification.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 
                   shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
        style={{
          transformStyle: 'preserve-3d',
          background: isHovered 
            ? `linear-gradient(135deg, rgba(225,58,122,0.1) 0%, rgba(0,0,0,0.9) 100%)`
            : 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)'
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, #e13a7a20 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        />
        
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ 
            rotateY: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            className="text-4xl" 
            style={{ color: '#e13a7a' }}
          />
        </motion.div>
        
        {/* Certification title */}
        <motion.h3
          className="text-xl font-bold text-white text-center mb-3 leading-tight"
          animate={{ color: isHovered ? '#e13a7a' : "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {certification.title}
        </motion.h3>
        
        {/* Issuing organization */}
        <motion.p
          className="text-[#e13a7a] text-center mb-2 font-semibold"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {certification.issuer}
        </motion.p>
        
        {/* Issue date */}
        {certification.issueDate && (
          <motion.p
            className="text-gray-400 text-center mb-3 text-sm"
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            Issued: {certification.issueDate}
          </motion.p>
        )}
        
        {/* Credential ID */}
        {certification.credentialId && (
          <motion.p
            className="text-gray-500 text-center mb-4 text-xs"
            animate={{ opacity: isHovered ? 0.7 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            ID: {certification.credentialId}
          </motion.p>
        )}
        
        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          {certification.verifyUrl && (
            <motion.a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-[#e13a7a] text-white py-2 px-3 rounded-lg font-medium hover:bg-[#6d217f] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <FaExternalLinkAlt />
              Verify
            </motion.a>
          )}
          
          {certification.downloadUrl && (
            <motion.a
              href={certification.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gray-700 text-white py-2 px-3 rounded-lg font-medium hover:bg-[#e13a7a] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <FaDownload />
              Download
            </motion.a>
          )}
        </div>
        
        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: '#e13a7a' }}
                initial={{ 
                  x: Math.random() * 100, 
                  y: Math.random() * 100,
                  opacity: 0 
                }}
                animate={{ 
                  x: Math.random() * 200 - 100, 
                  y: Math.random() * 200 - 100,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCertificationCard; 