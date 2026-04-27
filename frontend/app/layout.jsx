import './globals.css';

export const metadata = {
  title: 'Cipher Portfolio | Cyber Dev',
  description: 'Ultra-modern cybersecurity-inspired portfolio built with Next.js and Tailwind CSS.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
