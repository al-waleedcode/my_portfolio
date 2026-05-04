// Server Component - NO 'use client' هنا!
import ContactForm from '../components/ContactForm';

const profile = {
  name: 'AL-WALEED ZAIH',
  title: 'Full-Stack Web Developer',
  age: 20,
  location: "Sana'a, Yemen",
  bio: "Building high-performance web applications for a global audience. I bridge the gap between complex logic and minimalist, intuitive user interfaces — from a perfect 100/100 Lighthouse score to secure database architecture.",
  github: 'https://github.com/al-waleedcode',
  skills: [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend',  items: ['Node.js', 'Express', 'Python', 'C++'] },
    { category: 'Tools',    items: ['Git', 'VS Code', 'Figma'] },
  ],
  projects: [
    {
      id: '01',
      title: 'Dynamic Task Management System',
      description: 'Real-time task tracking engineered for speed. Instantaneous backend updates without compromising frontend performance — achieving top-tier Lighthouse metrics.',
      github: 'https://github.com/al-waleedcode/Task-Management-System',
      stack: ['JavaScript', 'Node.js', 'Express', 'CSS'],
    },
    {
      id: '02',
      title: 'Minimalist Personal Portfolio',
      description: 'Blazing-fast, SEO-optimized static site. Zero external API fetches, Static Site Generation, zero-delay experience.',
      github: 'https://github.com/al-waleedcode/my-portfolio',
      stack: ['Next.js', 'Tailwind CSS', 'React'],
    },
    {
      id: '03',
      title: 'Modern Landing Page',
      description: 'A high-conversion landing page for small businesses. Mobile-first responsive design with clean, maintainable code architecture.',
      github: 'https://github.com/al-waleedcode/Landing-Page',
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    },
  ],
};

export default function Page() {
  return (
    <main className="relative z-10 min-h-screen">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-slate-800/60 backdrop-blur-xl bg-slate-950/70">
        <span className="font-mono text-cyan-400 text-sm tracking-widest animate-flicker">
          &lt;AW/&gt;
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 px-4 py-2 rounded transition-all duration-300 hover:shadow-neon-sm"
        >
          GitHub ↗
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="grid-bg relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16">

        {/* Corner decorations */}
        <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-500/20 pointer-events-none" />
        <div className="absolute bottom-16 right-6 w-16 h-16 border-r-2 border-b-2 border-emerald-500/20 pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full">
          <div className="anim-hidden animate-fade-up">
            <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase">
              ● Available for work
            </span>
          </div>

          <h1 className="mt-6 font-bold leading-none tracking-tight anim-hidden animate-fade-up delay-100">
            <span className="block text-slate-500 font-mono text-lg md:text-xl mb-2 font-normal">
              &gt; Hello, I'm
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
              {profile.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gradient-neon' : ''}>{word} </span>
              ))}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-3 anim-hidden animate-fade-up delay-200">
            <span className="h-px w-12 bg-cyan-500/40" />
            <p className="font-mono text-slate-400 text-sm md:text-base tracking-wider">
              {profile.title}
            </p>
          </div>

          <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl anim-hidden animate-fade-up delay-300">
            {profile.bio}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 anim-hidden animate-fade-up delay-400">
            <a
              href="#projects"
              className="group relative bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-sm px-7 py-3.5 rounded-lg transition-all duration-300 hover:shadow-neon overflow-hidden"
            >
              <span className="relative z-10">[ View_Projects() ]</span>
              <span className="absolute inset-0 bg-cyan-500/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-mono text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
            >
              Contact →
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg anim-hidden animate-fade-up delay-500">
            {[
              { num: '3+', label: 'Projects' },
              { num: '100', label: 'Lighthouse Score' },
              { num: '24h', label: 'Response Time' },
            ].map(({ num, label }) => (
              <div key={label} className="border border-slate-800 rounded-lg p-4 text-center bg-slate-900/30">
                <div className="font-mono text-2xl font-bold text-cyan-400">{num}</div>
                <div className="font-mono text-xs text-slate-600 mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan-400 text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
            <span className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-cyan-400 font-mono">20-year-old</span> Full-Stack developer
                based in <span className="text-emerald-400">{profile.location}</span>, building web applications
                that serve a global audience.
              </p>
              <p>
                My approach: start with the problem, architect a clean solution, then obsess over
                the details — performance, accessibility, and user experience all matter equally.
              </p>
              <p>
                Whether it's a React frontend hitting
                <span className="text-cyan-400 font-mono"> 100/100 Lighthouse</span> or a Node.js
                backend handling real-time updates — I care about the craft.
              </p>
            </div>

            {/* Terminal-style info box */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 font-mono text-sm neon-border">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-600 text-xs">profile.json</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-cyan-400">"name"</span>: <span className="text-emerald-300">"{profile.name}"</span>,</div>
                <div><span className="text-cyan-400">"age"</span>: <span className="text-amber-300">{profile.age}</span>,</div>
                <div><span className="text-cyan-400">"location"</span>: <span className="text-emerald-300">"{profile.location}"</span>,</div>
                <div><span className="text-cyan-400">"role"</span>: <span className="text-emerald-300">"Full-Stack Developer"</span>,</div>
                <div><span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"available"</span><span className="animate-blink text-cyan-400">_</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-6 md:px-12 py-24 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan-400 text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
            <span className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {profile.skills.map(({ category, items }) => (
              <div
                key={category}
                className="group bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-neon-sm"
              >
                <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-5">
                  // {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan-400 text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
            <span className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="space-y-6">
            {profile.projects.map((project) => (
              <article
                key={project.id}
                className="group grid md:grid-cols-[80px_1fr_auto] gap-6 items-start bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-neon-sm"
              >
                <div className="font-mono text-5xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors leading-none select-none">
                  {project.id}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-slate-800/80 text-slate-400 px-3 py-1 rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 px-4 py-2 rounded-lg transition-all duration-300 self-start"
                >
                  View ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 md:px-12 py-24 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan-400 text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
            <span className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Have a project in mind? Looking for a developer to join your team?
                I'm currently <span className="text-emerald-400">available</span> and
                open to new opportunities.
              </p>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-cyan-400">→</span>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-cyan-400">→</span>
                  <span>Open to remote work globally</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-cyan-400">→</span>
                  <span>Freelance & full-time welcome</span>
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 px-5 py-3 rounded-lg transition-all duration-300"
              >
                GitHub Profile ↗
              </a>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 neon-border">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-slate-500 tracking-widest">SEND_MESSAGE.exe</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800/60 px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-600">
          © 2025 {profile.name} — Built with Next.js & Tailwind CSS
        </span>
        <span className="font-mono text-xs text-slate-700 animate-flicker">
          &lt;AW/&gt;
        </span>
      </footer>

    </main>
  );
}
