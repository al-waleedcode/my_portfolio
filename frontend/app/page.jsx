'use client';

const profileData = {
  name: "AL-WALEED ZAIH",
  title: "Full-Stack Web Developer",
  skills: [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'Python', 'C++'] },
    { title: 'Tools', items: ['Git', 'VS Code', 'Figma'] }
  ],
  projects: [
    {
      title: 'Dynamic Task Management System',
      description: 'Built to solve the problem of team disorganization. It provides a real-time, clutter-free environment for tracking progress. I engineered the backend logic to handle instantaneous updates without compromising the frontend speed, achieving top-tier performance metrics.',
      github: 'https://github.com/al-waleedcode/Task-Management-System',
      stack: ['JavaScript', 'Node.js', 'Express', 'CSS']
    },
    {
      title: 'Minimalist Personal Portfolio',
      description: 'Designed to replace bloated portfolio templates. I wanted a blazing-fast, SEO-optimized static site that loads instantly. By eliminating external API fetches and leveraging Static Site Generation (SSG), I created a seamless, zero-delay user experience.',
      github: 'https://github.com/al-waleedcode/my-portfolio',
      stack: ['Next.js', 'Tailwind CSS', 'React']
    },
    {
      title: 'Modern Landing Page',
      description: 'Created to help small businesses establish a digital footprint quickly. I focused heavily on mobile responsiveness and clean UI/UX, ensuring the site looks perfect on any device while maintaining highly structured and maintainable code.',
      github: 'https://github.com/al-waleedcode/Landing-Page',
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+']
    }
  ]
};

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="bg-slate-50 min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4">
              <p className="text-slate-600 uppercase tracking-widest text-sm">{profileData.name}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight">
                {profileData.title}
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl">
                Passionate about creating clean, efficient, and user-friendly web applications using modern technologies.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center min-w-[220px]">
              <span className="text-xs uppercase tracking-widest text-slate-500">Status</span>
              <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-slate-800 mt-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                Available
              </div>
              <p className="text-sm text-slate-600 mt-2">Ready to collaborate on exciting projects.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-800">Clean Code, Modern Design</h2>
            </div>
            <p className="text-slate-600 leading-8">
I am a 20-year-old Full-Stack Web Developer based in Sana'a, Yemen, building high-performance web applications for a global audience. With a strong foundation in modern JavaScript frameworks (React, Next.js) and scalable backend systems (Node.js), I focus on bridging the gap between complex logic and minimalist, intuitive user interfaces. Whether I am optimizing an app to hit a perfect 100/100 Lighthouse score or architecting a secure database, my goal is always the same: delivering seamless digital experiences.            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
                <h3 className="text-sm uppercase tracking-widest text-slate-500">Frontend</h3>
                <p className="mt-4 text-slate-600">React, Next.js, and Tailwind CSS for beautiful, interactive interfaces.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
                <h3 className="text-sm uppercase tracking-widest text-slate-500">Backend</h3>
                <p className="mt-4 text-slate-600">Node.js and Express for robust, scalable server-side solutions.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {profileData.skills.map((card, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
                </div>
                <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="bg-slate-50 rounded-full px-3 py-2 text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-slate-500">Projects</p>
            <h2 className="text-3xl font-semibold text-slate-800">Featured Work</h2>
            <p className="max-w-2xl text-slate-600 mt-2">
              A showcase of web development projects demonstrating modern technologies and clean design.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {profileData.projects.map((project, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm p-7 hover:shadow-md transition-shadow group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4 text-slate-500">
                    <span className="text-xs uppercase tracking-widest">Project</span>
                    <span className="bg-slate-100 rounded-full px-3 py-1 text-xs uppercase tracking-widest">
                      View</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
                    <p className="mt-3 text-slate-600 leading-7">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="bg-slate-100 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-800 hover:text-slate-600 transition-colors">
                    View Project
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white rounded-2xl shadow-sm p-8">
          <div className="mb-10 grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-800">Let's Work Together</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-800">Get In Touch</p>
              <p className="mt-2 leading-6">
                Ready to discuss your next web development project? Send me a message and let's create something amazing.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 rounded-2xl p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="text-slate-800">Name</span>
                <input type="text" placeholder="Your Name" className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all" />
              </label>
              <label className="space-y-2 text-sm text-slate-600">
                <span className="text-slate-800">Email</span>
                <input type="email" placeholder="your@email.com" className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-600">
              <span className="text-slate-800">Message</span>
              <textarea rows="5" placeholder="Tell me about your project..." className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-4 text-slate-800 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all" />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-2xl p-6 text-sm text-slate-600">
              <div>
                <p className="text-slate-800">Response Time</p>
                <p className="text-slate-600">I'll get back to you within 24 hours.</p>
              </div>
              <button type="submit" className="bg-slate-900 text-white rounded-full px-6 py-2 hover:bg-slate-800 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}