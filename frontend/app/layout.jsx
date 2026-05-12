import './globals.css';

// metadataBase مطلوب لأن Next.js يستخدمه لبناء روابط og:image
export const metadata = {
  metadataBase: new URL('https://my-portfolio-ten-xi-14.vercel.app'),
  title: 'AL-WALEED ZAIH | Full-Stack Developer',
  description:
    "Full-Stack Web Developer specializing in React, Next.js, and Node.js. Building high-performance web applications from Sana'a, Yemen.",
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Web Developer',
    'AL-WALEED ZAIH',
  ],
  authors: [{ name: 'AL-WALEED ZAIH' }],
  // Canonical URL — مهم لتجنب duplicate content في Google
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AL-WALEED ZAIH | Full-Stack Developer',
    description: 'Building high-performance web applications with modern technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://my-portfolio-ten-xi-14.vercel.app',
    siteName: 'AL-WALEED ZAIH Portfolio',
    // og:image — أضفها لما يكون عندك صورة مناسبة
    // images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL-WALEED ZAIH | Full-Stack Developer',
    description: 'Building high-performance web applications with modern technologies.',
    // images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
