'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const resumeDownloadLink =
    'https://drive.google.com/uc?export=download&id=1wLU-jUfl3Zu2DVXTW5IJXBfLaAdxyiJ7';

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(10,14,24,0.68)] border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-3">
          {/* Logo */}
          <motion.div
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,245,255,0.12)] overflow-hidden ring-1 ring-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/suman.png"
              alt="Suman Kumar"
              className="w-full h-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-cyber-cyan/50" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="text-sm font-inter text-body hover:text-cyber-cyan transition-colors relative group"
                whileHover={{ x: 5 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyber group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={resumeDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 rounded-full bg-gradient-cyber text-black font-bold text-sm section-title hover:shadow-glow-cyan transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cyber-cyan p-2 rounded-lg border border-cyber-cyan/20 bg-black/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block py-2 text-sm text-body hover:text-cyber-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
