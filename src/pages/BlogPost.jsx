import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import mermaid from "mermaid";
import { Helmet } from "react-helmet-async";

const shareLinks = (title, url) => [
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    )
  },

  {
    name: "GitHub",
    href: `https://github.com/yourusername`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    )
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.19c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.451-4.437 9.885-9.888 9.885m8.413-18.297a11.815 11.815 0 00-8.413-3.488c-6.533 0-11.85 5.317-11.853 11.852a11.82 11.82 0 001.606 6.018l-1.693 6.179a1 1 0 00.991 1.263c.084 0 .168-.01.252-.031l6.307-1.654a11.822 11.822 0 005.39 1.354h.005c6.533 0 11.85-5.317 11.853-11.852a11.82 11.82 0 00-3.489-8.491"/></svg>
    )
  },
  {
    name: "Gmail",
    href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-6.065v10.5c0 .828.672 1.5 1.5 1.5h13c.828 0 1.5-.672 1.5-1.5v-10.5l-8 6.065zm8-8.065h-16c-.828 0-1.5.672-1.5 1.5v.765l9 6.823 9-6.823v-.765c0-.828-.672-1.5-1.5-1.5zm-16 2.236v-.236c0-.276.224-.5.5-.5h15c.276 0 .5.224.5.5v.236l-8 6.065-8-6.065z"/></svg>
    )
  },
  {
    name: "Threads",
    href: `https://www.threads.net/intent/post?text=${encodeURIComponent(title + ' ' + url)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 50 50"><path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 44C13.4 46 4 36.6 4 25S13.4 4 25 4s21 9.4 21 21-9.4 21-21 21zm0-38c-9.4 0-17 7.6-17 17s7.6 17 17 17 17-7.6 17-17-7.6-17-17-17zm0 32c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-28c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 24c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"/></svg>
    )
  },
  {
    name: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
    )
  },

  {
    name: "Messages",
    href: `sms:?body=${encodeURIComponent(title + ' ' + url)}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4C2.897 2 2 2.897 2 4v20l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H5.172L4 17.172V4h16v12z"/></svg>
    )
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const [feedback, setFeedback] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const articleRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  // Extract headings for TOC after article is rendered
  useEffect(() => {
    if (!articleRef.current) return;
    const headings = Array.from(
      articleRef.current.querySelectorAll("h2, h3")
    ).map((el) => {
      // Generate a safe ID by removing special characters
      let safeId = el.id || el.textContent.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-").toLowerCase();
      if (!el.id) el.id = safeId;
      return {
        id: el.id,
        text: el.textContent,
        level: el.tagName === "H2" ? 2 : 3,
      };
    });
    setToc(headings);
  }, [post.content]);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      const headings = Array.from(
        articleRef.current.querySelectorAll("h2, h3")
      );
      let lastId = null;
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 120) {
          lastId = heading.id;
        }
      }
      setActiveId(lastId);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  // Professional TOC label mapping
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
    "🙌 Want to Build Your Own?": "Build Your Own"
  };

  // Smooth scroll handler for TOC links
  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -32; // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Update hash in URL without jumping
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  if (!post) return <div className="p-8 text-center">Post not found.</div>;

  return (
    <div className="min-h-screen bg-white font-sans flex justify-center">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content="React Portfolio, Tailwind CSS, Developer Portfolio, Venkat Sai Charan, Vite, Framer Motion, Web Development" />
        <meta name="author" content={post.author?.name || "Venkat Sai Charan Karasala"} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

      </Helmet>
      {/* Fixed Social Bar (Desktop only) */}
      <div className="hidden lg:flex flex-col items-center gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-30">
        {shareLinks(post.title, url).map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 rounded-full p-3 shadow transition-colors"
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <div className="w-px h-12 bg-gray-200 mt-2" />
      </div>
      {/* Sticky TOC (Desktop only) */}
      {toc.length > 1 && (
        <nav className="hidden lg:block fixed right-4 top-24 w-48 max-w-xs z-30">
          <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-3 sticky top-24">
            <div className="font-bold text-gray-800 mb-2 text-base">On this page</div>
            <ul className="space-y-0.5">
              {toc.filter(h => h.level === 2).map((h, idx) => {
                // Remove any leading number and dot from the heading text for TOC
                const cleanText = (tocLabelMap[h.text] || h.text).replace(/^[0-9]+\.\s*/, "");
                return (
                  <li key={h.id} className="ml-0" style={{listStyle: 'none'}}>
                    <a
                      href={`#${h.id}`}
                      onClick={e => handleTocClick(e, h.id)}
                      className={`block px-2 py-1 rounded transition text-gray-700 hover:text-[#e13a7a] hover:bg-pink-50 ${activeId === h.id ? "bg-pink-100 text-[#e13a7a]" : ""} text-sm font-medium`}
                    >
                      {`${idx + 1}. ${cleanText}`}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
      <div className="max-w-4xl w-full py-12 px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#e13a7a] font-medium">Home</Link>
            <span className="mx-1">&gt;</span>
            <Link to="/blog" className="hover:text-[#e13a7a] font-medium">Blog</Link>
            <span className="mx-1">&gt;</span>
            <span className="text-gray-700 font-semibold truncate max-w-xs" title={post.title}>{post.title}</span>
          </nav>
          <Link to="/blog" className="text-pink-600 font-semibold hover:underline mb-8 inline-block text-base">&larr; Back to Blog</Link>
          <img src={post.image} alt={post.title + ' preview'} loading="lazy" className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8" />
          <div className="mb-6 flex items-center gap-4">
            {post.category && (
              <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            )}
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">{post.title}</h1>
          <article ref={articleRef} className="prose prose-lg lg:prose-xl prose-headings:text-gray-900 max-w-none leading-relaxed text-gray-900" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Feedback Widget */}
          <div className="mt-12 flex flex-col items-center">
            <div className="text-lg font-semibold mb-3 text-gray-800">
              Was this helpful?
            </div>
            {feedback === null ? (
              <div className="flex gap-6">
                <button
                  onClick={() => setFeedback("yes")}
                  className="text-2xl px-5 py-2 rounded-full bg-green-50 hover:bg-green-100 border border-green-200 transition"
                  aria-label="Helpful"
                >
                  👍
                </button>
                <button
                  onClick={() => setFeedback("no")}
                  className="text-2xl px-5 py-2 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 transition"
                  aria-label="Not Helpful"
                >
                  👎
                </button>
              </div>
            ) : (
              <div className="mt-2 text-green-600 font-medium">
                Thank you for your feedback!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 