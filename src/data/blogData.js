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
  <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900">1. 🚀 Building My Portfolio with React & Tailwind: A Developer's Journey</h2>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <p class="mb-4">In today's digital-first world, your portfolio is your handshake. It's not just about listing skills — it's about proving them. When I set out to build <a href="https://www.venkatasaicharan.com" target="_blank">venkatasaicharan.com</a>, my goal was clear: to create a portfolio that reflects who I am as a software engineer — clean, fast, interactive, and thoughtfully engineered.</p>
    <p>This blog shares how I built my portfolio from the ground up using <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong> — and the key decisions, tools, and techniques that brought it all together.</p>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">2. 🧱 Why I Chose React + Tailwind</h2>
    <p class="mb-4">React has been my go-to for building component-driven UIs, and with <strong>Vite</strong> as the dev server, I had instant hot reload and lightning-fast builds. I paired this with <strong>Tailwind CSS</strong> for utility-first styling — enabling rapid prototyping without the bloat of custom CSS.</p>
    <blockquote class="border-l-4 border-cyan-400 bg-cyan-50/60 italic text-lg p-4 rounded-lg my-6">"I didn't want to just build a website. I wanted to engineer an experience."</blockquote>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">3. ✨ Features That Set It Apart</h2>
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
  A[App.jsx] --> B[Header/Navbar]
  A --> C[Main Sections]
  A --> D[Footer]
  C --> E[About]
  C --> F[Skills]
  C --> G[Education]
  C --> H[Certifications]
  C --> I[Experience]
  C --> J[Projects]
  C --> K[Contact]
  C --> L[Blog]
</pre>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">4. 📂 Project Sections Built with Purpose</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>About Me</strong>: Snapshot of my journey and personality.</li>
      <li><strong>Skills</strong>: My technical proficiencies and tools I use.</li>
      <li><strong>Education</strong>: Academic background and degrees.</li>
      <li><strong>Certifications</strong>: Proof of my commitment to continuous learning.</li>
      <li><strong>Experience</strong>: Professional roles and impactful work.</li>
      <li><strong>Projects</strong>: Real-world applications showcasing both frontend and backend skills.</li>
      <li><strong>Contact</strong>: Conversion-optimized and functional way to reach me.</li>
      <li><strong>Blog</strong>: In-depth case studies, technical write-ups, and personal insights.</li>
    </ul>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">5. 🛠️ Tech Stack</h2>
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
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">6. 🧠 Lessons Learned</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Design before development</strong>: Used Figma to wireframe ideas.</li>
      <li><strong>Use semantic naming</strong>: Tailwind classes are more readable with logical labels.</li>
      <li><strong>Minimalism matters</strong>: Removed clutter for UX clarity.</li>
      <li><strong>Accessibility is key</strong>: Ensured keyboard and screen reader compatibility.</li>
    </ul>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">7. 📣 Takeaway for Employers</h2>
    <p class="mb-4">I believe great engineers don't just code — they communicate, design, and deliver. My portfolio is a living example of my front-to-back skillset, UI instincts, and problem-solving mindset.</p>
    <p>If you're an employer or collaborator viewing my site, I'd love to connect. My inbox is always open.</p>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-cyan-400 pl-4 bg-white/80 rounded shadow-sm">8. 🙌 Want to Build Your Own?</h2>
    <p class="mb-4">Ready to launch your own portfolio? Here's my advice for developers starting out:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Start small and build iteratively.</li>
      <li>Choose tools you enjoy using and want to master.</li>
      <li>Don't just list features — explain your decisions and process.</li>
    </ul>
    <div class="flex justify-center mt-8">
      <a href="https://github.com/KVSC1511/MyPortfolio" target="_blank" class="inline-block bg-[#e13a7a] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#6d217f] transition-all text-lg">
        🚀 View Source Code on GitHub
      </a>
    </div>
  </section>
</article>
    `
  },
  {
    slug: "ai-illusion-automation-irrelevance",
    title: "The AI Illusion: Are We Automating Ourselves Into Irrelevance?",
    date: "06-09-2024",
    category: "AI & Society",
    excerpt: "AI is no longer just assisting us — it's replacing us. As we cheer for efficiency, are we quietly coding ourselves out of purpose? Explore the paradox of automation, meaning, and what we must never let machines take from us.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Venkata Sai Charan",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    readingTime: "7 min read",
    lastUpdated: "06-09-2024",
    content: `
