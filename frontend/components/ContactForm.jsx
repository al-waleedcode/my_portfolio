'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Name
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm resize-none"
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        {status === 'success' && (
          <span className="text-emerald-400 font-mono text-sm flex items-center gap-2">
            <span className="text-lg">✓</span> Message sent! I'll reply within 24h.
          </span>
        )}
        {status === 'error' && (
          <span className="text-red-400 font-mono text-sm flex items-center gap-2">
            <span>✗</span> Something went wrong. Try again.
          </span>
        )}
        {(status === 'idle' || status === 'sending') && (
          <span className="text-slate-500 font-mono text-xs">
            Response within 24 hours
          </span>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="relative group bg-transparent border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-neon-sm disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <span className="relative z-10">
            {status === 'sending' ? '[ Sending... ]' : '[ Send_Message() ]'}
          </span>
          <span className="absolute inset-0 bg-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
        </button>
      </div>
    </form>
  );
}
