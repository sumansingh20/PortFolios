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
          index="04"
          title="Experience"
          subtitle="Hands-on work across security research, offensive tooling, and production-minded technical problem solving."
        />

        <div className="relative pl-8 sm:pl-12">
          <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-px sm:left-[11px]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <span className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-cyber-purple bg-[#080b17] sm:-left-12">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-purple" />
                </span>

                <div className="glass-card spotlight group p-6 sm:p-7">
                  <div className="relative z-10">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyber-purple/25 bg-cyber-purple/10 text-cyber-purple">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white section-title">{exp.title}</h3>
                          <p className="text-body font-inter">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-sm text-white/45 font-jetbrains sm:text-right">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    <ul className="mb-5 space-y-1.5 text-body text-sm font-inter">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1 text-cyber-cyan">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, j) => (
                        <span key={j} className="rounded-full px-3 py-1 text-xs badge-chip font-inter">
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
      </div>
    </section>
  );
}
