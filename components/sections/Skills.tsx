'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'from-cyber-cyan to-cyber-blue',
      skills: [
        'Python',
        'C',
        'C++',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Bash',
      ],
    },
    {
      category: 'Cybersecurity',
      color: 'from-cyber-purple to-cyber-cyan',
      skills: [
        'Ethical Hacking',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Network Security',
        'Threat Analysis',
        'Security Monitoring',
        'Packet Inspection',
        'Linux Hardening',
        'Authentication Security',
      ],
    },
    {
      category: 'Security Tools',
      color: 'from-cyber-emerald to-cyber-purple',
      skills: [
        'Kali Linux',
        'Nmap',
        'Wireshark',
        'Burp Suite',
        'Metasploit',
        'Bash Scripting',
        'Security Frameworks',
      ],
    },
    {
      category: 'AI & Machine Learning',
      color: 'from-cyber-blue to-cyber-emerald',
      skills: [
        'TensorFlow',
        'OpenCV',
        'YOLOv5',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'AI Automation',
      ],
    },
    {
      category: 'Full Stack Development',
      color: 'from-cyber-cyan to-cyber-purple',
      skills: [
        'ReactJS',
        'Next.js',
        'Node.js',
        'Flask',
        'REST APIs',
        'PostgreSQL',
        'HTML/CSS',
        'MongoDB',
      ],
    },
    {
      category: 'DevOps & Tools',
      color: 'from-cyber-emerald to-cyber-blue',
      skills: [
        'Git',
        'Docker',
        'Linux',
        'VS Code',
        'Jupyter Notebook',
        'Google Colab',
        'GitHub',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Skills & Expertise"
          subtitle="A technical toolkit spanning defensive security, AI systems, and modern full-stack delivery."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              className="card-surface p-6 rounded-2xl transition-all group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3
                className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent section-title`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs badge-chip font-inter hover:scale-105 transition-transform cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
