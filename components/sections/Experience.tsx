'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function Experience() {
  const experiences = [
    {
      title: 'Cybersecurity Intern',
      company: 'GUVI (HCL Tech)',
      period: 'June 2025 - September 2025',
      location: 'Remote',
      responsibilities: [
        'Advanced network reconnaissance and vulnerability assessment',
        'Packet inspection and traffic analysis',
        'Security monitoring and ethical hacking exercises',
        'Penetration testing and Linux hardening',
        'Authentication security and threat investigation',
      ],
      tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite'],
    },
    {
      title: 'Cybersecurity Research & Development',
      company: 'Independent Research',
      period: 'September 2025 - Present',
      location: 'Remote',
      responsibilities: [
        'Security automation systems design',
        'Offensive security experimentation',
        'Threat analysis and web security testing',
        'Authentication systems development',
        'Penetration testing workflow optimization',
        'Linux security research and monitoring frameworks',
      ],
      tools: ['Python', 'Bash', 'Linux', 'Security Tools'],
    },
  ];

  return (
    <section id="experience" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="Hands-on work across security research, offensive tooling, and production-minded technical problem solving."
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="card-surface p-6 rounded-2xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyber-purple/10 group-hover:bg-cyber-purple/20 transition-all">
                  <Briefcase className="text-cyber-purple" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyber-purple section-title">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-body font-inter">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0 text-right font-jetbrains">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-cyber-cyan mb-2 uppercase tracking-[0.2em] font-jetbrains">
                      Responsibilities:
                    </h4>
                    <ul className="space-y-1 text-body text-sm font-inter">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-cyber-cyan mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs badge-chip font-inter"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
