// Server Component - NO 'use client' هنا!
// Next.js يسمح بـ async في Server Components
import Image from 'next/image';
import ContactForm from '../components/ContactForm';

// ── Fallback data — يُستخدم إذا فشل الـ fetch ──
const fallbackProfile = {
  name: 'AL-WALEED ZAIH',
  title: 'Full-Stack Web Developer',
  age: 20,
  location: "Sana'a, Yemen",
  github: 'https://github.com/al-waleedcode',
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', level: 'Proficient' },
        { name: 'CSS', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
        { name: 'Tailwind CSS', level: 'Proficient' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 'Proficient' },
        { name: 'Express', level: 'Proficient' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 'Proficient' },
        { name: 'GitHub', level: 'Proficient' },
      ],
    },
  ],
  projects: [
    {
      id: '01',
      title: 'Dynamic Task Management System',
      description:
        'A full-stack task manager with a Node.js/Express backend and vanilla JS frontend. Features: add, edit, delete, and filter tasks — with data saved to a real database.',
      github: 'https://github.com/al-waleedcode/Task-Management-System',
      liveDemo: null,
      image: '/task-manager.webp',
      stack: ['JavaScript', 'Node.js', 'Express', 'CSS'],
    },
    {
      id: '02',
      title: 'Minimalist Personal Portfolio',
      description:
        'Built with Next.js & Tailwind CSS — achieved 100/100 Lighthouse Score using Static Site Generation.',
      github: 'https://github.com/al-waleedcode/my-portfolio',
      liveDemo: 'https://my-portfolio-ten-xi-14.vercel.app',
      image: '/portfolio.webp',
      stack: ['Next.js', 'Tailwind CSS', 'React'],
    },
    {
      id: '03',
      title: 'Modern Landing Page',
      description:
        'A high-conversion landing page for small businesses. Mobile-first responsive design with clean, maintainable code architecture.',
      github: 'https://github.com/al-waleedcode/Landing-Page',
      liveDemo: null,
      image: '/landing-page.webp',
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    },
  ],
};

