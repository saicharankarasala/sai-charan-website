import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import GradientOrb from "../components/GradientOrb";
import ScrollBand from "../components/ScrollBand";
import useTextScramble from "../hooks/useTextScramble";
import { FaSearch } from "react-icons/fa";

const ScrambleWord = ({ text, color, stroke, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [triggered, setTriggered] = React.useState(false);
  React.useEffect(() => { if (inView) setTimeout(() => setTriggered(true), delay); }, [inView, delay]);
  const display = useTextScramble(text, triggered);
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        className="block font-extrabold"
        style={{ fontSize: 'clamp(5rem, 16vw, 13rem)', color: color || 'var(--text)', WebkitTextStroke: stroke ? '1.5px var(--text)' : 'none', letterSpacing: '-0.04em', lineHeight: 0.88 }}
      >
        {display}
      </motion.div>
    </div>
  );
};

const BlogLanding = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <GradientOrb color="rgba(45,212,191,0.1)" size="600px" className="fixed top-0 right-[-80px] opacity-60 pointer-events-none" />
      <GradientOrb color="rgba(167,139,250,0.08)" size="500px" className="fixed bottom-0 left-[-80px] pointer-events-none" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.3em] uppercase mb-8"
              style={{ color: 'var(--accent)' }}
            >
              Writing & Thoughts
            </motion.p>

            <div>
              <h1 className="font-extrabold" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Writing &amp;<br /><span style={{ color: 'var(--accent)' }}>Thoughts</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Deep dives on web development, engineering, cloud, and the things I learn
              building real systems. No fluff.
            </motion.p>
          </div>

          {/* Right — topic chips + article count */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Topics Covered</p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Cloud / AWS', 'React', 'Python', 'Data Engineering', 'AI & ML', 'DevOps', 'System Design', 'Tutorials'].map(topic => (
                  <span key={topic} className="px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
              {[
                { num: '5+', label: 'Articles' },
                { num: '9', label: 'Topics' },
                { num: '∞', label: 'Ideas' },
              ].map(item => (
                <div key={item.label} className="py-6 text-center" style={{ background: 'var(--bg)' }}>
                  <div className="font-extrabold text-2xl mb-1" style={{ color: 'var(--accent)' }}>{item.num}</div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL BAND ─────────────────────────────────────────────────── */}
      <ScrollBand text="WEB DEVELOPMENT · ENGINEERING · CLOUD · REACT · PYTHON · AI · SOFTWARE ARCHITECTURE · DEVOPS · TUTORIALS · THOUGHTS · " reverse />

      {/* ── SEARCH ────────────────────────────────────────────────────── */}
      <section
        className="px-6 lg:px-16 max-w-7xl mx-auto"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-4 py-5">
          <FaSearch style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.85rem' }} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-transparent text-sm outline-none"
            style={{
              color: 'var(--text)',
              fontFamily: 'inherit',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-xs font-semibold flex-shrink-0"
              style={{ color: 'var(--text-muted)' }}
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* ── POSTS GRID ────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto py-16 pb-28">
        {filteredPosts.length > 0 ? (
          <div className="grid gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ background: 'var(--border)' }}>
            {filteredPosts.map((post, i) => (
              <div key={post.slug} style={{ background: 'var(--bg)' }}>
                <BlogCard post={post} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>No articles found.</p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Try a different search term.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default BlogLanding;
