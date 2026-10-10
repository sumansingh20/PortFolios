'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type Project = {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  color: string;
  gradient: string;
  code: string;
  demo?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Threavix-AI',
      description:
        'Agentic AI cybersecurity platform for security log analysis, threat intelligence, and incident investigation with evidence-based remediation.',
      tags: ['Python', 'LLMs', 'RAG', 'LangGraph', 'FastAPI', 'MITRE ATT&CK'],
      features: [
        'Security log analysis',
        'Threat intelligence',
        'MITRE ATT&CK mapping',
        'Evidence-based remediation',
      ],
      color: 'border-cyber-cyan/30 hover:border-cyber-cyan/60',
      gradient: 'from-cyber-cyan/10 to-cyber-blue/10',
      code: 'https://github.com/sumansingh20/Threavix-AI',
    },
    {
      title: 'Ai-Driven Zero-Trust Security',
      description:
        'Zero-trust security platform that applies AI-driven policies to continuously verify and protect access across the stack.',
      tags: ['TypeScript', 'Zero Trust', 'AI', 'Security'],
      features: [
        'Continuous verification',
        'AI-driven policy',
        'Least-privilege access',
        'Live deployed demo',
      ],
      color: 'border-cyber-purple/30 hover:border-cyber-purple/60',
      gradient: 'from-cyber-purple/10 to-cyber-cyan/10',
      code: 'https://github.com/sumansingh20/Ai-Driven-Zero-Trust-Security',
      demo: 'https://cybershieldzerotrust.netlify.app/',
    },
    {
      title: 'Kavach Infinity',
      description:
        'AI-powered critical infrastructure protection platform with real-time monitoring, anomaly detection, and safety automation for grids and smart cities.',
      tags: ['Python', 'Anomaly Detection', 'Real-time Monitoring', 'AI'],
      features: [
        'Real-time monitoring',
        'Anomaly detection',
        'Safety automation',
        'Infrastructure telemetry',
      ],
      color: 'border-cyber-emerald/30 hover:border-cyber-emerald/60',
      gradient: 'from-cyber-emerald/10 to-cyber-purple/10',
      code: 'https://github.com/sumansingh20/kavach-infinity',
      demo: 'https://kavach-infinity-full.vercel.app',
    },
    {
      title: 'NexaMind-AI',
      description:
        'Agentic RAG platform for intelligent document research and knowledge automation with semantic search and source citations.',
      tags: ['Python', 'LangGraph', 'Vector DB', 'RAG', 'FastAPI'],
      features: [
        'Semantic search',
        'Source citations',
        'Document research',
        'AI evaluation',
      ],
      color: 'border-cyber-blue/30 hover:border-cyber-blue/60',
      gradient: 'from-cyber-blue/10 to-cyber-emerald/10',
      code: 'https://github.com/sumansingh20/NexaMind-AI',
    },
    {
      title: 'Inventra ERP',
      description:
        'Full-stack inventory and ERP system covering stock tracking, orders, and operational dashboards for small businesses.',
      tags: ['JavaScript', 'Full Stack', 'Dashboard', 'REST'],
      features: [
        'Inventory tracking',
        'Order management',
        'Reporting dashboard',
        'Live deployed demo',
      ],
      color: 'border-cyber-cyan/30 hover:border-cyber-cyan/60',
      gradient: 'from-cyber-cyan/10 to-cyber-emerald/10',
      code: 'https://github.com/sumansingh20/InventraErp',
      demo: 'https://inventory-three-beryl-77.vercel.app',
    },
    {
      title: 'Edyra LMS',
      description:
        'Learning management system with proctored online examinations and a modern learning experience for students and instructors.',
      tags: ['TypeScript', 'Next.js', 'Proctored Exams', 'EdTech'],
      features: [
        'Proctored exams',
        'Course delivery',
        'Student analytics',
        'Live deployed demo',
      ],
      color: 'border-cyber-purple/30 hover:border-cyber-purple/60',
      gradient: 'from-cyber-purple/10 to-cyber-blue/10',
      code: 'https://github.com/sumansingh20/EdyraLMS',
      demo: 'https://proctoredexam.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          subtitle="Real, shipped work from my GitHub — security platforms, AI systems, and full-stack products."
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
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
              />

              <div className="relative z-10 flex h-full flex-col">
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
                <div className="mt-auto flex gap-3 pt-4 border-t border-cyber-cyan/10">
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-sm font-inter font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 transition-all text-sm font-inter font-semibold flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