// ── جلب البيانات من الباك اند ──
async function getProfile() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.warn('NEXT_PUBLIC_API_URL not set — using fallback data');
    return fallbackProfile;
  }

  try {
    const res = await fetch(`${apiUrl}/api/profile`, {
      // ISR: يحدّث البيانات كل ساعة بدون إعادة build
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Failed to fetch profile, using fallback:', err.message);
    return fallbackProfile;
  }
}

export default async function Page() {
  // ✅ البيانات تأتي من الباك اند أو الـ fallback تلقائياً
  const profile = await getProfile();

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
              <a href={`#${item.toLowerCase()}`}
                className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors tracking-widest uppercase">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.github} target="_blank" rel="noopener noreferrer"
          className="font-mono text-xs border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 px-4 py-2 rounded transition-all duration-300 hover:shadow-neon-sm">
          GitHub ↗
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="grid-bg relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16">
        <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-500/20 pointer-events-none" />
        <div className="absolute bottom-16 right-6 w-16 h-16 border-r-2 border-b-2 border-emerald-500/20 pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full">
          <div className="anim-hidden animate-fade-up">
            <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase">● Available for work</span>
          </div>

          <div className="mt-12 grid gap-12 items-center md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-8">
              <h1 className="font-bold leading-tight tracking-tight anim-hidden animate-fade-up delay-100">
                <span className="block text-slate-500 font-mono text-lg md:text-xl mb-2 font-normal">&gt; Hello, I'm</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl text-white">
                  {profile.name.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'text-gradient-neon' : ''}>{word} </span>
                  ))}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 anim-hidden animate-fade-up delay-200">
                <span className="h-px w-12 bg-cyan-500/40" />
                <p className="font-mono text-slate-400 text-sm md:text-base tracking-wider">{profile.title}</p>
              </div>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl anim-hidden animate-fade-up delay-300">
                I build fast, clean web applications — from interactive frontends to real backend systems that actually work.
              </p>

              <div className="flex flex-wrap items-center gap-4 anim-hidden animate-fade-up delay-400">
                <a href="#projects"
                  className="group relative bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-sm px-7 py-3.5 rounded-lg transition-all duration-300 hover:shadow-neon overflow-hidden">
                  <span className="relative z-10">[ View_Projects() ]</span>
                  <span className="absolute inset-0 bg-cyan-500/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
                <a href="#contact"
                  className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-mono text-sm px-7 py-3.5 rounded-lg transition-all duration-300">
                  Contact →
                </a>
                <a href="#contact"
                  className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 hover:text-emerald-100 font-mono text-sm px-7 py-3.5 rounded-lg transition-all duration-300">
                  WhatsApp Me →
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl anim-hidden animate-fade-up delay-500">
                {[
                  { num: '100/100', label: 'Lighthouse Score' },
                  { num: '3+', label: 'Projects Delivered' },
                  { num: '1', label: 'Year of Building' },
                ].map(({ num, label }) => (
                  <div key={label} className="border border-slate-800 rounded-3xl p-5 text-center bg-slate-900/40">
                    <div className="font-mono text-2xl font-bold text-cyan-400">{num}</div>
                    <div className="font-mono text-xs text-slate-500 mt-2 uppercase tracking-[0.3em]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm anim-hidden animate-fade-up delay-400">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 shadow-[0_30px_80px_-35px_rgba(14,165,233,0.45)]">
                <Image src="/profile.webp" alt="Profile picture" width={520} height={520}
                  className="h-auto w-full object-cover" priority />
              </div>
            </div>
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
            <div className="space-y-6 text-slate-400 leading-relaxed max-w-xl">
              <p>I'm a <span className="text-cyan-400 font-mono">20-year-old</span> Full-Stack developer
                based in <span className="text-emerald-400">{profile.location}</span>, building web applications that serve a global audience.</p>
              <p>My approach: start with the problem, architect a clean solution, then obsess over the details — performance, accessibility, and user experience all matter equally.</p>
              <p>I started building on the web because I wanted to create things that actually work — not just look good. Every project I take on gets the same obsession: clean code, fast load times, and a backend that doesn't break.</p>
              <a href="/waleed-cv.pdf" download
                className="inline-flex items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-mono text-cyan-200 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-white">
                Download CV →
              </a>
            </div>
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
              <div key={category}
                className="group bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-neon-sm">
                <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-5">// {category}</h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{item.name}</span>
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.level}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div className={`h-full rounded-full bg-cyan-400 ${item.level === 'Proficient' ? 'w-10/12' : item.level === 'Intermediate' ? 'w-8/12' : 'w-6/12'}`} />
                      </div>
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
              <article key={project.id}
                className="group overflow-hidden rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-neon-sm">
                <div className="relative h-56 overflow-hidden bg-slate-950 md:h-72">
                  <Image src={project.image} alt={`${project.title} screenshot`}
                    fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover" priority />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-mono text-5xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors leading-none select-none">{project.id}</div>
                      <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-xs bg-slate-800/80 text-slate-400 px-3 py-1 rounded-full border border-slate-700">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-slate-400 leading-relaxed text-sm md:text-base max-w-3xl">{project.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-white">
                        Live Demo ↗
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-slate-300 transition-all duration-300 hover:border-cyan-500/30 hover:text-cyan-400">
                      GitHub ↗
                    </a>
                  </div>
                </div>
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
                I'm currently <span className="text-emerald-400">available</span> and open to new opportunities.
              </p>
              <div className="space-y-3 font-mono text-sm">
                {['Response within 24 hours', 'Open to remote work globally', 'Freelance & full-time welcome'].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-slate-400">
                    <span className="text-cyan-400">→</span><span>{text}</span>
                  </div>
                ))}
              </div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 px-5 py-3 rounded-lg transition-all duration-300">
                GitHub Profile ↗
              </a>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 neon-border">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-slate-500 tracking-widest">SEND_MESSAGE.exe</span>
              </div>
              <ContactForm />
              <div className="mt-8 border-t border-slate-800 pt-6">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">Direct Contact</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { href: 'https://wa.me/967779484515', label: 'WhatsApp', sub: 'wa.me/967779484515', iconColor: 'text-emerald-400',
                      icon: <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.54 7.46a5 5 0 0 0-7.08 0l-.96.96a5 5 0 0 0 0 7.07l.9.9-1.5 4.95 4.95-1.5.9.9a5 5 0 0 0 7.07 0l.96-.96a5 5 0 0 0 0-7.07l-1.5-1.5" /><path d="M15.07 8.93a3 3 0 0 1 0 4.24l-.66.66a1 1 0 0 1-1.41 0l-1.5-1.5a1 1 0 0 1 0-1.41l.66-.66a3 3 0 0 1 4.24 0z" /></svg> },
                    { href: 'https://github.com/al-waleedcode', label: 'GitHub', sub: 'github.com/al-waleedcode',
                      icon: <svg className="h-5 w-5 flex-shrink-0 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0.5C5.73 0.5.5 5.76.5 12.04c0 5.12 3.29 9.46 7.86 10.99.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.71.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.03 1.75 2.72 1.25 3.38.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.12-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.23-1.49 3.2-1.18 3.2-1.18.65 1.59.24 2.77.12 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.03.78 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.68.8.56 4.57-1.53 7.86-5.87 7.86-10.99C23.5 5.76 18.27.5 12 .5Z" /></svg> },
                    { href: 'https://linkedin.com/in/alwaleed-zaih', label: 'LinkedIn', sub: 'linkedin.com/in/alwaleed-zaih',
                      icon: <svg className="h-5 w-5 flex-shrink-0 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 7.499H2V21h3V10.999Zm6.5 0h-2.99V21h2.99v-5.86c0-1.5.56-2.52 1.96-2.52 1.37 0 1.39 1.33 1.39 2.58V21h3v-6.4c0-3.44-1.85-5.03-4.32-5.03-1.98 0-2.85 1.09-3.34 1.86h.03V10.999Z" /></svg> },
                    { href: 'mailto:alwaleedzeeh1@gmail.com', label: 'Direct Email', sub: 'alwaleedzeeh1@gmail.com',
                      icon: <svg className="h-5 w-5 flex-shrink-0 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="m4 4 8 7 8-7" /></svg> },
                  ].map(({ href, label, sub, icon }) => (
                    <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:text-white">
                      {icon}
                      <div>
                        <p className="font-semibold text-slate-100">{label}</p>
                        <p className="text-slate-500">{sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800/60 px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-600">
          © 2026 {profile.name} — Built with Next.js & Tailwind CSS
        </span>
        <span className="font-mono text-xs text-slate-700 animate-flicker">&lt;AW/&gt;</span>
      </footer>

    </main>
  );
}
