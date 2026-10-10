'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type Project = {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  accent: string;
  glow: string;
  code: string;
  demo?: string;
  featured?: boolean;
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
      accent: 'from-cyber-cyan to-cyber-blue',
      glow: 'rgba(34,211,238,0.35)',
      code: 'https://github.com/sumansingh20/Threavix-AI',
      featured: true,
    },
    {
      title: 'Ai-Driven Zero-Trust Security',
      description:
        'Zero-trust platform applying AI-driven policies to continuously verify and protect access across the stack.',
      tags: ['TypeScript', 'Zero Trust', 'AI', 'Security'],
      features: ['Continuous verification', 'AI-driven policy', 'Least-privilege access', 'Live demo'],
      accent: 'from-cyber-purple to-cyber-cyan',
      glow: 'rgba(168,85,247,0.35)',
      code: 'https://github.com/sumansingh20/Ai-Driven-Zero-Trust-Security',
      demo: 'https://cybershieldzerotrust.netlify.app/',
    },
    {
      title: 'Kavach Infinity',
      description:
        'AI-powered critical infrastructure protection with real-time monitoring, anomaly detection, and safety automation.',
      tags: ['Python', 'Anomaly Detection', 'Real-time', 'AI'],
      features: ['Real-time monitoring', 'Anomaly detection', 'Safety automation', 'Telemetry'],
      accent: 'from-cyber-emerald to-cyber-purple',
      glow: 'rgba(52,211,153,0.35)',
      code: 'https://github.com/sumansingh20/kavach-infinity',
      demo: 'https://kavach-infinity-full.vercel.app',
    },
    {
      title: 'NexaMind-AI',
      description:
        'Agentic RAG platform for intelligent document research and knowledge automation with semantic search and citations.',
      tags: ['Python', 'LangGraph', 'Vector DB', 'RAG', 'FastAPI'],
      features: ['Semantic search', 'Source citations', 'Document research', 'AI evaluation'],
      accent: 'from-cyber-blue to-cyber-emerald',
      glow: 'rgba(91,141,239,0.35)',
      code: 'https://github.com/sumansingh20/NexaMind-AI',
    },
    {
      title: 'Inventra ERP',
      description:
        'Full-stack inventory and ERP system covering stock tracking, orders, and operational dashboards.',
      tags: ['JavaScript', 'Full Stack', 'Dashboard', 'REST'],
      features: ['Inventory tracking', 'Order management', 'Reporting dashboard', 'Live demo'],
      accent: 'from-cyber-cyan to-cyber-emerald',
      glow: 'rgba(34,211,238,0.3)',
      code: 'https://github.com/sumansingh20/InventraErp',
      demo: 'https://inventory-three-beryl-77.vercel.app',
    },
    {
      title: 'Edyra LMS',
      description:
        'Learning management system with proctored online examinations and a modern learning experience.',
      tags: ['TypeScript', 'Next.js', 'Proctored Exams', 'EdTech'],
      features: ['Proctored exams', 'Course delivery', 'Student analytics', 'Live demo'],
      accent: 'from-cyber-purple to-cyber-blue',
      glow: 'rgba(168,85,247,0.3)',
      code: 'https://github.com/sumansingh20/EdyraLMS',
      demo: 'https://proctoredexam.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Featured Projects"
          subtitle="Real, shipped work from my GitHub — security platforms, AI systems, and full-stack products."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`glass-card spotlight group relative flex flex-col overflow-hidden p-7 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent} opacity-80`} />
              {/* glow blob */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: project.glow }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="font-jetbrains text-xs text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source`}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors group-hover:border-cyber-cyan/40 group-hover:text-cyber-cyan"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                <h3
                  className={`mb-3 font-bold section-title text-white transition-colors ${
                    project.featured ? 'text-3xl sm:text-4xl' : 'text-xl'
                  }`}
                >
                  {project.title}
                </h3>

                <p className={`mb-5 text-body font-inter ${project.featured ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  {project.description}
                </p>

                <ul className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-white/55 font-inter">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md px-2.5 py-1 text-xs badge-chip font-jetbrains">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-5 border-t border-white/10">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-cyber py-2.5 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
