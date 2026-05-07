'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Github from '@/components/sections/Github';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Github />
      <Contact />
      <Footer />
    </main>
  );
}
