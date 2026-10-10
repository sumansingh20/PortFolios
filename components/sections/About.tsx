'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  const stats = [
    { label: 'Public Repositories', value: '58' },
    { label: 'Featured Projects', value: '6' },
    { label: 'Certifications', value: '6' },
    { label: 'CGPA', value: '8.65' },
  ];

  return (
    <section id="about" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="About Me"
          subtitle="A quick snapshot of my background in cybersecurity, AI, and building secure digital systems."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-body"
          >
            <p className="text-lg font-inter leading-relaxed">
              I'm a security-focused developer and a BSc Computer Science &
              Data Analytics student at{' '}
              <span className="text-cyber-cyan font-semibold">IIT Patna</span>,
              building secure and scalable applications.
            </p>
            <p className="text-lg font-inter leading-relaxed">
              My work spans application security, offensive security tooling,
              and full-stack development — from AI-driven security platforms
              and agentic AI systems to production web applications.
            </p>
            <p className="text-lg font-inter leading-relaxed">
              I like turning ideas into shipped software: designing the system,
              hardening it, and iterating in public. Most of what I build lives
              on my GitHub — take a look at the projects below.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="card-surface p-6 rounded-2xl transition-all"
                whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' }}
              >
                <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2 section-title">
                  {stat.value}
                </div>
                <div className="text-sm text-body font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="mt-12 h-0.5 w-20 mx-auto bg-gradient-cyber"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
