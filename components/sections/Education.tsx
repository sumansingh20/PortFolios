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
          index="02"
          title="Education"
          subtitle="My academic path in computer science, analytics, and the foundations that power my security work."
        />

        <div className="space-y-8">
          {education.map((edu, i) => (
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
                <div className="p-3 rounded-xl bg-cyber-cyan/10 group-hover:bg-cyber-cyan/20 transition-all">
                  <GraduationCap className="text-cyber-cyan" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyber-cyan section-title">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-body font-inter">
                        {edu.school}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0 font-jetbrains">
                      {edu.year}
                    </div>
                  </div>
                  <p className="text-body mb-3 font-inter">{edu.field}</p>
                  <p className="text-cyber-cyan/80 text-sm mb-3">{edu.cgpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map((detail, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs badge-chip font-inter"
                      >
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
    </section>
  );
}
