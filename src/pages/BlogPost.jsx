import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import mermaid from "mermaid";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";

const shareLinks = (title, url) => [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: `https://github.com/KVSC1511`,
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  },
  {
    name: "Gmail",
    icon: FaEnvelope,
    href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
];

const tocLabelMap = {
  "🚀 Building My Portfolio with React & Tailwind: A Developer's Journey": "Introduction",
  "🧱 Why I Chose React + Tailwind": "Why React & Tailwind",
  "✨ Features That Set It Apart": "Key Features",
  "Site Architecture": "Site Architecture",
  "📂 Project Sections Built with Purpose": "Project Sections",
  "🛠️ Tech Stack": "Tech Stack",
  "Tech Stack Overview": "Tech Stack Overview",
  "🧠 Lessons Learned": "Lessons Learned",
  "📣 Takeaway for Employers": "Takeaway for Employers",
  "🙌 Want to Build Your Own?": "Build Your Own",
  "I. Introduction: It's Not Just for Robots Anymore!": "Introduction",
  "II. Back to the Future: A Whistle-Stop Tour of AI's Past": "AI's History",
  "III. Your Daily Dose of AI: What's Happening Right Now?": "AI Today",
  "IV. The Great AI Debate: Excited, Scared, or Just Confused?": "AI Debate",
  "V. The Elephant in the Room: AI's Big Controversies & Ethical Headaches": "Controversies",
  "VI. Peeking into the Future: What's Next for Our AI Journey?": "Future of AI",
  "VII. Conclusion: Steering the AI Ship": "Conclusion",
};

const truncate = (str, n = 30) => str.length <= n ? str : str.substring(0, n) + '…';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [feedback, setFeedback] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [sidebarTop, setSidebarTop] = useState('50%');
  const articleRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'dark', securityLevel: 'loose' });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    if (!articleRef.current) return;
    const headings = Array.from(articleRef.current.querySelectorAll("h2, h3")).map(el => {
      let safeId = el.id || el.textContent.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-").toLowerCase();
      if (!el.id) el.id = safeId;
      return { id: el.id, text: el.textContent, level: el.tagName === "H2" ? 2 : 3 };
    });
    setToc(headings);
  }, [post?.content]);

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      const headings = Array.from(articleRef.current.querySelectorAll("h2, h3"));
      let lastId = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 120) lastId = h.id;
      }
      setActiveId(lastId);

      if (sidebarRef.current) {
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const sidebarRect = sidebarRef.current.getBoundingClientRect();
          const sidebarH = sidebarRect.height;
          if (sidebarRect.top + sidebarH >= footerRect.top - 20) {
            setSidebarTop(`${Math.min(footerRect.top - sidebarH - 20, window.innerHeight / 2)}px`);
          } else {
            setSidebarTop('50%');
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 32, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <p style={{ color: 'var(--text-muted)' }}>Post not found.</p>
    </div>
  );

  const links = shareLinks(post.title, url);

  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Fixed Social Bar (desktop) ────────────────────────────────── */}
      <div
        ref={sidebarRef}
        className="hidden lg:flex flex-col items-center gap-3 fixed left-6 z-30 transition-all duration-300"
        style={{
          top: sidebarTop,
          transform: typeof sidebarTop === 'string' && sidebarTop.includes('%') ? 'translateY(-50%)' : 'none',
        }}
      >
        {links.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${link.name}`}
            className="w-9 h-9 flex items-center justify-center transition-all duration-200"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <link.icon className="text-sm" />
          </a>
        ))}
        <div className="w-px h-10 mt-1" style={{ background: 'var(--border)' }} />
      </div>

      {/* ── Sticky TOC (desktop) ──────────────────────────────────────── */}
      {toc.length > 1 && (
        <nav
          className="hidden lg:block fixed right-4 w-52 z-30"
          style={{ top: '88px', maxHeight: 'calc(100vh - 200px)' }}
        >
          <div
            className="p-4"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              maxHeight: 'calc(100vh - 200px)',
              overflowY: 'auto',
            }}
          >
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              On this page
            </div>
            <ul className="space-y-1">
              {toc.filter(h => h.level === 2).map((h, idx) => {
                let label = tocLabelMap[h.text] || h.text;
                label = label.replace(/^[IVX]+\.\s*/, "").replace(/^[0-9]+\.\s*/, "");
                label = label.replace(/[🚀🧱✨📂🛠️🧠📣🙌]/g, "").trim();
                if (label.length > 28) label = truncate(label, 28);
                return (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      onClick={e => handleTocClick(e, h.id)}
                      className="block py-1 px-2 text-xs font-medium transition-colors duration-150"
                      style={{
                        color: activeId === h.id ? 'var(--accent)' : 'var(--text-muted)',
                        borderLeft: `2px solid ${activeId === h.id ? 'var(--accent)' : 'transparent'}`,
                      }}
                      title={h.text}
                    >
                      {`${idx + 1}. ${label}`}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}

      {/* ── Main article ──────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-8">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-10 transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <FaArrowLeft className="text-xs" />
          Back to Blog
        </Link>

        {/* Cover image */}
        <div className="w-full aspect-[16/9] overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6">
          {post.category && (
            <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5"
              style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.18)', color: 'var(--accent)' }}>
              {post.category}
            </span>
          )}
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="font-extrabold leading-tight mb-10"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--text)' }}>
          {post.title}
        </h1>

        {/* Article content */}
        <article
          ref={articleRef}
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Feedback */}
        <div
          className="mt-16 pt-10 flex flex-col items-center"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--text-muted)' }}>
            Was this helpful?
          </p>
          {feedback === null ? (
            <div className="flex gap-4">
              {[{ emoji: '👍', val: 'yes' }, { emoji: '👎', val: 'no' }].map(b => (
                <button
                  key={b.val}
                  onClick={() => setFeedback(b.val)}
                  className="text-2xl px-6 py-3 transition-all duration-200"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  {b.emoji}
                </button>
              ))}
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-sm"
              style={{ color: 'var(--accent)' }}
            >
              Thank you for your feedback!
            </motion.p>
          )}
        </div>

        {/* Mobile share row */}
        <div className="flex lg:hidden flex-wrap justify-center gap-3 mt-8">
          {links.map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              <link.icon className="text-sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
