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
    date: "06-10-2025",
    category: "AI & Society",
    excerpt: "AI is no longer just assisting us — it's replacing us. As we cheer for efficiency, are we quietly coding ourselves out of purpose? Explore the paradox of automation, meaning, and what we must never let machines take from us.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Venkata Sai Charan",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    readingTime: "7 min read",
    lastUpdated: "06-10-2025",
    content: `
<article class="prose lg:prose-xl max-w-none mx-auto px-4 sm:px-8 py-10">
  <header class="text-center mb-16">
    <p class="text-gray-600 text-xl">AI is no longer just assisting us — it's replacing us. As we cheer for efficiency, are we quietly coding ourselves out of purpose?</p>
    <img src="https://tse2.mm.bing.net/th/id/OIP.amRHdMKyk8OYhvFPUeNZgAHaD4?pid=Api" alt="AI Chip - Hero Image" class="mx-auto rounded-xl shadow-md mt-6 w-3/4 sm:w-1/2">
  </header>

  <section class="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">1. The Mirage of Ultimate Efficiency</h2>
      <p>We celebrate every new tool that promises to make us "10x" more productive. Yet, as AI takes over repetitive and even creative tasks, we risk losing context, skill, and the satisfaction of problem-solving. Are we trading depth for speed?</p>
    </div>
    <div>
      <img src="https://tse3.mm.bing.net/th/id/OIP.9_qMebjylb3gGgtsr-zN0QHaEK?pid=Api" alt="Glowing AI cube" class="rounded-lg shadow w-full max-w-sm mx-auto">
      <p class="text-sm text-gray-500 italic text-center mt-2">A glowing AI cube: powerful, yet disconnected from real context.</p>
    </div>
  </section>

  <section class="mb-16 bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">2. Human Meaning vs. Machine Productivity</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p>Efficiency is not the same as fulfillment. Humans crave mastery, impact, and connection. When machines do everything, what remains for us to feel proud of? The risk is not just job loss, but meaning loss.</p>
      </div>
      <div>
        <img src="https://tse3.mm.bing.net/th/id/OIP.FtB-Q0KYMIGU2DEccAIPXgHaEN?pid=Api" alt="Humanoid AI face" class="rounded-lg shadow w-full max-w-sm mx-auto">
        <p class="text-sm text-gray-500 italic text-center mt-2">Automation may save time—but it cannot save purpose.</p>
      </div>
    </div>
  </section>

  <section class="mb-16 bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">3. Vanishing Entry Points: AI and the Middle Class of Knowledge Work</h2>
    <p class="mb-6">Here's a breakdown of how automation is impacting traditional job roles:</p>
    <table class="table-auto w-full text-left border border-gray-200">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2 border">Role</th>
          <th class="p-2 border">AI Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-2 border">Junior Developer</td>
          <td class="p-2 border">Code generation and bug-fixing via AI assistants</td>
        </tr>
        <tr>
          <td class="p-2 border">Copywriter</td>
          <td class="p-2 border">Marketing and SEO content automated by GPT-like models</td>
        </tr>
        <tr>
          <td class="p-2 border">Analyst</td>
          <td class="p-2 border">Data parsing and reporting tools replacing manual effort</td>
        </tr>
      </tbody>
    </table>
    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="AI replacing knowledge workers" class="rounded-lg shadow mx-auto mt-6 w-2/3">
    <p class="text-sm text-gray-500 italic text-center mt-2">Automation is skipping the ladder—leaving fewer rungs to climb.</p>
  </section>

  <section class="mb-16 bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">4. The Creative Paradox</h2>
    <p>AI excels at replication, not originality. As we automate content, code, and communication, we risk standardizing creativity itself. Ironically, the more we optimize, the more average we become. Is uniqueness a liability in an AI world?</p>
    <div class="flex justify-center mt-6">
      <img src="https://tse3.mm.bing.net/th/id/OIP.FtB-Q0KYMIGU2DEccAIPXgHaEN?pid=Api" alt="Futuristic AI face" class="rounded-xl shadow w-2/3">
    </div>
    <p class="text-sm text-gray-500 italic text-center mt-2">Aesthetic AI renders beauty—but lacks the soul of true art.</p>
  </section>

  <section class="mb-16 bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">5. What We Must Not Automate</h2>
    <p>Some boundaries must remain human: empathy, judgment, relationships, responsibility. Let machines take tasks, but never the meaning behind them.</p>
    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Empathy in AI" class="rounded-xl shadow mx-auto mt-6 w-2/3">
    <p class="text-sm text-gray-500 italic text-center mt-2">Empathy and moral judgment: not yet programmable.</p>
  </section>

  <section class="mb-20 bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">6. From Tool-User to System Thinker</h2>
    <p>The future belongs to those who design, interpret, and connect the dots. We must evolve from being just users to architects of the system—from being replaced to redefining what only humans can do.</p>
    <img src="https://tse2.mm.bing.net/th/id/OIP.CeDoFlswEjUS5cXM87MfzQHaD4?pid=Api" alt="Digital hand on AI network" class="rounded-xl shadow mx-auto mt-6 w-2/3">
    <p class="text-sm text-gray-500 italic text-center mt-2">System thinkers shape the future—not the tools they use.</p>
  </section>

  <footer class="text-center mt-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">🔚 Closing Reflection</h2>
    <blockquote class="border-l-4 border-pink-400 bg-pink-50 italic text-lg p-6 rounded-xl mx-auto w-4/5 shadow-md">"AI won't make us irrelevant — unless we stop asking why we matter."</blockquote>
  </footer>
</article>
    `
  },
]; 