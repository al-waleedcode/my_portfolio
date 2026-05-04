import './globals.css';

export const metadata = {
  title: 'AL-WALEED ZAIH | Full-Stack Developer',
  description: 'Full-Stack Web Developer specializing in React, Next.js, and Node.js. Building high-performance web applications from Sana\'a, Yemen.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'AL-WALEED ZAIH'],
  authors: [{ name: 'AL-WALEED ZAIH' }],
  openGraph: {
    title: 'AL-WALEED ZAIH | Full-Stack Developer',
    description: 'Building high-performance web applications with modern technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL-WALEED ZAIH | Full-Stack Developer',
    description: 'Building high-performance web applications with modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
