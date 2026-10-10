'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { site } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { Icon: Github, link: site.socials.github, label: 'GitHub' },
    { Icon: Linkedin, link: site.socials.linkedin, label: 'LinkedIn' },
    { Icon: Mail, link: `mailto:${site.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <a href="#hero" className="mb-4 inline-flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/15">
                <img src="/suman.png" alt={site.name} className="h-full w-full object-cover" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white section-title">
                Suman<span className="text-cyber-cyan">.</span> Kumar
              </span>
            </a>
            <p className="max-w-sm text-body text-sm font-inter">
              Security-focused developer and BSc Computer Science &amp; Data
              Analytics student at IIT Patna, building secure applications and
              AI-powered systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-jetbrains text-sm font-bold uppercase tracking-[0.18em] text-cyber-cyan">
              Links
            </h4>
            <ul className="space-y-2 text-body text-sm font-inter">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-cyber-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-jetbrains text-sm font-bold uppercase tracking-[0.18em] text-cyber-cyan">
              Follow
            </h4>
            <div className="mb-5 flex gap-3">
              {socials.map(({ Icon, link, label }) => (
                <motion.a
                  key={label}
                  href={link}
                  target={link.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyber-cyan/40 hover:text-cyber-cyan"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-white/45 font-jetbrains">{site.location}</p>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-body text-sm font-inter md:flex-row">
          <p className="flex items-center gap-1.5">
            © {currentYear} Suman Kumar. Made with{' '}
            <Heart size={15} className="fill-cyber-cyan/50 text-cyber-cyan" /> using
            Next.js &amp; Tailwind.
          </p>
          <p className="font-jetbrains text-xs uppercase tracking-[0.18em] text-white/40">
            {site.email}
          </p>
        </div>
      </div>
    </footer>
  );
}