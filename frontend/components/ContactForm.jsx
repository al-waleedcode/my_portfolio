'use client';

import { useState } from 'react';

// ⚠️ الخطوات:
// 1. اذهب إلى https://formspree.io وسجّل حساب مجاني
// 2. أنشئ form جديد واحصل على الـ ID
// 3. ضع الـ ID هنا بدل YOUR_FORM_ID
const FORMSPREE_ID = 'YOUR_FORM_ID';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // reset الفورم
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // ── حالة النجاح ──
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-mono text-emerald-400 text-sm">Message_Sent.exe ✓</p>
        <p className="text-slate-400 text-xs">I'll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors mt-2"
        >
          [ Send_Another() ]
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full bg-slate-900/60 border border-slate-700 focus:border-cyan-500/60 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-all focus:shadow-neon-sm font-mono text-sm resize-none"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="font-mono text-xs text-red-400">
          ⚠ Something went wrong. Try emailing me directly.
        </p>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-slate-500 font-mono text-xs">Response within 24 hours</span>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="relative group bg-transparent border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-neon-sm overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {status === 'loading' ? '[ Sending... ]' : '[ Send_Message() ]'}
          </span>
          <span className="absolute inset-0 bg-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
        </button>
      </div>
    </form>
  );
}
