import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaTimes } from 'react-icons/fa';

/**
 * ProjectShowcase — Cinematic project cards with hover overlay + modal
 *
 * Cards:
 * - Glass card with image (scales on hover)
 * - Overlay slides up from bottom on hover (CSS group-hover)
 * - Tech badges as colored pills
 * - Filter pills with gradient active state
 *
 * Modal:
 * - Dark glass modal with full description
 * - Tech stack badges
 */
const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter]                   = useState('All');
  const [sortBy, setSortBy]                   = useState('Newest');

  const categories = ['All', ...new Set(projects.map((p) => p.type))];

  const filtered = projects
    .filter((p) => filter === 'All' || p.type === filter)
    .sort((a, b) => {
      if (sortBy === 'Newest') return b.year - a.year;
      if (sortBy === 'Oldest') return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="py-8">
      {/* ── Filter pills ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 justify-center mb-12 items-center"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? 'text-white shadow-glow-blue'
                : 'glass-card text-[var(--text-muted)] hover:text-[var(--text)] hover:border-blue-500/40'
            }`}
            style={
              filter === cat
                ? { background: 'linear-gradient(135deg, var(--blue), var(--purple))' }
                : {}
            }
          >
            {cat}
          </motion.button>
        ))}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] border transition-colors duration-200"
          style={{
            background: 'var(--bg-surface)',
            borderColor: 'var(--border)',
            outline: 'none',
          }}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
          <option value="Alphabetical">A – Z</option>
        </select>
      </motion.div>

      {/* ── Projects Grid ── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass-card gradient-border rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
              whileHover={{ y: -6, boxShadow: '0 0 40px rgba(59,130,246,0.15)' }}
            >
              {/* Image area */}
              <div className="relative overflow-hidden"
                style={{ height: '180px', background: 'rgba(255,255,255,0.02)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Slide-up overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
                  style={{
                    background: 'linear-gradient(to top, rgba(3,7,18,0.95), rgba(3,7,18,0.7) 60%, transparent)',
                  }}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Year & type badges */}
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(59,130,246,0.2)', color: 'var(--blue)', border: '1px solid rgba(59,130,246,0.3)' }}>
                  {project.year}
                </span>
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(139,92,246,0.2)', color: 'var(--purple)', border: '1px solid rgba(139,92,246,0.3)' }}>
                  {project.type}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[var(--text)] mb-2 line-clamp-2 leading-snug
                  group-hover:text-[var(--blue)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2 flex-1 leading-relaxed">
                  {project.description[0]}
                </p>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <button
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
                    style={{ background: 'linear-gradient(135deg, var(--blue), var(--purple))' }}
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                  >
                    <FaEye /> View Details
                  </button>

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, boxShadow: '0 0 15px var(--glow-blue)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub: ${project.title}`}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ border: '1px solid rgba(59,130,246,0.2)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[var(--blue)] tracking-widest uppercase mb-1 block">
                    {selectedProject.type} · {selectedProject.year}
                  </span>
                  <h2 className="text-xl font-bold text-[var(--text)]">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 glass-card rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors ml-4 flex-shrink-0"
                  aria-label="Close"
                >
                  <FaTimes className="text-xs" />
                </button>
              </div>

              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-52 object-contain p-4"
                />
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {selectedProject.description.map((d, i) => (
                  <p key={i} className="text-sm text-[var(--text-muted)] leading-relaxed">{d}</p>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-widest mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {selectedProject.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
                  >
                    <FaExternalLinkAlt className="text-xs" /> {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;
