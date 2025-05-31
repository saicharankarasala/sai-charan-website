export const blogPosts = [
  {
    slug: "portfolio-case-study",
    title: "The Code Behind the Canvas: How I Engineered My Personal Portfolio with React, Tailwind & Analytics",
    date: "05-10-2025",
    category: "Case Study",
    excerpt: "A full case study on building my personal portfolio using React, Tailwind, Vite, and Framer Motion.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    author: {
      name: "Venkata Sai Charan",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    readingTime: "5 min read",
    lastUpdated: "05-10-2025",
    content: `
<article class="prose lg:prose-xl max-w-none mx-auto p-6">
  <h1 class="mb-10 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">🚀 Building My Portfolio with React & Tailwind: A Developer's Journey</h1>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <p class="mb-4">In today's digital-first world, your portfolio is your handshake. It's not just about listing skills — it's about proving them. When I set out to build <a href="https://www.venkatasaicharan.com" target="_blank">venkatasaicharan.com</a>, my goal was clear: to create a portfolio that reflects who I am as a software engineer — clean, fast, interactive, and thoughtfully engineered.</p>
    <p>This blog shares how I built my portfolio from the ground up using <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong> — and the key decisions, tools, and techniques that brought it all together.</p>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">🧱 Why I Chose React + Tailwind</h2>
    <p class="mb-4">React has been my go-to for building component-driven UIs, and with <strong>Vite</strong> as the dev server, I had instant hot reload and lightning-fast builds. I paired this with <strong>Tailwind CSS</strong> for utility-first styling — enabling rapid prototyping without the bloat of custom CSS.</p>
    <blockquote class="border-l-4 border-cyan-400 bg-cyan-50/60 italic text-lg p-4 rounded-lg my-6">"I didn't want to just build a website. I wanted to engineer an experience."</blockquote>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">✨ Features That Set It Apart</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Animated Page Transitions</strong>: Powered by <code>Framer Motion</code> for a polished feel.</li>
      <li><strong>Dark/Light Theme Toggle</strong>: Built using React Context API for user preference.</li>
      <li><strong>Responsive Design</strong>: Fully fluid experience from mobile to desktop.</li>
      <li><strong>EmailJS Integration</strong>: Direct contact form that doesn't require opening email clients.</li>
      <li><strong>React Router</strong>: Seamless client-side routing.</li>
    </ul>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h3 class="mb-4 text-xl font-semibold text-gray-900 border-l-2 border-cyan-300 pl-3 bg-cyan-50/60 rounded shadow">Site Architecture</h3>
    <pre class="mermaid mb-6">
graph TD
  A[App.jsx] --> B[Navbar]
  A --> C[Routes]
  C --> D[Home.jsx]
  C --> E[Projects.jsx]
  C --> F[Contact.jsx]
  A --> G[ThemeProvider]
</pre>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">📂 Project Sections Built with Purpose</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>About Me</strong>: Snapshot of my journey and personality.</li>
      <li><strong>Projects</strong>: Real-world applications showcasing both frontend and backend skills.</li>
      <li><strong>Experience & Education</strong>: Timeline format for clarity and context.</li>
      <li><strong>Certifications</strong>: Proving my commitment to continuous learning.</li>
      <li><strong>Contact</strong>: Conversion-optimized and functional.</li>
    </ul>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">🛠️ Tech Stack</h2>
    <table class="mb-6 w-full border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-cyan-50">
        <tr><th class="py-3 px-4 text-left text-gray-900 font-semibold">Tool / Framework</th><th class="py-3 px-4 text-left text-gray-900 font-semibold">Purpose</th></tr>
      </thead>
      <tbody>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">React</td><td class="py-3 px-4">Component-based UI</td>
        </tr>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">Vite</td><td class="py-3 px-4">Fast build & hot reload</td>
        </tr>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">Tailwind CSS</td><td class="py-3 px-4">Utility-first styling</td>
        </tr>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">Framer Motion</td><td class="py-3 px-4">Elegant animations</td>
        </tr>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">EmailJS</td><td class="py-3 px-4">Email form integration</td>
        </tr>
        <tr class="even:bg-gray-50 hover:bg-cyan-50 transition">
          <td class="py-3 px-4">React Router</td><td class="py-3 px-4">Page navigation</td>
        </tr>
      </tbody>
    </table>
    <h3 class="mb-4 text-xl font-semibold text-gray-900 border-l-2 border-cyan-300 pl-3 bg-cyan-50/60 rounded shadow">Tech Stack Overview</h3>
    <pre class="mermaid mb-6">
graph TD
  React --> Tailwind_CSS
  React --> Vite
  React --> Framer_Motion
  React --> EmailJS
  React --> React_Router
</pre>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">🧠 Lessons Learned</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Design before development</strong>: Used Figma to wireframe ideas.</li>
      <li><strong>Use semantic naming</strong>: Tailwind classes are more readable with logical labels.</li>
      <li><strong>Minimalism matters</strong>: Removed clutter for UX clarity.</li>
      <li><strong>Accessibility is key</strong>: Ensured keyboard and screen reader compatibility.</li>
    </ul>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">📣 Takeaway for Employers</h2>
    <p class="mb-4">I believe great engineers don't just code — they communicate, design, and deliver. My portfolio is a living example of my front-to-back skillset, UI instincts, and problem-solving mindset.</p>
    <p>If you're an employer or collaborator viewing my site, I'd love to connect. My inbox is always open.</p>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">🙌 Want to Build Your Own?</h2>
    <p class="mb-4">If you're a developer starting out:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Start small and build iteratively.</li>
      <li>Choose tools you enjoy using and want to master.</li>
      <li>Don't just list features — explain decisions.</li>
    </ul>
    <blockquote class="border-l-4 border-cyan-400 bg-cyan-50/60 italic text-lg p-4 rounded-lg my-6">
      You can find the source code here: 
      <a href="https://github.com/KVSC1511/My-Personal-Portfolio.git" target="_blank">GitHub – My Personal Portfolio</a>
    </blockquote>
  </section>
</article>
    `
  },
]; 