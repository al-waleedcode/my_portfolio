'use client';

const profileData = {
  name: "AL-WALEED ZAIH",
  title: "Full-Stack Web Developer",
  // أضفت روابط التواصل هنا ليسهل التحكم بها
  socials: {
    github: "https://github.com/al-waleedcode",
    linkedin: "https://linkedin.com/in/your-profile", // استبدل هذا برابط حسابك الحقيقي
    email: "mailto:alwaleedzeeh1@gmail.com"
  },
  skills: [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'Python', 'C++'] },
    { title: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Cursor AI'] }
  ],
  projects: [
    {
      title: 'Task Management System',
      description: 'A comprehensive and dynamic task management system designed to provide a seamless user experience and high performance for modern teams.',
      github: 'https://github.com/al-waleedcode/Task-Management-System',
      stack: ['JavaScript', 'Node.js', 'HTML', 'CSS']
    },
    {
      title: 'Modern Landing Page',
      description: 'A professional, fully responsive landing page with a modern design aesthetic, built using clean and highly structured code.',
      github: 'https://github.com/al-waleedcode/Landing-Page',
      stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Minimalist Personal Portfolio',
      description: 'A blazing-fast, SEO-optimized personal portfolio built as a static site to showcase full-stack capabilities with maximum performance.',
      github: 'https://github.com/al-waleedcode/my-portfolio',
      stack: ['Next.js', 'Tailwind CSS', 'React']
    }
  ]
};

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header / Intro Section */}
        <section className="bg-white rounded-3xl shadow-sm p-10 md:p-16 border border-slate-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="space-y-6">
              <div className="inline-block bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-[0.2em]">
                {profileData.name}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
                Hi, I'm Al-Waleed.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                A <span className="text-slate-900 font-medium">Full-Stack Web Developer</span> passionate about building clean, modern, and efficient web applications using Next.js and Node.js.
              </p>
              <div className="flex gap-4 pt-4">
                <a href={profileData.socials.github} target="_blank" className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all font-medium">
                  GitHub
                </a>
                <a href="#contact" className="border border-slate-200 px-8 py-3 rounded-full hover:bg-slate-50 transition-all font-medium text-slate-800">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-sm p-10 border border-slate-100 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Clean Code, Modern Design</h2>
            <p className="text-slate-600 leading-8 text-lg">
              I specialize in building responsive, high-performance web applications. My focus is on creating exceptional user experiences through clean architecture and scalable backend solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-slate-900 font-bold text-2xl">2025</p>
                  <p className="text-slate-500 text-sm">Graduated</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-slate-900 font-bold text-2xl">Full-Stack</p>
                  <p className="text-slate-500 text-sm">Focused</p>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            {profileData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{skillGroup.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Featured Work</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A selection of my recent full-stack projects, showcasing modern technologies and clean design.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {profileData.projects.map((project, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project</span>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm h-20 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-500 uppercase">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full pt-4 border-t border-slate-50 group-hover:border-slate-100 transition-colors text-slate-900 font-bold">
                    View on GitHub
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold">Ready to build something amazing?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            I'm currently available for new projects and collaborations. Let's talk about your next big idea.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={profileData.socials.email} className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Send an Email
            </a>
            <a href={profileData.socials.linkedin} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} {profileData.name}. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}