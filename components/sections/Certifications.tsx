'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function Certifications() {
  const certifications = [
    'GUVI - HCL Cybersecurity Internship Certification',
    'Cybersecurity & Ethical Hacking Training',
    'Python Programming Certifications',
    'Linux Administration Certifications',
    'Network Security Certifications',
    'Offensive Security Fundamentals',
  ];

  return (
    <section id="certifications" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          title="Certifications"
          subtitle="Training and credentials that support my security and development work."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="card-surface p-4 rounded-2xl transition-all group flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <Award className="text-cyber-emerald flex-shrink-0" size={20} />
              <span className="text-body font-inter group-hover:text-white transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
