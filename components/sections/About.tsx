'use client';

import { motion } from 'framer-motion';
import { Fingerprint, BrainCircuit, Layers, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  const stats = [
    { label: 'Public Repositories', value: '58' },
    { label: 'Featured Projects', value: '6' },
    { label: 'Certifications', value: '6' },
    { label: 'CGPA', value: '8.65' },
  ];

  const focus = [
    { Icon: Fingerprint, title: 'Security Engineering', text: 'Application & offensive security, threat analysis.' },
    { Icon: BrainCircuit, title: 'AI Systems', text: 'Agentic AI, RAG, LLM-powered tooling.' },
    { Icon: Layers, title: 'Full-Stack', text: 'Next.js, Node, Python and secure APIs.' },
  ];

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <section id="about" className="section-shell w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="About Me"
          subtitle="A quick snapshot of my background in security, AI, and building secure digital systems."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Intro */}
          <motion.div {...fade()} className="glass-card spotlight p-8 lg:col-span-2">
            <div className="relative z-10 space-y-5 text-lg leading-relaxed text-body">
              <p>
                I&apos;m a security-focused developer and a BSc Computer Science
                &amp; Data Analytics student at{' '}
                <span className="font-semibold text-cyber-cyan">IIT Patna</span>,
                building secure and scalable applications.
              </p>
              <p>
                My work spans application security, offensive security tooling, and
                full-stack development — from AI-driven security platforms and
                agentic AI systems to production web applications.
              </p>
              <p>
                I like turning ideas into shipped software: designing the system,
                hardening it, and iterating in public. Most of what I build lives on
                my GitHub — take a look at the projects below.
              </p>
            </div>
          </motion.div>

          {/* Focus */}
          <motion.div {...fade(0.1)} className="glass-card spotlight p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center gap-2 text-sm text-white/60">
                <MapPin size={15} className="text-cyber-cyan" />
                Patna, Bihar, India
              </div>
              <div className="space-y-5">
                {focus.map(({ Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyber-cyan">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{title}</div>
                      <div className="text-sm text-white/55">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 lg:col-span-3 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fade(0.05 * i)}
                className="glass-card spotlight flex flex-col items-center justify-center p-7 text-center"
              >
                <div className="relative z-10 text-4xl font-bold text-gradient section-title">
                  {stat.value}
                </div>
                <div className="relative z-10 mt-2 text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
