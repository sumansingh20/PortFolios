'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Security Systems', value: '8+' },
    { label: 'Contributions', value: '50+' },
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
              I'm a passionate Cybersecurity Engineer and AI Developer from{' '}
              <span className="text-cyber-cyan font-semibold">
                IIT Patna
              </span>
              , deeply committed to building intelligent, secure, and innovative systems.
            </p>
            <p className="text-lg font-inter leading-relaxed">
              My expertise spans offensive security, ethical hacking, AI-driven
              security systems, and full-stack development. I'm particularly
              interested in designing next-generation cybersecurity platforms
              and exploring the intersection of AI and security.
            </p>
            <p className="text-lg font-inter leading-relaxed">
              With hands-on experience in penetration testing, vulnerability
              assessment, security automation, and AI model integration, I'm
              driven to solve real-world problems and contribute to the
              cybersecurity and tech startup ecosystem.
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
