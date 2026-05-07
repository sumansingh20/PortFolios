'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  const projects = [
    {
      title: 'Secure Multi-Factor Authentication Platform',
      description:
        'Advanced MFA system with OTP verification and secure session protection mechanisms.',
      tags: [
        'Python',
        'Flask',
        'JWT',
        'bcrypt',
        'MySQL',
        'REST APIs',
      ],
      features: [
        'Multi-factor authentication',
        'OTP verification',
        'Token-based protection',
        'Session management',
      ],
      color: 'border-cyber-cyan/30 hover:border-cyber-cyan/60',
      gradient: 'from-cyber-cyan/10 to-cyber-blue/10',
    },
    {
      title: 'Aegis Offensive Security Framework',
      description:
        'Comprehensive framework for vulnerability assessment, threat analysis, and security monitoring.',
      tags: [
        'Python',
        'Linux',
        'Bash',
        'Security Tools',
        'Network Security',
      ],
      features: [
        'Vulnerability scanning',
        'Threat analysis',
        'Security automation',
        'Offensive testing workflows',
      ],
      color: 'border-cyber-purple/30 hover:border-cyber-purple/60',
      gradient: 'from-cyber-purple/10 to-cyber-cyan/10',
    },
    {
      title: 'BharatMail Secure Email Platform',
      description:
        'Secure email platform with end-to-end authentication and encrypted communication workflows.',
      tags: [
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'bcrypt',
        'REST APIs',
      ],
      features: [
        'Secure authentication',
        'Protected communication',
        'Encrypted workflows',
        'User security management',
      ],
      color: 'border-cyber-blue/30 hover:border-cyber-blue/60',
      gradient: 'from-cyber-blue/10 to-cyber-emerald/10',
    },
    {
      title: 'Smart Traffic Violation Detector',
      description:
        'AI-powered real-time traffic monitoring and violation detection system using advanced computer vision.',
      tags: [
        'YOLOv5',
        'OpenCV',
        'TensorFlow',
        'Python',
        'Real-time Analytics',
      ],
      features: [
        'Vehicle detection',
        'Real-time analytics',
        'Speed estimation',
        'Automated monitoring',
      ],
      color: 'border-cyber-emerald/30 hover:border-cyber-emerald/60',
      gradient: 'from-cyber-emerald/10 to-cyber-purple/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          title="Featured Projects"
          subtitle="Selected work that blends security, automation, and product-minded engineering."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`proj-card group relative p-6 rounded-2xl card-surface border transition-all ${project.color}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-cyber-cyan mb-3 section-title group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-body text-sm mb-4 font-inter">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs text-cyber-cyan/70 font-semibold mb-2">
                    KEY FEATURES
                  </p>
                  <ul className="space-y-1">
                    {project.features.map((feature, j) => (
                      <li
                        key={j}
                        className="text-xs text-gray-400 flex items-center gap-2 font-inter"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyber-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md text-xs badge-chip font-jetbrains"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-cyber-cyan/10">
                  <motion.button
                    className="flex-1 py-2 rounded bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-sm font-inter font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                  <motion.button
                    className="flex-1 py-2 rounded bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 transition-all text-sm font-inter font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
