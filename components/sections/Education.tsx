'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function Education() {
  const education = [
    {
      school: 'Indian Institute of Technology Patna',
      degree: 'Bachelor of Science',
      field: 'Computer Science and Data Analytics',
      year: '2023 - Present',
      cgpa: 'CGPA: 8.65',
      details: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Cybersecurity Fundamentals',
        'Artificial Intelligence',
        'Machine Learning',
      ],
    },
    {
      school: 'BSEB Board',
      degree: 'Senior Secondary',
      field: 'Science Stream',
      year: '2023',
      cgpa: 'Percentage: 62%',
      details: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    },
  ];

  return (
    <section id="education" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          title="Education"
          subtitle="My academic path in computer science, analytics, and the foundations that power my security work."
        />

        <div className="relative pl-8 sm:pl-12">
          <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-px sm:left-[11px]" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <span className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-cyber-cyan bg-[#080b17] sm:-left-12">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
                </span>

                <div className="glass-card spotlight group p-6 sm:p-7">
                  <div className="relative z-10">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyber-cyan/25 bg-cyber-cyan/10 text-cyber-cyan">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white section-title">{edu.degree}</h3>
                          <p className="text-body font-inter">{edu.school}</p>
                        </div>
                      </div>
                      <div className="text-sm text-white/45 font-jetbrains sm:text-right">
                        {edu.year}
                      </div>
                    </div>

                    <p className="mb-1 text-body font-inter">{edu.field}</p>
                    <p className="mb-4 text-sm font-semibold text-cyber-cyan/80 font-jetbrains">
                      {edu.cgpa}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.details.map((detail, j) => (
                        <span key={j} className="rounded-full px-3 py-1 text-xs badge-chip font-inter">
                          {detail}
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
