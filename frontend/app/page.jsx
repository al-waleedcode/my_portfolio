'use client';

import { useEffect, useState } from 'react';

const roleSequence = [
  'Cybersecurity Architect',
  'Full-Stack Systems Engineer',
  'Infosec Automation Expert',
  'Zero Trust Operator'
];

// هذه البيانات ستعمل كـ "خطة بديلة" في حال تأخر الخادم في الرد
const fallbackProjects = [
  {
    title: 'Sentinel SIEM Dashboard',
    description: 'A hardened observability platform with live threat graphs, anomaly detection, and SOC workflow automation.',
    stack: ['React', 'Next.js', 'Node.js', 'Elastic', 'Docker'],
    url: '#contact'
  },
  {
    title: 'Protocol Hardened API',
    description: 'Secure API gateway with JWT attestation, rate-limit circuits, and encrypted payload routing.',
    stack: ['TypeScript', 'Express', 'Redis', 'OpenSSL'],
    url: '#contact'
  }
];

const fallbackSkills = [
  { title: 'Core Languages', items: ['C++', 'JavaScript', 'Python', 'Rust'] },
  { title: 'Infosec Stack', items: ['Wireshark', 'Burp Suite', 'Nmap', 'Splunk'] },
  { title: 'Cloud & Infra', items: ['AWS', 'Kubernetes', 'Terraform', 'Docker'] }
];

