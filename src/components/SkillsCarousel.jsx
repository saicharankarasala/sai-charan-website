import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimatedSkillCard from './AnimatedSkillCard';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsCarousel = ({ skills }) => {
  const skillsPerPage = 18;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const startIdx = page * skillsPerPage;
  const endIdx = startIdx + skillsPerPage;
  const visibleSkills = skills.slice(startIdx, endIdx);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="relative w-full">
      {/* Arrow Buttons */}
      {page > 0 && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#e13a7a] text-[#e13a7a] hover:bg-[#e13a7a] hover:text-white rounded-full p-3 shadow transition-colors duration-200"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <FaChevronLeft size={22} />
        </button>
      )}
      {page < totalPages - 1 && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#e13a7a] text-[#e13a7a] hover:bg-[#e13a7a] hover:text-white rounded-full p-3 shadow transition-colors duration-200"
          onClick={handleNext}
          aria-label="Next"
        >
          <FaChevronRight size={22} />
        </button>
      )}
      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
        >
          {visibleSkills.map((skill) => (
            <AnimatedSkillCard
              key={skill.name}
              skill={skill.name}
              icon={skill.icon}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {/* Page Indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === page ? 'bg-[#e13a7a]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsCarousel; 