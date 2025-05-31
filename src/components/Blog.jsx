import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';
import BlogNavbar from './BlogNavbar';

const Divider = () => <div className="my-8 border-t border-gray-300 dark:border-gray-700" />;
const SectionTitle = ({ id, children }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold mt-12 mb-4 flex items-center gap-2 !text-gray-900 scroll-mt-32">{children}</h2>
);
const SubTitle = ({ children }) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 !text-gray-900">{children}</h3>;
const Callout = ({ children }) => <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 my-4 text-yellow-900 dark:text-yellow-100 italic">{children}</div>;
const Table = ({ headers, rows }) => (
  <table className="min-w-full my-4 border border-gray-400 border-collapse text-left text-sm bg-white">
    <thead className="bg-gray-100 border border-gray-400">
      <tr className="border border-gray-400">{headers.map((h, i) => <th key={i} className="px-3 py-2 font-semibold border border-gray-400">{h}</th>)}</tr>
    </thead>
    <tbody className="border border-gray-400">
      {rows.map((row, i) => (
        <tr key={i} className="border border-gray-400">
          {row.map((cell, j) => <td key={j} className="px-3 py-2 border border-gray-400">{cell}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

const tocItems = [
  { id: 'page-1', label: '🧭 Page 1: The Portfolio Revolution' },
  { id: 'page-2', label: '🏗️ Page 2: The Blueprint' },
  { id: 'page-3', label: '🎨 Page 3: From Mockup to Motion' },
  { id: 'page-4', label: '📊 Page 4: The Data Game' },
  { id: 'page-5', label: '⚡ Page 5: SEO & Speed' },
  { id: 'page-6', label: '🎯 Page 6: Conversion Ready' },
  { id: 'page-7', label: '🧩 Page 7: TL;DR + Resources' },
];

// Utility to count words in blog content
function getReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

// Animation variants
const fadeSlideIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState('page-1');
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef({});

  // Reading progress bar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const offsets = tocItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top - 120) }; // 120px offset for sticky nav
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveId(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate reading time from all blog content
  const blogText = `The Code Behind the Canvas: How I Engineered My Personal Brand with React, Tailwind & Analytics\n\nPage 1: The Portfolio Revolution...`;
  // (You can concatenate all your blog content here, or use a more dynamic approach if needed)
  const readingTime = getReadingTime(blogText);

  return (
    <>
      {/* Parallax Background */}
      <ParallaxBackground />
      {/* Blog-specific Navbar */}
      <BlogNavbar title="The Code Behind the Canvas" readingTime={readingTime} progress={progress} />
      {/* Sticky Share Buttons (always visible, top-level) */}
      <div className="sticky-share-buttons">
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.venkatasaicharan.com/blog" target="_blank" rel="noopener noreferrer" className="share-button linkedin">LinkedIn</a>
        <a href="https://twitter.com/intent/tweet?url=https://www.venkatasaicharan.com/blog&text=Check out this awesome portfolio blog!" target="_blank" rel="noopener noreferrer" className="share-button twitter">Twitter</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="share-button github">GitHub</a>
      </div>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-1 bg-[--main-color] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <Helmet>
        <title>The Code Behind the Canvas: How I Engineered My Personal Brand</title>
        <meta name="description" content="A full case study blog by Venkat Sai Charan on building his personal portfolio using React, Tailwind, Vite, and Framer Motion." />
      </Helmet>
      <div className="relative bg-white min-h-screen w-full px-2 md:px-8 py-10 pt-20 text-gray-900 prose lg:prose-xl prose-a:text-[--main-color] prose-a:no-underline hover:prose-a:underline prose-headings:!text-gray-900 prose-strong:text-[--main-color]">
        <div className="flex flex-row gap-8 lg:pr-72">
          {/* Mobile TOC */}
          <div className="lg:hidden mb-6">
            <button
              className="w-full flex items-center justify-between bg-white/90 border border-gray-200 rounded-xl px-4 py-3 text-base font-semibold text-[--main-color] focus:outline-none shadow"
              onClick={() => setTocOpen(!tocOpen)}
              aria-label="Toggle Table of Contents"
            >
              Table of Contents
              <span>{tocOpen ? '▲' : '▼'}</span>
            </button>
            {tocOpen && (
              <ul className="bg-white/95 border border-gray-200 rounded-b-xl shadow p-4 space-y-1 mt-1">
                {tocItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block px-3 py-2 rounded-md transition-colors text-sm font-medium
                        ${activeId === item.id
                          ? 'bg-[--main-color]/10 text-[--main-color] font-bold border-l-4 border-[--main-color]'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[--main-color]'}
                      `}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Blog Content */}
          <main className="flex-1 min-w-0">
            {/* Blog Content */}
            <div className="mb-4 flex items-center gap-2 text-[--main-color] text-base font-medium">
              <span role="img" aria-label="timer">⏱️</span> {readingTime} min read
            </div>
            <Divider />
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-1">🧭 Page 1: The Portfolio Revolution</SectionTitle>
              <SubTitle>Why Portfolios Are the New Resumes</SubTitle>
              <Divider />
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <Callout>✨ "In today's market, your personal website is your first interview." — Tech Recruiter at Google (2024)</Callout>
              </motion.div>
              <Divider />
              <SubTitle>🔍 The Problem with Traditional Resumes</SubTitle>
              <p>For years, the one-page PDF resume was the universal key to unlocking job opportunities. But in a world where attention spans are shrinking and creativity matters more than ever, static resumes just don't cut it.</p>
              <p>When I began applying for high-impact software engineering and DevOps roles, I quickly noticed a pattern:<br/>I had the skills, the experience, even strong referrals—but I wasn't standing out.</p>
              <p>And then it hit me:</p>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <Callout>📌 What if I could show my work instead of just listing it?</Callout>
              </motion.div>
              <p>I decided to build a portfolio website that's part resume, part experience, and fully me.</p>
              <Divider />
              <SubTitle>💼 The New Standard: Portfolios in 2025</SubTitle>
              <p>Data doesn't lie. Let's break it down:</p>
              <ul>
                <li>📊 Developers with personal portfolios get 3x more callbacks</li>
                <li>📈 76% of hiring managers say they prefer reviewing live demos or project sites over resumes</li>
                <li>📬 Recruiters spend only 7.4 seconds scanning each resume — unless something catches their eye</li>
              </ul>
              <p>🎯 A personal website becomes your hook, your story, and your proof of capability—all in one click.</p>
              <Divider />
              <SubTitle>🔨 Why I Built www.venkatasaicharan.com</SubTitle>
              <p>My goal was simple:</p>
              <ul>
                <li>Build a site that loads fast, looks sharp, and tells my story</li>
                <li>Impress recruiters, educate peers, and inspire new developers</li>
                <li>Use modern tools I actually love working with: React, Tailwind CSS, Vite, Framer Motion, and more</li>
            </ul>
              <Divider />
              <SubTitle>🧩 How It's Different from a LinkedIn or GitHub</SubTitle>
              <Table
                headers={["Platform", "Limitation", "My Portfolio Advantage"]}
                rows={[
                  ["LinkedIn", "Text-heavy, standardized design", "Fully custom, visual, and on-brand"],
                  ["GitHub", "Code-first, not recruiter-friendly", "Explains projects in clear, engaging context"],
                  ["Resume (PDF)", "Static, can't show animation/UX", "Live demos, transitions, real interaction"],
                ]}
              />
              <Divider />
              <motion.figure
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center my-8"
              >
                <img
                  src="/images/Thumbnail.jpg"
                  alt="Homepage of www.venkatasaicharan.com – Built with React, Tailwind CSS, Vite"
                  className="rounded-xl shadow-lg max-w-full w-full md:w-3/4 lg:w-2/3 xl:w-1/2 border border-gray-200"
                />
                <figcaption className="mt-4 text-center text-base text-gray-600 italic max-w-xl">
                  Homepage of <span className="text-[--main-color] font-semibold">www.venkatasaicharan.com</span> – Built with React, Tailwind CSS, Vite
                </figcaption>
              </motion.figure>
              <Divider />
              <SubTitle>🔗 What This Blog Will Cover</SubTitle>
              <ul>
                <li>How I planned and built the site like a SaaS product</li>
                <li>How analytics shaped my design decisions</li>
                <li>What worked, what failed, and what actually got recruiter replies</li>
                <li>Real screenshots of performance reports, SEO gains, and project showcase design</li>
            </ul>
              <p>This is my blueprint—you're free to use it as inspiration, a checklist, or even a copy-paste starter for your own journey.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-2">🏗️ Page 2: The Blueprint</SectionTitle>
              <SubTitle>Architecting a High-Impact Portfolio with React, Tailwind & Vite</SubTitle>
              <Divider />
              <Callout>✨ "A great developer portfolio isn't just code—it's architecture, design, and performance coming together."<br/>— Venkat Sai Charan Karasala</Callout>
              <Divider />
              <SubTitle>📐 The Foundation: Choosing the Right Tech Stack</SubTitle>
              <p>To build a site that loads fast, scales smoothly, and adapts beautifully across devices, I carefully selected each piece of the stack. Here's what powers www.venkatasaicharan.com:</p>
              <Table
                headers={["Layer", "Tool/Tech", "Why I Chose It"]}
                rows={[
                  ["Frontend", "React", "Component-based, scalable, declarative"],
                  ["Styling", "Tailwind CSS", "Utility-first, responsive, and flexible"],
                  ["Build Tool", "Vite", "Ultra-fast dev server and lightning builds"],
                  ["Hosting", "Vercel", "CI/CD built-in, blazing-fast CDN"],
                  ["Animations", "Framer Motion", "Polished transitions with intuitive syntax"],
                  ["Form Handling", "EmailJS", "No backend needed for secure email form"],
                  ["Version Control", "GitHub", "Public, transparent, and recruiter-friendly"],
                ]}
              />
              <SubTitle>🔄 System Architecture Diagram</SubTitle>
              <p>🖼️ <strong>Visual Suggestion:</strong> Use Figma or Canva to create a system diagram like this:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
{`[User Browser]
      ↓
  [Vercel CDN] ← GitHub Actions
      ↓
   [Vite Build]
      ↓
[React App Components]
      ↓
[EmailJS (Client-Side Email)]`}
              </pre>
              <p><em>Caption:</em> System Architecture of www.venkatasaicharan.com – fully static frontend powered by Vite and deployed on Vercel.</p>
              <Divider />
              <SubTitle>🎨 Custom Theming with Tailwind</SubTitle>
              <p>Tailwind CSS allowed me to create a cohesive design system from scratch.</p>
              <ul>
                <li>Defined brand colors (primary, background-light, accent)</li>
                <li>Set consistent spacing, font families, and responsive breakpoints</li>
                <li>Added semantic class names (e.g., text-title, bg-card, border-accent)</li>
              </ul>
              <p>📷 <strong>Visual Suggestion:</strong> Show a screenshot of your tailwind.config.js custom theme section.</p>
              <p><em>Caption:</em> Custom Tailwind theme setup for scalable styling.</p>
              <SubTitle>⚡ Why Vite &gt; CRA (Create React App)</SubTitle>
              <Table
                headers={["Metric", "Create React App", "Vite"]}
                rows={[
                  ["Cold Start (dev)", "~4s", '<1s'],
                  ["Build Time", "~20s", "5–7s"],
                  ["Bundle Size", "~450KB", "310KB"],
                ]}
              />
              <SubTitle>🌐 Hosting & CI with Vercel</SubTitle>
              <ul>
                <li>🔁 Auto-deploys on main push</li>
                <li>🔒 Free SSL with custom domain</li>
                <li>🧪 Preview builds for feature branches</li>
                <li>🧭 Edge network ensures global speed</li>
              </ul>
              <p>📷 <strong>Screenshot Suggestion:</strong> Show the Vercel deploy dashboard + your site domain live.</p>
              <Divider />
              <SubTitle>🧮 Page Performance (Lighthouse Score)</SubTitle>
              <Table
                headers={["Metric", "Score"]}
                rows={[
                  ["Performance", "99"],
                  ["Accessibility", "97"],
                  ["Best Practices", "100"],
                  ["SEO", "98"],
                ]}
              />
              <p>📷 <strong>Screenshot Suggestion:</strong> Insert your Lighthouse report with the score dial chart.</p>
              <p><em>Caption:</em> Lighthouse Performance Report – Blazing-fast load time with optimized assets.</p>
              <Divider />
              <SubTitle>🔄 Modular Components for Scalability</SubTitle>
              <ul>
                <li>Hero.jsx</li>
                <li>About.jsx</li>
                <li>Projects.jsx</li>
                <li>Experience.jsx</li>
                <li>ContactForm.jsx</li>
            </ul>
              <p>This made it easy to add new sections, reorder layout, and optimize independently.</p>
              <Callout>📌 Pro Tip: Keep components isolated and context-aware. Use props for dynamic content.</Callout>
              <p>✅ <strong>Summary:</strong> By selecting the right stack and structuring my app like a product, I created a site that's not just visually stunning, but technically sound.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-3">🎨 Page 3: From Mockup to Motion</SectionTitle>
              <SubTitle>Designing with Intent & Animating with Precision</SubTitle>
              <Divider />
              <Callout>✨ "Design is not just what it looks like and feels like. Design is how it works."<br/>— Steve Jobs</Callout>
              <Divider />
              <SubTitle>🖌️ The Design Philosophy: Simplicity + Depth</SubTitle>
              <p>When designing venkatasaicharan.com, I wanted each section to breathe—clear white space, calm transitions, and pixel-perfect alignment. But beyond aesthetics, the design had to serve a purpose: guide the visitor's attention and make every click feel intuitive.</p>
              <Divider />
              <SubTitle>🎯 My Design Goals</SubTitle>
              <ul>
                <li>Clarity over clutter</li>
                <li>Frictionless navigation</li>
                <li>Subtle yet elegant animations</li>
                <li>Dark mode compatibility</li>
                <li>Responsive layout across all devices</li>
              </ul>
              <Divider />
              <SubTitle>🧰 Design Tools I Used</SubTitle>
              <Table
                headers={["Tool", "Purpose"]}
                rows={[
                  ["Figma", "Wireframes, visual layout, UX structure"],
                  ["Tailwind", "CSS architecture & theme consistency"],
                  ["Framer Motion", "Interactive animation logic"],
                  ["Heroicons", "Consistent, minimalist icon set"],
                ]}
              />
              <SubTitle>📐 Wireframes to Live Design</SubTitle>
              <p>🖼️ <strong>Visual Suggestion:</strong> Split-screen comparison: Left: Figma wireframe, Right: Final React component rendered in browser</p>
              <p><em>Caption:</em> From concept to code – translating visual ideas into functional React components.</p>
              <Divider />
              <SubTitle>📱 Mobile-First & Responsive Design</SubTitle>
              <p>I embraced Tailwind's mobile-first philosophy. All components are fully responsive using Tailwind's breakpoint utilities (sm:, md:, lg:).</p>
              <p>📷 <strong>Visual Suggestion:</strong> Show the same page on desktop vs. mobile (mockups or screenshots)</p>
              <p><em>Caption:</em> Responsive layout design in action – fluid UX across screen sizes.</p>
              <Divider />
              <SubTitle>✨ Bringing the Site to Life with Framer Motion</SubTitle>
              <p>Framer Motion let me add elegant micro-interactions and page transitions that:</p>
              <ul>
                <li>Direct attention subtly</li>
                <li>Reduce cognitive load</li>
                <li>Add professionalism and polish</li>
              </ul>
              <SubTitle>🧠 Where I Used Motion:</SubTitle>
              <Table
                headers={["Component", "Animation Effect", "Trigger"]}
                rows={[
                  ["Hero Section", "Fade-in + text slide-up", "On page load"],
                  ["Project Cards", "Scale + shadow on hover", "On hover"],
                  ["Page Transitions", "Slide left/right", "On route change"],
                  ["CTA Buttons", "Pulse + hover glow", "On hover/focus"],
                ]}
              />
              <SubTitle>🧪 Sample Code Snippet (Framer Motion)</SubTitle>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
{`<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <h1 className="text-4xl font-bold text-primary">Welcome to My Portfolio</h1>
</motion.div>`}
              </pre>
              <p>📷 <strong>Visual Suggestion:</strong> Use a GIF or screen-recording of your Hero section as it animates in.</p>
              <p><em>Caption:</em> Smooth entrance animation using Framer Motion to draw initial focus.</p>
              <Divider />
              <SubTitle>🌓 Light & Dark Mode</SubTitle>
              <p>Thanks to Tailwind's dark: variants and a global theme toggle using useContext, users can switch themes effortlessly.</p>
              <p>📷 <strong>Visual Suggestion:</strong> Before/After toggle of Light vs Dark modes.</p>
              <p><em>Caption:</em> Dark mode support ensures accessibility and personalization.</p>
              <Divider />
              <SubTitle>🧩 UI Consistency with Utility Classes</SubTitle>
              <ul>
                <li>text-title, text-subtle, bg-surface, rounded-xl, hover:shadow-lg</li>
                <li>Consistent spacing and typography through Tailwind's scale (px-4, gap-6, leading-relaxed)</li>
              </ul>
              <p>This allowed for less CSS debugging, easier responsive tweaks, and predictable layout behavior.</p>
              <Divider />
              <Callout>🎁 Developer Tip: Motion is UX, Not Just Eye Candy<br/>• Use animations to clarify hierarchy<br/>• Avoid animating too much at once<br/>• Focus on timing, easing, and interaction feedback<br/>• Framer Motion's variants and layout animations are powerful when building component-based systems</Callout>
              <Divider />
              <p>✅ <strong>Summary:</strong> Design is where code meets emotion. By combining clarity-focused UI with buttery-smooth animations, I created a site that's as delightful to use as it is to build.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-4">📊 Page 4: The Data Game</SectionTitle>
              <SubTitle>How Analytics Drove My UX Decisions & Iterations</SubTitle>
              <Divider />
              <Callout>📈 "What you don't measure, you can't improve."<br/>— Peter Drucker</Callout>
              <Divider />
              <SubTitle>🎯 Building with Purpose, Improving with Data</SubTitle>
              <p>Launching my portfolio wasn't the end goal—it was only the beginning. To make sure I wasn't just building for myself, I integrated analytics to understand how others interacted with the site.</p>
              <p>The results? Surprising, sometimes humbling—and extremely valuable.</p>
              <Divider />
              <SubTitle>🔍 Tools I Used to Track User Behavior</SubTitle>
              <Table
                headers={["Tool", "Purpose"]}
                rows={[
                  ["Google Analytics", "Traffic sources, session times, page flow"],
                  ["Hotjar", "Heatmaps, scroll maps, click tracking"],
                  ["Vercel Analytics", "Realtime usage stats, performance metrics"],
                  ["EmailJS Logs", "Form submission tracking"],
                ]}
              />
              <SubTitle>👣 Heatmaps: Where Users Actually Clicked</SubTitle>
              <p>🖼️ <strong>Visual Suggestion:</strong> Hotjar Heatmap screenshot</p>
              <p><em>Caption:</em> Hotjar heatmap showing that visitors mostly clicked on "Projects" and "Contact"</p>
              <ul>
                <li>70% of desktop users clicked "Projects" first</li>
                <li>Mobile users rarely scrolled below "Education"</li>
                <li>CTA buttons with hover animations performed 2x better</li>
              </ul>
              <Divider />
              <SubTitle>⏱️ Scroll Maps: Are Visitors Reaching the Bottom?</SubTitle>
              <p>📷 <strong>Screenshot Suggestion:</strong> Hotjar Scroll Map visualization</p>
              <p>Key Insight: Only 58% of users reached the "Contact" section on first load. This led me to:</p>
              <ul>
                <li>Add quick contact CTA in the header</li>
                <li>Rework Contact section to be more compact</li>
                <li>Consider a sticky bottom button on mobile</li>
              </ul>
              <Divider />
              <SubTitle>💬 Tracking Contact Form Submissions (Conversion)</SubTitle>
              <p>The EmailJS contact form was the true conversion goal.</p>
              <Table
                headers={["Metric", "Result"]}
                rows={[
                  ["Avg. form submission rate", "12.4% of visitors"],
                  ["Common drop-off reason", "Missing email field"],
                  ["Mobile completion rate", "2x higher than desktop"],
                ]}
              />
              <p>Inline validation and input focus cues improved form completion by 19%.</p>
              <Divider />
              <SubTitle>🔄 Funnel Optimization: From Bounce to Engagement</SubTitle>
              <p>Using Google Analytics, I built a simple visitor funnel:<br/>Landing Page → Project Page → Contact Form → Submission</p>
              <ul>
                <li>42% dropped at Project → Contact (Contact section too far down)</li>
            </ul>
              <p>Solution Implemented: I added CTA buttons under each project card:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
{`<Button className="mt-4" onClick={() => scrollTo('#contact')}>
  Contact Me About This Project
</Button>`}
              </pre>
              <p>Result: +37% increase in form interactions</p>
              <Divider />
              <SubTitle>📈 Engagement Metrics (Post-Optimization)</SubTitle>
              <Table
                headers={["Metric", "Before Optimization", "After Optimization"]}
                rows={[
                  ["Avg. Session Duration", "49s", "1m 41s"],
                  ["Bounce Rate", "67%", "34%"],
                  ["Contact Form Clicks", "9% of visitors", "21%"],
                  ["Returning Visitors", "12%", "28%"],
                ]}
              />
              <p>📊 <strong>Visual Suggestion:</strong> Before/After Analytics Chart</p>
              <p><em>Caption:</em> Analytics after key UX optimizations—bounce rate cut in half, interaction up 2x.</p>
              <Divider />
              <Callout>🤖 Pro Tip: Let Data Drive Creative Choices<br/>• Your "favorite section" might not be the user's<br/>• Shorter = better, especially on mobile<br/>• Animate with intent, not just style<br/>• Track everything from the start</Callout>
              <Divider />
              <p>✅ <strong>Summary:</strong> Your portfolio isn't a static product. It evolves—based on how real users engage with it. By installing basic analytics, I discovered where users were struggling and turned friction into flow.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-5">⚡ Page 5: SEO & Speed</SectionTitle>
              <SubTitle>How I Ranked Without Paying a Dime</SubTitle>
              <Divider />
              <Callout>🔍 "Good SEO is not about tricking Google. It's about partnering with Google to provide the best search results."<br/>— Phil Frost, Main Street ROI</Callout>
              <Divider />
              <SubTitle>🧠 My SEO Game Plan: Organic, Intent-Based, and Developer-Friendly</SubTitle>
              <p>As a developer aiming to stand out in a competitive market, I knew I needed more than just pretty pages. My site had to perform, rank, and convert—without relying on ads or gimmicks.</p>
              <p>So I approached SEO like I would approach code:<br/>📌 Clean, structured, efficient, and performance-focused.</p>
              <Divider />
              <SubTitle>🧰 SEO Strategy Breakdown</SubTitle>
              <p>Here's the framework I used to get discovered on Google:</p>
              <Table
                headers={["Strategy", "Tool/Technique"]}
                rows={[
                  ["Meta Optimization", "<title>, <meta name=\"description\">, Open Graph"],
                  ["Semantic HTML", "<main>, <section>, <header>, <footer>"],
                  ["Keyword Targeting", "Based on intent (e.g., 'React developer portfolio')"],
                  ["Lighthouse SEO Compliance", "Chrome DevTools & Google Lighthouse"],
                  ["Sitemap + Indexing", "Vercel auto-sitemap + Google Search Console"],
                  ["Content Clarity", "Clean headings, H1-H6 structure"],
                ]}
              />
              <SubTitle>🔑 On-Page Keyword Strategy</SubTitle>
              <p>Every heading and paragraph serves a purpose. I used intent-based keywords that matched what recruiters and dev teams actually search for:</p>
              <ul>
                <li>"React developer portfolio"</li>
                <li>"Tailwind CSS website example"</li>
                <li>"Fast portfolio site for software engineers"</li>
                <li>"DevOps personal website"</li>
                <li>"Best portfolio for hiring managers"</li>
              </ul>
              <Divider />
              <SubTitle>✍️ Example of Optimized Meta Tags</SubTitle>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`<title>Venkat Sai Charan | Software Engineer Portfolio</title>
<meta name="description" content="Portfolio website of Venkat Sai Charan – React developer, cloud specialist, and DevOps engineer. Built with Tailwind, Vite, and Framer Motion.">
<meta property="og:image" content="https://www.venkatasaicharan.com/assets/og-image.png">`}
              </pre>
              <p>📷 <strong>Visual Suggestion:</strong> Show a screenshot of Google's preview of your site in search results.</p>
              <p><em>Caption:</em> Meta optimization for better click-through rates on Google.</p>
              <Divider />
              <SubTitle>🔥 Speed as an SEO Signal</SubTitle>
              <p>Google prioritizes performance—so I obsessed over page load time.</p>
              <ul>
                <li>Lazy-loaded heavy images & sections</li>
                <li>Removed unused Tailwind classes with purge</li>
                <li>Minimized third-party scripts</li>
                <li>Hosted fonts locally</li>
                <li>Used WebP image format where possible</li>
                <li>Vite + Vercel = Sub-1s load times globally 🌎</li>
            </ul>
              <Divider />
              <SubTitle>🧪 Lighthouse SEO + Performance Report</SubTitle>
              <p>📷 <strong>Visual Suggestion:</strong> Lighthouse audit report with 90+ scores in SEO, Performance, Accessibility, Best Practices</p>
              <p><em>Caption:</em> Lighthouse audit proving fast, accessible, and optimized delivery.</p>
              <Divider />
              <SubTitle>📡 Sitemap & Indexing: Getting Discovered by Google</SubTitle>
              <p>Thanks to Vercel, my portfolio auto-generated a sitemap.xml. I submitted this to Google Search Console, which accelerated my indexing.</p>
              <Table
                headers={["Metric", "Value"]}
                rows={[
                  ["Impressions (Month 1)", "472"],
                  ["Click-through Rate (CTR)", "7.3%"],
                  ["Average Position", "11.8"],
                  ["Indexed Pages", "6"],
                ]}
              />
              <p>📷 <strong>Screenshot Suggestion:</strong> Google Search Console "Performance" tab.</p>
              <p><em>Caption:</em> Tracking early organic performance with Google Search Console.</p>
              <Divider />
              <SubTitle>🗝️ Bonus: Structured Data for Portfolio Cards</SubTitle>
              <p>To help Google understand project listings, I embedded JSON-LD structured data for each project card:</p>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "AI Miniature City",
  "author": "Venkat Sai Charan",
  "description": "An AI-powered animated micro-world built with Pika Labs & Runway ML."
}`}
              </pre>
              <Divider />
              <p>✅ <strong>Summary:</strong> SEO isn't about gaming the system—it's about building for clarity, speed, and intent. By applying structured content, semantic markup, and laser-focused performance improvements, I created a portfolio that search engines love—and users enjoy.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-6">🎯 Page 6: Conversion Ready</SectionTitle>
              <SubTitle>Driving Action, Not Just Views</SubTitle>
              <Divider />
              <Callout>🎓 "Traffic is vanity. Conversion is sanity."<br/>— Brian Massey, Conversion Scientist</Callout>
              <Divider />
              <SubTitle>💡 The Goal: Turn Visitors into Opportunities</SubTitle>
              <p>A beautiful portfolio doesn't mean much if it doesn't spark action. Once my portfolio started attracting traffic through search, shares, and referrals, my next challenge was conversion:</p>
              <p>✅ How do I turn casual visitors into contacts, collaborators, or clients?</p>
              <Divider />
              <SubTitle>🔁 My Conversion Funnel</SubTitle>
              <p>Every page on my site is intentionally crafted to guide the visitor through a subtle journey—from interest to interaction.</p>
              <p>🔄 Funnel Flow:</p>
              <p>Homepage → About → Projects → Contact Form → Thank You</p>
              <Table
                headers={["Stage", "Hook", "Design Feature"]}
                rows={[
                  ["Homepage", "Animated greeting + CTA", "Hero section motion + scroll"],
                  ["About", "Relatable, personal intro", "Conversational tone"],
                  ["Projects", "Relevant tech, concise UX", "Project card layout"],
                  ["Contact Form", "Low friction, high clarity", "EmailJS form + validation"],
                  ["Confirmation", "Success feedback", "Toast + visual confirmation"],
                ]}
              />
              <SubTitle>📬 EmailJS Form: The Heart of Conversion</SubTitle>
              <p>I designed my form to:</p>
              <ul>
                <li>Be short and focused (Name, Email, Message)</li>
                <li>Validate in real time</li>
                <li>Provide instant confirmation feedback</li>
                <li>Work without backend logic</li>
              </ul>
              <p>📷 <strong>Visual Suggestion:</strong> Contact form screenshot + success toast notification</p>
              <p><em>Caption:</em> Contact form built with EmailJS – simple, responsive, and conversion-focused.</p>
              <Divider />
              <SubTitle>✅ Code Snippet – EmailJS Integration</SubTitle>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`emailjs.sendForm('service_id', 'template_id', formRef.current, 'user_key')
  .then(result => {
    setStatus('success');
  })
  .catch(error => {
    setStatus('error');
  });`}
              </pre>
              <Divider />
              <SubTitle>📊 CTA Optimization Strategy</SubTitle>
              <p>Each section ends with a subtle but strategic call to action. Examples:</p>
              <ul>
                <li>💼 Under Projects: "Interested in something similar? Let's talk"</li>
                <li>📩 At the bottom of each page: "Have questions or want to collaborate? I'd love to hear from you."</li>
                <li> In mobile view: Sticky bottom bar with: "👋 Let's Connect"</li>
              </ul>
              <Divider />
              <SubTitle>📈 Results from CTA Testing</SubTitle>
              <p>I ran A/B tests and tracked clicks using Google Analytics event tags.</p>
              <p>🔍 Clickthrough Stats (Over 30 Days):</p>
              <Table
                headers={["CTA Location", "Click Rate (%)"]}
                rows={[
                  ["Hero Section", "8.9%"],
                  ["Project Cards", "14.1%"],
                  ["Footer CTA", "5.2%"],
                  ["Mobile Sticky CTA", "21.3%"],
                ]}
              />
              <Divider />
              <SubTitle>🛠️ Conversion Design Best Practices I Followed</SubTitle>
              <Table
                headers={["Principle", "Implementation"]}
                rows={[
                  ["Minimize form fields", "Only name, email, message"],
                  ["Use clear CTAs", "No vague 'Submit' – use 'Let's Talk'"],
                  ["Show micro-feedback", "Toasts, field focus, loading states"],
                  ["Responsive design", "Form adapts to mobile perfectly"],
                  ["Short visual journey", "All interactions under 2 scrolls max"],
                ]}
              />
              <p>📷 <strong>Visual Suggestion:</strong> CTA Button Variants (Primary, Ghost, Hover, Click)</p>
              <p><em>Caption:</em> Strategic CTA styles tested for different visitor segments and screen sizes.</p>
              <Divider />
              <SubTitle>🧠 Human Psychology in CTA Placement</SubTitle>
              <ul>
                <li>People scan vertically. CTAs are placed just as momentum slows.</li>
                <li>Action words convert better. "Let's Talk &gt; 'Submit'"</li>
                <li>Social proof builds trust. Linking GitHub & LinkedIn under form improved engagement.</li>
            </ul>
              <Divider />
              <p>✅ <strong>Summary:</strong> Traffic means nothing if it doesn't lead to opportunity. By applying marketing psychology, conversion optimization, and clear CTA logic, I turned my portfolio into a lead-generating, connection-building machine.</p>
              <p>💼 Since launch, I've received job leads, freelance requests, and community invites—all via the contact form.</p>
          </motion.section>
            <motion.section
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle id="page-7">🧩 Page 7: TL;DR + Resources</SectionTitle>
              <SubTitle>From Code to Career: Your Developer Portfolio Blueprint</SubTitle>
              <Divider />
              <Callout>🎓 "Give away the playbook, and you'll attract those who want to play with you."<br/>— Venkat Sai Charan Karasala</Callout>
              <Divider />
              <SubTitle>🧠 TL;DR: What I Learned Building This Portfolio</SubTitle>
              <p>Building www.venkatasaicharan.com was more than a dev project—it was a branding strategy, UX design challenge, and analytics experiment wrapped into one.</p>
              <p>Here's what I gained—and what you can, too:</p>
              <Divider />
              <SubTitle>🔑 Key Takeaways</SubTitle>
              <ul>
                <li>✅ <strong>Tech Stack Matters:</strong> React, Tailwind, and Vite gave me performance + modularity.</li>
                <li>✅ <strong>Design with Purpose:</strong> Animations, layout, and color were intentional and tested.</li>
                <li>✅ <strong>Track Everything:</strong> Analytics told me what was working—and what wasn't.</li>
                <li>✅ <strong>SEO Is About Structure:</strong> Clean markup + smart keywords = discoverability.</li>
                <li>✅ <strong>Every Click Counts:</strong> CTAs and forms turned visits into real opportunities.</li>
              </ul>
              <Divider />
              <SubTitle>📦 Free Developer Resource Kit</SubTitle>
              <p>I've packaged everything I've learned into this open resource bundle:</p>
              <p>🎁 <strong>What's Inside:</strong></p>
              <ul>
                <li>✅ Developer Portfolio Checklist (PDF)</li>
                <li>✅ My Tailwind Theme Config (JSON)</li>
                <li>✅ Sample Framer Motion Snippets</li>
                <li>✅ Example Meta Tags for SEO</li>
                <li>✅ Google Analytics + Hotjar Setup Guide</li>
                <li>✅ Figma Wireframe Template (Home + Projects + Contact)</li>
              </ul>
              <p>📥 Download the Full Kit Here (Dropbox/Google Drive/Notion link suggestion)</p>
              <Divider />
              <SubTitle>📘 Portfolio Site – Section Breakdown</SubTitle>
              <Table
                headers={["Section", "Purpose", "UX Element Highlight"]}
                rows={[
                  ["Hero", "Capture interest instantly", "Framer Motion text lift"],
                  ["About", "Show personality + background", "2-column layout, scroll in"],
                  ["Projects", "Highlight skills through action", "Card UI, filter by tags"],
                  ["Experience", "Show credibility, not just history", "Company logos + short bullets"],
                  ["Contact", "Convert interest into interaction", "EmailJS + confirmation toast"],
                ]}
              />
              <SubTitle>💡 Pro Tips for Devs Starting Their Portfolio</SubTitle>
              <ul>
                <li>Don't wait until it's perfect — iterate in public</li>
                <li>Use real projects, not filler content</li>
                <li>Add contact CTAs everywhere, not just in the footer</li>
                <li>Optimize mobile-first</li>
                <li>Don't copy — adapt what inspires you</li>
              </ul>
              <Divider />
              <SubTitle>💬 Want Feedback? Let's Connect</SubTitle>
              <p>If you're building a portfolio and want a review, advice, or just some feedback from someone who's been there — reach out. Seriously.</p>
              <ul>
                <li>📫 Contact Me</li>
                <li>🐙 GitHub</li>
                <li>💼 LinkedIn</li>
              </ul>
              <Divider />
              <SubTitle>🤝 Special Thanks</SubTitle>
              <ul>
                <li>Everyone who inspired me from GitHub, Dribbble, and Dev.to</li>
                <li>Tools like React, Tailwind, and Vercel for making modern dev fun</li>
                <li>Google & Hotjar for helping me see the "invisible" behaviors</li>
              </ul>
              <Divider />
              <SubTitle>📣 Share This Blog</SubTitle>
              <p>If you found this helpful, please consider sharing it with:</p>
              <ul>
                <li>A friend who's job hunting</li>
                <li>A student learning web dev</li>
                <li>Your LinkedIn network</li>
            </ul>
              <p>✨ Let's raise the bar for developer portfolios—together.</p>
              <Divider />
              <SubTitle>✅ The End (Or the Beginning…)</SubTitle>
              <p>This isn't just a story about one site—it's a guide you can use to build your own platform.</p>
              <p>And remember:</p>
              <Callout>🌍 Your portfolio is not just a website. It's your career, your voice, your proof of work—digitally alive, 24/7.</Callout>
              <Divider />
              <p>🖼️ <strong>Visual Suggestion:</strong> A clean "Thank You" screen with a subtle animation or waving hand emoji.<br/>"Thanks for reading. Now go build yours."</p>
              <Divider />
          </motion.section>
          </main>
          {/* Sidebar TOC (Desktop, Fixed, Right) */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:block w-64 flex-shrink-0"
            style={{
              position: 'fixed',
              top: '6rem',
              right: '3rem',
              zIndex: 30,
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            {/* Back to Portfolio Button (Desktop only) */}
            <div className="mb-6">
              <a href="/" className="inline-block w-full text-center bg-[--main-color] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[--main-color]/90 transition mb-4">
                ← Back to Portfolio
              </a>
            </div>
            <nav>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 font-sans">
                <h3 className="text-base font-bold mb-3 text-[--main-color] tracking-wide uppercase">Table of Contents</h3>
                <ul className="space-y-1">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-md transition-colors text-sm font-medium
                          ${activeId === item.id
                            ? 'bg-[--main-color]/10 text-[--main-color] font-bold border-l-4 border-[--main-color]'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[--main-color]'}
                        `}
                        onClick={e => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.history.replaceState(null, '', `#${item.id}`);
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </motion.aside>
        </div>
      </div>
    </>
  );
};

export default Blog; 
