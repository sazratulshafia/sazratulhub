import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://sazratulhub.com'),
  title: 'Sazratul Islam | Full-Stack Developer & Web Architect',
  description: 'Full-stack developer crafting modern, performant web experiences with Next.js, React, TypeScript, and cloud technologies. Based in Dhaka, Bangladesh.',
  keywords: [
    'Sazratul Islam',
    'sazratulhub',
    'full-stack developer',
    'web developer Bangladesh',
    'Next.js developer',
    'React developer',
    'TypeScript developer',
    'freelance developer Dhaka',
    'web architect',
    'portfolio',
  ],
  authors: [{ name: 'Sazratul Islam' }],
  openGraph: {
    title: 'Sazratul Islam | Full-Stack Developer & Web Architect',
    description: 'Full-stack developer crafting modern web experiences with cutting-edge technologies.',
    url: 'https://sazratulhub.com',
    siteName: 'sazratulhub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sazratul Islam | Full-Stack Developer',
    description: 'Full-stack developer crafting modern web experiences with cutting-edge technologies.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="lenis">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScrollProvider>
          <Header />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
