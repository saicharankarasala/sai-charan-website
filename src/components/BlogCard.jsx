import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ post, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="group flex flex-col overflow-hidden"
    style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
    }}
  >
    {/* Image */}
    <div className="overflow-hidden aspect-[16/9] flex-shrink-0">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-4">
        {post.category && (
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-0.5"
            style={{
              background: 'rgba(45,212,191,0.08)',
              border: '1px solid rgba(45,212,191,0.18)',
              color: 'var(--accent)',
            }}
          >
            {post.category}
          </span>
        )}
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
      </div>

      <h3
        className="text-lg font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-[var(--accent)]"
        style={{ color: 'var(--text)' }}
      >
        {post.title}
      </h3>

      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-muted)' }}>
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
        style={{ color: 'var(--accent)' }}
      >
        Read article
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowRight className="text-xs" />
        </motion.span>
      </Link>
    </div>
  </motion.div>
);

export default BlogCard;
