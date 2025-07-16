import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const AnimatedCertificationCard = ({ certification }) => {
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
      whileHover={{ scale: 1.025 }}
      className="relative group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <div
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon className="text-4xl" style={{ color: '#e13a7a' }} />
        </div>
        {/* Certification title */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-3 leading-tight">
          {certification.title}
        </h3>
        {/* Issuing organization */}
        <p className="text-[#e13a7a] text-center mb-2 font-semibold">
          {certification.issuer}
        </p>
        {/* Issue date */}
        {certification.issueDate && (
          <p className="text-gray-600 text-center mb-4 text-sm">
            Issued: {certification.issueDate}
          </p>
        )}
        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>
        {/* Action button - always present for consistent spacing */}
        <div>
          {certification.verifyUrl && (
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#e13a7a] text-white py-2 px-3 rounded-lg font-medium hover:bg-[#6d217f] transition-colors duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer border border-[#e13a7a]"
              style={{ pointerEvents: 'auto' }}
              tabIndex={0}
            >
              <FaExternalLinkAlt />
              Verify
            </a>
          )}
          {certification.downloadUrl && (
            <a
              href={certification.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#e13a7a] text-white py-2 px-3 rounded-lg font-bold hover:bg-[#6d217f] transition-colors duration-300 flex items-center justify-center gap-2 text-base cursor-pointer border border-[#e13a7a]"
              style={{ pointerEvents: 'auto' }}
              tabIndex={0}
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCertificationCard; 