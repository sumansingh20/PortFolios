'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { site } from '@/lib/site';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const socials = [
    { Icon: Github, link: site.socials.github, label: 'GitHub' },
    { Icon: Linkedin, link: site.socials.linkedin, label: 'LinkedIn' },
    { Icon: Mail, link: `mailto:${site.email}`, label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-28 pb-16"
    >
      <canvas id="heroCanvas" className="absolute inset-0 -z-10 h-full w-full" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-emerald/30 bg-cyber-emerald/5 px-4 py-1.5 font-jetbrains text-[0.68rem] uppercase tracking-[0.22em] text-cyber-emerald"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-emerald" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p variants={item} className="mb-3 text-sm font-medium tracking-wide text-cyber-cyan/80">
            Hi, I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="hero-name mb-6 text-6xl font-bold sm:text-7xl lg:text-8xl">
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.div variants={item} className="mb-6 flex h-9 items-center font-jetbrains text-lg font-semibold uppercase tracking-[0.1em] text-cyber-cyan sm:text-xl">
            <span className="text-cyber-cyan/40">{'// '}</span>
            <span id="typed-text" />
            <span id="typed-cursor" className="typed-cursor ml-1 inline-block">
              _
            </span>
          </motion.div>

          <motion.p variants={item} className="mb-9 max-w-xl text-lg leading-relaxed text-body">
            Building secure, scalable applications and AI-powered systems — from
            offensive security tooling to full-stack products — studying at{' '}
            <span className="font-semibold text-white">IIT Patna</span>.
          </motion.p>

          <motion.div variants={item} className="mb-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-cyber px-6 py-3 font-bold text-black transition-transform hover:scale-105"
            >
              Explore Projects
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5"
            >
              Contact Me
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-cyber-emerald/50 hover:bg-cyber-emerald/5"
            >
              <FileText size={17} /> Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            {socials.map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target={link.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-cyber-cyan/40 hover:text-cyber-cyan"
              >
                <Icon size={19} />
              </a>
            ))}
            <span className="ml-2 hidden text-sm text-white/40 sm:block">
              {site.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Right — framed portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square">
            {/* rotating conic ring */}
            <div className="conic-ring absolute inset-0 animate-spin-slow rounded-[2rem] opacity-60 blur-[2px]" />
            <div className="absolute inset-[2px] rounded-[2rem] bg-[#080b17]" />

            <div className="absolute inset-3 overflow-hidden rounded-[1.7rem] border border-white/10">
              <img
                src="/suman.png"
                alt={site.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass-card absolute -left-5 top-8 flex items-center gap-2 px-3 py-2 text-xs"
            >
              <ShieldCheck size={15} className="text-cyber-cyan" />
              <span className="font-semibold text-white">Security + AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
              className="glass-card absolute -right-4 top-1/3 px-4 py-3 text-center"
            >
              <div className="text-lg font-bold text-gradient">58</div>
              <div className="text-[0.65rem] uppercase tracking-wider text-white/60">Repos</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, delay: 0.8 }}
              className="glass-card absolute -bottom-4 left-6 flex items-center gap-2 px-3 py-2 text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-cyber-purple" />
              <span className="font-semibold text-white">IIT Patna</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="block h-9 w-5 rounded-full border border-white/25 p-1">
          <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
        </span>
      </motion.a>
    </section>
  );
}
