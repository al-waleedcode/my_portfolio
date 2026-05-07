'use client';

export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm resize-none"
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-slate-500 font-mono text-xs">
          Response within 24 hours
        </span>

        <button
          type="submit"
          className="relative group bg-transparent border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-neon-sm overflow-hidden"
        >
          <span className="relative z-10">[ Send_Message() ]</span>
          <span className="absolute inset-0 bg-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
        </button>
      </div>
    </form>
  );
}