<article class="prose lg:prose-xl max-w-none mx-auto p-6">
  <h1 class="mb-10 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">🧠 The AI Illusion: Are We Automating Ourselves Into Irrelevance?</h1>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <p class="mb-4 text-lg">Every day, a new tool promises to automate your job, write your emails, or even think for you. AI is no longer just assisting us — it's replacing us. But as we cheer for efficiency, are we quietly coding ourselves out of purpose?</p>
    <img src="https://marketoonist.com/wp-content/uploads/2024/04/aicopilots_marketoonist.png" alt="AI at work cartoon by Marketoonist" class="w-full rounded-xl shadow mb-4" />
    <p class="text-xs text-gray-500 mb-2">Cartoon by <a href="https://marketoonist.com/2024/04/aicopilots.html" target="_blank" rel="noopener">Marketoonist / Tom Fishburne</a> (used for commentary/educational purposes)</p>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">1. The Mirage of Ultimate Efficiency</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Everyone is obsessed with "10x productivity."</li>
      <li>Tools like ChatGPT, AutoGPT, and Copilot are eliminating repetitive tasks.</li>
      <li>But behind every automated system is a person losing context, skill, or decision-making power.</li>
    </ul>
    <blockquote class="border-l-4 border-pink-400 bg-pink-50/60 italic text-lg p-4 rounded-lg my-6">"We're getting faster — but are we getting dumber?"</blockquote>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">2. Automation vs. Human Meaning</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>There's a difference between doing less and doing nothing.</li>
      <li>Humans don't just work for money — they crave impact, growth, mastery.</li>
      <li>When machines do everything, what's left for us to feel proud of?</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Robot and human hand" class="w-full rounded-xl shadow mb-4" />
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">3. The Disappearing Middle Class of Knowledge Work</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>AI is squeezing out:</li>
      <li>Junior developers</li>
      <li>Copywriters</li>
      <li>Designers</li>
      <li>Analysts</li>
      <li>Top-tier experts and decision-makers still thrive. Entry-level workers are getting displaced before they learn.</li>
      <li>The ladder is being pulled up — from the bottom.</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80" alt="AI replacing jobs" class="w-full rounded-xl shadow mb-4" />
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">4. The Creative Paradox</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>AI is great at replicating, not originating.</li>
      <li>When we automate content, code, or communication, we standardize it.</li>
      <li>Ironically, AI makes us more average.</li>
      <li>Is uniqueness becoming a liability in an optimized world?</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Creative paradox AI" class="w-full rounded-xl shadow mb-4" />
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">5. What We Must Not Automate</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Ethical boundaries we must preserve:</li>
      <li>Empathy</li>
      <li>Judgment</li>
      <li>Relationships</li>
      <li>Responsibility</li>
      <li>Let machines take tasks — but never the meaning behind them.</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Empathy and AI" class="w-full rounded-xl shadow mb-4" />
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">6. Call to Action: From Tool-User to System Thinker</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>We must evolve:</li>
      <li>From being just users to architects of the system.</li>
      <li>From being replaced to redefining what only humans can do.</li>
      <li>The future belongs to those who design, interpret, and connect the dots.</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80" alt="System thinker AI" class="w-full rounded-xl shadow mb-4" />
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100">
    <h2 class="mb-6 text-2xl font-extrabold tracking-wide text-gray-900 border-l-4 border-pink-400 pl-4 bg-white/80 rounded shadow-sm">🎯 Bonus: What parts of your job are truly human?</h2>
    <form class="mb-6">
      <label class="block mb-2 font-semibold">Take this quick quiz:</label>
      <ul class="list-disc pl-6 space-y-2">
        <li><input type="checkbox" disabled /> Building relationships</li>
        <li><input type="checkbox" disabled /> Making ethical decisions</li>
        <li><input type="checkbox" disabled /> Solving ambiguous problems</li>
        <li><input type="checkbox" disabled /> Repetitive data entry</li>
        <li><input type="checkbox" disabled /> Creative brainstorming</li>
      </ul>
      <p class="mt-4 text-sm text-gray-500">Reflect: Which of these do you want to automate? Which do you want to keep?</p>
    </form>
    <div class="p-6 bg-pink-50/60 rounded-xl border-l-4 border-pink-400 mt-6">
      <h3 class="text-xl font-bold mb-2">Reader Challenge:</h3>
      <p>Try one week without AI tools. No ChatGPT, no Copilot, no smart autocomplete. At the end, reflect: What did you miss? What did you rediscover?</p>
    </div>
  </section>
  <section class="mb-14 p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100 text-center">
    <h2 class="mb-6 text-2xl font-extrabold tracking-wide text-gray-900">🔚 Closing Line</h2>
    <blockquote class="border-l-4 border-pink-400 bg-pink-50/60 italic text-lg p-4 rounded-lg my-6">"AI won't make us irrelevant — unless we stop asking why we matter."</blockquote>
  </section>
</article>
    `
  },
]; 