import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const categories = ['All', ...new Set(projects.map(p => p.type))];

  const filteredProjects = projects
    .filter(project => filter === 'All' || project.type === filter)
    .sort((a, b) => {
      if (sortBy === 'Newest') return b.year - a.year;
      if (sortBy === 'Oldest') return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="py-16">
      {/* Filter Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 justify-center mb-12"
      >
        {categories.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
              filter === category
                ? 'border-[#e13a7a] bg-[#e13a7a] text-white'
                : 'border-gray-300 text-gray-600 hover:border-[#e13a7a] hover:text-[#e13a7a] bg-white'
            }`}
          >
            {category}
          </motion.button>
        ))}
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-[#e13a7a] transition-colors"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
          <option value="Alphabetical">Alphabetical</option>
        </select>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full border border-gray-200"
              whileHover={{ scale: 1.025, y: -5 }}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              {/* Card content */}
              <div className="relative bg-white rounded-xl p-6 border border-gray-200 
                              shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-[#e13a7a] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {project.year}
                </div>
                
                {/* Project type */}
                <div className="text-[#e13a7a] text-sm font-medium mb-3">
                  {project.type}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e13a7a] transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description preview */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description[0]}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-[#e13a7a] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#6d217f] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaEye />
                    View Details
                  </motion.button>
                  
                  {project.links && project.links.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#e13a7a] hover:text-white transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links[0].url, '_blank');
                      }}
                    >
                      <FaExternalLinkAlt />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#e13a7a] font-medium">{selectedProject.type}</span>
                  <span className="text-gray-500">{selectedProject.year}</span>
                </div>
                
                <div className="space-y-3">
                  {selectedProject.description.map((desc, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-gray-900 font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[#e13a7a] text-white rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="flex gap-4 pt-4">
                    {selectedProject.links.map(link => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-[#e13a7a] text-white rounded-lg font-medium hover:bg-[#6d217f] transition-colors duration-300"
                      >
                        {link.label === 'GitHub' ? <FaGithub /> : <FaExternalLinkAlt />}
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase; 