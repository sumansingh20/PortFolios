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
  title: 'Suman Kumar - Cybersecurity Engineer & AI Developer',
  description:
    'Ultra-premium portfolio of Suman Kumar - Cybersecurity Engineer, AI Developer, and Ethical Hacker from IIT Patna. Building intelligent AI-powered cybersecurity systems.',
  keywords: [
    'cybersecurity',
    'AI developer',
    'ethical hacker',
    'penetration testing',
    'offensive security',
    'IIT Patna',
    'full stack developer',
  ],
  authors: [{ name: 'Suman Kumar' }],
  openGraph: {
    title: 'Suman Kumar - Cybersecurity Engineer & AI Developer',
    description:
      'Ultra-premium portfolio of Suman Kumar - Building intelligent AI-powered cybersecurity systems.',
    type: 'website',
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${poppins.variable} bg-gradient-dark text-white antialiased`}
      >
        <div className="relative w-full min-h-screen overflow-hidden">
          <div className="fixed inset-0 -z-20 bg-canvas pointer-events-none" />
          <div className="fixed -top-24 -left-24 h-96 w-96 rounded-full bg-cyber-cyan/15 blur-3xl opacity-60 pointer-events-none -z-10 animate-drift" />
          <div className="fixed top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyber-purple/10 blur-3xl opacity-60 pointer-events-none -z-10 animate-drift" />
          <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none bg-[linear-gradient(to_bottom,rgba(5,5,5,0.2),rgba(5,5,5,0.55))]" />

          <TemplateEffects />
          {children}
        </div>
      </body>
    </html>
  );
}
