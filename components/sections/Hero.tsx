'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const resumeDownloadLink =
    'https://drive.google.com/uc?export=download&id=1wLU-jUfl3Zu2DVXTW5IJXBfLaAdxyiJ7';

  // typed text is handled by TemplateEffects
  const rolesList = [

    'Ethical Hacker',

    'AI/ML Engineer',
    'Offensive Security Researcher',
    'Cybersecurity Analyst',
    'Full Stack Engineer',
    'Security Automation Developer',
    'AI Security Innovator',
  ];




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden section-shell"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 soft-grid opacity-35" />
      <div className="absolute inset-0 -z-10">
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyber-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyber-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center hero-panel rounded-[2rem] px-6 py-10 md:px-10 md:py-14 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile picture */}
          <motion.div
            className="mx-auto mb-8 w-24 h-24 md:w-28 md:h-28 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,245,255,0.18)] overflow-hidden ring-1 ring-white/10"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/suman.png"
              alt="Suman Kumar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-name text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Suman Kumar
            </span>
          </motion.h1>

          {/* Typed role (template compatible) */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-cyber-cyan font-jetbrains tracking-[0.12em] uppercase">
              <span className="text-cyber-cyan/50">// </span>
              <span id="typed-text" />
              <span
                id="typed-cursor"
                className="typed-cursor inline-block ml-1"
              >
                _
              </span>
            </span>
          </div>


          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-body mb-12 max-w-2xl mx-auto font-inter"
            variants={itemVariants}
          >
            Building intelligent AI-powered cybersecurity systems, offensive security frameworks, and futuristic digital experiences from{' '}
            <span className="text-cyber-cyan font-semibold">IIT Patna</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-cyber text-black font-bold section-title hover:shadow-glow-cyan transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-cyber-cyan text-cyber-cyan font-bold section-title hover:bg-cyber-cyan/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-cyber-blue text-cyber-blue font-bold section-title hover:bg-cyber-blue/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href={resumeDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-cyber-emerald text-cyber-emerald font-bold section-title hover:bg-cyber-emerald/10 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 justify-center"
            variants={itemVariants}
          >
            {[
              { Icon: Github, link: 'https://github.com' },
              { Icon: Linkedin, link: 'https://linkedin.com' },
              { Icon: Mail, link: 'mailto:suman@example.com' },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-cyber-cyan/20 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all bg-black/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyber-cyan" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
