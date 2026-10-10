import type { Metadata } from 'next';
import './globals.css';
import TemplateEffects from '@/components/TemplateEffects';
import { Inter, Space_Grotesk, JetBrains_Mono, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suman Kumar - Security Engineer & Full-Stack Developer',
  description:
    'Portfolio of Suman Kumar - Security Engineer and Full-Stack Developer from IIT Patna. Building secure, scalable applications and AI-powered systems.',
  keywords: [
    'Suman Kumar',
    'sumansingh20',
    'security engineer',
    'cybersecurity',
    'full stack developer',
    'ethical hacking',
    'penetration testing',
    'AI developer',
    'IIT Patna',
  ],
  authors: [{ name: 'Suman Kumar', url: 'https://github.com/sumansingh20' }],
  creator: 'Suman Kumar',
  metadataBase: new URL('https://sumanportfolios.vercel.app'),
  openGraph: {
    title: 'Suman Kumar - Security Engineer & Full-Stack Developer',
    description:
      'Security Engineer and Full-Stack Developer from IIT Patna. Building secure, scalable applications and AI-powered systems.',
    type: 'website',
    siteName: 'Suman Kumar',
    url: 'https://sumanportfolios.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suman Kumar - Security Engineer & Full-Stack Developer',
    description:
      'Security Engineer and Full-Stack Developer from IIT Patna. Building secure, scalable applications and AI-powered systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${poppins.variable} antialiased`}
      >
        <div className="relative w-full min-h-screen overflow-hidden">
          <div className="fixed inset-0 -z-20 bg-canvas pointer-events-none" />
          <div className="aurora" aria-hidden>
            <span className="a1" />
            <span className="a2" />
            <span className="a3" />
          </div>
          <div className="grid-overlay" />
          <div className="grain" />

          <TemplateEffects />
          {children}
        </div>
      </body>
    </html>
  );
}
