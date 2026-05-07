'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-14 w-full border-t border-cyber-cyan/10 backdrop-blur-md bg-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="09"
          title="Stay In Touch"
          subtitle="A quick way to reach me for work, research, or collaboration."
        />
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-cyber-cyan mb-3 section-title">
              Suman Kumar
            </h3>
            <p className="text-body text-sm font-inter">
              Cybersecurity Engineer & AI Developer from IIT Patna, building
              intelligent secure systems and exploring the future of technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cyber-cyan mb-3 font-jetbrains tracking-[0.18em] uppercase">LINKS</h4>
            <ul className="space-y-2 text-body text-sm font-inter">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
                {
                  label: 'Resume',
                  href: 'https://drive.google.com/uc?export=download&id=1u8tFomA41yNeB-1RZMDDnlU0gNpLhX4J',
                  external: true,
                },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="hover:text-cyber-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cyber-cyan mb-3 font-jetbrains tracking-[0.18em] uppercase">FOLLOW</h4>
            <div className="flex gap-4">
              {[
                { Icon: Github, link: 'https://github.com/sumansingh20' },
                { Icon: Linkedin, link: 'https://www.linkedin.com/in/sumankumar-/' },
                { Icon: Mail, link: 'mailto:sumansingh20@outlook.com' },
              ].map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-cyber-cyan/20 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-cyan/10 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-body text-sm font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center gap-1">
              © {currentYear} Suman Kumar. Made with{' '}
              <Heart size={16} className="text-cyber-cyan" /> using Next.js &
              Tailwind.
            </p>
            <p className="text-xs text-gray-500 mt-4 md:mt-0 font-jetbrains tracking-[0.18em] uppercase">
              Building Intelligent Secure Systems for the Future
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