export default function Page() {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  // المتغيرات الجديدة الخاصة بالبيانات القادمة من الباك إند
  const [projects, setProjects] = useState(fallbackProjects);
  const [skills, setSkills] = useState(fallbackSkills);
  const [name, setName] = useState('Walid');

  // كود الربط السحري (Fetch) مع خادم Render الخاص بك
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch('https://my-portfolio-xu6f.onrender.com/api/profile');
        if (!res.ok) {
          throw new Error(`Profile fetch failed with status ${res.status}`);
        }

        const result = await res.json();
        const profile = result?.data ?? result;

        if (profile.name) setName(profile.name);
        if (Array.isArray(profile.projects) && profile.projects.length > 0) setProjects(profile.projects);
        if (Array.isArray(profile.skills) && profile.skills.length > 0) setSkills(profile.skills);
      } catch (error) {
        console.error('Failed to fetch live profile data, using fallback.', error);
      }
    };
    fetchProfileData();
  }, []);

  // أنيميشن الكتابة
  useEffect(() => {
    const typeSpeed = deleting ? 45 : 85;
    const timeout = setTimeout(() => {
      const fullText = roleSequence[currentRole];
      if (!deleting) {
        setDisplayText(fullText.slice(0, currentChar + 1));
        setCurrentChar(currentChar + 1);
        if (currentChar + 1 === fullText.length) {
          setDeleting(true);
        }
      } else {
        setDisplayText(fullText.slice(0, currentChar - 1));
        setCurrentChar(currentChar - 1);
        if (currentChar - 1 === 0) {
          setDeleting(false);
          setCurrentRole((currentRole + 1) % roleSequence.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentChar, currentRole, deleting]);

  useEffect(() => {
    const interval = setInterval(() => setCursor((state) => !state), 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="relative overflow-hidden px-6 pb-24 pt-10 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-80" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <p className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300/90 shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                Cyber Portfolio • {name}
              </p>
              <div className="space-y-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    I build secure platforms with a <span className="text-cyan-300">hacker-chic</span> edge.
                  </h1>
                </div>
                <p className="max-w-2xl text-slate-200 sm:text-lg">
                  Modern security-first engineering, highly optimized UI, and system-level tooling with an aesthetic that blends glassmorphism, neon-grid visuals, and technical precision.
                </p>
              </div>
            </div>

            <div className="flex min-w-[220px] flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-[0_0_80px_rgba(6,16,27,0.32)] backdrop-blur-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Live Status</span>
              <div className="flex items-baseline gap-2 text-3xl font-semibold text-[#e2f7ff]">
                <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-neon animate-pulse" />
                Online
              </div>
              <p className="text-sm text-slate-300">System secure. Performance optimized. Interface connected.</p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_auto] lg:items-end">
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Profile</p>
              <div className="space-y-4 text-slate-200">
                <p className="text-lg leading-8">
                  I fuse offensive and defensive development, delivering resilient full-stack products that feel polished at every touchpoint.
                </p>
                <p className="inline-flex items-center rounded-full border border-cyan-300/10 bg-cyan-500/5 px-3 py-2 text-sm text-cyan-200/90">
                  <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-neon" />
                  Adaptive systems, secure APIs, and command-line inspired interfaces.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-300">Role</p>
              <div className="relative mx-auto inline-flex items-center overflow-hidden rounded-full border border-cyan-400/10 bg-white/5 px-5 py-4 text-xl font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)] sm:text-2xl">
                <span className="mr-2 text-slate-200">{displayText}</span>
                <span className={`h-7 w-1 rounded-sm bg-cyan-300 transition-opacity duration-200 ${cursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">About</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Bento-style intelligence.</h2>
              </div>
              <span className="inline-flex rounded-full bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                Precision / Edge</span>
            </div>
            <p className="text-slate-200 leading-8">
              I design cyber-lean interfaces and resilient architectures, with a focus on secure automation, system observability, and high-performance developer experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_-32px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
                <h3 className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Focus</h3>
                <p className="mt-4 text-slate-200">Secure architecture, telemetry pipelines, and exploit-resistant frontend systems.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_-32px_rgba(16,185,129,0.14)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20">
                <h3 className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Approach</h3>
                <p className="mt-4 text-slate-200">Glassmorphism UI, terminal-driven workflows, and cryptographic thinking baked into every interaction.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {(skills ?? []).map((card, index) => (
              <article key={index} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{card.title || card.category}</h3>
                  <span className="rounded-full border border-cyan-500/10 bg-cyan-400/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                    Specialized</span>
                </div>
                <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  {(card.items ?? []).map((item, i) => (
                    <li key={i} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-500/10">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Projects</p>
            <h2 className="text-3xl font-semibold text-slate-100">Threat-aware product design.</h2>
            <p className="max-w-2xl text-slate-400">
              A curated showcase of enterprise-grade systems, security analytics, and hacker-style tooling delivered with front-end polish.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {(projects ?? []).map((project, index) => (
              <article key={index} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-panel backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_25%)] opacity-80 mix-blend-screen" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between gap-4 text-slate-300">
                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Project</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-slate-300 border border-white/10">
                      Live / Repo</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-slate-200 leading-7">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(project.stack ?? []).map((tech, i) => (
                      <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-500/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.url || project.link || '#'} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 group-hover:text-cyan-100">
                    View Project
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400/15 via-emerald-400/10 to-cyan-400/15 text-white transition duration-300 group-hover:bg-cyan-400/20 shadow-[0_0_14px_rgba(34,211,238,0.18),0_0_12px_rgba(16,185,129,0.1)]">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* نموذج الاتصال بقي كما هو */}
        <section id="contact" className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-2xl">
          <div className="mb-10 grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Start the secure design conversation.</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p className="font-medium text-slate-200">Terminal Brief</p>
              <p className="mt-2 leading-6">
                Send an encrypted inquiry with project scope, timeline, and the security posture you want to build.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span className="text-slate-300">Alias</span>
                <input type="text" placeholder="Echo Ghost" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span className="text-slate-300">Mission</span>
                <input type="text" placeholder="Secure API observability" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-200">
              <span className="text-slate-300">Payload</span>
              <textarea rows="5" placeholder="Describe your scope, regulatory needs, and delivery window." className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15" />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-slate-300 shadow-[0_15px_60px_-30px_rgba(34,211,238,0.12)]">
              <div>
                <p className="text-slate-200">Delivery</p>
                <p className="text-slate-300">Secure response within 24h — encrypted route optional.</p>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400/15 via-emerald-400/10 to-cyan-400/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_0_24px_rgba(34,211,238,0.18),0_0_16px_rgba(16,185,129,0.1)] transition duration-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.28),0_0_24px_rgba(16,185,129,0.16)] hover:bg-cyan-400/25">
                Send briefing
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}